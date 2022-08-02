---
title: Хостинг и файлообменники
date: 2020-07-28T01:34:10+03:00
modified: 2022-08-02T11:29:36+03:00
tags: web
comments: false
redirect_from: '[../coding/hosting-cms]'
---

- Содержание
{:toc}

Мне нравится идея статичных сайтов, но не нравится что их тяжело разместить в  интернете. Здесь приведены списки сервисов и програм которые помогают публиковать наше творчество

## Хостинг для статики  
{: #static }  

- [GitHub Pages](http://pages.github.com) - хостинг для документации. Домен третьего уровня user.github.io или можно подключить свой. Раздает статику или  преобразует markdown в html через Jekyll cms
- [https://habr.com/ru/post/251797/](https://web.archive.org/web/20210828015650/https://habr.com/ru/post/251797/) альтернативы narod.ru 
- Netlify. Хостинг для headless cms с личным CDN и жирным API
- GitLab. Хостинг для git-репозиториев, так же как и гитхаб позволяет сделать веб-сайт с доками, ну или скачать репо
- Vercel
- neocites. Конструктор простых сайтов, можно залить html. Дают домен третьего уррвня
- jsDelivr. CDN для раздачи javascript. умеет шарить файлы из github
- любой хостинг для [php](#php)


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
- подойдёт тебе любой [сервис для статики] (#static)



## Для файлов с прямыми ссылками. 
{: #files }

- Github. Тут можно и отдельный файл скачать и весь репо целиком, и релизы выкладывать и даже свой сайт сделать. Бонусом идёт контроль версий
- tlgur бот. Скидываешь этому телеграм боту файл - он выдает прямую ссылку на скачивание. При переходе по ссылке файл будет качается напрямую с серверов телеги, а бот просто проксирует трафик через себя
- zippyshare - немного стремный файлообменник, похожий на скамный letibit (юзает лакипатчер)
- https://catbox.moe/ - 200мб, прямая ссылка, ограничение скорости. Внешне очень похож на [pomf.se](https://www.pomf.se/), который сейчас закрыт, но работают [клоны](https://status.uguu.se/clones.html) 
- [Uguu.se](https://uguu.se/) - временное хранение файлов от автора pomf.se. Исходники: [github](https://github.com/nokonoko/Uguu)
- [Storj](https://www.storj.io/) - дешевое файлохранилище с хорошим api. Бесплатно 250гб. Поддерживается программой transfer.sh


## Облачные файл-менеджеры
{: #mainstreem }
- <http://FEX.NET> легкий, быстрый, дешёвый. От создателей ex.ua
- Google drive. Бесплатно 15 Гб, можно делать прямые ссылки, параноидальная проверка на вирусы при каждом скачивании. Предпросмотр видео через плеер как в ютубе 
- onedrive. Удобная интеграция в Microsoft Windows
- yandex disk. Ррсиянский аналог
- mega.nz криптуется, тяжёлые веб страницы, 50гб бесплатно
- ionos.de aka 1und1, 5гб бесплатно, но нужно поморочиться


## Сервисы шлюз за NAT
{: #selfhost }

Можно у себя на компе запустить сайт, а в интернет отдавать его через сервис-прокладку. Если есть белый ip-адрес, то такие сервисы не нужны
- <https://ngrok.com/> - самый популярный у кулхацкеррв метод публикации своих локальных проектов в большой интернет
- hostyourself.cc - ради прикола запущенный сайт. Ты ему папку с html-страницами, а он проксирует все запросы на твой комп. В тестах показал себя нестабильно
- <http://localtunnel.me/> ?
- http://localhost.run/> ?
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/tutorials/share-new-site/) ?
- хз что это: 
  - <https://localxpose.io/> 
  - <https://pagekite.net/> 
  - <http://serveo.net/> 
  - <https://tunnelto.dev/>
- windscribe позволяет пробросить порты через себя

 
## Для php  
{: #php }
- <http://ho.ua>
- <http://beget.ru>

## SaaS для python
{: #python }

Все php хостинги работают из коробки: зеригился, залил, пользуйся. На других ЯП сложнее, нужно арендовать сервер vps и запускать там свою программу. SaaS нужны чтобы захостить сайт или приложение и не запариваться с настройкой сервера. SaaS - software as a service, т.е ты платишь не за аренду сервера, а за то что его настроят вместо тебя
- heroku
- [Netlify](https://www.netlify.com/)

## для vps
- ho.ua дешевые сервера в украине
- aws. самая большая доля рынка виртуальных серверов
- veesp. юзает zaborona.help




## Расшарить по локалке
- <https://www.resilio.com/individuals/> Resilio Sync - файловая система в bittorrent
- qBitTorrent + Flud. Нужно саздать .torrent файл на компе
- Поднять samba-сервер на ПК с Windows 
- totalcmd wifi transfer plugin - плагин для телефона, поднимает http и WebDAV, удобен в использовании, легкий
- скорее всего будут работать [p2p обменники](#p2p)

## Файлообменники drag-n-drop
- <http://FEX.NET> 
- <https://www.sharedrop.io>
- <https://toffeeshare.com>
- <https://takeafile.com/>
- <https://github.com/awesome-selfhosted/awesome-selfhosted#file-transfer---single-click--drag-n-drop-upload> 
- <https://wetransfer.com/> - 2гб бесплатно, хранится неделю. очень быстрые сервера
- <https://massive.io/pricing/> - максимальная скорость пердачи, но платно



## Обмен файлами P2P (без серверов)  
{: #p2p }

- Sync by Resillio - от создателей BitTorrent
- WebRTC + bitTorrent announcement server <https://t.me/zhovner_hub/1608>
- <https://www.sharedrop.io/>

## не хостинг ваше 
- 4pda.to - даёт практически прямые ссылки, но только для авторизованных пользователей
- 4qr.xyz - хранить данные в ссылке
- YouTube video file storage.
- androidfilehost - хостинг для прошивок

## Серверный софт для раздачи файлов
{: #server-soft }

- [Nginx](http://nginx.org/ru/docs/beginners_guide.html) - самый навороченный веб-сервер
- owncloud
- [transfer.sh](https://github.com/dutchcoders/transfer.sh/) выгрузка файлов в gdrive и другие сервисы через командную строку. [Демо](https://transfer.sh/). Тест 20220802: [программа 7Мб](https://transfer.sh/ePEtqU/carnac.2.3.13.zip), [прямая ссылка](https://transfer.sh/get/ePEtqU/carnac.2.3.13.zip)
- <http://www.youtransfer.io/> - selfhosted клон сайта wetransfer. Вроде неплохой
- [список еще](https://github.com/awesome-selfhosted/awesome-selfhosted#file-transfer---single-click--drag-n-drop-upload)
- synology - лидер в коммерческом секторе. говорят надежно. но нужно купить сервак и поставить гдето в кладовке
