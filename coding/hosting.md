---
title: Хостинг и файлообменники
date: 2020-07-28T01:34:10+03:00
modified: 2022-08-07T14:03:33+03:00
tags: web
comments: false
redirect_from: '[../coding/hosting-cms]'
---

Мне нравится идея статичных сайтов, но не нравится что их тяжело разместить в  интернете. Здесь приведены списки сервисов и програм, которые помогают публиковать наше творчество

- Содержание
{:toc}


## Хостинг статичных сайтов  
{: #static }  

- [GitHub Pages](http://pages.github.com) - хостинг для документации. Домен третьего уровня user.github.io или кастомный. Раздает статику или преобразует markdown в html через Jekyll cms
- [Netlify](https://app.netlify.com). Хостинг для headless cms с личным CDN и жирным API. 
- [Netlify Drop](https://app.netlify.com/drop) - захостят у себя твой статичный сайт без регистрации и смс. Просто перетяни файлы html в окно браузера
- [GitLab](https://gitlab.com/). Хостинг для git-репозиториев, так же как и гитхаб позволяет сделать веб-сайт с доками, ну или скачать репо
- [neocites](https://neocities.org/). Конструктор простых сайтов, можно залить html. Дают домен третьего уррвня
- [jsDelivr](https://www.jsdelivr.com/). CDN для раздачи javascript. умеет шарить файлы из github
- <https://codeberg.page/> - тут можно хранить документацию для git-проектов
- Vercel - what?
- [https://habr.com/ru/post/251797/](https://web.archive.org/web/20210828015650/https://habr.com/ru/post/251797/) альтернативы narod.ru 
- Также можно использовать любой [хостинг для php](#php)


**Конструкторы**
- [tilda.cc](https://tilda.cc)
- [telegra.ph](https://telegra.ph/)
- Смотри больше конструкторов в [статье про CMS](./cms.md)

## Для картинок
{: #images }

- <http://vfl.ru/> - хостинг картинок
- fastpic
- [telegra.ph](https://telegra.ph/) - предназначен для написания статей, туда можно вставить картинку/аудио/видео и получить прямую ссылку. Также есть бот @telegraph_media_uploader
- [etlgr.io](https://etlgr.io/) aka @etlgr_bot бот принимает емейлы в телеграм, которые также можно посмотреть в вебе, ну и скачать вложения. Тестовые файлы загружены 20220802: [картинка 500кб](https://etlgr.me/attachments/ccaa64e98ed57093cfcee59bba62f95173fad2816c0edcc378977c732e44d60e),
[Аудио 9МБ](https://etlgr.me/attachments/ae1f38c7df5b190dbe611607ac59fbdd6c5fcb434413c1e209932a2cb4673f18)
- [Telegram](https://t.me). Создатпь приватный канал и загрузить туда что угодно размером до 2000 Мб
- Github Pages. загрузить в репо как файл, распространять через raw.githubusercontent.com или через свой сайт user.github.io
- Github Pages CDN. Загрузить перетягиванием при редактировании в браузере markdown-файла. Пример от 2021-04-05: <a href="https://user-images.githubusercontent.com/17731587/113583782-c0140200-9632-11eb-9c59-1596155e5ac1.mp4">котик играет с цветком</a>
- подойдёт также любой [сервис хостинга статики](#static)


## Для web-приложений  
{: #php }

**PHP**
- <http://ho.ua>
- <http://beget.ru>


**SaaS для python или golang**
- [heroku](https://www.heroku.com/)
- [Netlify](https://www.netlify.com/)

**для vps**
- ho.ua дешевые сервера в украине
- aws. самая большая доля рынка виртуальных серверов
- veesp. юзает zaborona.help


## Серверный софт для раздачи файлов
{: #server-soft }

- [Nginx](http://nginx.org/ru/docs/beginners_guide.html) - самый навороченный веб-сервер
- owncloud, nextcloud
- [transfer.sh](https://transfer.sh/) - выгрузка файлов в gdrive и другие сервисы через командную строку. 
  [Исходники](https://github.com/dutchcoders/transfer.sh/). 
- [youtransfer](http://www.youtransfer.io/) - selfhosted клон сайта wetransfer. Вроде неплохой
- [SPRUT.io](https://sprut.io/) - это полнофункциональный файловый менеджер от создателей beget.com, который позволит заменить привычный FTP-клиент и удобно работать с файлами на сервере прямо из браузера с любого места. [Статья на хабре](https://habr.com/ru/company/beget/blog/277449/), [Исходники](https://github.com/LTD-Beget/sprutio) 
- [h5ai](https://larsjung.de/h5ai/) - отображает структуру каталогов сайта на php как файловый менеджер с деревом и предпросмотром. [Демо](https://larsjung.de/h5ai/demo/empty%20folder/), [Исходники](https://github.com/lrsjng/h5ai) 

**не проверено**
- https://www.seafile.com/ 
- FreeNAS - операционнка для создания локального хранилища данных
- synology - лидер в коммерческом секторе. говорят надежно. но нужно купить сервак и поставить гдето в кладовке
- https://www.sparkleshare.org/ https://github.com/hbons/Dazzle File sync.Version history. Self hosted. Client side encryption. Free and Open Source
- https://www.filecloud.com/developer/
- https://www.openstack.org/software/
- [список еще](https://github.com/awesome-selfhosted/awesome-selfhosted#file-transfer---single-click--drag-n-drop-upload)


## Селфхост. Проложить тоннель за NAT
{: #selfhost }

Можно у себя на компе запустить сайт, а в интернет отдавать его через сервис-прокладку. Если есть белый ip-адрес, то такие сервисы не нужны
- [ngrok](https://ngrok.com/) - самый популярный у кулхацкеррв метод публикации своих локальных проектов в большой интернет
- [hostyoself](https://hostyoself.com/) - ради прикола запущенный сайт. Ты ему папку с html-страницами, а он проксирует все запросы на твой комп. В тестах показал себя нестабильно. [Сорцы](https://github.com/schollz/hostyoself)

**не проверено**
- <http://inlets.dev> - платный аналог ngrok. Когда-то был открытым проектом: [гитаб](https://github.com/alexellis/inlets)
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/tutorials/share-new-site/) ?
- <http://localtunnel.me/> ?
- <http://localhost.run/> ?
- <https://localxpose.io/> ? 
- <https://pagekite.net/> ?
- <http://serveo.net/> ?
- <https://tunnelto.dev/> ?
- windscribe позволяет пробросить порты через себя
- [beaker browser](https://beakerbrowser.com/) - p2p браузер. говорят использует новый протокол [hypercore](https://hypercore-protocol.org/). не проверял

Если выход в мир нужен для удаленного управления - то лучше использовать [приватный впн](./vpn.md)

Смотри также: [передача файлов без сервера p2p](#p2p)

## Облачные файл-менеджеры  
{: #cloudstorege }
- [**Fex.net**](http://fex.net) - легкий, быстрый, дешёвый. Есть функция быстрого обмена файлами без регистрации. От создателей ex.ua
- [**Github**](http://github.com). Тут можно и отдельный файл скачать и весь репо целиком, и релизы выкладывать и даже свой сайт сделать. Бонусом идёт контроль версий
- [**Storj**](https://www.storj.io/) - дешевое файлохранилище с хорошим api. Бесплатно 250гб. Поддерживается программой transfer.sh. 
  Тест 20220802: 
  [фильм 870мб](https://link.storjshare.io/s/jxnnsqrzeqxvfinajdd5tqek6kla/feel-soft/Matrica_voskreshenie_TEVAS.mp4) +
  [прямая ссылка](https://link.storjshare.io/s/jxnnsqrzeqxvfinajdd5tqek6kla/feel-soft/Matrica_voskreshenie_TEVAS.mp4?download=1)
- [raysync](https://www.raysync.io/pricing/) - 100гб бесплатно, пока не проверял
- [massive.io](https://massive.io/pricing/) - максимальная скорость пердачи, но платно ($0.25/гб). не проверял

**мейнстрим**
- Google drive - Бесплатно 15 Гб, можно делать прямые ссылки, параноидальная проверка на вирусы при каждом скачивании (до 15 секунд). Предпросмотр видео через плеер как в ютубе 
- onedrive - Удобная интеграция в Microsoft Windows. проверка на вирусы
- yandex disk - Русиянский аналог гдрайв
- mega.nz - криптуется, тяжёлые веб страницы, 50гб бесплатно
- ionos.de aka 1und1 - 5гб бесплатно, но нужно поморочиться


## Файлообменники "drag-n-drop"  
{: #files }

- [**tlgur**](http://t.metlgurbot) - Скидываешь этому телеграм-боту файл, а он выдает прямую ссылку на скачивание. При переходе по ссылке файл будет качаться напрямую с серверов телеги, а бот просто проксирует трафик через себя. По состоянию на 20220806 сервис не работает
- [**zippyshare**](https://www.zippyshare.com/) - 500мб/файл, безлим места, как долго хранится неизвестно. немного стремный файлообменник, похожий на скамн. юзает лакипатчер. Не открывается через впн
  Тест от 20220802: 
  [программа 7мб](https://www5.zippyshare.com/v/lYHxyKiz/file.html) + 
  [прямая ссылка](https://www5.zippyshare.com/d/lYHxyKiz/11/ShareX-14.1.0-setup.exe)
- [**catbox.moe**](https://catbox.moe/) - 200мб, прямая ссылка, ограничение скорости. Внешне очень похож на pomf.se. 
  Тест от 20220802: 
  [программа в архиве 72Мб](https://files.catbox.moe/mufkwf.zip), 
  [картинка 60кб](https://files.catbox.moe/fk9c1e.jpg)
- [www.pomf.se и его клоны](https://status.uguu.se/clones.html) - дает прямые ссылки. Но проект сейчас закрыт, автор дает список клонов . Исходники: [github](https://github.com/nokonoko/Uguu)
- [**transfer.sh**](https://transfer.sh/) - открытый проект. 
  Тест 20220802: 
  [программа 7Мб](https://transfer.sh/ePEtqU/carnac.2.3.13.zip), 
  [прямая ссылка](https://transfer.sh/get/ePEtqU/carnac.2.3.13.zip)
- [AnonFiles](https://anonfiles.com/). Бесплатно до 20ГБ. Ограниченная скорость выгрузки. 
  Тест 20220807: 
  [фильм, 400мб](https://anonfiles.com/wbD0632cy6), 
  [гифка, 40кб](https://anonfiles.com/7d657e20y6/136_gif) + 
  [прямая ссылка](https://cdn-146.anonfiles.com/7d657e20y6/0191efb0-1659825591/136.gif)
- Друзья AnonFiles. Все до 20ГБ. Тестирую все пачкой 20220807 (картинки): [filechan.org](https://filechan.org/Rd84782by5/1482167_jpg), [letsupload.cc](https://letsupload.cc/q8957f26y8/1466282490_jpg), [share-online.is](https://share-online.is/u2967220y8/4-169_jpg), [megaupload.nz](https://megaupload.nz/Jd977621yb/1481994_jpg) 
  
**Времменное хранение**
- [FEX.NET](http://fex.net) - от создателей ex.ua. Можно без регистрации делиться файлами (200гб, 7дней)
- [wetransfer](https://wetransfer.com/) - временное хранение файлов (2гб, 7дней). очень быстрые сервера. встраивается в почтовик
- [LitterBox](https://litterbox.catbox.moe/) - временное хранение файлов (1гб, 3дня) от автора catbox.moe
- [Uguu.se](https://uguu.se/) - временное хранение файлов (128мб, 48ч) от автора pomf.se




## Обмен файлами P2P без серверов  
{: #p2p }
- [Sync by Resilio](https://www.resilio.com/individuals/) - от создателей BitTorrent. Синхронизация файлов локально или через инет
- qBitTorrent + Flud. Нужно создать .torrent файл на компе
- Поднять samba-сервер на ПК с Windows. Расширить в инет через VPN, ну или ngrok. Смотри выше 
- [TotalCmd Wifi Transfer Plugin](https://www.ghisler.com/wifitools.htm) - плагин для телефона, поднимает http и WebDAV, удобен в использовании, легкий. На приемной стороне WebDAV plugin for Total Commander, WinSCP или просто проводник. Только локалка
- [ShareDrop](https://www.sharedrop.io/) - аналог эпловского airDrop, но без вендорлока. Работает на WebRTC и HTML5. Удобный и работает стабильно. Скорость с телефона на телефон 1.6Мб. Сигналинг сервер - Firebase. [Исходники](https://github.com/szimek/sharedrop)
- WebRTC + bitTorrent announcement server <https://t.me/zhovner_hub/1608>, Исходники библиотеки: [гитхаб](https://github.com/subins2000/p2pt)


## Специфичные хостинги
- [4pda.to](https://4pda.to/forum/) - даёт практически прямые ссылки, но только для авторизованных пользователей. Сюда можно заливать программы и картинки.
  [Пост с программой](https://4pda.to/forum/index.php?showtopic=807699&st=100#entry113968170), 
  [Страница скачивания](https://4pda.to/forum/dl/post/25262479/GlassWire_v3.0.380r_b380_K.apk), 
  [Ссылка на скачивание](https://4pda.to/forum/index.php?act=attach&id=25262479&dlsess=f25a88a834089c982d6c5a45da24fa6b),
  [В результате скачалось с CDN](https://ds-blobs-2.cdn.devapps.ru/25262479/GlassWire_v3.0.380r_b380_K.apk?s=0025d72ac1b057e262f17b29000000008ae1a25e9b768dd558e34a2ea1621a89)
- [4qr.xyz](http://4qr.xyz) + [tinyurl.com](http://tinyurl.com) - хранить данные в ссылке. Если сделать ссылку с контентом "data:base64", то можно расшарить любой файл. Тест: [картинка 8кб](https://tinyurl.com/24ejarg4)
- [androidfilehost](https://androidfilehost.com/) - хостинг для прошивок. Тест [архив прошивки, 300мб](https://androidfilehost.com/?fid=24269982086998189) (файл загружен в 2015, проверен в 2022)
- YouTube video file storage.


## Полезные ссылки
- <https://www.stackfield.com/blog/8-secure-cloud-storage-services-68>
- <https://toffeeshare.com> - не проверен
- <https://takeafile.com/> - не проверен
- <https://github.com/awesome-selfhosted/awesome-selfhosted#file-transfer---single-click--drag-n-drop-upload>
