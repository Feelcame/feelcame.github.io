---
tags: 
---

## Скрипт автоматической публикации релизов

Папка куда будут копироваться файлы: "..\Releases\гггг-мм-дд\"   
Имя файла нового архива: "гггг-мм-дд-чч-мм-сс.zip"   
Составить список переданных скрипту файлов.   
Если скрипт просто запускается двойным кликом, а не путем перетягивания на него нужных файлов,   
то автоматически выбрать в текущей директории все нужные файлы по расширению, а также папки src и lib.  

Заархивировать переданные файлы в архив с заданным выше именем.  
Переместить архив по пути заданном выше. Если такой папки не существует - создать ее.  
Отчитаться об успехе операции.  

## Листинг кода
```
echo hello world
```