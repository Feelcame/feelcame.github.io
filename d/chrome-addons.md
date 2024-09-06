---
title: Браузерные расширения
date: 2021-11-10T01:28:16
comments: true
---

## Как установить расширение в хром из файла

**Установка скриптом:**
- запусти файл install.cmd, он пропишет имена расширений в реестр
- перезагрузи браузер
- согласись на установку расширений

**Установка в режиме разработчика:**
- Включить режим разработчика в окне расширений ```chrome://extensions``` и перезапустить браузер
- Перетянуть файл .crx или .zip из проводника прямо в окно расширений ```chrome://extensions```
- Если расширения самопроизвольно удаляются, то предотвратить это можно изменив расширение .crx на .zip и повторив установку

**Все методы установки расширений:**
- установки расширений из магазина расширений (основной). [Доки](https://developer.chrome.com/docs/extensions/mv3/hosting/#hosting)
- через реестр или конфигурационный файл (при установке вместе с другим ПО). [Доки](https://developer.chrome.com/docs/extensions/mv3/external_extensions/#registry)
- через групповые политики домена (для компаний)
- Установка в режиме разработчика (для отладки)
- из файла .crx на Linux (все лучшее в опенсорсе)

## Скрипт
```
@chcp 1251
cls
@echo off
echo Сейчас будут установлены расширения. Подтверди
pause
rem Добавляет раздел с именем расширения
REG ADD HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Google\Chrome\Extensions\cfhdojbkjhnklbpkdaibdccddilifddb /f
rem Добавляет параметр с адресом магазина расширений (имя: update_url, тип: REG_SZ, данные: url)
REG ADD HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Google\Chrome\Extensions\cfhdojbkjhnklbpkdaibdccddilifddb /v update_url /t REG_SZ /d https://clients2.google.com/service/update2/crx /f
cls
echo OK
echo Перезагрузи браузер!
TIMEOUT /T 5
```
Данный скрипт никак не ломает систему установки расширений из магазина, он ей следует. 
Скрипт как бы просит браузер установить вот это конкретное расширение из магазина при следующем запуске.  
Доки от Google Chrome: [ссылка](https://developer.chrome.com/docs/extensions/mv3/external_extensions/#registry)



