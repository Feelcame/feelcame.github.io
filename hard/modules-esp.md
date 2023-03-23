---
title: Микроконтроллеры с Wi-Fi от Espressif
date: 2023-02-28T23:19:12
comments: 93
tags: controllers
---

- Навигация
{: toc }

## Микросхемы
{: .no_toc}  
- **ESP8266** (2014) - есть только вайфай. Старичок, благодаря которому компания-производитель стала известной. Софт уже хорошо отлажен. Не хватает некоторых функций, например только один аналоговый вход. Есть версия со встроенной флешкой ESP8285(2016)
- **ESP32** (2015) - новая прокачанная версия. Более мощный проц, Bluetooth и сверхэкономный сопроцесор. Больше ног, больше функций. Слегка дороже. Espressif сделали документацию по типу той что была для esp8266, но теперь официальную
- **ESP32-S2** (2019) - убрали лишнее второе ядро, добавили USB, в т.ч. OTG. Но забыли положить Bluetooth
- **ESP32-S3** (2021) - новый мощный чип. Дорогой. Заточен под аудио, дисплеи, искусственный интелект и т.д. 
- **ESP32-С3** (2021) - доступная и современная замена ESP8266. Больше оперативки, есть BLE. Встроекнный USB-UART. Позиционируется как SoC для слабых IoT-устройств. Есть модификации-аналоги, но работа с ними не отличается. Для программирования надо использовать новую версию Arduino IDE v2

Рекомендую посмотреть раздел [**документация**](#docs). Там собраны ссылки на рекомендации по разработке от производителя и от комьюнити



## Отладочные платы
Когда лень разводить свою PCB с нуля, можно использовать готовые модули. Ниже перечень популярных плат

- [**Модуль ESP-12**][esp12] - встраиваемый модуль изначально на чипе ESP8266. Удобный для ручной пайки
- [**Модуль ESP32-WROOM-32**][wroom32] - модуль на основе которого сделаны много отладочных плат
- [**Wemos D1 mini**][d1mini] - минимальная плата на основе модуля ESP-12 (esp8266)  
- [**Wemos ESP32 MiniKit**][d32mini] - плата на ESP32, совместимая с предыдущей по пинам, но их уже два ряда
- [**NodeMCU**][nodemcu] - отладочные платы на ESP8266 или ESP32. Похожи на официальные DevKit  

[**Большой список плат**](https://docs.platformio.org/en/latest/boards/index.html#espressif-32 "Список поддерживаемых плат"). Документация PlatformIO, тут перечислены дугие популярные платы

[**Product selector**](https://products.espressif.com/#/product-selector?language=en "Найди нужный чип на оф.сайте") - каталог продуктов на официальном сайте. Все самое новое тут. Но все самое необычное на али


## Среда разработки
- **PlatformIO** - это надстройка для VS Code. Поддерживает разные фреймворки. Работает быстрее, чем Arduino IDE.<br>
  [Оф.сайт](https://platformio.org/platformio-ide), 
  [документация](https://docs.platformio.org/en/latest/). 
- **Arduino IDE**. Espressif адаптировали Arduino Framework для своих чипов. Некоторые библиотеки переписаны в таком же стиле что и оригинальные. Для работы с ESP нужно прописать конфиги (смотри документацию по конкретному чипу). Скачать можно на <br>
  [официальном сайте](https://www.arduino.cc/en/software)
- **ESP-IDF**. Этот фреймворк от производителя. Все низкоуровневые фичи для общения с железом реализованы через него. <br>
  [Документация на официальном сайте](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/)

Рекомендую также почитать мою [**статью про arduino**](../coding/arduino.md)

**Полезные дополнения:**
- [ESP8266Flasher](https://github.com/nodemcu/nodemcu-flasher/blob/master/Win32/Release/ESP8266Flasher.exe "Программатотр для ESP") - программа для прошивки по UART
- [EspExceptionDecoder](https://github.com/me-no-dev/EspExceptionDecoder) - декодирует крэшлог
- <https://github.com/esp8266/arduino-esp8266fs-plugin/releases>
- <https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/>



## Готовые кастомные прошивки
- [**Tasmota**](https://tasmota.github.io/docs/). Изначально предназначена для WiFi реле Sonoff
- [**ESP Easy**](https://www.letscontrolit.com/index.php#ESPEasy). Конструктор прошивок. 
  [**документация**](https://www.letscontrolit.com/wiki/index.php/ESPEasy#Introduction)
- [**ESPHome**](https://esphome.io/) is a system to control your ESP8266/ESP32 by simple yet powerful configuration files and control them remotely through Home Automation systems.



## Документация
{: #docs }  
- [Espressif docs](https://www.espressif.com/en/support/documents/technical-documents). Вся официальная документация от производителя. Пользуйтесь поиском по странице, что бы найти нужный чип
- [Дока ESP866 + Arduino (неофициальная)](https://arduino-esp8266.readthedocs.io/en/latest/ "Доки от комьюнити")
- [Дока ESP32 + Arduino (от Espressif)](https://docs.espressif.com/projects/arduino-esp32/en/latest/ "Доки по Arduino от Espressif")
- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/). Espressif-IoT-Development-Framework
- [ESP-AT](https://docs.espressif.com/projects/esp-at/en/latest). Доки по AT-командам


{% comment %} ССЫЛКИ {% endcomment %}
{% comment %} КАРТИНКИ {% endcomment %}
[esp12]: https://user-images.githubusercontent.com/17731587/221989164-1b5a1d64-eb8b-40e7-ae1f-a7c5f15e3b27.png
[wroom32]: https://user-images.githubusercontent.com/17731587/221989421-c9aaf0fc-0f4a-4070-b029-de20651e1466.png
[d1mini]: https://user-images.githubusercontent.com/17731587/221990361-ef2eb110-7a2f-4527-8bd8-601009742ec7.png
[nodemcu]: https://user-images.githubusercontent.com/17731587/221989715-efa3983a-cb1e-4570-b1dd-972df1858656.png
[d32mini]: https://user-images.githubusercontent.com/17731587/221990510-29eb8cfb-1b94-4ab0-9160-477796ec2eac.png
