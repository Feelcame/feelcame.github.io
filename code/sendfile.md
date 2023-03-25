---
title: Хостинг файлов и картинок
date: 2020-08-15T01:34:10+03:00
modified: 2022-08-21T15:29:20+03:00
comments: 112
tags: server
---

Файлы можно хранить на обычном хостинге [для сайтов](./hosting.md). Но это не всегда удобно, или например надо экономить место. Могут не подойти также обычные облачные диски из-за своих ограничений

- Содержание
{:toc}



## Для картинок
{: #images }

- **Github CDN** - при редактировании в браузере markdown-файла на github, перетянуть в окно редактора картинку или видео. <br>
  Тест (210405): 
  [котик играет с цветком видео 1.5МБ](https://user-images.githubusercontent.com/17731587/113583782-c0140200-9632-11eb-9c59-1596155e5ac1.mp4)
- [**Telegra.ph**](https://telegra.ph/) - предназначен для написания статей. Можно вставить картинку, аудио или видео и получить прямую ссылку. Ограничение 5Мб. Можно выгружать через телеграм-бот [@mediauploader_bot](tg://resolve?domain=mediauploader_bot). <br> 
  Тест (220819):
  [картинка 50кб (сайт)](https://telegra.ph/file/b98d7d26e0cc07c21aec5.jpg),
  [сисюняшки 40кб (через бот)](https://telegra.ph/file/e52aa7c9d0d0492fc254f.jpg)
- [**vfl.ru**](http://vfl.ru/) - платный 199р/мес. Нет рекламы. До 15 МБ. Группировка по альбомам. Прямые ссылки. После истечения оплаты фото НЕ удаляются. Не проверял

**сомнительно**
- [**Directupload.net**](http://directupload.net) - на торрентах юзают. 64Мб/файл. Прямые ссылки. реклама при выгрузке. Иногда просто перестает работать<br>
  Тест: 
  [Картинка 1мб (2011г)](http://s14.directupload.net/images/110930/czej6dlt.png), 
  [Гифка 7мб (2022г)](https://s20.directupload.net/images/220911/ojn3m8ao.gif), 
  [Собакен 11Мб (230325)](https://s20.directupload.net/images/230325/kyu9vbow.png)
- [**Imgur.com**](https://imgur.com/) - Нет прямых ссылок. Глючный сайт<br>
  Тест (230325): 
  [сиси](https://i.imgur.com/18hTvCu.jpg),
  [пес 11мб](https://i.imgur.com/B9oRBn1.jpg) + [встроено](https://tinyurl.com/4dc8fsu6),
  [скриншот](https://i.imgur.com/P8a0qze.jpg)
- [**Fastpic.org**](https://fastpic.org/) - Нет прямых ссылок. Реклама просто вырвиглазная. <br>
  Тест (230325): 
  [встроено в страницу](https://tinyurl.com/84th6rc2), 
  [типа прямая ссылка](https://i121.fastpic.org/big/2023/0325/1c/11067e3208f5404cf81d07467baf991c.jpg)
- [**imageban**](https://imageban.ru/) - сервера в рашке. нет прямых ссылок. <br>
  Тест: [Таня (230325)](https://i7.imageban.ru/out/2023/03/25/1df015acee5c480ee4cbae65ae5a739e.jpg)


## Облачные файл-менеджеры  
{: #cloudstorage }
- [**GitHub**](https://github.com/) - предназначен для хранения исходных кодов. Но поддерживает и бинарники. Можно добавлять прямо в репозиторий или заливать через Releases. Можно настроить свой домен через github pages. Ограничение - 1гб/репо<br>
  Тест (200101): 
  [картинка 3кб raw-ссылка](https://raw.githubusercontent.com/Feelcame/feelcame.github.io/master/assets/img/favicon.png),
  [через домен](https://feelcame.github.io/assets/img/favicon.png){: target="_blank" }
- [**Storj**](https://www.storj.io/) - дешевое файлохранилище с хорошим api. Бесплатно 250гб. Поддерживается программой transfer.sh<br>
  Тест: 
  [фильм 870мб (20220802)](https://link.storjshare.io/s/jxnnsqrzeqxvfinajdd5tqek6kla/feel-soft/Matrica_voskreshenie_TEVAS.mp4) +
  [прямая ссылка](https://link.storjshare.io/s/jxnnsqrzeqxvfinajdd5tqek6kla/feel-soft/Matrica_voskreshenie_TEVAS.mp4?download=1)
- [**raysync**](https://www.raysync.io/pricing/) - 100гб бесплатно, не проверял
- [**massive.io**](https://massive.io/pricing/) - максимальная скорость пердачи, но платно ($0.25/гб). не проверял


- [**Telegram**](https://t.me). 2000Мб/файл. Создатпь приватный канал и загрузить туда что угодно. Нет прямых ссылок. Не абузоустойчиво. Раз в пять лет очищают неиспользуемые файлы<br>
  Тест (10901): 
  [программа 1800мб](http://t.me/joinchat/monHIC4FPMQ2YmRi)
- [**Fex.net**](http://fex.net) - быстрые сервера. Платный: 1Тб стоит 60грн/мес. Глючит. Реклама. От создателей ex.ua
- **mega.nz** - криптуется, тяжёлые веб страницы, 50гб бесплатно
- **Google drive** - 15 Гб. можно делать прямые ссылки(работают через раз). Параноидальная проверка на вирусы - при **каждом** скачивании надо ждать до 15 секунд. Предпросмотр видео через плеер как в ютубе, можно даже качество выбирать 
- **onedrive** - удобная интеграция в Microsoft Windows. проверка на вирусы. может просто так удалить файлы
- **yandex disk** - русиянский аналог гдрайв. 10гб
- **ionos.de** aka 1und1 - 5гб бесплатно, но нужно поморочиться
- **jino.ru/disk** - 20гб. Это хостер. Рашка. На счету должно быть больше нуля. Пополнение минимум 249р
- **ukr.net** 4gb
- **files.fm** - 5гб бесплатно. нужна регистроация. раздают через него вирусню, как то связан с рашкой

## Файлообменники (скинул и забыл)  
{: #files }

- [**tlgurbot**](http://t.me/tlgurbot) - 20МБ, время не ограничено. Бот проксирует файл из телеги по URL<br>
  Тест: [apk 10mb (211201)](https://tlgur.com/d/g306JW64)
- [**catbox.moe**](https://catbox.moe/) - 200мб, время не ограничено. Прямая ссылка. Нет рекламы
  Тест: [архив .exe.zip 72Мб (220802)](https://files.catbox.moe/mufkwf.zip), 
  [картинка 60кб (220802)](https://files.catbox.moe/fk9c1e.jpg)
- [**Zaix.ru**](https://zaix.ru/upload) - 20Мб, 3 месяца от посл. скачивания. Прямые ссылки. Рашка<br>
  Тест: [скриншот 300кб (221229)](http://d.zaix.ru/x5GN.png),
  [картинка 11мб (230325)](http://d.zaix.ru/yxYL.png)
- [**AnonFiles**](https://anonfiles.com/). 20ГБ, хранится менее полугода. Ограниченная скорость выгрузки<br>
  Аналоги: 
  [filechan.org](https://filechan.org), 
  [letsupload.cc](https://letsupload.cc), 
  [share-online.is](https://share-online.is), 
  [megaupload.nz](https://megaupload.nz)


## Времменное хранение   
{: #temporary }
- [**FEX.NET**](http://fex.net) - 100гб, 7дней. От создателей ex.ua
- [**LitterBox**](https://litterbox.catbox.moe/) - 1гб/файл, 3дня. Прямые ссылки. От автора catbox.moe
- [**Uguu.se**](https://uguu.se/) - 128мб, 2дня. От автора pomf.se.<br>
  [Исходники(github)](https://github.com/nokonoko/Uguu)
- [**wetransfer**](https://wetransfer.com/) - 2гб, 7дней. Очень быстрые сервера. Встраивается в почтовик
- [**zippyshare**](https://www.zippyshare.com/) - 500 Мб, 30 days after no activity. Скоро закрывается




## Селфхост  
{: #selfhost }
Если нужно надежное хранилище данных - лучше всего хостить их у себя. По крайней мере, это снижает шанс, что все файлы пропадут по глупости. Вот пример письма счастья от одного из провайдеров облачных хранилищ: "мы заметили что с вашего аккаунта не было активности в течении трех месяцев и поэтому удалили все ваши жизненно важные данные, восстановить их невозможно. с  любовью, команда сервиса хуйл.ru-диск". К тому же это дешевле: платить нужно только за интернет и электричество

Что бы сервер был доступен за NAT нужно пробросить порты, использовать VPN с белым IP или использовать сервис проброса за нат. Подробнее в статье про [хостинг сайтов](./hosting.md#selfhost)

## Серверный софт для раздачи файлов
{: .no_toc #server-soft }

- [**Nginx**](http://nginx.org/ru/docs/beginners_guide.html) - самый навороченный веб-сервер. Часто используется для раздачи статики
- **owncloud**, **nextcloud** - собственное полноценное облако
- [**transfer.sh**](https://transfer.sh/) - выгрузка файлов в gdrive, storj и другие сервисы через командную строку. 
  [Исходники](https://github.com/dutchcoders/transfer.sh/). 
- [**youtransfer**](http://www.youtransfer.io/) - selfhosted клон сайта wetransfer. Вроде неплохой
- [**SPRUT.io**](https://sprut.io/) - это полнофункциональный файловый менеджер от создателей beget.com, который позволит заменить привычный FTP-клиент и удобно работать с файлами на сервере прямо из браузера с любого места. 
  [Статья на хабре](https://habr.com/ru/company/beget/blog/277449/), 
  [Исходники](https://github.com/LTD-Beget/sprutio) 
- [**h5ai**](https://larsjung.de/h5ai/) - отображает структуру каталогов сайта на php как файловый менеджер с деревом и предпросмотром. [Демо](https://larsjung.de/h5ai/demo/empty%20folder/), [Исходники](https://github.com/lrsjng/h5ai) 

**не проверено**
- https://www.seafile.com/ 
- **FreeNAS** - операционнка для создания локального хранилища данных
- **synology** - лидер в коммерческом секторе. говорят надежно. но нужно купить сервак и поставить гдето в кладовке
- https://www.sparkleshare.org/ https://github.com/hbons/Dazzle File sync.Version history. Self hosted. Client side encryption. Free and Open Source
- https://www.filecloud.com/developer/
- https://www.openstack.org/software/
- [список еще](https://github.com/awesome-selfhosted/awesome-selfhosted#file-transfer---single-click--drag-n-drop-upload)


## Обмен файлами P2P без серверов  
{: #p2p }
- [**Resilio Sync**](https://www.resilio.com/individuals/) - от создателей BitTorrent. Синхронизация файлов локально или через инет
- **Torrent** - нужно создать .torrent файл. Программы: qBitTorrent (ПК), Flud (Android)
- Поднять samba-сервер на ПК с Windows. Расширить в инет через VPN, ну или ngrok. Смотри выше 
- [**TotalCmd Wifi Transfer Plugin**](https://www.ghisler.com/wifitools.htm) - плагин для телефона, поднимает http и WebDAV, удобен в использовании, легкий. На приемной стороне WebDAV plugin for Total Commander, WinSCP или просто проводник. Только локалка
- [**ShareDrop**](https://www.sharedrop.io/) - Удобный и работает стабильно. Открывается в браузере, не нужно ничего качать. Скорость с телефона на телефон 1.6Мб. Построен на WebRTC и HTML5. [**Исходники**](https://github.com/szimek/sharedrop). Сигналинг сервер - Firebase (он нужен что бы пробить NAT). Есть аналогичные проекты, котрые используют bitTorrent announcement server для этих целей <https://t.me/zhovner_hub/1608>. Исходники такой библиотеки: [гитхаб](https://github.com/subins2000/p2pt)


## Нецелевое использование
{: #specific }
- [**etlgr.io**](https://etlgr.io/) aka [@etlgr_bot](https://etlgr_bot.t.me) - бот для приема email в телеграм. Сообщение можно посмотреть в вебе, ну и скачать вложения. На этом и паразитируем. Прямые ссылки. Максимум 20мб/файл<br>
  Тест (220802): 
  [картинка 500кб](https://etlgr.me/attachments/ccaa64e98ed57093cfcee59bba62f95173fad2816c0edcc378977c732e44d60e),
  [Аудио 9МБ](https://etlgr.me/attachments/ae1f38c7df5b190dbe611607ac59fbdd6c5fcb434413c1e209932a2cb4673f18)
- [**4pda.to**](https://4pda.to/forum/) - 240мб/файл. Позволяет заливать любой формат файла. Нет проверки на вирусы. Форум про телефоны и программы, файлы должны соответствовать тематике. Нет прямых ссылок. Для **скачивания** нужна регистрация. Пример:
  [Apk 6Mb](https://4pda.to/forum/index.php?showtopic=807699&st=100#entry113968170)
- [**tinyurl.com**](http://tinyurl.com) - сервис позволяет сократить длинную ссылку, в которую встроен закодированный файл. Используется кодировка base64 и ([**этот скрипт**](/projects/base64-url-downloader.md)). Ограничение - максимум 10кб/файл<br>
  Тест: 
  [картинка 8кб](https://tinyurl.com/24ejarg4),
  [текстовый файл 1кб](https://feelcame.github.io/demo/64/?тест.txt#0LPQvtCy0L3Qvg==)
- [**androidfilehost.com**](https://androidfilehost.com/) - хостинг для прошивок. Тест [архив прошивки, 300мб](https://androidfilehost.com/?fid=24269982086998189) (файл загружен в 2015, проверен в 2022)
- **YouTube video file storage** - файл кодируется в картинки, из них делается видео.


## Полезные ссылки
- <https://www.stackfield.com/blog/8-secure-cloud-storage-services-68>
- <https://toffeeshare.com> - не проверен
- <https://takeafile.com/> - не проверен
- <https://github.com/awesome-selfhosted/awesome-selfhosted#file-transfer---single-click--drag-n-drop-upload>


