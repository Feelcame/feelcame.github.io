---
title: Feelsoft Tweaker
date: 2022-04-10T20:00:59+02:00
modified: 2022-04-11T00:20:00+02:00
tags: soft
comments: 104
---

![image](https://user-images.githubusercontent.com/17731587/162635263-7a770106-e150-43a7-a91a-84f59c00cea7.png)

[Скачать](https://mega.nz/folder/MvV32RgA#c4QjxbaA1_jal0KEnnfT8A)

## ToDO

**Настройки безопасности**
- Отключить Defender (требуются ручные действия)
- Отключить UAC
- Отключить Smart Screen
- Отключить автоматическое обновление 
- Убрать автозапуск SecurityHealth
- Отключить Firewall
- Добавить диспетчер задач в автозагрузку

**Внешний вид**
- Смена языка по Ctrl+Shift, раскладка по Alt+Shift

**Проводик**
- Темная тема оформления
- Добавить значок Компьютер на рабочий стол
- Открывать Компьютер при запуске проводника
- Отключить показ недавних файлов
- Исправить региональные настройки (точка как разделитель целой и дробной части)

---

## Web version

<form id="tweaks">
**Отключить автообновление**
<br>
<label>
<input type="radio" name="NoAutoUpdate" value="" checked>
Не менять
</label>
<br>
<label>
<input type="radio" name="NoAutoUpdate" value="use">
Отключить
</label>
<br>
<label>
<input type="radio" name="NoAutoUpdate" value="def">
Включить
</label>


**Выбери тему оформления**
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
<input type="radio" name="theme" value="default">
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



<div style="margin: 30px;">
<button type="submit" onclick="return false;">Сохранить .reg-файл</button>
</div>



<!--


## Table


№ | Описание применяемого твика | Не менять | Recomend | Default
--- | --- | --- | --- | ---
1 | Поменять тему | Не менять | Темная | Светлая
2 | Отключить антивирус Отключить антивирус Отключить антивирус | Не менять | Выкл | Вкл

Еще варик:





№ | Описание применяемого твика | Сбросить на дефолт | x
-: | :-- | :- | -:
1 | <label><input type="radio" name="theme" value="">Установить темную тему</label> | <input type="radio" name="theme"> Светлая | <input type="radio" name="theme">
2 | <input type="radio" name="NoAutoUpdate"> Отключить встроенный антивирус Отключить антивирус Отключить антивирус Отключить антивирус |<input type="radio" name="NoAutoUpdate"> Вкл | <input type="radio" name="NoAutoUpdate">


То же самое, но в HTML:





{% raw %}
<form id="tweaks4">
<table>
  <thead>
    <tr>
      <th style="text-align: right">№</th>
      <th style="text-align: left">Описание</th>
      <th style="text-align: left">Сбросить на дефолт</th>
      <th style="text-align: right">x</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: right">1</td>
      <td style="text-align: left">
		<label><input type="radio" name="theme" value="use" >
		<b>Установить темную тему</b>
		</label>
	  </td>
      <td style="text-align: left">
		<label><input type="radio" name="theme" value="default">Светлая</label>
	  </td>
      <td><input type="radio" name="theme" value="" checked></td>
    </tr>

    <tr>
      <td style="text-align: right">2</td>
      <td style="text-align: left">
		<label><input type="radio" name="NoAutoUpdate" value="use">
		<b>Отключить встроенный антивирус.</b> Полезно для улучшения производительности на слабых устройствах
		</label>
	  </td>
      <td style="text-align: left">
		<label><input type="radio" name="NoAutoUpdate" value="default">Вкл</label>
	  </td>
      <td><input type="radio" name="NoAutoUpdate" value="" checked></td>
    </tr>
	
  </tbody>
</table>
</form>
-->



{% endraw %}