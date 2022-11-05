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
- Пример от Вадима Стеркина ([ссылка](https://www.outsidethebox.ms/19924/)) 
- и в составе WinNTSetup.  
Подробнее про настройку файла автоответов тут: [Создание настроенного образа операционной системы](https://www.outsidethebox.ms/9951/)


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

Как пользоваться? Запустить скачанный файл .reg и согласиться на применение настроек. 
Если какие-то изменения не требуется - файл можно отредактировать в блокноте перед запуском. Список применяемых твиков - под спойлером.

>Для отключения Windows Defender требуются сначала вручную отключить "Защиту от подделки" в параметрах безопасности

Скачать все вместе: [**ссылка**](#).  

<details markdown="1">
<summary markdown="0">+ Список твиков и исходники</summary>

```
Windows Registry Editor Version 5.00

;00. Применить все разом (этот файл)
;01. Отключить Defender
;02. Отключить UAC
;03. Отключить Smart Screen
;04. Отключить Windows Update
;05. Смена языка по Ctrl+Shift
;06. Темная тема оформления
;07. Добавить значок Компьютер на рабочий стол
;08. Открывать Компьютер при запуске проводника
;09. Отключить показ недавних файлов


;01. Отключить Defender. Сработает только если сначала вручную отключить пункт "Защита от подделки".
;Win10: Параметры > Обновление и безопасность > Безопасность Windows > Защита от вирусов и угроз > Параметры защиты от вирусов и угроз (Управление настройками) > Защита от подделки (Откл)
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


;02. Отключить UAC
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System]
"ConsentPromptBehaviorAdmin"=dword:00000000
"EnableLUA"=dword:00000000
"PromptOnSecureDesktop"=dword:00000000


;03. Отключить Smart Screen
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer]
"SmartScreenEnabled"="Off"

[HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Storage\microsoft.microsoftedge_8wekyb3d8bbwe\MicrosoftEdge\PhishingFilter]
"EnabledV9"=dword:00000000

[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\AppHost]
"EnableWebContentEvaluation"=dword:00000000


;04. Отключить обновления Win10. Официальный способ
;Инфа тут https://blog.simplix.info/disable-update-win10/ и тут https://remontka.pro/disable-updates-windows-10/
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate]
"DoNotConnectToWindowsUpdateInternetLocations"=dword:00000001
"WUServer"="localhost"
"WUStatusServer"="localhost"

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU]
"UseWUServer"=dword:00000001
"NoAutoUpdate"=dword:00000001


;Как вернуть все взад? Раскомментируй, скопируй в отдельный файл и запусти.
;[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate]
;"DoNotConnectToWindowsUpdateInternetLocations"=-
;"WUServer"=-
;"WUStatusServer"=-

;[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU]
;"UseWUServer"=-
;"NoAutoUpdate"=-


;05. Смена языка по Ctrl+Shift
[HKEY_CURRENT_USER\Keyboard Layout\Toggle]
"Hotkey"="2"
"Language Hotkey"="2"
"Layout Hotkey"="3"


;06. Темная тема оформления
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize]
"AppsUseLightTheme"=dword:00000000


;07. Добавить значок Компьютер на рабочий стол
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel]
"{20D04FE0-3AEA-1069-A2D8-08002B30309D}"=dword:00000000
 
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\ClassicStartMenu]
"{20D04FE0-3AEA-1069-A2D8-08002B30309D}"=dword:00000000


;08. Открывать Компьютер при запуске проводника (вместо избранного)
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"LaunchTo"=dword:00000001


;09. Отключить показ недавних файлов
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer]
"ShowRecent"=dword:00000000
"ShowFrequent"=dword:00000000
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
