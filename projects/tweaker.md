---
title: Feelsoft Tweaker
date: 2022-04-10T20:00:59+02:00
modified: 2022-04-11T00:20:00+02:00
tags: soft
comments: 104
---

## Описание

Удобная текстовая оболочка для импорта твиков реестра. В комплекте уже идут некоторые для первичной настройки системы после установки начисто. Make your windows 10 handy again in seconds

## Скачать
{: #download }

**GitHub:** <https://github.com/Feelcame/feelsoft-tweaker/releases>

1drv: <https://1drv.ms/u/s!An7p8rERUur5imrpJGlnO7xgSAUI?e=erZPms>

Телеграм: <https://t.me/FeelSoftWin/286>

## Подробности

```
Список твиков:
├─ Улучшения интерфейса (безопасно)
│  ├─ Смена языка по Ctrl+Shift, раскладка по Alt+Shift
│  ├─ Темная тема оформления
│  ├─ Добавить значок Компьютер на рабочий стол
│  ├─ Открывать Компьютер при запуске проводника
│  ├─ Отключить показ недавних файлов
│  └─ Исправить региональные настройки (точка как разделитель целой и дробной части)
├─ Оптимизировать настройки безопасности
│  ├─ Отключить Defender (требуются ручные действия)
│  ├─ Отключить UAC
│  ├─ Отключить Smart Screen
│  ├─ Отключить автоматическое обновление 
│  ├─ Убрать автозапуск SecurityHealth
│  └─ Отключить Firewall
└─ Добавить диспетчер задач в автозагрузку
```

![image](https://user-images.githubusercontent.com/17731587/162635263-7a770106-e150-43a7-a91a-84f59c00cea7.png)

## Web-form version

<form id="tweaks">
**Отключить автообновление**
<br>
<label>
<input type="radio" name="NoAutoUpdate" value="1" checked>
Да
</label>
<br>
<label>
<input type="radio" name="NoAutoUpdate" value="0">
Нет
</label>


**Выбери темную тему**
<br>
<label>
<input type="radio" name="theme" value="" checked>
Не менять
</label>
<br>
<label>
<input type="radio" name="theme" value="dark">
Темная
</label>
<br>
<label>
<input type="radio" name="theme" value="light">
Светлая
</label>


<div>
<button type="submit">Submit</button>
</div>
</form>

<pre id="log"></pre>



<script>
var form = document.querySelector("#tweaks");
var log = document.querySelector("#log");

form.addEventListener(
  "submit",
  function (event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
      output = entry[0] + "=" + entry[1] + "\r";
    }
    log.innerText = output;
    event.preventDefault();
  },
  false,
);
</script>

