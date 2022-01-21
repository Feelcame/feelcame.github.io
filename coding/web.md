---
title: Основы веб разработки
date: 2021-01-17T00:34:10+02:00
modified: 2021-09-17T00:20:23+03:00
tags: web
pin: 6
---

Технологии для написания сайтов, где их хостить. Полезные фишки по фронтенду (html, css, js). Чуть про бэкенд (cms, фреймворки) на разных языках программирования. Ссылки на полезные сервисы и, конечно же, сниппеты (примеры кода).

## Содержание
{: .no_toc }
- Table of Content  
{: toc }


## Полезные сниппеты
- **Масштаб по экрану**  
Задать ширину страницы в соответствии с размером экрана.  
Документация: [ссылка](https://developer.mozilla.org/ru/docs/Glossary/Viewport)  
```<meta name="viewport" content="width=device-width, initial-scale=1">```

- **Событие onclick**  
Как отменить переход по ссылке с обработчиком onclick?  
Нужно что бы выполняемая функция вернула false.  
Вот пример: <a href="#" onclick="alert('test');return(false);">Ссылка</a>  
```<a href="#" onclick="alert('test');return(false);">ссылка</a>```

- **Как задать базовый урл для всех относительных ссылок на странице?**  
Например для таких: "/index.html", "./file.png" или "../../img/file.png  
```<base href="/example/images/">``` или для jekyll: ```<base href="%site.baseurl%">```

- **Ссылка для скачивания**  
Скачать файл по ссылке: <a href="#" download="test.txt">ссылка</a>   
```<a href="#" download="test.html">ссылка</a>```

- **Данные внутри ссылки**  
Протокол ссылки data:base64. Документация: [ссылка](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/Data_URIs>).  
Пример ссылки с протоколом data: <a href="data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E" download="test2.html">ссылка</a>  
```<a href="data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E" download="test2.html">ссылка</a>```

- **Спойлеры**  
{% raw %}
```html
<details markdown="1">
<summary markdown="0">+ Сегодня в программе</summary>
* Table of Content  
{ : toc}
</details>
```
{% endraw %}

### Сайты референсные:
1. w3c
1. <https://webref.ru/>
1. <https://webreff.ru/>
1. <https://developer.mozilla.org/ru/docs/Web>

## HTML JS CSS

1. CSS Grid <https://tproger.ru/translations/how-css-flexbox-works/>
2. <https://puzzleweb.ru/javascript/element_innerhtml.php>
3. <https://frontblog.ru/javascript-kak-poluchit-get-parametr.html>
4. <https://learn.javascript.ru/searching-elements-dom>
5. <>

Про иерархию селекторов CSS и нгаследование
- Тут понятно описано <https://webref.ru/course/css-basics/selectors>
- А тут детально <https://developer.mozilla.org/ru/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance>

## Севрисы комментариев на статический сайт

**Севрисы комментариев:**  
1. <https://github.com/utterance/utterances>  
1. <https://github.com/gitalk/gitalk>  
1. <https://github.com/meteorlxy/vssue>

1. <https://www.hypercomments.com/>
1. <https://gitlab.com/commento/commento>  

*** 

## CMS
**Темы wordpress**
1. <https://www.cryoutcreations.eu/wordpress-themes/mantra>
1. <https://alx.media/themes/>
1. <https://wordpress.org/themes/anther/>
1. <https://generatepress.com/>  
{: reversed="reversed"}

## Фреймворки

## Структура файлов twitter bootstrap
Мне понравилось оформление дерева с помощью спецсимволов, решил скопировать

```
bootstrap/  
├── css/  
│   ├── bootstrap-grid.css  
│   └── bootstrap.min.css.map  
└── js/  
    ├── bootstrap.bundle.js  
    ├── bootstrap.bundle.js.map  
    └── bootstrap.min.js.map  
```

## Песочницы
Песочница - это место для игры с кодом. Его можно отлаживать, тестировать, сохранять и делиться. Ниже перечень известных мне сайтов-песочниц. Возможно некоторые ссылки ведут на какой либо пример - это хорошее демо ;-)
1. [JsFiddle](http://jsfiddle.net/sLZq8/2/) + [еще пример](https://jsfiddle.net/GdSVn/) + <https://jsfiddle.net/gableroux/S2SMK/>
3. [Plunker](https://plnkr.co/edit/ATV5zGc1JUSb9O9Xszcs?p=preview&preview)
4. [JsBin](http://jsbin.com/rebogevoga/edit?html,output)
5. [CodePen](https://codepen.io/liptonicetea/pen/NdvxYe)
6. [w3school](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_display_toggle)
7. [pagedemos](http://pagedemos.com/)
8. ...

## Бьютифаеры, форматтеры
1. [FreeFormatter.com](https://www.freeformatter.com/html-formatter.html)
2. [beautifier.io](https://beautifier.io/)
3. <https://codebeautify.org/jsviewer>
4. <https://html-cleaner.com/js/>
5. <https://beautifytools.com/javascript-beautifier.php>


## хостинг
[Раздел вынесен на отдельную страницу](./hosting.md)


## Javascript
**Фреймворки**  
[на отдельной странице](./javascript.md)

