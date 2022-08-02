---
title: Хостинг и файлообменники
date: 2020-07-28T01:34:10+03:00
modified: 2022-08-02T10:23:45+03:00
tags: web
comments: false
redirect_from: '[../coding/hosting-cms]'
---

{% comment %}
redirect_from:
 -/coding/hosting-cms
 -/coding/hosting-cms/
{% endcomment %}

Для создания сайта практически необходимо использовать какие либо вспомогательные инструменты. И если подобрать их правильно, то создание сайта станет удовольствием вместо постоянных мучений с настройкой разрешений на файлы. Да, я пытаюсь намекнуть на статические сайты. Мне они нравятся, поэтому конструкторы статических сайтов будут представлены во второй главе. Здесь опубликую список CMS которые я использую или хочу попробовать.   

* Содержание
{:toc}


## Хостинг для статики  
{: #static }  

- [GitHub pages](http://pages.github.com) хостинг для документации. Домен третьего уровня user.github.io или можно подключить свой. Раздает статику или  преобразует markdown в html через Jekyll cms
- [https://habr.com/ru/post/251797/](https://web.archive.org/web/20210828015650/https://habr.com/ru/post/251797/) альтернативы narod.ru 
- любой хостинг для [php](#php)
- Netlify. Хостинг для headless cms с личным CDN и жирным API
- GitLab. Хостинг для git-репозиториев, так же как и гитхаб позволяет сделать веб-сайт с доками, ну или скачать репо
* Vercel
* neocites. Конструктор простых сайтов, можно залить html. Дают домен третьего уррвня
* jsDelivr. CDN для раздачи javascript. умеет шарить файлы из github

## Для картинок
{: #images }

- <http://vfl.ru/> - хостинг картинок
- fastpic
- telegra.ph - предназначен для написания статей, туда можно вставить картинку/аудио/видео и получить прямую ссылку. Также есть бот @telegraph_media_uploader
- etlgr.io aka @etlgr_bot бот принимает емейлы в телеграм, которые также можно посмотреть в вебе, ну и скачать вложения. Тестовые файлы загружены 20220802: [картинка 500кб](https://etlgr.me/attachments/ccaa64e98ed57093cfcee59bba62f95173fad2816c0edcc378977c732e44d60e),
[Аудио 9МБ](https://etlgr.me/attachments/ae1f38c7df5b190dbe611607ac59fbdd6c5fcb434413c1e209932a2cb4673f18)
- Telegram. Создатпь приватный канал и загрузить туда что угодно размером до 2000 Мб
- Github Pages. загрузить в репо как файл, распространять через raw.githubusercontent.com или через свой сайт user.github.io
- Github Pages CDN. Загрузить перетягиванием при редактировании в браузере markdown-файла. Пример от 2021-04-05: <a href="https://user-images.githubusercontent.com/17731587/113583782-c0140200-9632-11eb-9c59-1596155e5ac1.mp4">котик играет с цветком</a>



## Для файлов  
{: #files }

- Github. Тут можно и репо скачать, и релизы выкладывать и даже свой сайт сделать. Бонусом контроль версий
- tlgur бот. Скидываешь этому телеграм боту файл - он выдает прямую ссылку на скачивание. При переходе по ссылке файл будет качается напрямую с серверов телеги, а бот просто проксирует трафик через себя
- zippyshare - немного странный файлообменник, похожий на скамный letibit (юзает лакипатчер)
- <http://www.youtransfer.io/> - selfhosted клон сайта wetransfer
- https://catbox.moe/ - 200мб, прямая ссылка, ограничение скорости
- [Storj](https://www.storj.io/) - дешевое файлохранилище с хорошим api. Поддерживается программой transfer.sh

## мейнстрим файлохранилище
- Google drive. Бесплатно 15 Гб, можно делать прямые ссылки, параноидальная проверка на вирусы при каждом скачивании. Предпросмотр видео через плеер как в ютубе 
- onedrive
- yandex disk. 
- mega.nz
- ionos.de aka 1und1



## селфхост
{: #selfhost }

Можно у себя на компе запустить сайт, а в интернет отдавать его сервис-прокладку. Если есть белый ip-адрес, ко такие сервисы не нужны
- <https://ngrok.com/> - самый популярный у кулхацкеррв метод публикации своих локальных проектов в большой интернет
- hostyourself.cc
- <http://nginx.org/ru/docs/beginners_guide.html>
- <http://localtunnel.me/>?
- http://localhost.run/>?
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/tutorials/share-new-site/)?
- хз что это: 
  - <https://localxpose.io/> 
  - <https://pagekite.net/> 
  - <http://serveo.net/> 
  - <https://tunnelto.dev/>

 
## для php 
{: #php }
- <http://ho.ua>
- <http://beget.ru>

## SaaS для python
{: #python }

Все php хостинги работают из коробки: зеригился, залил, пользуйся. На других ЯП сложнее, нужно арендовать сервер vps и запускать там свою программу. SaaS нужны чтобы захостить сайт или приложение и не запариваться с настройкой сервера. SaaS - software as a service, т.е ты платишь не за аренду сервера, а за то что его настроят вместо тебя
- heroku
- [Netlify](https://www.netlify.com/)

## для vps
- ho.ua
- aws
- veesp




## Как поделиться большим файлом

Расширить жирный файл - это современная проблема и она требует современных решений

## Расшарить по локалке
* <https://www.resilio.com/individuals/> Resilio Sync - файловая система в bittorrent
* qBitTorrent + Flud. Нужно саздать .torrent файл на компе
* Поднять samba-сервер на ПК с Windows 
* totalcmd wifi transfer plugin - плагин для телефона, поднимает http и WebDAV, удобен в использовании, легкий
* <https://hostyoself.com>

## Файлообменники
* <http://FEX.NET>
* <https://www.sharedrop.io>
* <https://toffeeshare.com>
* <https://takeafile.com/>
* Vk <https://vkdisk.ru/about/>
* 4pda.to - даёт практически прямые ссылки, но только для авторизованных пользователей
* androidfilehost - хостинг для прошивок

## p2p
- Sync by Resillio
- WebRTC + bitTorrent announcement server <https://t.me/zhovner_hub/1608>


## Blacklist
Тут про плохие сервисы, которые на первый взгляд кажутся надежными. Сюда не входят явно варезные depisitfiles, letibit и тому подобная срань, их я даже не рассматриваю


## Selfhosted-файлохранилище  
{: #filehost-cms }

- owncloud
- [transfer.sh](https://github.com/dutchcoders/transfer.sh/) выгрузка в gdrive и другие сервисы через командную строку
- [список](https://github.com/awesome-selfhosted/awesome-selfhosted#file-transfer---single-click--drag-n-drop-upload)

## Смотри также:
- на сайте есть статья про хостинг для сайта
- и про хостинг для картинок
