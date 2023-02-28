---
title: Микроконтроллеры с Wi-Fi от Espressif
date: 2021-11-09T19:19:12
comments: 93
tags: controllers
---

- Навигация
{: toc }

## Микросхемы
**[ESP8266] (2014)** - есть только вайфай. Самый популярный чип по сей день. Софт уже хорошо отлажен. Но устаревает. Есть lowprice-версия ESP8285(2016) с уже встроенной флешкой

**[ESP32] (2015)** - новая прокачанная версия. Более мощный проц, Bluetooth и сверхэкономный сопроцесор. Больше ног, больше функций. Дороже

**ESP32-s2 (2019)** - убрали лишнее второе ядро, добавили USB

**ESP32-s3 (2021)** - новый мощный чип. Дорогой. Заточен под аудио, дисплеи, искусственный интелект и т.д. 

**ESP32-С3 (2021)** - доступная и современная замена ESP8266. Больше оперативки, есть BLE. Позиционируется как SoC для слабых IoT-устройств. Lowprice-версия: ESP8685(2021) отличается меньшим размером чипа. Аналоги: ESP32-c2, esp32-c6 (добавлено больше протоколов)

- [Product selector](https://products.espressif.com/#/product-selector?language=en). Выбор чипа по параметрам
- [Оф. сайт](https://www.espressif.com/en/support/documents/technical-documents). Доки на официальном сайте

## Отладочные платы
Когда лень разводить свою PCB с нуля, можно использовать готовые модули. Ниже еречень популярных форм-факторов. 
- **Модуль ESP-12** ([фото](#)) - самый популярный модуль для разработчиков на чипе esp8266. На али стоит ~$1
- **Модуль ESP32-WROOM-32** ([фото](#)) - модуль на основе которого сделаны много отладочных плат
- **Wemos D1 mini** ([фото](#)) - минимальная плата на основе модуля ESP-12 (esp8266)
- **Wemos ESP32 MiniKit** ([фото](#)) - плата на ESP32, совместимая с предыдущей по пинам, но их уже два ряда
- **NodeMCU** ([фото](#)) - отладочные платы на ESP8266 или ESP32
- [**Документация PlatformIO**](https://docs.platformio.org/en/latest/boards/index.html#espressif-32). Тут перечислены более-менее популярные платы

## Как писать прошивку
- [**PlatformIO**](https://platformio.org/platformio-ide). ([документация](https://docs.platformio.org/en/latest/)). Это надстройка для VS Code. Поддерживает разные фреймворки. Работает быстрее, чем Arduino IDE
- [**Arduino IDE**](https://www.arduino.cc/en/software). Espressif адаптировали Arduino Framework для своих чипов. Некоторые библиотеки переписаны в таком же стиле что и оригинальные.
- [**ESP-IDF**](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/) от Espresif. Этот фреймворк от производителя. Все низкоуровневые фичи для общения с железом реализованы через него

у меня есть [**статья про arduino**](../coding/arduino.md)

## Готовые кастомные прошивки
- [**Tasmota**](https://tasmota.github.io/docs/). Изначально предназначена для WiFi реле Sonoff
- [**ESP Easy**](https://www.letscontrolit.com/index.php#ESPEasy). ([документация](https://www.letscontrolit.com/wiki/index.php/ESPEasy#Introduction)). Конструктор прошивок
- [**ESPHome**](https://esphome.io/) is a system to control your ESP8266/ESP32 by simple yet powerful configuration files and control them remotely through Home Automation systems.

## Утилиты для отладки
- [ESP8266Flasher] - программа для прошивки по UART
- [EspExceptionDecoder](https://github.com/me-no-dev/EspExceptionDecoder) - декодирует крэшлог
- <https://github.com/esp8266/arduino-esp8266fs-plugin/releases>
- <https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/>

## Полезные ссылки
- [Espressif](https://www.espressif.com/en/support/documents/technical-documents). Вся официальная документация от производителя на одной странице
- [Arduino ESP8266][esp8266]. Доки по фреймворку Arduino для ESP8266 от "ESP8266 Community Forum"
- [Arduino ESP32][esp32]. Доки по Arduino от Espressif
- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/). Espressif-IoT-Development-Framework
- [ESP-AT](https://docs.espressif.com/projects/esp-at/en/latest). Доки по AT-командам
- [PlatformIO](https://platformio.org/platformio-ide) - "взрослая" среда разработки


[ESP8266]: https://arduino-esp8266.readthedocs.io/en/latest/ "Доки по фреймворку Arduino для ESP8266. Автор: ESP8266 Community Forum"
[ESP32]: https://docs.espressif.com/projects/arduino-esp32/en/latest/ "Доки по Arduino от Espressif"
[ESP8266Flasher]: https://github.com/nodemcu/nodemcu-flasher/blob/master/Win32/Release/ESP8266Flasher.exe "Программатотр для ESP"
