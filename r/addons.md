---
title: Браузерные расширения
date: 2021-11-10T01:28:16
tags: soft
---

## Список хороших расширений
{: .no_toc #addons }

<details><summary markdown="0">AdBlock Plus</summary>
Скрывает рекламу, за счет этого ускоряет работу
- [оф.сайт](https://adblockplus.org/ru/download)
- [chrome](https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb?hl=ru)
</details>

<details>
<summary markdown="0">Blank New Tab Page</summary>
Заменяет стартовую страницу с рекламой тупо на пустую
- [оф.сайт](https://yuhaofe.com/blank-new-tab-page)
- [chrome](https://chrome.google.com/webstore/detail/blank-new-tab-page-white/jmbngnnlimnakiibacglaeflpghellfh)
- [edge](https://microsoftedge.microsoft.com/addons/detail/kakgoomeaegcolfmaaogfmifnnmllpkm)
- [github](https://github.com/yuhaofe/Blank-New-Tab-Page---White-Smoke)
</details>

<details><summary markdown="0">Переводчик SailorMax</summary>
Удобный, универсальный. Не работает в хроме, ибо гугл нещадно банит конкурентов
- [opera](https://addons.opera.com/ru/extensions/details/translator/)
- [firefox](https://addons.mozilla.org/ru/firefox/addon/translator-2/)
- [edge](https://microsoftedge.microsoft.com/addons/detail/translator/cdkmohnpfdennnemmjekmmiibgfddako?hl=ru-RU)
</details>


<details><summary markdown="0">Показать еще</summary>

- **DarkReader** - затемняет страницы.
  [оф.сайт](https://darkreader.org/)
- **Sponsor Block** - вырезает нативную реклам в ютубе
  [оф.сайт](https://sponsor.ajay.app/)
- **Quick Bookmarks Menu** - быстрый доступ к закладкам.
  [оф.сайт](https://yuhaofe.com/quick-bookmarks-menu),
  [chrome](https://chrome.google.com/webstore/detail/quick-bookmarks-menu/fkemipdcgbeknabedhecepcebhlnlhbf)
- **Steam Recorder** - Скачивание видео и трансляций.
  [оф.сайт](https://www.hlsloader.com/install.html), 
  [chrome](https://chrome.google.com/webstore/detail/stream-recorder-download/iogidnfllpdhagebkblkgbfijkbkjdmm)
- **Yandex Acces** - доступ к вк, ок и афк. Разработчик яндекс.
  ссылки нет
- **Video Resume** - продолжает ютуб с места остановки. змечена фоновая активность.
  [chrome](https://chrome.google.com/webstore/detail/video-resumer/bongjkoajofkfpofginnhecihgaeldpe)
- **Windscribe** - Платный VPN-сервис для разблокировки сайтов.
  [оф.сайт](https://rus.windscribe.com/download)
- **Video Downloader Plus** - скачивает видео из фейсбука.
  [chrome](https://chrome.google.com/webstore/detail/video-downloader-plus/cfejhehdhaaeoiahaojjhmjaihjaodcf),
  [архив](https://extpose.com/ext/206921/ru)
- **m3u8 sniffer** - вылавливает ссылки на поток для просмотра в отдельной вкладке.
  [оф.сайт](http://sigmafxdx.com/m3u8Sniffer/),
  [chrome](https://chrome.google.com/webstore/detail/video-m3u8-sniffer-find-h/akkncdpkjlfanomlnpmmolafofpnpjgn)
- **HLS player** - воспроизведение ссылки на поток прямо в браузере. можно расшарить ссылку через оф.сайт<br>
  [оф.сайт](https://www.hlsplayer.org/),
  [chrome](https://chrome.google.com/webstore/detail/hls-player-m3u8-streaming/eakdijdofmnclopcffkkgmndadhbjgka)
- **Adaptive Bitrate Manifest Viewer** - открывает плейлист m3u в виде текста<br>
  [chrome](https://chrome.google.com/webstore/detail/adaptive-bitrate-manifest/omjpjjekjefmdkidigpkhpjnojoadbih)
- **Markdown Viewer** - просмотр файлов MD в браузере<br>
  [github](https://github.com/simov/markdown-viewer#table-of-contents),
  [chrome](https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk),
  [edge](https://microsoftedge.microsoft.com/addons/detail/markdown-viewer/cgfmehpekedojlmjepoimbfcafopimdg)
</details>

[Наверх↑](#top)


## Пользовательские скрипты UserScripts
Если надо автоматизировать какое то действие в браузере, но не хочется писать свое расширение, то можно написать юзерскрипт и запускать его через специальное расширение. Такие скрипты часто публикуются на специальных сайтах

Расширения для запуска скриптов:
- Tampermonkey
- Violentmonkey
- Greasemonkey

Сайты где искать готовые юзерскрипты:
- <https://GreasyFork.org>
- <https://github.com/cyfung1031/userscript-supports>

## Как установить расширение из файла

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



