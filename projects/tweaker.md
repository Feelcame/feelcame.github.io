---
title: Твикер для Windows 10
date: 2022-04-10T20:00:59+02:00
modified: 2024-05-02T00:20:00+02:00
tags: soft
comments: 104
---


Данный набор скриптов предназначен ускорить установки и настройки системы windows. Для использования достаточно распаковать содержимое архива в корень установочной флешки. 

Какие конкретно твики применяются смотрите в исходниках, везде есть комментарии и методы отката. По желанию можно отредактировать некоторые скрипты под свои потребности. Скрипт предназначен для Windows 10 Pro x64 

<details><summary markdown="0">Сегодня в программе</summary>
- toc
{: toc }
</details>

## Скачать {#download}
[**Скачать бесплатно без регистрации и смс**](https://mega.nz/folder/97dWkYaZ#4vYWfpHVYFBxoA4kyR6cwg)

## Методы настройки
Для автоматизации установки и настойки системы предусмотрено сразу несколько механизмов
1. Файл автоответов AutoUnattend.xml, он активно используется в процессе установки, позволяя не вводить руками типовые значения каждый раз
2. Папка "sources/$OEM$". Ее содержимое копируется на системный диск при установке. <http://www.oszone.net/2243>
3. Cинхронные команды из AutoUnattend.xml. <https://www.outsidethebox.ms/21490/>
4. Файл "SetupComplete.cmd". Он запускается по окончании установки системы, но до первого входа пользователя. Команды выполняются от имени системы с правами TrustedInstaller <http://www.oszone.net/8604>
5. Директива "FirstLogonCommands". Позволяет запустить любой скрипт при первом входе пользователя. Это может быть полезно для применения твиков конкретно для заданного пользователя. <http://www.oszone.net/8609>

Файл автоответов "AutoUnattend.xml" позволяет практически полностью автоматизировать установку системы. Его можно сгенерировать или использовать предложенный, отредактировав под себя. 
- Официальная утилита "Deploynet Tools" из пакета [Windows Assessment and Deployment Kit (ADK)](https://developer.microsoft.com/windows/hardware/windows-assessment-deployment-kit)
- Констуктор в интернете - [ссылка](https://schneegans.de/windows/unattend-generator/)
- Пример "AutoUnattend.xml" от Вадима Стеркина - [outsidethebox.ms](https://www.outsidethebox.ms/19924/)
- Пример "AutoUnattend.xml" в составе программы [WinNTSetup](https://user-images.githubusercontent.com/17731587/228090123-11509bee-8462-4067-9656-c499421b1998.png)


## Файл AutoUnattend.xlm
За основу взят пример от [Вадима Стеркина](https://www.outsidethebox.ms/19924/). После моих дополнений система устанавливается автоматически. Вручную нужно только разметить диск

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


## Скрипт SetupComplete.cmd
Я специально оставил оба-два варианта автоматического запуска скриптов, как синхронными командами, так и через SetupComplete.cmd. Пусть это будет демонстрация функционала. Этот метод подходит для внесения изменений в профиль Default во время установки Windows <https://www.outsidethebox.ms/21490/>

## Твики реестра до первого входа
- Отключить автоматическую установку обновлений
- Запретить обновления, даже вручную
- Отключить Smart Screen
- Отключить контроль учетных записей (UAC)
- Отключить встроенный антивирус Windows Defender
- Отключить надоедливые уведомления от "центра безопасности" SecurityHealth
- Добавить в меню "Создать" пункт ".bat файл"
- Убрать лишние пункты в контекстном меню

## Твики реестра для пользователя Default
А также некоторые параметры нужно применять к пользователю Default, для того что бы уже при первом входе в профиль параметры были применены. Плюс если на компе будут создавать других пользователей, то их параметры скопируются из дефолтного профиля
- Предотвратить установку OneDrive

## Твики реестра при первом входе пользователя Admin
Все пользовательские настройки применяются здесь. Мне еще предстоит разобраться какие параметры можно применять на более ранних, а какие на этом. 
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

## TODO и вопросы
Как предотвратить автоматическую установку приложений из образа и магазина в Windows <https://www.outsidethebox.ms/19177/>

Когда устанавливать драйверы? 
А софт?

Однократное выполнение команд для всех новых пользователей с помощью файла ответов (добавление RunOnce в реестр) <https://www.outsidethebox.ms/22075/>

> Интересный факт. Предыдущая ревизия твикера была интерактивной [(Скриншот)](https://user-images.githubusercontent.com/17731587/162635263-7a770106-e150-43a7-a91a-84f59c00cea7.png).
Эта идея себя не оправдала

## Конструктор твиков
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