---
date: 2021-11-09T19:19:12
comments: 93
---

## Чипы WiFi от Espressif

| Название   |  Год   | Описание
:----------- | :----: | :----------
| [ESP8266]  | (2014) | Есть только вайфай. Самый популярный чип по сей день. Софт уже хорошо отлажен. Но устаревает. Есть lowprice-версия ESP8285(2016) с уже встроенной флешкой
| ESP32-С3   | (2021) | Доступная и современная замена ESP8266. Больше оперативки, есть BLE 👍. Позиционируется как SoC для слабых IoT-устройств. Lowprice-версия: ESP8685(2021) отличается меньшим размером чипа. Софт еще не дописан
| [ESP32]    | (2015) | Более мощная версия с Bluetooth и двухядерным процессором. Больше ног, дороже и глючная
| ESP32-s2   | (2019) | Попытка сделать ESP32 такой же популярной как и ESP8266. Не совсем вышло. Убрали лишнее второе ядро, добавили USB
| ESP32-s3   | (2021) | Новый мощный чип. Дорогой. Заточен под аудио, дисплеи, искусственный интелект. Софт еще сырой

- [Product selector](https://products.espressif.com/#/product-selector?language=en). Выбор чипа по параметрам
- [Оф. сайт](https://www.espressif.com/en/support/documents/technical-documents). Доки на официальном сайте

## Модули и Отладочные платы
Бывают самые разные платы и модули. Официальные и от сторониих разработчиков. Вплоть до кастомных плат сделаных с нуля. Но те, что перечислены - очень популярны. Даже когда выходят новые чипы (напр. ESP32-C3), то их тут же встраивают в модуль формата ESP-12. Такая вот обратная совместимость :) 
- [**Документация PlatformIO**](https://docs.platformio.org/en/latest/boards/index.html#espressif-32). Тут перечислены более-менее популярные платы
- **Wemos D1 mini** - минимальная плата на основе модуля ESP-12 (esp8266)
- **MH-ET LIVE MiniKit for ESP32** - плата на ESP32, совместимая с предыдущей по пинам, но их уже два ряда
- **NodeMCU** - отладочные платы на ESP8266 или ESP32
- **Модуль ESP-12** - самый популярный модуль для разработчиков на чипе esp8266. На али стоит ~$1
- **Модуль ESP32-WROOM-32** - модуль на основе которого сделаны много отладочных плат

## Программирование
- [**PlatformIO**](https://platformio.org/platformio-ide). ([документация](https://docs.platformio.org/en/latest/)). Это надстройка для VS Code. Поддерживает разные фреймворки. Работает быстрее, чем Arduino IDE
- [**Arduino IDE**](https://www.arduino.cc/en/software). Espressif адаптировали Arduino Framework для своих чипов. Некоторые библиотеки переписаны в таком же стиле что и оригинальные.
- [**ESP-IDF**](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/) от Espresif. Этот фреймворк от производителя. Все низкоуровневые фичи для общения с железом реализованы через него

## Универсальные прошивки
- [**Tasmota**](https://tasmota.github.io/docs/). Изначально предназначена для WiFi реле Sonoff
- [**ESP Easy**](https://www.letscontrolit.com/index.php#ESPEasy). Отдельно [wiki](https://www.letscontrolit.com/wiki/index.php/ESPEasy#Introduction)
- [**ESPHome**](https://esphome.io/) is a system to control your ESP8266/ESP32 by simple yet powerful configuration files and control them remotely through Home Automation systems.

## Документация
- [Espressif](https://www.espressif.com/en/support/documents/technical-documents). Вся официальная документация от производителя на одной странице
- [Arduino ESP8266][esp8266]. Доки по фреймворку Arduino для ESP8266. Автор: ESP8266 Community Forum
- [Arduino ESP32][esp32]. Доки по Arduino от Espressif
- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/). Espressif-IoT-Development-Framework
- [ESP-AT](https://docs.espressif.com/projects/esp-at/en/latest). Доки по AT-командам
- [PlatformIO](https://platformio.org/platformio-ide) - "взрослая" среда разработки


[ESP8266]: https://arduino-esp8266.readthedocs.io/en/latest/ "Доки по фреймворку Arduino для ESP8266. Автор: ESP8266 Community Forum"
[ESP32]: https://docs.espressif.com/projects/arduino-esp32/en/latest/ "Доки по Arduino от Espressif"
