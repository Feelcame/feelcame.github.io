---
title: Системы управления сайтом (CMS)
date: 2020-07-28T01:34:10+03:00
modified: 2021-08-25T11:37:03+03:00
tags: web
---


- toc
{: toc }

## CMS

Системы управления сайтом отличаются уровнем своей навороченности. Одни написаны на php, тянут код из девяностых, но на них держится пол интернета. Другие предназначены чисто для отдачи контента, из управления используется только редактирование текста (я про статику говорю). Третьи написаны на c++ и вообще не CMS ни разу, но общаются с базой данных и отджают контент по api приложениям на клиентской стороне (например игры или pwa). У всех разное предназначение. Я попробую составить список интересных вариантов


## Конструкторы
На заре расцвета WAP-интернета существовал такой конструктор сайтов <http://wen.ru>. На нем я учился создавать свои первые сайты. К сожалению сейчас он закрыт, но его миссию продолжают выполнять Notepad++ и GitHub Pages.  
Но ниша не осталась незанятой и для удобного создания простых информационных сайтов существуют хорошо себя чувствуют в материальном плане современные конструкторы. На них пользователь создает дизайн сайта перетягиванием блоков, а готовые страницы хранятся на серверах конструктора
- [Tilda](http://tilda.cc) - пожалуй лидер рынка конструкторов
- [Wix](https://ru.wix.com/)
- [ArchBee](https://www.archbee.io) - юзают на сайте флиппера

## Генераторы статики {#static}
Сайт созданный на конструторе можно сохранить через встроенную функцию браузера и потом захостить где угодно. Но куда интереснее полностью управлять процессом создания макетов. Генераторы статики, как правило, берут за основу шаблон и наполняют его текстом. Текст пишет автор в человекочитаемом формате markdown. Он удобен для разметки при написании статей и длдя последующего чтения исходников (см. статью про markdown). Задача генератора - перевести md в html. Потому что именно этот формат понимает браузер. После преобразования исходных текстов, полученные html-файлы нужно где-то захостить. Можно испольхзовать абсолютно любой хостинг сайтов, даже бесплатный. Нагрузки на сервер будет ~ноль! Но я лично использую Github Pages. Данный текс, скорее всего, ты читаешь на сайте, который хостится на гитхабе (если конечно не случилось эконогмической войны... тогда надежда только на webarchive.org). 

Ниже спиcок систем для создания статических сайтов:
- [Jekyll](https://jekyllrb.com/) - гитхаб использует именно его. Не самое кошерное решение, но работает. Нужно будет многое самому дописать
- [Hugo](#) - не пробовал. Юзают в Radio-T
- [Mkdocs-material](https://squidfunk.github.io/mkdocs-material/) - позиционируется как готовое решение для публикации докумментации, бери да пользуйся. является темой для mkdocs
- [Mkdocs](https://www.mkdocs.org/) - не пробовал
- [Docusaurus](https://docusaurus.io/) - используется на сайте документации gui-библиотеки для go [wails](https://wails.io/docs/gettingstarted/firstproject)
- [Lektor](https://www.getlektor.com/) - используется на сайте библиотеки веб сервера для python [Flask](https://palletsprojects.com/)
- [Docsify](https://docsify.js.org/#/) - docsify generates your documentation website on the fly. A magical documentation site generator. Simple and lightweight. No statically built html files. Multiple themes
- [GitBook](https://www.gitbook.com/)
- <https://astro.build/>

JAM-stack (JavaScript, API, Markup). Представьте себе фронтенд HTML+CSS, **статически** поставляемый через CDN, который взаимодействует через JS с вашим бэкендом, в свою очередь, работающим на облачном сервере. Логика приложения обычно находится на стороне клиента, не будучи тесно связана с серверной частью. По идее, сайт может работать вообще без интернета, если с сервера заранее будет это разрешено. Возможно это то же самое что PWA, хз. Сейчас сайт ютуба работает так: если пропал интернет, то сайт предложит посмотреть скачанные ранее видео, вместо того что бы просто вывалиться в игру с динозавриком

- <https://redwoodjs.com/>
- <https://github.com/redwoodjs/redwood>
- <https://medium.com/nuances-of-programming/%D0%B2%D0%B7%D0%B3%D0%BB%D1%8F%D0%B4-%D0%BD%D0%B0-redwoodjs-22f4f842ae60>
- <https://nextjs.org/>
- <https://www.sphinx-doc.org/en/master/>
- hugo
- <https://dou.ua/lenta/articles/creating-blog-with-jamstack/>


## По старинке PHP
{: #php }
Путь современного джедая - делать сайт на каком нибудь django и исполлзовать selfhosted решения вместо старых cms на PHP. Но даже здесь есть годные фреймворки, на которых написаны любопытные системы управления сайтом. С них начнем, а дальше будут более традиционные вордпрессы и джумлы.
* **OctoberCMS** - платная. Быстрая, красивая cms. Нраицца! 
  [оф.сайт](https://octobercms.com/)
  [OctoberCMS на русском](https://octobercms.info/)
  [сравнение с WordPress](https://habr.com/ru/post/509098/)
* WordPress - главаная CMS интернета, на ней работает 30% сайтов
* OpenCart - opensource магазин. Каличное все, нужно переделывать. А это стоит денег
* GetSimple - сайт без базы данных (на файлах)
- <https://picocms.org/> простая цмс на файлах

<details markdown="1">
<summary markdown="0">показать больше</summary>
* Joomla - динозавр
* [Mobilizon](https://mobilizon.org) - ивенты в вашем городе
* Serendipity - <https://docs.s9y.org/index.html>
* impresspages - <https://www.impresspages.org/download> - <https://habr.com/ru/post/141533/>
* Drupal
* johncms - для создания мобильных сайтов, дырявая
* <https://invisioncommunity.com/buy> форум
* XenForo2 форум. норм. платно
* MODx
* <https://getpublii.com/>
* Magento - топовая система для ведения магазина. платно
* Bitrix
* WooCommerce - плагин магазина для wordpress. Тормозной
* ABO.CMS
* AdVantShop.NET
* Amiro CMS
* ArwShop
* PHPShop
* Simpla
- Magento - самая популярная система для создания магазина на западе. Куча плагинов, развивается, дает много работы
- Concrete5 CMS - говорят сложная но шустрая
- Shopify - saas магазинн. решение для больших дядек. вроде как технологичные чувыаки делают

</details>

<details markdown="1">
<summary markdown="0">**Разновидности**</summary>

Практическое применение <https://hostiq.ua/wiki/cms/>  
блог, форум (WordPress, phpBB, vBulletin);  
интернет-магазин (Magento, OpenCart, osCommerce);  
социальные сети (InstantCMS, Social Engine);  
персональные сайты (WordPress, Monstra);  
корпоративные сайты (Joomla, Drupal);  
порталы (DLE, Drupal). 
</details>

<details markdown="1">
<summary markdown="0">**Пояснение**</summary>

Существует несколько основных типов решений для электронной коммерции. Некоторые фокусируются на продаже цифровых продуктов, некоторые отлично подходят для компаний, использующих дропшиппинг (Oberlo), а третьи идеальны для моделей с подпиской (Wix Membership).

Например, STRATO Webshop (ePages) и Shopify - лучшие решения для создания больших онлайн-магазинов без особых усилий. WooCommerce хорошо подходит для уникальных и специализированных проектов, но может потребовать значительного технического опыта. С помощью этой системы вы получаете больше гибкости и возможность создавать многоязычные магазины.

Jimdo и Wix являются подходящими решениями, если вы хотите реализовать небольшие (и более простые) проекты магазинов. Джимдо набирает очки в области правовой безопасности и техподдержки, а у Wix есть преимущество в расширенном функционале, особенно при работе с цифровыми товарами.


</details>

## Python и другая экзотика
- Django - написан на Python. Главная задача держать нагрузку. Читай статью [./pyhon-django](./pyhon-django)
- Ghost - удобный движок с markdown на python. Node.js


## Django
**Django** - набор инструментов для развертывания сайта.  
Написан на python. Использует подход MVC - разделение логики и отображения.  
Его фишка -хорошо организован, призван держать нагрузку.  

Есть более простые аналоги, например Flask <https://flask.palletsprojects.com/en/2.0.x/cli/>

* [Официальный сайт](https://www.djangoproject.com/)
* [Почему Django](https://ru.hexlet.io/blog/posts/pochemu-django-luchshiy-freymvork-dlya-razrabotki-saytov)
* [Официальная документация](https://docs.djangoproject.com/en/2.2/)
* [Доки от Mozilla](https://developer.mozilla.org/ru/docs/Learn/Server-side/Django)
* [Неофициальная документация](https://djbook.ru/rel3.0/index.html)
* <https://django-ninja.dev/> стартер на базе джанги


### Уроки
* [Видосик от howdyho](https://www.youtube.com/watch?v=w4nrT7emiVc)
* [learndjango](https://learndjango.com/)
* [Проект Django Girls](https://tutorial.djangogirls.org/ru/)
* [Уроки на MDN](https://developer.mozilla.org/ru/docs/Learn/Server-side/Django)
* [Книга Дронова по Django 2.2](https://rutracker.org/forum/viewtopic.php?t=5966162)

* [Бесплатные практические уроки по Python](https://ru.code-basics.com/languages/python)
* [hexlet.io курс Python: Django](https://ru.hexlet.io/courses/python-django-basics)
* [hexlet.io Бесплатный курс Основы языка Python](https://ru.hexlet.io/courses/python-basics)
* [hexlet.io Бесплатный курс Основы современной вёрстки](https://ru.hexlet.io/courses/layout-designer-basics)
* [hexlet.io Основы командной строки](https://ru.hexlet.io/courses/cli-basics/lessons/intro/theory_unit)

### Заготовки для сайта и примеры
* [DjangoX](https://github.com/wsvincent/djangox)
* <https://www.djangosites.org/with-source/>
* <https://djbook.ru/forum/forum/13/>
* [Демка Django от Heroku](https://github.com/heroku/python-getting-started)
* [Несколлько усложненный пример для heroku](https://github.com/heroku/heroku-buildpack-python)

### Хостинг
* [heroku](https://www.heroku.com/)
* pythonanywhere
* wps
* amazon aws
* google engine
* localhosty + ngrock



## Темы wordpress
Ввиду того что из коробки wordpress поставляется с вырвиглазной темой оформления, пользователю нужно самостоятельно ее установить. Большинство красивых тем платные, но попадаются и бесплатные, они даже могут быть красивыми. Но их, как любовь, тяжело найти и легко потерять. Поэтому список:
1. <https://creativethemes.com/blocksy/>
1. <https://www.cryoutcreations.eu/wordpress-themes/mantra>
1. <https://alx.media/themes/>
1. <https://wordpress.org/themes/anther/>
1. <https://generatepress.com/>  
1. <https://themeansar.com/free-themes/>
{: reversed="reversed"}


## Полезные ссылки
- [Создание плагина wordpress](https://wp-kama.ru/handbook/plugin/osnovy)
- <https://talks.pub/post/bistrii_zakaz_opencart_2>
- ...
