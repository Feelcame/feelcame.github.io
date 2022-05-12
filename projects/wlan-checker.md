---
title: wlan-checker
date: 2022-05-12T11:58:42+03:00
---

На Lenovo e530 постоянно отваливается сеть WiFi. Чтобы починить - можно создать скрипт для периодического переподключения. Способ временный и некрасивый, но рабочий

```
@echo off
set network=Shareware
set gateway=192.168.31.1
title WLAN-CHECKER v0.1.0
cd %~dp0
cls
mode con:cols=60 lines=30 > nul
echo. Мониторинг подключения активирован 
echo. Сеть: %network%
echo. Адрес роутера: %gateway%
echo. Если эти данные не подходят - отредактируй их в скрипте
:start1
ping -n 1 %gateway% | find /I "TTL" > nul
if %ERRORLEVEL%==0 goto end
echo. && echo %time% Переподключаюсь к сети %network%. Подожди 5с
netsh wlan disconnect > nul
netsh wlan connect name=%network% ssid=%network% > nul
timeout /t 4 > nul
goto start1

:end
rem вывод точек в одну строку
< nul set /p str="."
timeout /t 1 > nul
goto start1

REM for /L %%I in (1,0,2) DO (netsh wlan connect name=Shareware)
```
