---
title: Arduino и микроконтроллеры
date: 2021-08-04T19:37:47+03:00
modified: 2022-02-08T11:28:09+03:00
tags: controllers
---
arduino - фреймворк для программирования любых микроконтроллеров в едином стиле


## Симуляторы
- <https://wokwi.com/projects/322410731508073042>
- <https://www.falstad.com/circuit/> для схем
- multisim - схемы

## STM32

- <https://hubstub.ru/auto/> интересное чтиво (spi)
- <https://habr.com/ru/post/310742/> Начинаем работать в STM32CubeMX. Часть 1
- <http://dimoon.ru/category/obuchalka/stm32f1> учебник


## MQTT

Ставим брокер: 
- локальный для компа - [Eclipse Mosquitto](https://mosquitto.org/download/) и еще [доки](http://onreader.mdl.ru/MQTTProgrammingWithPython/content/Ch01.html#07)
- локальный для android - [MQTT Broker App](https://play.google.com/store/apps/details?id=server.com.mqtt)
- интернет сервис - <http://cloudmqtt.com>

Ставим клиент:
- Для ардуино есть библиотека - [MQTT](https://github.com/256dpi/arduino-mqtt)
- Для компа на windows - [MQTT Explorer](http://mqtt-explorer.com/)
- для телефона №1 - [IoTMQTTPanel](https://play.google.com/store/apps/details?id=snr.lab.iotmqttpanel.prod)
- для телефона №2 - [MQTT Dash](https://play.google.com/store/apps/details?id=net.routix.mqttdash)

Одно устройство должно передавать. Другое должно принимать. Оба должны быть подключены к серверу одновременно и подписаны на одинаковый топик.
Для интеграции в сервер умного дома датчиков с протоколом ZigBee, нужно подключить usb-донгл [ZigBee2MQTT](#)


## Прошивка SPI-Flash и ISP
Как микроконтроллеры, так и телефоны, роутеры, компьютеры имеют на борту флешку памяти. Чтобы ее прошить можно использовать специальный программатор. Туда вставляется или впаивается микросхема и через комп прошивается. Программатор сделан на основе микроконтроллеры (атмега8), так что при желании любую ардуинку можно превратить в программатор

- <https://youtu.be/tOjJU6c7diY>
- <https://alexgyver.ru/lessons/programmer-tips/>
- <https://alexgyver.ru/lessons/naked-chip/>
- <https://pikabu.ru/story/programmator_2425_fleshek_na_arduino_5193861?view=amp>



## Библиотеки Arduino 
для ESP32 и не только
- **ESP_WiFiManager** - легкий способ добавить в проект портал для конфигурации вайфая и других настроек
<https://github.com/khoih-prog/ESP_WiFiManager>


## Полезные ссылки
- <https://ichi.pro/ru/vvedenie-v-mqtt-i-nastrojka-brokera-mosquitto-264946456955848>
- <https://habr.com/ru/post/463669/>
- Умный дом от эелектроники в объективе <https://www.youtube.com/watch?v=4O-2dJwRQtg>

- 1
- 2
- 3
