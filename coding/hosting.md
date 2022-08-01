---
title: Хостинг и файлообменники
date: 2020-07-28T01:34:10+03:00
modified: 2021-08-25T11:37:03+03:00
tags: web
comments: false
redirect_from: 
  - ../coding/hosting-cms
---
<video controls="controls" width="300px" src="https://user-images.githubusercontent.com/17731587/113583782-c0140200-9632-11eb-9c59-1596155e5ac1.mp4">видео с котиком</video>

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
- [https://habr.com/ru/post/251797/](https://web.archive.org/web/20210828015650/https://habr.com/ru/post/251797/)
- любой хостинг для [php](#hosting-php)
- Netlify
- GitLab
* Vercel
* neocites

### Для картинок и файлов
{: #images }

* <http://vfl.ru/> - хостинг картинок
* fastpic
* telegra.ph
* etlgr
* telegram (приватные каналы)
* github pages
* - Загрузить на cdn от github pages перетягиванием при редактировании в браузере markdown-файла. Пример от 2021-04-05: <a href="https://user-images.githubusercontent.com/17731587/113583782-c0140200-9632-11eb-9c59-1596155e5ac1.mp4">скачать</a>



### Для файлов
- github
- tlgur бот
- zippyshare (юзает лакипатчер)
- ...



### селфхост
Можно у себя на компе запустить сайт, а в интернет отдавать его сервис-прокладку. Если есть белый ip-адрес, ко такие сервисы не нужны
- <https://ngrok.com/>
- hostyourself.cc
- <http://nginx.org/ru/docs/beginners_guide.html>
- <http://localtunnel.me/>?
- http://localhost.run/>?
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/tutorials/share-new-site/)?
- хз что это: <https://localxpose.io/> <https://pagekite.net/> <http://serveo.net/> <https://tunnelto.dev/>

 
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




## **Как поделиться большим файлом**

Расширить жирный файл - это современная проблема и она требует современных решений

## Железячные способы
* <https://www.resilio.com/individuals/> Resilio Sync - файловая система в bittorrent
* qBitTorrent + Flud. Нужно саздать .torrent файл на компе
* Поднять samba-сервер на ПК с Windows 
* total commander wifi share плагин для телефона
* <https://hostyoself.com>

## Проверенно рабочие сервисы
* <http://FEX.NET>
* <https://www.sharedrop.io>
* <https://toffeeshare.com>
* <https://takeafile.com/>
* Vk <https://vkdisk.ru/about/>
*

## p2p
- Sync by Resillio
- WebRTC + bitTorrent announcement server <https://t.me/zhovner_hub/1608>


## Blacklist
Тут про плохие сервисы, которые на первый взгляд кажутся надежными. Сюда не входят явно варезные depisitfiles, letibit и тому подобная срань, их я даже не рассматриваю

## Смотри также:
- на сайте есть статья про хостинг для сайта
- и про хостинг для картинок
