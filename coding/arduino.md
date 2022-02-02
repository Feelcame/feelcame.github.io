фреймворк для программирования люьых микроконтроллеров в едином стиле


MQTT
====

Ставим брокер: 
- локальный для компа - [Eclipse Mosquitto](https://mosquitto.org/download/) и еще доки <http://onreader.mdl.ru/MQTTProgrammingWithPython/content/Ch01.html#07>
- локальный для android - [MQTT Broker App](#)
- интернет сервис - cloudmqtt.com https://play.google.com/store/apps/details?id=server.com.mqtt


Ставим клиент:
- Для ардуино есть библиотека - MQTT https://github.com/256dpi/arduino-mqtt
- Для компа на windows - MQTT Explorer http://mqtt-explorer.com/
- для телефона - IoTMQTTPanel https://play.google.com/store/apps/details?id=snr.lab.iotmqttpanel.prod
- для телефона №2 - MQTT Dash https://play.google.com/store/apps/details?id=net.routix.mqttdash

---

Одно устройство должно передавать. Другое должно принимать. Оба должны быть подключены к серверу одновременно, иначе ничего не будет передано. 
Для интеграции в сервер умного дома датчиков с протоколом ZigBee, нужно подключить usb-донгл ZigBee2MQTT

