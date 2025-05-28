# Guía paso a paso: Conversión del Mando Ninco 55 Plus a Controlador Digital con ESP32 T-Display S3

Este proyecto transforma un mando analógico **Ninco 55 Plus** en un controlador digital avanzado, inspirado en el **MB Slot ES-PB02**, permitiendo gestionar parámetros como **freno**, **potencia máxima (STEP)**, **retardo de arranque (START)** y **sensibilidad** desde una pantalla TFT integrada en un **ESP32 T-Display S3**.

---

## 1. Objetivos

- Control electrónico de:
  - **FRENO** (Brake)
  - **STEP** (Potencia máxima)
  - **START** (Retardo de arranque)
  - **SENSIBILIDAD** (Curva de aceleración)
- Visualización en pantalla TFT del estado y valores configurados.
- Ajuste de parámetros mediante potenciómetros físicos o encoder.
- Sustitución del control pasivo por uno activo con PWM y lógica digital.

---

## 2. Materiales necesarios

> ⚠️ El mando se alimenta desde la pista (12 V). Es obligatorio convertir esta tensión a 5 V mediante un buck converter (ej. LM2596) o regulador (AMS1117) para alimentar el ESP32.

### Electrónicos

- 1x ESP32 T-Display S3  
- 1x MOSFET canal N (IRFZ44N o IRLZ44N)  
- 1x Diodo Schottky (1N5822)  
- 3x Potenciómetros lineales de 10kΩ o encoder rotativo con pulsador  
- 1x Resistencia 220 Ω (para gate del MOSFET)  
- **1x Condensador electrolítico de 100 µF (16 V o superior)**  
- Cableado Dupont, estaño, soldador  

### Otros

- Mando Ninco 55 Plus (sin modificar)  
- Fuente 12 V de pista  
- Multímetro  
- Impresora 3D (opcional para carcasa)

---

## 3. Parámetros a emular del MB Slot ES-PB02

| Parámetro      | Descripción                                               |
|----------------|-----------------------------------------------------------|
| **BRAKE**      | Freno dinámico: más retención al soltar el gatillo       |
| **STEP**       | Límite de potencia máxima al motor                        |
| **START**      | Retardo antes de aplicar potencia tras presionar gatillo |
| **SENSIBILITY**| Modifica la curva de aceleración (lineal o progresiva)   |

---

## 4. Esquema eléctrico

> El esquema conecta los potenciómetros al ESP32 y usa un MOSFET como interruptor para controlar la corriente del coche. Incluye protección con diodo Schottky.

---

## 5. Montaje paso a paso

### 5.1 Preparación del mando

1. Abre el mando Ninco 55 Plus y localiza el potenciómetro del gatillo.  
2. Desconecta el cableado original.  
3. Prepara espacio para añadir nuevos potenciómetros o encoders.

### 5.2 Instalación del ESP32

4. Verifica que el ESP32 cabe en la carcasa o coloca una caja externa.  
5. Conecta alimentación mediante buck converter:  
   - Entrada: 12 V desde la pista  
   - Salida: 5 V a pin 5V y GND del ESP32  
   - Añade un condensador de 100 µF si es posible

### 5.3 Conexión de potenciómetros

6. Gatillo:
   - VCC → 3.3 V  
   - GND → GND  
   - Señal → GPIO33  
7. BRAKE, STEP y START:
   - Salidas conectadas a GPIO34, GPIO35 y GPIO36 respectivamente

### 5.4 Circuito de control (MOSFET)

8. Conecta el MOSFET:
   - Source → GND pista  
   - Drain → polo negativo hacia el coche  
   - Gate → GPIO0 con resistencia de 220 Ω  
   - Añade diodo Schottky entre Drain y Source (cátodo al Drain)

### 5.5 Pantalla TFT

9. Ya integrada en el T-Display S3. Solo es necesario inicializar `TFT_eSPI` en el código.

### 5.6 Verificación

10. Revisa con multímetro las salidas PWM  
11. Comprueba en pantalla los valores de los potenciómetros  
12. Conecta el coche y realiza pruebas funcionales

---

## 6. Pines del ESP32

| Componente     | Pin ESP32 | Descripción                   | Color sugerido |
|----------------|-----------|-------------------------------|----------------|
| Gatillo        | GPIO33    | Aceleración                  | Verde          |
| BRAKE          | GPIO34    | Nivel de frenado             | Azul           |
| STEP           | GPIO35    | Potencia máxima              | Rojo           |
| START          | GPIO36    | Retardo de arranque          | Amarillo       |
| PWM a MOSFET   | GPIO0     | Control de velocidad         | Naranja        |
| Buck IN        | Rail 12V  | Alimentación desde pista     | Rojo grueso    |
| Buck OUT       | 5V / GND  | Alimentación para ESP32      | Rojo / Negro   |

---

## 7. Código (Arduino)

```cpp
#include <TFT_eSPI.h>

// Pines analógicos
const int throttlePin = 33;
const int brakePin = 34;
const int stepPin = 35;
const int startPin = 36;
const int pwmPin = 0; // PWM hacia el MOSFET

// PWM
const int pwmFreq = 5000;
const int pwmChannel = 0;
const int pwmResolution = 8;

TFT_eSPI tft = TFT_eSPI();

void setup() {
  Serial.begin(115200);
  tft.begin();
  tft.setRotation(1);
  tft.fillScreen(TFT_BLACK);

  ledcSetup(pwmChannel, pwmFreq, pwmResolution);
  ledcAttachPin(pwmPin, pwmChannel);
}

void loop() {
  int throttleRaw = analogRead(throttlePin);
  int brakeRaw = analogRead(brakePin);
  int stepRaw = analogRead(stepPin);
  int startRaw = analogRead(startPin);

  float throttle = throttleRaw / 4095.0;
  float brake = brakeRaw / 4095.0;
  float step = stepRaw / 4095.0;
  float start = startRaw / 4095.0;
  float sensitivity = 1.0 + brake * 3.0;

  float curve = pow(throttle, sensitivity);

  if (curve < start) {
    curve = 0;
  }

  curve *= step;
  int pwmValue = int(curve * 255);
  ledcWrite(pwmChannel, pwmValue);

  // Mostrar datos
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE);
  tft.setCursor(10, 10);
  tft.printf("THROTTLE:     %.2f\n", throttle);
  tft.printf("BRAKE:        %.2f\n", brake);
  tft.printf("STEP:         %.2f\n", step);
  tft.printf("START:        %.2f\n", start);
  tft.printf("SENSIBILITY:  %.2f\n", sensitivity);
  tft.printf("PWM:          %d\n", pwmValue);

  delay(100);
}
```

---
## 8. Interfaz gráfica en pantalla

Valores en tiempo real:
```makefile
BRAKE:        65%
STEP:         80%
START:        10%
SENSIBILITY:  75%
THROTTLE:     47%
PWM:          119
```

---
## 9. Ajuste con potenciómetros físicos

Ventajas:

- Control directo e intuitivo
    
- Sin navegación por menús
    
- Lectura simple mediante ADCs del ESP32
    

---

## 10. Pruebas recomendadas

1. Verifica que el coche no se mueve al soltar el gatillo
    
2. Observa la respuesta del acelerador con distintas curvas
    
3. Ajusta BRAKE y evalúa el frenado
    
4. Modifica START y STEP para personalizar la salida
    

---

## 11. Mejoras futuras

- Bluetooth/WiFi para configuración remota
    
- Almacenamiento de presets
    
- Menú interactivo con encoder
    
- Visualización gráfica de curvas
    
- Exportación de datos
    
