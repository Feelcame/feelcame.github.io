---
date: 2021-08-24T20:22:49+03:00
title: Первичная настройка Windows
modified: 2021-11-09T03:03:34+02:00
---

### **Какую взять винду**
Рекомендую ставить самую свежую версию Windows 10. На момент написания статьи Win11 ещё не готова к массовому переходу на неё, а семёрка уже устарела. Ставить исключительно официальную версию. Давно закончилось те и времена, когда моды ZveDVD были круче официальных сборок. Скачать можно и на официальном сайте, но я обычно беру на торрентах. [http://nnmclub.to](http://nnmclub.to/forum/tracker.php?f=504&nm=windows)

### **Запись загрузочной флешки.**  
Флешка должна быть не менее 8ГБ. Что бы влез официальный образ.  
Записывать через **Rufus**. Альтернативы: **UltraISO** или **WinSetupFromUSB**.

**Лайфхак.** Если нет флешки - можно выделить кусочек жесткого диска для загрузки установщика или LiveCD. Только я тебе этого не говорил! Это для опытных пользователей. Полезные программы: WinNTSetup, 78Setup, BOOTICE, EasyBCD.

### **Файл автоответов**
Типовые настройки установщика можно автоматизировать прописав их в Unattached.xml. Это поможет сократить время установки. Файл положить в корень флешки. Если ты используешь не загрузочную флешку, а какой-то другой вариант установки - тогда сам разберешься, тут я не советник. 

Пример есть у Вадима Стеркина ([ссылка](https://www.outsidethebox.ms/19924/)) и в составе WinNTSetup.  
Мой вариант доступен по ссылке: [пока что нет](#)

>Важно! Для разных версий винды файлы автоответов тоже разные!!!

### **Загрузка с флешки**
Клавиши для вызова меню загрузки при включении: Esc, F1, F2, F8, F10, F12, Del, Enter. Ну или через биос.

### **Разбивка диска**  
При разбивке диска удалить ВСЕ разделы и выбрать для установки "Незанятое место". Установщик сам сделает разбивку оптимальным образом. Есть ещё программа "WinNTSetup" для распаковки винды из под LiveCD, там придется все контролировать самому. Но это другая история

### **Тонкости установки**  
Если у тебя не зашит ключ в биос, то установщик спросит какая нужна версия - выбирай Professional. А для семерки Ultimate. Ну или для какой там версии у тебя есть лицензия.

- Отключить телеметрию при установке
- Создать **локального** пользователя без русских букв и пробелов в имени. Для этого нужно при запросе email указать существующий адрес, напр. "test@live.com" и неверный пароль. После этого появится возможность создать локального пользователя. Ещё вариант - отключить интернет на время установки. При использовании файла автоответов этот шаг можно автоматизировать

### **Первичная настройка**  
Попытаться предотвратить установку OneDrive, Teams и Edge
- Настроить панель задач. Убрать поиск, новости, кортану

### **Твики реестра**
Настройки винды хранятся в реестре. Туда и будем вносить изменения.  
В текстовый файл с расширением .reg копируешь текст ```Windows Registry Editor Version 5.00``` + пустая строка + сам твик.  
Их можно комбинировать. Сохраняешь, запускаешь. Успех! 


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
Полное отключение сработает только если сначала вручную отключить пункт "Защита от подделки". Win10: Параметры > Обновление и безопасность > Безопасность Windows > Защита от вирусов и угроз > Параметры защиты от вирусов и угроз (Управление нрастройкамии) > Защита от подделки (Откл)

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
<summary markdown="0">+ 6. Отключить Отключить Windows Update</summary>
Актуально для очень слабых устройств. Это официальный способ отключить обновы. Инфа взята у [simplix.info](https://blog.simplix.info/disable-update-win10/) и у [remontka.pro](https://remontka.pro/disable-updates-windows-10/). Еще непроверенный вариант программа "winaero".

```
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate]
"DoNotConnectToWindowsUpdateInternetLocations"=dword:00000001
"WUServer"="localhost"
"WUStatusServer"="localhost"

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU]
"UseWUServer"=dword:00000001
"NoAutoUpdate"=dword:00000001
```

Вернуть все взад
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

<summary markdown="0">+ </summary>

```
ёёё
```
</details>


- В пуске удалить ярлыки на установку игр и прочей мешуры
- Удалить предустановленный софт: OneDrive, игры, офис, скайп
- Добавить значок мой компьютер на рабочий стол <https://remontka.pro/computer-desktop-icon-windows-10/>

 **Активация.**  
Когда винда установится, активировать ее лучше всего ключём. Если его нет и ты не боишься плавать в море - рекомендую "KMS Auto Lite" для десятки. Или "Loader by Daz" для Win7

**Отключить Windows Defender и Smart Screen.**  
Можно сделать через активатор выше. В нем есть такая функция. Этот защитник никого не защищает. Так зачем он нужен??? В новой версии он научился защищать себя, так что возможно, придется отключать более официальными способами. Например через редактор груповых политик (он недоступен в версии Home).  
- [remontka.pro Как отключить защитник Windows](https://remontka.pro/windows-defender-turn-off/)
- [remontka.pro Отключить уведомления Защитника Windows 10](https://remontka.pro/windows-protection-notification-disable/)
- [remontka.pro Отключение SmartScreen](https://remontka.pro/smartscreen-off-windows-10/)

### **Установить драйвера.**  
- Лучший вариант - из сайта производителя.  
- Чуть хуже - если десятка сама подтянет из серверов майкрософта.  
- На крайняк можно заюзать Snappy Driver Installer. 

Если у тебя какое то редкое устройство - лучше перед переустановкой забекапить старые дрова программой "Double Driver". Но это не панацея, могут и не заработать на новой системе

> И рекомендую воздержаться от использования одного известного польского драйверпака. Он наставит кучу говна типа яндекс браузера.

### **Установить софт.** Обычно это: 
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


### **Улучшения интерфейса**
- Изменить программы по умолчанию
- Добавить в автозагрузку диспетчер задач (в свёрнутом виде). Папка автозагрузки открывается командой "shell:startup" в меню Win+R. Там нужно создать ярлык на "taskmgr" и в его свойствах поставить запуск в свернутом состоянии. Закрепить его на панели задач
- Включить отображение в панели задач либо только диспетчера задач, либо вообще всех значков. Диспетчер удобно отображает текущую загрузку ЦП на своей иконке.
- Сделать панель задач маленькой
- В параметрах проводника выставить "Открыть проводник для: Этот компьютер". А в разделе Конфиденциальность убрать галки для показа недавних элементов в меню спуск.


### Полезные ссылки
- [Как предотвратить автоматическую установку Teams в Windows 11](https://www.outsidethebox.ms/21375/)
- 
