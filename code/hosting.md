---
title: Хостинг и файлообменники
date: 2020-07-28T01:34:10+03:00
modified: 2022-08-21T15:29:20+03:00
tags: web
comments: 112
---

Мне нравится идея статичных сайтов, но не нравится что их тяжело разместить в  интернете. Здесь приведены списки сервисов и програм, которые помогают публиковать наше творчество

- Содержание
{:toc}


## Хостинг статичных сайтов  
{: #static }  

- [GitHub Pages](http://pages.github.com) - хостинг для документации. Домен третьего уровня user.github.io или кастомный. Раздает статику или преобразует markdown в html через Jekyll cms
- [neocites](https://neocities.org/). Конструктор простых сайтов, можно залить html. Дают домен третьего уррвня

**не проверено**  
- [Netlify](https://app.netlify.com). Хостинг для headless cms с личным CDN и жирным API. 
- [Netlify Drop](https://app.netlify.com/drop) - захостят у себя твой статичный сайт без регистрации и смс. Просто перетяни файлы html в окно браузера
- [GitLab](https://gitlab.com/). Хостинг для git-репозиториев, так же как и гитхаб позволяет сделать веб-сайт с доками, ну или скачать репо
- <https://pages.cloudflare.com/>
- <https://codeberg.page/> - тут можно хранить документацию для git-проектов
- Vercel - what?
- [https://habr.com/ru/post/251797/](https://web.archive.org/web/20210828015650/https://habr.com/ru/post/251797/) альтернативы narod.ru 
- Также можно использовать любой [хостинг для php](#php)

**CDN** - нужен для отказоустойчивости
- [jsDelivr](https://www.jsdelivr.com/). CDN для раздачи javascript. умеет шарить файлы из github


**Конструкторы**
- [tilda.cc](https://tilda.cc)
- [telegra.ph](https://telegra.ph/)
- Смотри больше конструкторов в [статье про CMS](./cms.md)

## Для картинок
{: #images }

- **Github Raw** и **Github Pages** - загрузить в репо как файл, распространять через raw.githubusercontent.com или через свой сайт user.github.io. Тест 20200101: 
  [картинка 3кб из репо](https://github.com/Feelcame/feelcame.github.io/raw/master/assets/img/favicon.png),
  [прямая ссылка](https://raw.githubusercontent.com/Feelcame/feelcame.github.io/master/assets/img/favicon.png),
  [картинка из pages](https://feelcame.github.io/assets/img/favicon.png){: target="_blank" }
- **Github user-images** - при редактировании в браузере markdown-файла на github, перетянуть в окно редактора картинку или видео. Тест 20210405: 
  [котик играет с цветком, видео 1.5МБ](https://user-images.githubusercontent.com/17731587/113583782-c0140200-9632-11eb-9c59-1596155e5ac1.mp4)
- [**telegra.ph**](https://telegra.ph/) - предназначен для написания статей, туда можно вставить картинку/аудио/видео и получить прямую ссылку. Также есть телеграм-бот [@mediauploader_bot](tg://resolve?domain=mediauploader_bot). Тест 20220819:
  [картинка 50кб, загружено через сайт](https://telegra.ph/file/b98d7d26e0cc07c21aec5.jpg),
  [сисюняшки 40кб, через бот](https://telegra.ph/file/e52aa7c9d0d0492fc254f.jpg)
- <https://fastpic.org/> - юзает на рутрекере
- <http://directupload.net> тоже на торрентах юзают. Тест: [картинка 1мб, 2011г](http://s14.directupload.net/images/110930/czej6dlt.png), [гифка 7мб, 2022г](https://s20.directupload.net/images/220911/ojn3m8ao.gif)
- <https://imageban.ru/> - с рутрекера. сервера в рашке
- <http://vfl.ru/> - хостинг картинок?
- fastpic - ?
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

## Селфхост  
{: #selfhost }
Если нужно надежное хранилище данных - лучше всего хостить их у себя. По крайней мере, это снижает шанс, что все файлы пропадут по глупости. Вот пример письма счастья от одного из провайдеров облачных хранилищ: "мы заметили что с вашего аккаунта не было активности в течении трех месяцев и поэтому удалили все ваши жизненно важные данные, восстановить их невозможно. с  любовью, команда сервиса xxxx.ru-диск"

## Серверный софт для раздачи файлов
{: #server-soft }

- [Nginx](http://nginx.org/ru/docs/beginners_guide.html) - самый навороченный веб-сервер
- owncloud, nextcloud
- [transfer.sh](https://transfer.sh/) - выгрузка файлов в gdrive, storj и другие сервисы через командную строку. 
  [Исходники](https://github.com/dutchcoders/transfer.sh/). 
- [youtransfer](http://www.youtransfer.io/) - selfhosted клон сайта wetransfer. Вроде неплохой
- [SPRUT.io](https://sprut.io/) - это полнофункциональный файловый менеджер от создателей beget.com, который позволит заменить привычный FTP-клиент и удобно работать с файлами на сервере прямо из браузера с любого места. 
  [Статья на хабре](https://habr.com/ru/company/beget/blog/277449/), 
  [Исходники](https://github.com/LTD-Beget/sprutio) 
- [h5ai](https://larsjung.de/h5ai/) - отображает структуру каталогов сайта на php как файловый менеджер с деревом и предпросмотром. [Демо](https://larsjung.de/h5ai/demo/empty%20folder/), [Исходники](https://github.com/lrsjng/h5ai) 

**не проверено**
- https://www.seafile.com/ 
- FreeNAS - операционнка для создания локального хранилища данных
- synology - лидер в коммерческом секторе. говорят надежно. но нужно купить сервак и поставить гдето в кладовке
- https://www.sparkleshare.org/ https://github.com/hbons/Dazzle File sync.Version history. Self hosted. Client side encryption. Free and Open Source
- https://www.filecloud.com/developer/
- https://www.openstack.org/software/
- [список еще](https://github.com/awesome-selfhosted/awesome-selfhosted#file-transfer---single-click--drag-n-drop-upload)


## Проложить тоннель за NAT
{: #nat-tonnel }

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

**Смотри также:**
- [передача файлов без сервера p2p](#p2p)
- [приватный впн](./vpn.md) - если выход в мир нужен для удаленного управления - то лучше использовать 


## Облачные файл-менеджеры  
{: #cloudstorege }
- [**Github Releases**](http://github.com) - тут можно и отдельный файл скачать и весь репо целиком, и релизы выкладывать и даже свой сайт сделать. Бонусом идёт контроль версий
- [**Storj**](https://www.storj.io/) - дешевое файлохранилище с хорошим api. Бесплатно 250гб. Поддерживается программой transfer.sh. 
  Тест 20220802: 
  [фильм 870мб](https://link.storjshare.io/s/jxnnsqrzeqxvfinajdd5tqek6kla/feel-soft/Matrica_voskreshenie_TEVAS.mp4) +
  [прямая ссылка](https://link.storjshare.io/s/jxnnsqrzeqxvfinajdd5tqek6kla/feel-soft/Matrica_voskreshenie_TEVAS.mp4?download=1)
- [raysync](https://www.raysync.io/pricing/) - 100гб бесплатно, пока не проверял
- [massive.io](https://massive.io/pricing/) - максимальная скорость пердачи, но платно ($0.25/гб). не проверял

**мейнстрим**
- [**Fex.net**](http://fex.net) - легкий, быстрый, дешёвый. Есть функция быстрого обмена файлами без регистрации. От создателей ex.ua
- Google drive - Бесплатно 15 Гб, можно делать прямые ссылки, параноидальная проверка на вирусы при каждом скачивании (до 15 секунд). Предпросмотр видео через плеер как в ютубе 
- onedrive - удобная интеграция в Microsoft Windows. проверка на вирусы
- yandex disk - русиянский аналог гдрайв
- mega.nz - криптуется, тяжёлые веб страницы, 50гб бесплатно
- ionos.de aka 1und1 - 5гб бесплатно, но нужно поморочиться
- <https://jino.ru/disk/> 20gb
- ukr.net 4gb
- files.fm - раздают через него вирусню, как то связан с рашкой

## Файлообменники "drag-n-drop"  
{: #files }

- [**Telegram**](https://t.me). Создатпь приватный канал и загрузить туда что угодно размером до 2000 Мб. Но нет прямых ссылок. И не абузоустойчиво. Тест 20210901: 
  [программа 1800мб](http://t.me/joinchat/monHIC4FPMQ2YmRi)
- [**tlgur**](http://t.me/tlgurbot) - Скидываешь этому телеграм-боту файл, а он выдает прямую ссылку на скачивание. При переходе по ссылке файл будет качаться напрямую с серверов телеги, а бот просто проксирует трафик через себя. Максимальный размер файла 20МБ. Работает нестабильно. Тест 20211201: 
  [apk 10mb](https://tlgur.com/d/g306JW64)
- [**zippyshare**](https://www.zippyshare.com/) - 500мб/файл, безлим места, как долго хранится неизвестно. Немного стремный файлообменник, похожий на скам. Прямых ссылок нет, а при скачивании через страницу навязчиво пытается перекинуть на рекламный сайт. Юзает автор лакипатчера. Не доступен через впн. Тест от 20220802: 
  [программа 7мб](https://www5.zippyshare.com/v/lYHxyKiz/file.html), 
  [прямая ссылка](https://www5.zippyshare.com/d/lYHxyKiz/11/ShareX-14.1.0-setup.exe), 
  [и еще одна прямая ссылка](https://www5.zippyshare.com/d/lYHxyKiz/2097155/ShareX-14.1.0-setup.exe)
- [**catbox.moe**](https://catbox.moe/) - 200мб, прямая ссылка, ограничение скорости. Внешне очень похож на pomf.se. Тест от 20220802: 
  [программа в архиве 72Мб](https://files.catbox.moe/mufkwf.zip), 
  [картинка 60кб](https://files.catbox.moe/fk9c1e.jpg)
- [AnonFiles](https://anonfiles.com/). Бесплатно до 20ГБ. Ограниченная скорость выгрузки. Тест 20220807: 
  [фильм, 400мб](https://anonfiles.com/wbD0632cy6), 
  [гифка, 40кб](https://anonfiles.com/7d657e20y6/136_gif) + 
  [прямая ссылка](https://cdn-146.anonfiles.com/7d657e20y6/0191efb0-1659825591/136.gif)
- Друзья AnonFiles. Все до 20ГБ. Тестирую все пачкой 20220807 (картинки): 
  [filechan.org](https://filechan.org/Rd84782by5/1482167_jpg), 
  [letsupload.cc](https://letsupload.cc/q8957f26y8/1466282490_jpg), 
  [share-online.is](https://share-online.is/u2967220y8/4-169_jpg), 
  [megaupload.nz](https://megaupload.nz/Jd977621yb/1481994_jpg) 
- [www.pomf.se и его клоны](https://status.uguu.se/clones.html) - дает прямые ссылки. Но проект сейчас закрыт, автор дает список клонов . Исходники: [github](https://github.com/nokonoko/Uguu)
- [transfer.sh](https://transfer.sh/) - открытый проект. Исходники смотри в разделе [#server-soft](#server-soft). Тест 20220802 (провален): 
  [программа 7Мб](https://transfer.sh/ePEtqU/carnac.2.3.13.zip), 
  [прямая ссылка](https://transfer.sh/get/ePEtqU/carnac.2.3.13.zip)

**Времменное хранение**
- [FEX.NET](http://fex.net) - от создателей ex.ua. Можно без регистрации делиться файлами (200гб, 7дней)
- [wetransfer](https://wetransfer.com/) - временное хранение файлов (2гб, 7дней). очень быстрые сервера. встраивается в почтовик
- [LitterBox](https://litterbox.catbox.moe/) - временное хранение файлов (1гб, 3дня) от автора catbox.moe
- [Uguu.se](https://uguu.se/) - временное хранение файлов (128мб, 48ч) от автора pomf.se




## Обмен файлами P2P без серверов  
{: #p2p }
- [**Sync by Resilio**](https://www.resilio.com/individuals/) - от создателей BitTorrent. Синхронизация файлов локально или через инет
- qBitTorrent + Flud. Нужно создать .torrent файл на компе
- Поднять samba-сервер на ПК с Windows. Расширить в инет через VPN, ну или ngrok. Смотри выше 
- [**TotalCmd Wifi Transfer Plugin**](https://www.ghisler.com/wifitools.htm) - плагин для телефона, поднимает http и WebDAV, удобен в использовании, легкий. На приемной стороне WebDAV plugin for Total Commander, WinSCP или просто проводник. Только локалка
- [**ShareDrop**](https://www.sharedrop.io/) - аналог эпловского airDrop, но без вендорлока. Работает на WebRTC и HTML5. Удобный и работает стабильно. Скорость с телефона на телефон 1.6Мб. Сигналинг сервер - Firebase. [Исходники](https://github.com/szimek/sharedrop)
- WebRTC + bitTorrent announcement server <https://t.me/zhovner_hub/1608>, Исходники библиотеки: [гитхаб](https://github.com/subins2000/p2pt)


## Специфичные хостинги
- [etlgr.io](https://etlgr.io/) aka @etlgr_bot бот принимает емейлы в телеграм, которые также можно посмотреть в вебе, ну и скачать вложения. Тестовые файлы загружены 20220802: 
  [картинка 500кб](https://etlgr.me/attachments/ccaa64e98ed57093cfcee59bba62f95173fad2816c0edcc378977c732e44d60e),
  [Аудио 9МБ](https://etlgr.me/attachments/ae1f38c7df5b190dbe611607ac59fbdd6c5fcb434413c1e209932a2cb4673f18)
- [4pda.to](https://4pda.to/forum/) - даёт практически прямые ссылки, но только для авторизованных пользователей. Сюда можно заливать программы и картинки.
  [Пост с программой](https://4pda.to/forum/index.php?showtopic=807699&st=100#entry113968170), 
  [Страница скачивания](https://4pda.to/forum/dl/post/25262479/GlassWire_v3.0.380r_b380_K.apk), 
  [Ссылка на скачивание](https://4pda.to/forum/index.php?act=attach&id=25262479&dlsess=f25a88a834089c982d6c5a45da24fa6b),
  [В результате скачалось с CDN](https://ds-blobs-2.cdn.devapps.ru/25262479/GlassWire_v3.0.380r_b380_K.apk?s=0025d72ac1b057e262f17b29000000008ae1a25e9b768dd558e34a2ea1621a89)
- [4qr.xyz](http://4qr.xyz) + [tinyurl.com](http://tinyurl.com) - хранить данные в ссылке `data:image/png;base64,`, сервис 4qr.xyz лишь выводит данные из урл в тело траницы. Тест: [картинка 8кб](https://tinyurl.com/24ejarg4), [страница с картинкой 3кб](https://tinyurl.com/yrf7sa2k). Также я чуть переписал их скрипт, что бы файл сразу же скачивался. Для примера скачай сам скрипт: [ссылка](https://feelcame.github.io/demo/64/?test.txt#cmVkaXJlY3RpbmcuLi4NCjxzY3JpcHQ+DQp2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTsNCmEuaHJlZiA9ICJkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsIiArIGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpOw0KYS5kb3dubG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxLDIwKSk7DQphLmNsaWNrKCk7DQo8L3NjcmlwdD4=){: target="_blank" }, [сокращенная ссылка](https://tinyurl.com/5yn3xr8u). После решетки и хранится сам файл в base64. Вот еще для примера текстовый файл: <https://feelcame.github.io/demo/64/?тест.txt#0LPQvtCy0L3Qvg==>
- [androidfilehost](https://androidfilehost.com/) - хостинг для прошивок. Тест [архив прошивки, 300мб](https://androidfilehost.com/?fid=24269982086998189) (файл загружен в 2015, проверен в 2022)
- YouTube video file storage.


## Полезные ссылки
- <https://www.stackfield.com/blog/8-secure-cloud-storage-services-68>
- <https://toffeeshare.com> - не проверен
- <https://takeafile.com/> - не проверен
- <https://github.com/awesome-selfhosted/awesome-selfhosted#file-transfer---single-click--drag-n-drop-upload>
