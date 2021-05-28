---
layout: default
comments: true
modified: 2021-01-04T20:44:23+02:00
---

Собирает все h1-h6 в статье и делает на них ссылки

[TOC]


# Для тестов
## Hello world!
[LoL](/beta)  
[Google](http://google.com)

1 палка слева

|<img width="1024px" height="0px" />Заголовок типа
-|-
| А тут подзаголовок

2 палка справа 

<img width="1024px" height="0px" />Заголовок типа |
-|-
А тут подзаголовок | 

3 заголовок - картинка

|<img width="1024px"/>
-|-
| А тут подзаголовок

4 без заголовка

|
-|-
|А тут подзаголовок

5 двойное обознгачение

|
-|-
|А тут подзаголовок1
-|-:
|А тут подзаголовок2

6 без верхней палки

-|-
|А тут подзаголовок

# 6.1 без заголовка и по центру

|Таблица 1 столбец с центровкой контента
|:-:
|без заголовка и с простым синтаксисом. Хотел сделать по центру, но както не получилось. без заголовка и с простым синтаксисом. хехе


6.2 без заголовка, по центру и палка справа...

|без заголовка
|по центру и с простым синтаксисом, плюс только одна колонка  
{: style="text-align: center"}

7 без нижней палки

|
-|-
А тут подзаголовок

8 без верхней палки и по центру


:-:|
А тут подзаголовок <br><img width="1024px"/> |

9 без палки

:-:
А тут подзаголовок <br><img width="1024px"/> |

10 без палок

:-:
А тут подзаголовок <br><img width="1024px"/>

11 вернул палки

|:-:|
|А тут подзаголовок|

11 палки и картинка через перенос строки

|:-:|:-:|
|**А тут подзаголовок**<br><img width="1024px"/>|





Контент

|Заголовок типа<br><img width="1024px"/>
:-:|-
| А тут подзаголовок


***


[![][logo]<br>**Кино**](./kino.md)   | [![][logo]<br>**Софт**](./soft.md)
:-:|:-:
[![][logo]<br>**Музыка**](./music.md)| [![][logo]<br>**Видео**](./video.md)
[![][logo]<br>**Аудио**](./audio.md) | [![][logo]<br>**Картинки**](./images.md) 
[![][logo]<br>**Книги**](./books.md) | [![][logo]<br>**и многое другое**](#other)
<img width="512px"/> | <img width="512px"/>

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Текст заголовка логотипа 2"

***


***

табл 0

[![][logo]<br>**Кино**](./kino.md)   | [![][logo]<br>**Софт**](./soft.md)
:-:|:-:
[![][logo]<br>**Музыка**](./music.md)| [![][logo]<br>**Видео**](./video.md)
[![][logo]<br>**Аудио**](./audio.md) | [![][logo]<br>**Картинки**](./images.md) 
[![][logo]<br>**Книги**](./books.md) | [![][logo]<br>**и многое другое**](#other)
<img width="512px"/> | <img width="512px"/>

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Текст заголовка логотипа 2"

***

табл 1
привет [![logo]](kino.md), как твои дела?

[![logo]<br>**Кино**](./kino.md)   | [![][logo]<br>**Софт**](./soft.md)
:-:|:-:
[![logo]<br>**Музыка**](./music.md)| [![][logo]<br>**Видео**](./video.md)
[![logo]<br>**Аудио**](./audio.md) | [![][logo]<br>**Картинки**](./images.md) 
[![logo]<br>**Книги**](./books.md) | [![][logo]<br>**и многое другое**](#other)
<img width="512px"/> | <img width="512px"/>

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Текст заголовка логотипа 2"

***
***

конец статьи

***
<p width="100%">
<a href="#" style="font-size: 1em; padding: 0.5em 1.5em; white-space: normal; color: #fff; background-color: #4ba3e2; border-color: #2e6da4; font-family: sans-serif; display: inline-block; margin-bottom: 0; font-weight: 400; line-height: 1.42857143; text-align: center; vertical-align: middle; touch-action: manipulation; cursor: pointer; user-select: none; background-image: none; border: 1px solid transparent; border-radius: 4px; text-decoration: none; box-sizing: border-box;">Попробуй быструю авторизацию</a>
</p>




Название | ссылки
-|-
Строка первая | ссылка 2
{: style="width:100%;display:table;"}
