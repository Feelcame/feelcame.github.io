---
title: Хостинг и файлообменники
date: 2020-07-28T01:34:10+03:00
modified: 2021-08-25T11:37:03+03:00
tags: web
comments: false
redirect_from: 
  - /coding/hosting-cms
---


{% comment %}
redirect_from:
 -/coding/hosting-cms
 -/coding/hosting-cms/
{% endcomment %}

Для создания сайта практически необходимо использовать какие либо вспомогательные инструменты. И если подобрать их правильно, то создание сайта станет удовольствием вместо постоянных мучений с настройкой разрешений на файлы. Да, я пытаюсь намекнуть на статические сайты. Мне они нравятся, поэтому конструкторы статических сайтов будут представлены во второй главе. Здесь опубликую список CMS которые я использую или хочу попробовать.   

* Содержание
{:toc}


## Хостинг

### Для статики
- GitHub pages
- <https://habr.com/ru/post/251797/>
- любой хостинг для [php](#hosting-php)
<details markdown="1">
- GitLab
* Vercel
* neocites
</details>

### Для картинок и файлов
{: #images }

* <http://vfl.ru/> - хостинг картинок
* fastpic
* telegra.ph
* etlgr
* telegram (приватные каналы)
* github pages

### Для файлов
- github
- tlgur бот
- zippyshare (юзает лакипатчер)
- ...

### селфхост
Можно у себя на компе запустить сайт, а в интернет отдавать его сервис-прокладку. Если есть белый ip-адрес, ко такие сервисы не нужны
- ngrock
- localhost.run
- hostyourself.cc
- <http://nginx.org/ru/docs/beginners_guide.html>
 
### для php 
{: #hosting-php}
- <http://ho.ua>
- <http://beget.ru>

### SaaS для python
Все php хостинги работают из коробки: зеригился, залил, пользуйся. На других ЯП сложнее, нужно арендовать сервер vps и запускать там свою программу. SaaS нужны чтобы захостить сайт или приложение и не запариваться с настройкой сервера. SaaS - software as a service, т.е ты платишь не за аренду сервера, а за то что его настроят вместо тебя
- heroku
- [Netlify](https://www.netlify.com/)

### для vps
- ho.ua
- aws
- veesp

