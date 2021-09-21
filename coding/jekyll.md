---
date: 2021-09-05T10:40:58+03:00
modified: 2021-09-05T10:58:55+03:00
title: Jekyll CMS
---

<details markdown="1"><summary>+ Спиок разделов</summary>
* Table of Content  
{: toc}
</details>

Статья про jekyll. Эта cms используется на GitHub pages. И позволяет преобразовывать человекочитаемый markdown-текст в обычный html. Отделяю от статьи про markdown потому что md используется в разных системах и неправильно делать кашу из системы управления сайтом и языка разметки


# jekyll
Основная задача - сделать статический сайт, который потом будет хостится на GitHub pages за бесплатно. Написан на ruby, соответственно заимствует его синтаксис. Это хорошо, потому что руби очень продуманный высокоуровневый язык

# блог
Официально предлагается использовать сайт как блог на markdown. Читай доки

# переменные
Преимущество cms в том что контент можно динамически генерировать при каждом запросе пользователя. Но если он не часто меняется - можно генерировать его только при апдейте сайта, этим и занимается jekyll. Переменные вставляются так: 

        {{ site.title }}


# liquid
Для автоматизации используются так называемые liquid-скрипты. Они добавляют возможности взрослого языка программирования в генератор статических страниц. Некоторые из поддерживаемых возможностей: условия, циклы, сортировки...
## Liquid скриптинг

Компания Shopify создала систему гибкого скриптования шаблонов для своего сервиса интернет-магазинов shopify.com. Это напоминает мне о шаблонах TPL в OpenCart 3. Там тоже используются похожие вставки типа ```{{  php-код }}```

Так вот, для настройки страниц можно (и нужно) использовать так называемые Liquid-скрипты. Это как голый код на PHP или Ruby, но он предподготовленный и можно использовать только те функции, которые уже заданы и разрешены. При любой ошибке в файле конфигурации перестанет собираться сайт, а при ошибке скипта жидкого скрипта в странице - он будет интерпретировани как обычный текст.  




## блог-платформа

С помощью цикла for можно вывести список всех страниц (постов) на сайте. То-есть не нужно прописывать ссылки вручную. Это дает возможность сосредоточиться на написании качественного контента вместо того что бы переживать не забыл ли ты часом добавить ссылку в навигацию. Я сначала пытался делать сайт таким образо, поэтому знаком личнго стем какая это попоболь. При количестве страниц больше десяти начинаются сложности.

Пример такого цикла:
```
<ul>
  { % for post in site.posts %}
    <li>
      <h2><a href="{ { post.url }}">{ { post.title }}</a></h2>
      { { post.excerpt }}
    </li>
  { % endfor %}
</ul>
```


## Модули

В файле \_config.yml задается вся конфигурация публикуемого с помощью Jekyll сайта. В том числде модули - эдакие доп. обработчики содержимого перед публикацией.

Добавляются так:
```
plugins:
  - jemoji
  - jekyll-paginate
  - jekyll-gist
```

На Github Pages поддерживается строго ограниченный список модулей: <ссылка>

## Мини-справочник

(заполнить)

## Более ранние заметки:

Просто тестирую как работает Lykyll :)      
  
Ссылки вида "site.github.repository_url". (подробнее смотри исходники)  
[Repository]({{ site.github.repository_url }})  
[Скачать.zip]({{ site.github.zip_url }})  
[Скачать.tar.gz]({{ site.github.tar_url }})  

Простая ссылка "a href": <a href="#">Видно?</a>  

Проверка. site.github.is_project_page? 
{% if site.github.is_project_page %}если видно этот текст, значит да.{% endif %}  
Проверка. site.show_downloads? 
{% if site.show_downloads %}Сработало!{% endif %}  

Переменные логические:  
site.github.is_project_page: {{ site.github.is_project_page }};  
site.show_downloads: {{ site.show_downloads }};  

Переменные.  
site.copyright: {{ site.copyright | default: :copyright: }};  
site.github.owner_url: {{ site.github.owner_url }};  
site.github.owner_name: {{ site.github.owner_name }};  
site.layout: {{ site.layout }};  
page.layout: {{ page.layout }};  
site.github.is_user_page: {{ site.github.is_user_page }};  

Логическое "или":  
page.title | default: site.title | default: site.github.repository_name: {{ page.title | default: site.title | default: site.github.repository_name }};

## Дополнительно

Github Pages использует именно Jekyll для генерации страниц. А тот в свою очередь может использовать так называемые liquid скриптинг за авторством shopify. 


Также стоит знать что кроме "жидких" скриптов для ещё большей кастомизации генератор можно настраивать в файле конфига _config.yaml. Вплоть до того, что можно изменить парсер markdown файлов. Стандартный, кстати, называется kramdown. Его официальная документация [google]

## Полезные ссылки
* kramdown: <https://kramdown.gettalong.org/converter/html.html>  
* <http://bustep.ru/markdown/shpargalka-po-markdown.html#tables>
* Jekyll: <https://jekyllrb.com/docs/step-by-step/08-blogging/#list-posts>  
* Официальная джокументация по жидким скриптам: <https://shopify.github.io/liquid/basics/operators/#order-of-operations>  
* Доки от Github: <https://github.com/Shopify/liquid/wiki/Liquid-for-Designers>  
* [Источник примера ниже](http://alexprivalov.org/markdown-short-reference)
* <https://devhints.io/jekyll-github>
* [Jekyll for GitHub pages cheatsheet](https://devhints.io/jekyll-github)
* Блогинг: <https://jekyllrb.com/docs/step-by-step/08-blogging/#list-posts>  
* [Инклюдинг. Передача параметров в вызываемый инклюд](https://jekyllrb.com/docs/includes/)
* А это инфа по настройке jekyll <https://webref.ru/dev/building-jekyll-site/converting-static-site-to-jekyll>
* Вот официальная документация по "жидким" скриптам: <https://github.com/Shopify/liquid/wiki/Liquid-for-Designers>
* [Дока как по апи гитхаба вытянуить комменнтарии из issue](https://docs.github.com/en/rest/reference/issues#comments)
* [Пример комментариев через github issues на статическом сайте ](https://github.com/dwilliamson/donw.io)
* <https://shopify.github.io/liquid/filters/date/>
* <https://shopify.dev/docs/themes/liquid/reference/basics>
- <https://jekyllrb.com/docs/datafiles/?_x_tr_sl=en&_x_tr_tl=ru&_x_tr_hl=ru&_x_tr_pto=ajax,se,elem>
* <http://jekyll.github.io/github-metadata/site.github/>
+ <https://devhints.io/jekyll-github>



