---
title: Как установить Windows
date: 2021-08-24T20:22:49+03:00
modified: 2023-03-28T00:03:34+02:00
tags: native
comments: 0
---

Тут рассмотрен вариант чистой установки из флешки. Установка поверх не избавляет от накопившихся проблем. А ручная уставновка из под LiveCD слишком сложная для простого юзера, хоть и позволяет установить винду без без флешки (загрузка с раздела накопителя)

- Навигатор
{: toc }


## Запись на флешку 
- Взять флешку на 8 Гб или больше
- Скачать образ винды - самую свежую **официальную** версию Windows 10. Например тут: [поиск(nnmclub.to)](http://nnmclub.to/forum/tracker.php?f=504&nm=windows). Программа Rufus может сама скачать из оф.сайта
- Записать ранее скачанный образ через **Rufus**. Альтернативы: **UltraISO** или **WinSetupFromUSB**
- В корень флешки положить файл автоответов "Unattached.xml". (есть в составе WinPE Strelec)
![image](https://user-images.githubusercontent.com/17731587/228090123-11509bee-8462-4067-9656-c499421b1998.png)


## Установка Windows
- Запустить меню загрузки одной из этих клавиш: Esc, F1, F2, F8, F10, F12, Del, Enter. Ну или в биосе выставь флешку в приоритет загрузки
- Выбрать редакцию Windows 10 Pro (или какая больше нравится)
- При разбивке диска удалить ВСЕ разделы и выбрать для установки "Незанятое место". Установщик сам сделает разбивку оптимальным образом. Если очень надо, то раздел с файлами можно оставить (можно опознать по размеру)
- Ждать завершения установки

Если ты пропустил пункт про файл автоответов, то установщик покажет еще несколько окон:
- Отключить телеметрию при установке, что бы винда меньше чего собирала про тебя
- Создать **локального** пользователя с именем из латиницы и без пробелов. Для этого нужно отключить интернет на время установки.  Ещё вариант - при запросе email указать **существующий** адрес, напр. "test@live.com" и неверный пароль. Оно ругнётся и появится возможность создать локального пользователя

## Установить софта
**Драйверы**. Пока настраиваешь интерфейс под себя, все драйверы подтянутся автоматически из серверов microsoft. Если что-то не поставилось, то надо доустановить вручную:
- из сайта производителя
- Snappy Driver Installer

> Рекомендую воздержаться от установки из непроверенных источников - есть риск подхватить малварь. И тогда вся переустановка "начисто" - коту под хвост

**Дополнительные программы:**
- Активатор
- Архиватор 7-zip
- Блокировщик рекламы в браузер
- Офисные программы Word, Excell, Notepad++


## Настройка системы
- Удалить предустановленный софт в меню "спуск"
- Изменить программы по умолчанию, если нужно
- Закрепить Taskmgr на панели задач. Включить постоянное отображение возле часов. Он показывает загрузку ЦП в реальном времени.
- Добавить Taskmgr его в автозагрузку. В папке "shell:startup" создать ярлык на "taskmgr" и в его свойствах поставить запуск в свернутом состоянии

**Все остальное можно автоматизировать**
- Применить твики через WinAero Tweaker. [Мой пресет](./windows.md#:~:text=WinAero)<br>
  ![image](https://user-images.githubusercontent.com/17731587/228089658-7b9ae657-b6c1-4554-b6c0-8574d0e1998f.png)

- Применить настройки из следующего раздела

## Мой твик реестра

Тут только то, что не делает WinAero. Ниже сам твик с комментариями. Его нужно скопировать в текстовый файл и сохранить с расширением `.reg`. После этого запустить и согласиться внести изменения


```
Windows Registry Editor Version 5.00

;Отключить принулительное автоматическое обновление системы (Win10 Pro). 
;По прежнему можно будет запустить обновление вручную через параметры
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU]
"NoAutoUpdate"=dword:00000001

;Отключить уведомления "центра безопасности"
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Defender Security Center\Notifications]
"DisableNotifications"=dword:00000001

;Убрать погоду и новости с панели задач
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Feeds]
"ShellFeedsTaskbarViewMode"=dword:00000002

;Свернуть поле "Поиск" на панели задач в значок
[HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Search]
"SearchboxTaskbarMode"=dword:00000001

;Включить показ скрытых файлов и показ расширений файлов
[HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"Hidden"=dword:00000001
"HideFileExt"=dword:00000000

;Отключить показ частоиспользуемых, а также недавних файлов
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer]
"ShowRecent"=dword:00000000
"ShowFrequent"=dword:00000000

;При запуске проводника показывать "Этот Компьютер" вместо "Избранного"
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"LaunchTo"=dword:00000001

;Смена языка по Ctrl+Shift, смена раскладки по Alt+Shift
[HKEY_CURRENT_USER\Keyboard Layout\Toggle]
"Hotkey"="2"
"Language Hotkey"="2"
"Layout Hotkey"="3"

;Темная тема оформления
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize]
"AppsUseLightTheme"=dword:00000000

;07. Добавить на рабочий стол значок Компьютер
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel]
"{20D04FE0-3AEA-1069-A2D8-08002B30309D}"=dword:00000000
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\ClassicStartMenu]
"{20D04FE0-3AEA-1069-A2D8-08002B30309D}"=dword:00000000

```


## То же самое, но в другом виде  
{ .no_toc }

    Windows Registry Editor Version 5.00

;Отключить принулительное автоматическое обновление системы (Win10 Pro). 
;По прежнему можно будет запустить обновление вручную через параметры

    [HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU]
    "NoAutoUpdate"=dword:00000001

;Отключить уведомления "центра безопасности"

    [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Defender Security Center\Notifications]
    "DisableNotifications"=dword:00000001

;Убрать погоду и новости с панели задач

    [HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Feeds]
    "ShellFeedsTaskbarViewMode"=dword:00000002

;Свернуть поле "Поиск" на панели задач в значок

    [HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Search]
    "SearchboxTaskbarMode"=dword:00000001

;Включить показ скрытых файлов и показ расширений файлов

    [HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
    "Hidden"=dword:00000001
    "HideFileExt"=dword:00000000

;Отключить показ частоиспользуемых, а также недавних файлов

    [HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer]
    "ShowRecent"=dword:00000000
    "ShowFrequent"=dword:00000000

;При запуске проводника показывать "Этот Компьютер" вместо "Избранного"

    [HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
    "LaunchTo"=dword:00000001

;Смена языка по Ctrl+Shift, смена раскладки по Alt+Shift

    [HKEY_CURRENT_USER\Keyboard Layout\Toggle]
    "Hotkey"="2"
    "Language Hotkey"="2"
    "Layout Hotkey"="3"

;Темная тема оформления

    [HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize]
    "AppsUseLightTheme"=dword:00000000

;07. Добавить на рабочий стол значок Компьютер
    [HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel]
    "{20D04FE0-3AEA-1069-A2D8-08002B30309D}"=dword:00000000
    [HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\ClassicStartMenu]
    "{20D04FE0-3AEA-1069-A2D8-08002B30309D}"=dword:00000000



## Полезные ссылки
- [Как предотвратить автоматическую установку Teams в Windows 11](https://www.outsidethebox.ms/21375/)
- 
