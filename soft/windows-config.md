---
title: Как установить Windows
date: 2021-08-24T20:22:49+03:00
modified: 2023-03-28T00:03:34+02:00
tags: native
---

Тут рассмотрен вариант чистой установки из флешки. Установка поверх не избавляет от накопившихся проблем. А ручная уставновка из под LiveCD слишком сложная для простого юзера. Последний вариант, кстати, позволяет установить винду без без флешки (загрузка с раздела накопителя)

- Навигатор
{: toc }


## Запись на флешку 
- Взять флешку на 8 Гб или больше
- Скачать образ винды - самую свежую **официальную** версию Windows 10. Например тут: [поиск(nnmclub.to)](http://nnmclub.to/forum/tracker.php?f=504&nm=windows). Программа Rufus может сама скачать из оф.сайта
- Записать ранее скачанный образ через **Rufus**. Альтернативы: **UltraISO** или **WinSetupFromUSB**
- В корень флешки положить файл автоответов "Unattached.xml". (есть в составе WinPE Strelec). Описание от [Вадима Стеркина](https://www.outsidethebox.ms/9951/)


## Установка Windows
- Запустить меню загрузки одной из этих клавиш: Esc, F1, F2, F8, F10, F12, Del, Enter. Ну или в биосе выставь флешку в приоритет загрузки
- Выбрать редакцию Windows 10 Pro (или какая больше нравится)
- При разбивке диска удалить ВСЕ разделы и выбрать для установки "Незанятое место". Установщик сам сделает разбивку оптимальным образом. Если очень надо, то раздел с файлами можно оставить (можно опознать по размеру)

Все, осталось подождать пока винда сама установится и запустится. Если ты пропустил пункт про файл автоответов, то установщик покажет еще несколько окон:

- Отключить телеметрию при установке, что бы винда меньше чего собирала про тебя
- Создать **локального** пользователя с именем из латиницы и без пробелов. Для этого нужно отключить интернет на время установки.  Ещё вариант - при запросе email указать **существующий** адрес, напр. "test@live.com" и неверный пароль. Оно ругнётся и появится возможность создать локального пользователя

## Установить софта
Пока настраиваешь интерфейс под себя, все драйверы подтянутся автоматически из серверов microsoft. Если что-то не поставилось, то надо доустановить вручную:
- из сайта производителя
- Snappy Driver Installer
> Рекомендую воздержаться от установки из непроверенных источников - есть риск подхватить малварь

**Дополнительно я ставлю:**
- Блокировщик рекламы в браузер
- Архиватор 7-zip
- Офисные программы Word, Excell, Notepad++
- Активатор, если нет ключа. "KMS Auto Lite" или "Loader by Daz" для Win7

## Настройка интерфейса
- Применить твики через WinAero Tweaker. [Мой конфиг](./windows.md#:~:text=WinAero)
- Применить мой твик реестра. Смотри след.раздел

**Останется сделать вручную:**
1. Активировать винду ключём
1. Настроить панель задач. Убрать поиск, новости, кортану
1. В пуске удалить ярлыки на установку игр и прочей мешуры
1. Удалить предустановленный софт: OneDrive, игры, офис, скайп
1. Изменить программы по умолчанию (браузер, музыка, видео, просмотр PDF)
1. А в разделе "Конфиденциальность" убрать галки для показа недавних элементов в меню пуск.
1. На вкладке "Вид" включить показ скрытых файлов и показ расширений файлов
1. Включить отображение в панели задач диспетчера задач. Он удобно отображает текущую загрузку ЦП на своей иконке.
1. Закрепить Taskmgr на панели задач. 
1. Добавить Taskmgr его в автозагрузку. В папке "shell:startup" создать ярлык на "taskmgr" и в его свойствах поставить запуск в свернутом состоянии

## Твики реестра
Ниже список, что будет сделано. Сам файл реестра под спойлером. Скачать тут: [ссылка](#)
- Отключить Автоматичесие обновления Windows (работатет только в Pro)
- Смена языка по Ctrl+Shift
- Темная тема оформления
- Добавить значок Компьютер на рабочий стол
- Открывать Компьютер при запуске проводника
- Отключить показ недавних файлов


<details markdown="1">
<summary markdown="0">Список твиков и исходники</summary>

``` reg
Windows Registry Editor Version 5.00

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




## Полезные ссылки
- [Как предотвратить автоматическую установку Teams в Windows 11](https://www.outsidethebox.ms/21375/)
- 
