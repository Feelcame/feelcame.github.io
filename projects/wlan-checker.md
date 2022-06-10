---
title: wlan-checker
date: 2022-06-10T11:58:42+03:00
---

На Lenovo e530 постоянно отваливается сеть WiFi. Чтобы починить - можно создать скрипт для периодического переподключения. Способ временный и некрасивый, но рабочий

<https://github.com/Feelcame/wlan-checker>


```
rem version 0.1.1
@echo off
chcp 1251 > nul
title WLAN-CHECKER
mode con:cols=60 lines=30 > nul
cd %~dp0
cls

rem обработка аргументов командной строки %1 и %2
set network=Afroditius
set gateway=192.168.31.1
if not "%1" EQU "" set "network=%1"
if not "%2" EQU "" set "gateway=%2"
set status=0

echo. Мониторинг подключения активирован. 
echo. Сеть: %network%
echo. Пинг: %gateway%

:start1
ping -n 1 %gateway% | find /I "TTL" > nul
if %ERRORLEVEL%==0 goto end
echo. && echo %time% Переподключаюсь к сети %network%. Подожди 5с.
netsh wlan disconnect > nul
netsh wlan connect name=%network% ssid=%network% > nul
timeout /t 4 > nul
rem дополнительный таймаут, если не получилось подключиться с первого и второго раза
if %status% GTR 1 (
echo Дополнительное время... Попытка: %status%
timeout /t 10 > nul
)

set /a status=%status%+1
goto start1

:end
rem вывод точек в одну строку
< nul set /p str="."
timeout /t 1 > nul
set status=0
goto start1

REM for /L %%I in (1,0,2) DO (netsh wlan connect name=Afroditius && timeout /t 4 > nul)
```
