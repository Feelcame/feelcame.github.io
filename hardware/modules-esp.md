---
date: 2021-11-09T19:19:12
comments: 93
---

## Чипы WiFi от Espressif

| Название |  Год   | Описание
:--------- | :----: | :----------
| ESP8266  | (2014) | Есть только вайфай. Самый популярный чип по сей день. Софт уже хорошо отлажен 
| ESP8285  | (2016) | Удешевленная версия ESP8266. Внутрь чипа уже встроено 1Mb флеш-памяти. В остально они идентичны
| ESP32-С3 | (2021) | Доступная и современная замена ESP8266. Больше оперативки, есть BLE 👍. Позиционируется как SoC для слабых устройств. Софт еще не дописан
| ESP8685  | (2021) | Модифицированный ESP32-С3. Отличается меньшим корпусом чипа. О нем почти ничего нет на оф.сайте
| ESP32    | (2015) | Более мощная версия с Bluetooth и двухядерным процессором. Дороже и глючная
| ESP32-s2 | (2019) | Попытка сделать ESP32 такой же популярной как и ESP8266. Не вышло
| ESP32-s3 | (2021) | Новый супер мощный чип. Дорогой. Заточен под аудио, дисплеи, искусственный интелект. Софт еще сырой

## Модули и Отладочные платы
- Wemos D1 mini - минимальная плата на основе модуля ESP-12 (esp8266)
- MH-ET LIVE MiniKit for ESP32 - плата на ESP32, совместимая с предыдущей по пинам
- NodeMCU - отладочные платы на ESP8266 или ESP32
- ESP-12 - самый популярный модуль для разработчиков на чипе esp8266. На али стоит ~$1
- ESP32-WROOM-32 - модуль на основе которого сделаны много отладочных плат
Бывают самые разные платы и модули. Официальные и от сторониих разработчиков, вплоть до кастомных плат сделаных с нуля. Но те что перечислены - довольно популярны. Даже когда выходят новые чипы (напр. ESP32-C3), то их тут же встраивают в модуль формата ESP-12. Такая вот обратная совместимость :) 

## Программирование
- [PlatformIO](https://platformio.org/platformio-ide). Это надстройка для VS Code. Поддерживает разные фреймворки. Работает быстрее, чем Arduino IDE. All online [Documentation](https://docs.platformio.org/en/latest/)
- [Arduino IDE](https://www.arduino.cc/en/software). Espressif адаптировали Arduino Framework для своих чипов. Некоторые библиотеки переписаны в таком же стиле что и оригинальные.
- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/) от Espresif. Этот фреймворк от производителя. Все низкоуровневые фичи для общения с железом реализованы через него

## Универсальные прошивки
- [Tasmota](https://tasmota.github.io/docs/)
- [ESP Easy](https://www.letscontrolit.com/index.php#ESPEasy). Отдельно [wiki](https://www.letscontrolit.com/wiki/index.php/ESPEasy#Introduction)

## Документация
- [Product selector](https://products.espressif.com/#/product-selector?language=en). Какой модуль/чип выбрать? Тут только официальные.
- [Вся оф. документация](https://www.espressif.com/en/support/documents/technical-documents)
- [Arduino ESP8266](https://arduino-esp8266.readthedocs.io/en/latest/). Доки от ESP8266 Community Forum
- [Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/). Доки от Espressif
- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/). Espressif-IoT-Development-Framework
- [ESP-AT](https://docs.espressif.com/projects/esp-at/en/latest). Доки по AT-командам
- [PlatformIO](https://platformio.org/platformio-ide) - "взрослая" среда разработки

## Комментаторы тут?
