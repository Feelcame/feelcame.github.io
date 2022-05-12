---
title: wlan-ckecker
---

Lenovo e530. Отваливается wifi. Как починить

```
@echo OFF
mode con:cols=60 lines=20 > nul
set network=Shareware
echo Мониторинг подключения активирован для сети %network%
:start1
ping -n 1 192.168.31.1 | find /I "TTL" > nul
if %ERRORLEVEL%==0 timeout /t 1 > nul && goto start1
echo %time% Переподключаюсь к сети %network%. Подожди 5с
netsh wlan disconnect > nul
netsh wlan connect name=%network% > nul
timeout /t 4 > nul
goto start1
pause

REM for /L %%I in (1,0,2) DO (netsh wlan connect name=Shareware)
```
