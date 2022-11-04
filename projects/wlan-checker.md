---
title: wlan-checker
date: 2022-06-10T11:58:42+03:00
tags: soft
---

На Lenovo e530 постоянно отваливается сеть WiFi. Чтобы починить - можно создать скрипт для периодического переподключения. Способ временный и некрасивый, но рабочий. Ссылка на гитхаб ниже. Скрипт пингует роутер и если он недоступен - переподключается к сети wi-fi.

**Исходники**: <https://github.com/Feelcame/wlan-checker/blob/main/wlan-checker.bat>  
**Скачать скрипт**: [v0.1.2](https://github.com/Feelcame/wlan-checker/releases/download/v0.1.2/wlan-checker.bat)  
Скачать репо: [ссылка](https://github.com/Feelcame/wlan-checker/archive/refs/heads/main.zip)  

```
rem Ниже нерабочий ванлайнер. К сожалению необходимо сначала проверять пинг
for /L %%I in (1,0,2) DO (netsh wlan connect name=Afroditius && timeout /t 4 > nul)
```
