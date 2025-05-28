# 🚦 Control de LEDs con T-Display S3 + Pantalla TFT

Este proyecto enciende un LED rojo o verde con dos botones físicos y muestra el color correspondiente en la pantalla del **ESP32 T-Display S3** de LilyGO.

---

## 🔧 Materiales

- 1x ESP32 T-Display S3 (LilyGO)
- 2x Botones pulsadores
- 2x LEDs (rojo y verde)
- 2x Resistencias de 220Ω (para los LEDs)
- 2x Resistencias de 10kΩ (pull-down para botones)
- Cables y protoboard

---

## ⚡ Esquema de conexiones

| Componente   | Pin ESP32 | Notas                                  |
|--------------|-----------|----------------------------------------|
| Botón Rojo   | GPIO 2    | Con resistencia de 10kΩ a GND          |
| Botón Verde  | GPIO 3    | Con resistencia de 10kΩ a GND          |
| LED Rojo     | GPIO 10   | En serie con resistencia de 220Ω       |
| LED Verde    | GPIO 11   | En serie con resistencia de 220Ω       |

Conecta el otro extremo de los botones a **3.3V**.

---

## 🖥️ Instalación

1. Instala [Arduino IDE](https://www.arduino.cc/en/software).
2. Añade el soporte para ESP32 desde el **Gestor de placas**:
   - URL del board manager: `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
3. Instala la librería `TFT_eSPI` desde el **Gestor de librerías**.
4. Configura `TFT_eSPI`:
   - Abre `User_Setup_Select.h`
   - Habilita el setup adecuado para T-Display S3 (por ejemplo: `#include <User_Setups/Setup75_T_Display_S3.h>`)
   - O configura manualmente los pines en un archivo `User_Setup.h`.

---

## 🧠 Código

Copia el siguiente código en el **Arduino IDE** y súbelo al ESP32:

```cpp
#include <TFT_eSPI.h>

#define BUTTON_RED 2
#define BUTTON_GREEN 3
#define LED_RED 10
#define LED_GREEN 11

TFT_eSPI tft = TFT_eSPI();

void setup() {
  pinMode(BUTTON_RED, INPUT);
  pinMode(BUTTON_GREEN, INPUT);
  pinMode(LED_RED, OUTPUT);
  pinMode(LED_GREEN, OUTPUT);

  tft.init();
  tft.setRotation(1);
  tft.fillScreen(TFT_BLACK);
}

void loop() {
  bool redPressed = digitalRead(BUTTON_RED) == HIGH;
  bool greenPressed = digitalRead(BUTTON_GREEN) == HIGH;

  if (redPressed) {
    digitalWrite(LED_RED, HIGH);
    digitalWrite(LED_GREEN, LOW);
    tft.fillScreen(TFT_RED);
  } else if (greenPressed) {
    digitalWrite(LED_RED, LOW);
    digitalWrite(LED_GREEN, HIGH);
    tft.fillScreen(TFT_GREEN);
  } else {
    digitalWrite(LED_RED, LOW);
    digitalWrite(LED_GREEN, LOW);
    tft.fillScreen(TFT_BLACK);
  }

  delay(50);
}
```
## ✅ Comportamiento esperado

- Al presionar el **botón rojo**, se enciende el LED rojo y la pantalla se pone roja.
    
- Al presionar el **botón verde**, se enciende el LED verde y la pantalla se pone verde.
    
- Si no se presiona ningún botón, la pantalla se pone negra y los LEDs se apagan.
