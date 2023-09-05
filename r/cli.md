---
modified: 2021-09-17T10:38:28+03:00
date: 2021-09-05T10:38:28+03:00
title: Работа с командной строкой
tags: server
---

## Содержание
{: .no_toc }
* Table of Content  
{: toc }

## Windows. Командная строка, PowerShell
Win+R > cmd > счастье

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


### Популярные команды
- cd
- ls
- pwd


## Консольные программы Linux
[soft](../soft/profi-soft.md#cli)

### Полезные ссылки 2
- [Bash для начинающих: 21 полезная команда](https://habr.com/ru/company/ruvds/blog/445270/)
- [КАК СОЗДАТЬ ФАЙЛ В ТЕРМИНАЛЕ](https://losst.ru/kak-sozdat-fajl-v-terminale)
- [Быстрое изучение Bash: 30 легких команд для новичков](https://proglib.io/p/bash-commands-for-beginners)
- [Оболочка Bash — шпаргалка для начинающих](https://tproger.ru/translations/bash-cheatsheet/)
