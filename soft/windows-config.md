---
title: Как установить Windows
date: 2021-08-24T20:22:49+03:00
modified: 2021-11-09T03:03:34+02:00
tags: native
---

Тут рассмотрен вариант установки из флешки. Если ты хочешь установить винду на новый диск, то можно воспользоваться сторонними программой WinNTSetup или 78Setup

- Навигатор
{: toc }


## Запись на флешку 
- Взять флешку не менее 8ГБ
- Скачать образ винды - самую свежую **официальную** версию Windows 10. [**поиск(nnmclub.to)**](http://nnmclub.to/forum/tracker.php?f=504&nm=windows).
- Записать ранее скачанный образ через **Rufus** (может автоматически скачать образ за тебя). Альтернативы: **UltraISO** или **WinSetupFromUSB**.
- В корень флешки положить файл автоответов "Unattached.xml", соответствующий твоей версии винды. Интересный вариант есть в составе WinPE Strelec и в составе WinNTSetup. Пример от [Вадима Стеркина](https://www.outsidethebox.ms/9951/)

>**Лайфхак для опытных пользователей.** Если под рукой нет флешки - можно загрузиться из **несистемного** раздела диска. Для этого надо распаковать образ и прописать его в BCD. В LiveCD от стрельца есть скрипт этого. Официальный образ придется прописать самостоятельно через BOOTICE, EasyBCD или через консоль.

## Установка
- Запустить меню загрузки одной из этих клавиш: Esc, F1, F2, F8, F10, F12, Del, Enter. Ну или в биосе выставь флешку в приоритет загрузки
- Выбрать редакцию Windows 10 Pro (или какая больше нравится)
- При разбивке диска удалить ВСЕ разделы и выбрать для установки "Незанятое место". Установщик сам сделает разбивку оптимальным образом. Если очень надо, то раздел с файлами можно оставить (можно опознать по размеру).
  >Если на компе уже есть диск с загрузчиком, то надо его удалить, иначе он не будет создан на новом диске

Все, осталось подождать пока винда сама установится и запустится. Если ты пропустил пункт про файл автоответов, то установщик покажет еще несколько окон:

- Отключить телеметрию при установке, что бы винда меньше чего собирала про тебя
- Создать **локального** пользователя с именем из латиницы и без пробелов. Для этого нужно отключить интернет на время установки.  Ещё вариант - при запросе email указать **существующий** адрес, напр. "test@live.com" и неверный пароль. Оно ругнётся и появится возможность создать локального пользователя

## Первичная настройка
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

## Твики реестра
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


## Установить драйвера
Если у тебя какое-то редкое устройство - лучше перед переустановкой забекапить старые дрова программой "Double Driver". Но это не панацея, могут и не заработать на новой системе
- Лучший вариант - из сайта производителя.  
- Чуть хуже - если десятка сама подтянет из серверов майкрософта.  
- На крайняк можно заюзать Snappy Driver Installer. 

> И рекомендую воздержаться от использования одного известного польского драйверпака. Он наставит кучу говна типа яндекс браузера.

## Установить софт
1. Браузер + блокировщик рекламы
1. Архиватор
1. Офис (он долго ставится)



## Полезные ссылки
- [Как предотвратить автоматическую установку Teams в Windows 11](https://www.outsidethebox.ms/21375/)
- 
