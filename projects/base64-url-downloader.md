---
title: base64-url-downloader. Хостим файлы в урл адресе
tags: soft
date: 2022-09-01T01:00:00
---

## tl; dr
Скрипт позволяет скачивать как файл, текст записан в URL после решетки #. Фишка в том, что перед передачей на скачивание этот текст перекодируется из формата base64. Это позволяет запихнуть прямо в URL небольшой файл - файлообменники больше не нужны!

## Как это работает
Скрипт в дикой природе: [github](https://github.com/Feelcame/feelcame.github.io/blob/master/demo/64/index.md?plain=1)

**Листинг кода:**

``` js
document.write('
<a 
  id="a" 
  download="'+decodeURIComponent(window.location.search.substring(1,100))+'"
  href="data:n/a;base64,'+decodeURIComponent(window.location.hash.substring(1))+'"
>download</a>
');
a.click();
history.back();
```

При запуске скрипта сразу без прелюдий в тело страницы с помощью функции `document.write` вписывается ссылка. У этой ссылки есть три параметра: id, download, href. Параметры заполняются динамически - данные для них скрипт берет из URL страницы. 

Параметр download отвечает за название, с которым скачается файл по ссылке, сюда прописывается все что записано в урле после вопросительного знака. 

Параметр href - это путь куда ведет ссылка. В данном случае использован протокол "data:" - это легкий способ указать браузеру что все содержимое ссылки уже загружено в браузер и его просто надо отобразить. Сюда динамически подставляется все, что в URL-адресе после решетки.

В сочетании с имеющимся параметром download, при клике по ссылке, будет инициировано скачивание содержимого ссылки.

После того как ссылка прописана в тело документа, браузер автоматически кликнет по ней: `a.click();`

## А как закодировать?
**Windows**

Кодировщик. Сохранить в файл с именем `enc64.bat`. Кодируемый файл перетащить на скрипт
``` batchfile
@echo off
chcp 1251 > nul
if "%~1"=="" (
echo usage: enc64 filename.pdf && pause && exit
)
certutil -encodehex -f %1 %1.B64.txt 0x40000001
type %1.B64.txt| clip
timeout /t 5
```

Декодер. Сохранить в файл с именем `dec64.bat`
``` batchfile
@echo off
if "%1" == "" echo usage: dec64 filename.txt && pause && exit
certutil -decode -f %1 %1.ext
timeout /t 5
```

- На телефоне?
- в браузере?

## Пример работы
- [Продам гараж](/tools/64/?гараж.txt#0J/RgNC+0YHRgtC40YLQtSwg0LPQsNGA0LDQtiDRg9C20LUg0LrRgtC+LdGC0L4g0LrRg9C/0LjQuw)
- [Скачать скрипт для кодировки файлов в baser64 (enc64.bat)](/tools/64/?enc64.bat#QGVjaG8gb2ZmDQpjaGNwIDEyNTEgPiBudWwNCmlmICIlfjEiPT0iIiAoDQplY2hvIHVzYWdlOiBlbmM2NCBmaWxlbmFtZS5wZGYgJiYgcGF1c2UgJiYgZXhpdA0KKQ0KY2VydHV0aWwgLWVuY29kZWhleCAtZiAlMSAlMS5CNjQudHh0IDB4NDAwMDAwMDENCnR5cGUgJTEuQjY0LnR4dHwgY2xpcA0KdGltZW91dCAvdCA1)

## Что дальше?
- попробовать использовать blob
- попробовать передавать так пароль для расшифровки хранящихся на хостинге страниц, что бы сразу же отобразить их в браузере
- добавить ссылки в скрипт на эту страницу?
