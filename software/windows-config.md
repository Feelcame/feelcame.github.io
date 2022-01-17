---
date: 2021-08-24T20:22:49+03:00
title: Первичная настройка Windows
modified: 2021-11-09T03:03:34+02:00
---

### **Скачивание винды**
Рекомендую ставить самую свежую **официальную** версию Windows 10. Качать тут:  
- торрент [**nnmclub.to**](http://nnmclub.to/forum/tracker.php?f=504&nm=windows)
- прямо в программе **Rufus**
- говорят на сайте майков можно скачать, но я не пробовал

### **Запись на флешку**  
- Взять флешку на 8ГБ и более.  
- Записать ранее скачанный образ через **Rufus**. Альтернативы: **UltraISO** или **WinSetupFromUSB**.

>**Лайфхак.** Если нет флешки - можно выделить кусочек жесткого диска для загрузки установщика или LiveCD. Только я тебе этого не говорил! Это для опытных пользователей. Полезные программы: WinNTSetup, 78Setup, BOOTICE, EasyBCD.

### **Файл автоответов**
Скучные настройки можно автоматизировать прописав их в Unattached.xml. Файл положить в корень флешки. Если используешь не флешку, тогда сам разберешься.
>Важно! Для разных версий винды файлы автоответов тоже разные!!!

- Мой вариант доступен по ссылке: [пока что нет](#)
- Пример от Вадима Стеркина ([ссылка](https://www.outsidethebox.ms/19924/)) и в составе WinNTSetup.  

### **Загрузка с флешки**
Клавиши для вызова меню загрузки при включении: Esc, F1, F2, F8, F10, F12, Del, Enter. Ну или через биос. Если не грузится, проверь что отключен Secure Boot.

### **Разбивка диска**  
При разбивке диска удалить ВСЕ разделы и выбрать для установки "Незанятое место". Установщик сам сделает разбивку оптимальным образом. Есть ещё программа "WinNTSetup" для распаковки винды из под LiveCD, там придется все контролировать самому. Но это другая история

### **Действия при установке**  
- Выбрать редакцию Windows 10 Pro. Если комп продавался вместе с виндой, то все само выберется и активируется.
- Отключить телеметрию при установке
- Создать **локального** пользователя без русских букв и пробелов в имени. Для этого нужно при запросе email указать существующий адрес, напр. "test@live.com" и неверный пароль. После этого появится возможность создать локального пользователя. Ещё вариант - отключить интернет на время установки. При использовании файла автоответов этот шаг можно автоматизировать


### **Твики реестра**
Настройки винды хранятся в реестре. Туда и будем вносить изменения, автоматически, в обход графического интерфейса

Как пользоваться? В текстовый файл с расширением .reg копируешь текст ```Windows Registry Editor Version 5.00``` + пустая строка + сам твик. Сохраняешь, запускаешь, радуешься!  
Из представленных здесь твиков можно собрать свой мегапак.

>Скачать все вместе: [ссылка](#).  
>Для отключения Windows Defender требуются ручные действия

<details markdown="1">
<summary markdown="0">+ 1. Отключить UAC для ускорения установки софта</summary>

```
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System]
"ConsentPromptBehaviorAdmin"=dword:00000000
"EnableLUA"=dword:00000000
"PromptOnSecureDesktop"=dword:00000000
```
</details>

<details markdown="1">
<summary markdown="0">+ 2. Отключить Defender</summary>
Полное отключение сработает только если сначала вручную отключить пункт "Защита от подделки". Win10: Параметры > Обновление и безопасность > Безопасность Windows > Защита от вирусов и угроз > Параметры защиты от вирусов и угроз (Управление нрастройкамии) > Защита от подделки (Откл)<br>
Источник: [remontka.pro Откл. защитник](https://remontka.pro/windows-defender-turn-off/), [remontka.pro Откл. уведомления](https://remontka.pro/windows-protection-notification-disable/)

```
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender]
"DisableAntiSpyware"=dword:00000001
"AllowFastServiceStartup"=dword:00000000
"ServiceKeepAlive"=dword:00000000

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection]
"DisableIOAVProtection"=dword:00000001
"DisableRealtimeMonitoring "=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender\Spynet]
"DisableBlockAtFirstSeen"=dword:00000001
"LocalSettingOverrideSpynetReporting"=dword:00000000
"SubmitSamplesConsent"=dword:00000002

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Defender Security Center\Notifications]
"DisableNotifications"=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender Security Center\Notifications]
"DisableNotifications"=dword:00000001
```
</details>

<details markdown="1">
<summary markdown="0">+ 3. Переключить метод смены языка на Ctrl+Shift</summary>
[ссылка на источник](https://softikbox.com/kak-izmenit-sochetanie-klavish-dlya-smenyi-raskladki-klaviaturyi-na-windows-10-21931.html)

```
[HKEY_CURRENT_USER\Keyboard Layout\Toggle]
"Hotkey"="2"
"Language Hotkey"="2"
"Layout Hotkey"="3"
```
</details>

<details markdown="1">
<summary markdown="0">+ 4. Включить темную тему</summary>

```
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize]
"AppsUseLightTheme"=dword:00000000
```
</details>

<details markdown="1">
<summary markdown="0">+ 5. Добавить значок мой компьютер на рабочий стол</summary>

```
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel]
"{20D04FE0-3AEA-1069-A2D8-08002B30309D}"=dword:00000000
 
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\ClassicStartMenu]
"{20D04FE0-3AEA-1069-A2D8-08002B30309D}"=dword:00000000
```
</details>

<details markdown="1">
<summary markdown="0">+ 6. Отключить Windows Update</summary>
Актуально для очень слабых устройств. Это официальный способ отключить обновы. Еще непроверенный вариант - программа "winaero". Инфа взята у [simplix.info](https://blog.simplix.info/disable-update-win10/) и у [remontka.pro](https://remontka.pro/disable-updates-windows-10/)

```
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate]
"DoNotConnectToWindowsUpdateInternetLocations"=dword:00000001
"WUServer"="localhost"
"WUStatusServer"="localhost"

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU]
"UseWUServer"=dword:00000001
"NoAutoUpdate"=dword:00000001
```

Вернуть все взад:
```
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate]
"DoNotConnectToWindowsUpdateInternetLocations"=-
"WUServer"=-
"WUStatusServer"=-

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU]
"UseWUServer"=-
"NoAutoUpdate"=-
```
</details>

<details markdown="1">
<summary markdown="0">+ Отключение SmartScreen</summary>
Источник: [remontka.pro Отключение SmartScreen](https://remontka.pro/smartscreen-off-windows-10/)

```
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer]
"SmartScreenEnabled"="Off"

[HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Storage\microsoft.microsoftedge_8wekyb3d8bbwe\MicrosoftEdge\PhishingFilter]
"EnabledV9"=dword:00000000

[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\AppHost]
"EnableWebContentEvaluation"=dword:00000000
```
</details>

<details markdown="1">
<summary markdown="0">+ Добавить диспетчер задач в автозугрузку</summary>

```
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run]
"Task Manager"="C:\Windows\System32\Taskmgr.exe"
```

То же самое, но добавлением ярлыка в shell:startup через скрипт.bat

```
@echo off
@chcp 1251
cls

echo Создание ярлыка...

set SCRIPT="%TEMP%\%RANDOM%-%RANDOM%-%RANDOM%-%RANDOM%.vbs"

echo Set oWS = WScript.CreateObject("WScript.Shell") >> %SCRIPT%
echo sLinkFile = "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\Task Manager.lnk" >> %SCRIPT%
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> %SCRIPT%
echo oLink.WindowStyle = 7 >> %SCRIPT%
echo oLink.TargetPath = "taskmgr" >> %SCRIPT%
echo oLink.Save >> %SCRIPT%

cscript /nologo %SCRIPT%
del %SCRIPT%

echo OK
echo.
start shell:startup
timeout /t 5
```
</details>

<details markdown="1">
<summary markdown="0">+ ёёё</summary>

```
ёёё
```
</details>


### **Первичная настройка**  
Здесь то с чем не справляются твики реестра и придется сделать вручную. 
- Попытаться предотвратить установку OneDrive, Teams и Edge
- Активировать винду ключём. Если его нет, то кряком "KMS Auto Lite" для десятки. Или "Loader by Daz" для Win7
- Настроить панель задач. Убрать поиск, новости, кортану
- В пуске удалить ярлыки на установку игр и прочей мешуры
- Удалить предустановленный софт: OneDrive, игры, офис, скайп
- Изменить программы по умолчанию
- Включить отображение в панели задач либо только диспетчера задач, либо вообще всех значков. Диспетчер удобно отображает текущую загрузку ЦП на своей иконке.
- Сделать панель задач маленькой

<details markdown="1">

- В параметрах проводника выставить "Открыть проводник для: Этот компьютер". А в разделе Конфиденциальность убрать галки для показа недавних элементов в меню спуск.
- Добавить в автозагрузку диспетчер задач (в свёрнутом виде). Папка автозагрузки открывается командой "shell:startup" в меню Win+R. Там нужно создать ярлык на "taskmgr" и в его свойствах поставить запуск в свернутом состоянии. Закрепить его на панели задач
</details>



### **Установить драйвера.**  
Если у тебя какое-то редкое устройство - лучше перед переустановкой забекапить старые дрова программой "Double Driver". Но это не панацея, могут и не заработать на новой системе
- Лучший вариант - из сайта производителя.  
- Чуть хуже - если десятка сама подтянет из серверов майкрософта.  
- На крайняк можно заюзать Snappy Driver Installer. 

> И рекомендую воздержаться от использования одного известного польского драйверпака. Он наставит кучу говна типа яндекс браузера.

### **Установить софт**
1. Браузер + блокировщик рекламы
1. Клиент Telegram
1. Проигрыватель видео 
1. Проигрыватель музыки
1. Просмотрщик PDF
1. Просмотрщик картинок
1. Файловый менеджер
1. Архиваторы
1. Блокнот
1. Unchecky
1. Клиент virustotal
1. Анализатор места
1. Удалятор ПО
1. Торрент клиент
1. Офис (он долго ставится)



### Полезные ссылки
- [Как предотвратить автоматическую установку Teams в Windows 11](https://www.outsidethebox.ms/21375/)
- 
