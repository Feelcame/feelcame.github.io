---
title: Выделенный сервер
date: 2023-09-05T15:20:00+03:00
---


## Содержание
{: .no_toc }
* Table of Content  
{: toc }

## Где взять
- купить vps
- поставить железку дома

## Что с ним делать
- захостить сайт
- сервер умного дома
- файловое хранилище

## Какие есть готовые железки
хз

## Файлохранилище (NAS)
- QNAP
- Synology - операционка на основе дебиан. Модифицирована компанией синолоджи для нужд своих серваков
- FreeNAS - сетевой диск. Ставится как отдельная ос
- <https://4te.me/post/silent-home-nas/>
- <https://habr.com/ru/articles/692008/>
- <https://filebrowser.org/>
- <https://4pda.to/forum/index.php?showtopic=1065136&st=60>

- Архив документов и фото в домашних условиях <https://vas3k.club/post/2193574/>




## Медиа сервер
- BubbleUpnP
- Jellyfin


## Еще софт. Контейнеры
- docker - типа портабл программы на уровне сервера
- portainer - удобное управление запущенными контейнерами
- synology - на сволй сервак можно замутить файловое хранилище совместимое с синолоджи 
- openVPN - свой сервер впн
- Home Assistant - управлнеие "умным домом"
- mettermost - корпоративный чатик
- видеонаблюдение
- сервер управлнеия сигнализацией

## Полезное
Ansible — система управления конфигурациями

- https://opnsense.org/ серверный фаерволл. Возможно это что то похожее на pihole
- https://github.com/calcom/cal.com календарь, планировщик дел
- https://mintlify.com/ цмс для документации
- https://github.com/jgm/pandoc парсер markdown



## Windows. Командная строка, PowerShell
Win+R > cmd > счастье

А если через powershell? <https://windowsnotes.ru/powershell-2/zapusk-programmy-iz-powershell/>

## Полезные фишки
### Узнать почему комп не уходит в сон
Скрипт ниже. Запускать от админа. Источник: <https://tinyurl.com/b43nh2mz>  
```
cmd /k powercfg /requests
```

### Запустить команду из меню Win+R и оставить консоль открытой
Позволяет запихнуть сложные сценарии в одну строчку. Ниже пример для запуска из бат-файла, если запускть через Win+R, то нужно убрать кавычки
```
"cmd /k cls & cd & adb start-server & echo FASTBOOT: & fastboot --version & fastboot devices & echo ADB: & adb version & adb devices"
```

### Ярлык с относительным путем
1. Создать ярлык на командную строку, передав ей как параметр запуск файла по относительному пути. Проводник их не понимет, а вот cmd вполне.   
```%COMSPEC% /c start "" "..\Test Folder\1.txt"```   
Обрати внимание, что поддерживаются пути с пробелами.
2. В свойствах ярлыка удалить все в поле "Рабочая папка"
3. В свойстваъх ярлыка в поле "Окно" выбрать "Свернутое в значок". Это предотвратит появление окна консоли

<details markdown="1"><summary markdown="0">Под спойдером картинка</summary>
![image](https://user-images.githubusercontent.com/17731587/140293941-fea0b2c8-0f0f-432c-8fad-9753c99496df.png)
</details>

Альтернативный вариант - создать файл ```1.cmd``` и запускать непосредственно его.

```start "" "..\Test Folder\1.txt"```

```start "" "%onedrive%\Test Folder\1.txt"```



### Скопировать в буфер обмена путь к файлу на OneDrive

Ярлыки с относительными путями будут корректно работать на диске OneDrive даже если ты заходишь с разных компов.

Зацени также скрипт, который позволяет создать локальные ссылки на OneDrive. Он использует переменную среды %onedrive%. Ссылка нас статью с описанием: [onedrive-linker](../projects/onedrive-linker.md)


## Полезные статьи
- <https://www.cyberforum.ru/cmd-bat/thread55211.html>
- <https://ab57.ru/cmd.html>
- <https://rsdn.org/article/winshell/batanyca.xml>



## Linux Bash
Популярные команды
- cd
- ls
- pwd


## Программы Linux
- emacs - текстовый редактор
- midnight commander - файл менеджер Linux
- Terraform - позволяет автоматизировать развертывание приложений в облака и тд
- Docker - делает портабл версии целых програмных комплексов
- Flask — фреймворк для создания веб-приложений на языке программирования Python
- Task warior - задачи
- Calcourse - календарь
- Fantastico календарь
- Abooks - контакты, др
- Metermose - планирование работы
- Rocket chat - корпоративные чаты
- Reaper - диктофон
- Audio hijacking - программа микшерский пульт
- Neo4j графовая бд

### скачиваниеивидео из youtube
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) - является форком знаменитого youtube-dl. Он умный, хитрый, умеет загружать видео и, при помощи всем известного ffmpeg, доставать из него звук.
- <https://github.com/kannagi0303/yt-dlp-gui>
- <https://github.com/BKSalman/ytdlp-gui>
- https://docs.rs/crate/ytdlp-gui/0.2.0
- https://forum.ixbt.com/topic.cgi?id=23:47435
- https://habr.com/ru/articles/857964/
- https://newpipe-ev.de/
- https://habr.com/ru/articles/783036/
- https://habr.com/ru/articles/656069/
- https://github.com/Tyrrrz/YoutubeExplode
- 


### Полезные ссылки 2
- [Bash для начинающих: 21 полезная команда](https://habr.com/ru/company/ruvds/blog/445270/)
- [КАК СОЗДАТЬ ФАЙЛ В ТЕРМИНАЛЕ](https://losst.ru/kak-sozdat-fajl-v-terminale)
- [Быстрое изучение Bash: 30 легких команд для новичков](https://proglib.io/p/bash-commands-for-beginners)
- [Оболочка Bash — шпаргалка для начинающих](https://tproger.ru/translations/bash-cheatsheet/)
