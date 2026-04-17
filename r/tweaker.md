---
title: Твикер для Windows 10
date: 2022-04-10T20:00:59+02:00
modified: 2024-05-02T00:20:00+02:00
tags: soft
comments: 104
---

Применить твики - это значит подправить напильником. 

Данный набор твиков редназначен для Windows 10 Pro x64. И призван ускорить работу системы на слабом железе.  

- toc
{: toc }


## Автоматизация установки Windows
Винда позволяет автоматизировать установку системы. Больше не нужно нажимать кнопки ручками. Достаточно один раз прописать настройки в XML каждая установка будет происходить по заданому сценарию. Также сразу при установке можно применить твики, на выходе сразу получим полностью настроенную систему 

Для того чтобы автоматизировать установку нужно файл "AutoUnattend.xml" положить в корень установочной флешки. И, если требуется, туда же скопировать вспомогательные файлы

Сам файл можно взять, например, на сайте outsidethebox.ms [(ссылка)](https://www.outsidethebox.ms/19924/). Автор детально описывает тонкости. Настоятельно рекомендую ознакомиться. Также можно составить свой файл с помощью конструктора в интернете [(ссылка)](https://schneegans.de/windows/unattend-generator/).

Официальный метод создания файла автоустановки - это утилита "Deploynet Tools" из пакета [Windows Assessment and Deployment Kit (ADK)](https://developer.microsoft.com/windows/hardware/windows-assessment-deployment-kit). Я не разобрался, просто скопировал пример у Вадима Стеркина и слегка модифицировал

## Порядок применения твиков
Файл автоответов как бы создает сценарий установки. Хотя сама установка и происходит автоматически в фоне, но условно разделяется на несколько этапов. Подробнее тут <https://www.outsidethebox.ms/21522/>
- ручная разметка дисков (windowsPE)
- копирование файлов
- установка загрузчика
- перезагрузка
- распаковка и установка файлов (specialized)
- настройка системы (oobe)
- создание первого пользователя
- первый запуск (firstlogon)

Первым делом копируется содержимое папки "$OEM$" на системный диск. В дальнейшем эти файлы будут использованы в скриптах <http://www.oszone.net/2243>

Применение твиков на этапе **specialized** реализовано с помощью выполнения синхронных команд. На этом этапе импортируется файл TweakSystem.reg

Параметры пользователя Default изменяются путем редактирования куста реестра, принадлежащего данному пользователю. Иногда нужно что бы уже при первом входе в профиль параметры были применены. Настройки новых пользователей копируются из дефолтного профиля. Соответственно вполне себе метод

Файл "SetupComplete.cmd" запускается по окончании установки системы, но до первого входа пользователя <http://www.oszone.net/8604>. В моем примере он пустой, я оставил его как демо <https://www.outsidethebox.ms/21490/> 

Директива "FirstLogonCommands". Позволяет запустить любой скрипт при первом входе пользователя. Это может быть полезно чтобы применить твики конкретно для первого пользователя. <http://www.oszone.net/8609>


## Что прописано в AutoUnattend.xml
Так как мой скрипт основан на примере от Вадима Стеркина, то я опишу только отличия

Изменено:
- Изменены региональные настройки: расположение Украина, язык интерфейса русский
- Автоматический выбор издание Windows 10 Pro вместо запроса у пользователя
- Учетная запись с именем Admin и пустым паролем

Добавлено:
- Добавлен параметр HideEULAPage для скрытия лицензионного соглашения
- Срок действия пароля учетной записи не ограничен
- Запуск скрипта на этапе "specialize" (RunSynchronous)
- Запуск скрипта при первом входе (FirstLogonCommands)
- Применение твиков к пользователю Default


В целом, все твики можно применять на уже установленной системе. Просто некоторые из них не сработают и придется дотюнивать вручную

## Список твиков + конструктор

#### TweakSystem.reg
- Отключить автоматические обновления
- Отключить Smart Screen
- Отключить контроль учетных записей (UAC)
- Отключить встроенный антивирус Windows Defender (при отдельной установке нужно отключить тампер)
- Отключить уведомления от "центра безопасности" SecurityHealth
- Убрать лишние пункты в контекстном меню проводника
- Настройка браузера Edge и отключение раздражителей

#### TweakDefaultUser.reg
- Предотвратить установку OneDrive

#### TweakFirstLogon.reg
Возможно некоторые твики стоит перенести в файл TweakDefaultUser.reg
- Добавить значок "Компьютер" на рабочий стол 
- При запуске проводника открывать "Этот Компьютер"
- Изменить тему оформления
- Исправить настойки Excell для таблиц CSV
- Свернуть поле "Поиск" в значок возле кнопки пуск
- Убрать погоду и новости с панели задач
- Изменить кнопку смены языка
- Отключить "Недавние файлы" в проводнике
- Включить показ скрытых файлов в проводнике
- Показ системных файлов (нет)
- Включить показ расширений файлов
- Смена языка по Ctrl+Shift, раскладка по Alt+Shift
- Исправить региональные настройки (точка как разделитель целой и дробной части)


Конструктор не доделан, поэтому спрятан под спойлер

<details><summary markdown="0">спойлер</summary>
 
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

</details>

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


## Полезные ссылким
- Когда устанавливать драйверы? А софт?
- Как предотвратить автоматическую установку приложений из образа и магазина в Windows <https://www.outsidethebox.ms/19177/>
- Однократное выполнение команд для всех новых пользователей с помощью файла ответов (добавление RunOnce в реестр) <https://www.outsidethebox.ms/22075/>
- Пример "AutoUnattend.xml" в составе программы [WinNTSetup](https://user-images.githubusercontent.com/17731587/228090123-11509bee-8462-4067-9656-c499421b1998.png)
- Интересный факт. Первая версия твикера была интерактивной [(Скриншот)](https://user-images.githubusercontent.com/17731587/162635263-7a770106-e150-43a7-a91a-84f59c00cea7.png).

