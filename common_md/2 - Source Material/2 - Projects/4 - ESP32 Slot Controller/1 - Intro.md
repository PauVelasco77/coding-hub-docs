# Guía paso a paso: Conversión de mando Ninco 55 Plus a controlador digital con ESP32 T-Display S3

Este proyecto transforma un mando analógico Ninco 55 Plus en un mando digital con funcionalidades similares al MB Slot ES-PB02, permitiendo controlar freno, potencia, sensibilidad y retardo del arranque desde una interfaz moderna con pantalla TFT usando un ESP32 T-Display S3.

---

## 1. Objetivos

- Controlar electrónicamente: **FRENO**, **STEP (potencia máxima)**, **START (retardo inicial)** y **SENSIBILIDAD**.
    
- Mostrar los valores y ajustes en la pantalla del ESP32 T-Display S3.
    
- Ajustar parámetros con potenciómetros físicos o encoder.
    
- Sustituir el control pasivo por uno activo basado en PWM y lógica digital.
    

---

## 2. Materiales necesarios

### Electrónicos

- 1x ESP32 T-Display S3
    
- 1x MOSFET canal N (ej. IRFZ44N o IRLZ44N)
    
- 1x Diodo Schottky (ej. 1N5822)
    
- 3x Potenciómetros lineales de 10k o encoder rotativo con pulsador
    
- Resistencias de 220 ohm (para gate del MOSFET)
    
- Cableado Dupont, estaño, soldador
    

### Otros

- Mando Ninco 55 Plus analógico (original sin modificaciones)
    
- Fuente de alimentación 12V (de pista)
    
- Multímetro para mediciones
    
- Impresora 3D o carcasa personalizada (opcional)
    

---

## 3. Parámetros que emularemos del mando MB Slot

|Parámetro|Descripción|
|---|---|
|**BRAKE**|Freno dinámico (más retención al soltar el gatillo)|
|**STEP**|Limita la potencia máxima al motor|
|**START**|Controla el retardo inicial antes de aplicar potencia|
|**SENSIBILITY**|Modifica la curva de aceleración (lineal o progresiva)|

---

## 4. Esquema eléctrico

> Este esquema muestra la conexión entre los potenciómetros del mando, el ESP32 T-Display S3 y el MOSFET encargado de regular la corriente que va al coche.

---

## 5. Preparación del mando Ninco

1. **Abre el mando Ninco 55 Plus** retirando tornillos traseros.
    
2. **Identifica los contactos del gatillo** (usualmente es un potenciómetro lineal o pista resistiva).
    
3. **Corta el cableado original** de salida hacia la pista.
    
4. **Conecta el potenciómetro del gatillo** al ESP32:
    
    - VCC (3.3V)
        
    - GND
        
    - Señal (ej. GPIO33)
        
5. Añade **otros potenciómetros rotativos** para BRAKE, STEP y START.
    

---

## 6. Conexiones ESP32

|   |   |   |
|---|---|---|
|Parámetro|Conexión ESP32|Descripción|
|Gatillo (THROTTLE)|GPIO33 (ADC)|Entrada analógica del gatillo|
|Brake|GPIO34 (ADC)|Entrada analógica|
|Step|GPIO35 (ADC)|Entrada analógica|
|Start|GPIO36 (ADC)|Entrada analógica|
|Salida PWM|GPIO0|Controla Gate del MOSFET|

---

## 7. Código completo (Arduino)

... _(código anterior sin cambios)_

---

## 8. Interfaz gráfica (pantalla TFT)

- Mostrar los valores actuales:
    
    - THROTTLE: porcentaje
        
    - BRAKE: nivel actual
        
    - STEP: límite actual
        
    - START: retardo configurado
        
    - PWM aplicado
        

---

## 9. Visualización de parámetros con potenciómetros físicos

En esta implementación, los ajustes se realizan únicamente a través de potenciómetros físicos montados en el mando Ninco 55 Plus. Cada potenciómetro controla directamente uno de los siguientes parámetros:

- **BRAKE** (freno dinámico)
    
- **STEP** (potencia máxima)
    
- **START** (retardo inicial)
    
- **SENSIBILITY** (curva de aceleración)
    

### Funcionamiento

1. El ESP32 lee continuamente los valores analógicos de cada potenciómetro.
    
2. Estos valores se normalizan de 0 a 100%.
    
3. En la pantalla TFT se muestran en tiempo real, sin necesidad de botones o menú.
    

### Ventajas

- Ajuste rápido e intuitivo sin necesidad de navegar menús.
    
- La visualización ayuda a comprobar el valor de cada parámetro antes de usar el mando.
    

### Requisitos de hardware

- 4 potenciómetros lineales (10kΩ recomendados)
    
- Lectura a través de los pines ADC del ESP32
    
- Conexión simple: GND, VCC (3.3V) y señal a pin ADC
    

### Ejemplo de interfaz visual

```
BRAKE:        65%
STEP:         80%
START:        10%
SENSIBILITY:  75%
THROTTLE:     47%
PWM:          119
```

La pantalla se actualiza automáticamente y puede mostrar la curva aplicada en el futuro si se desea implementar gráficamente.

---

## 10. Pruebas y puesta en marcha

1. Verifica que el coche no se mueva sin pulsar el gatillo.
    
2. Prueba la respuesta del acelerador con distintas curvas.
    
3. Ajusta el freno al soltar el gatillo y observa si el coche se detiene más rápido.
    
4. Verifica el efecto del START (retardo) y del STEP (potencia máxima).
    

---

## 11. Expansiones futuras

- Conexión Bluetooth para configuración desde móvil
    
- Almacenamiento de presets en memoria
    
- Encoder rotativo con menú en pantalla
    
- Exportación de datos de uso por USB o WiFi