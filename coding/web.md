---
title: Веб технологии
date: 2021-01-17T00:34:10+02:00
modified: 2021-09-17T00:20:23+03:00
comments: 101
tags: web
pin: 6
---

Как написать сайт, где его хостить. Полезные фишки по фронтенду (html, css, js). Чуть про бэкенд (cms, фреймворки) на разных языках программирования. Ссылки на полезные сервисы и, конечно же, сниппеты (примеры кода).

- Table of Content  
{: toc }


## Хранитиели древних знаний
1. <https://developer.mozilla.org/ru/docs/Web>
2. <https://learn.javascript.ru/>
1. w3c
1. <https://webref.ru/>
1. <https://webreff.ru/>
2. htmlbook
3. hexlet (платно)


## HTML разметка
Язык гипертекстовой разметки — это язык, используемый для определения структуры и описания содержания веб-страницы в структурированной форме.[скопипатчено]

Все сайты написаны на HTML. Да, даже если какой-то маньяк и написал весь фронт на javascript. Для правильного отображения его все-равно нужно перегнать в HTML. 
Плохой пример - это данные в виде json и т.п. форматов для машинной обработки данных. Хороший пример - markdown для удобного написания статей человеком. Все они в итоге преобразуются в хтмл.


## CSS стили
Каскадные таблицы стилей используются для описания внешнего вида веб-контента.

Про иерархию селекторов CSS и наследование
- Тут понятно описано <https://webref.ru/course/css-basics/selectors>
- А тут детально <https://developer.mozilla.org/ru/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance>

Про адаптивность
1. CSS Grid <https://tproger.ru/translations/how-css-flexbox-works/>

## Javascript сценарии
JavaScript — язык программирования, широко используемый для реализации взаимодействия пользователя с веб-сайтами и приложениями.

2. <https://puzzleweb.ru/javascript/element_innerhtml.php>
3. <https://frontblog.ru/javascript-kak-poluchit-get-parametr.html>
4. <https://learn.javascript.ru/searching-elements-dom>
5. AJAX <https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data>


## Фреймворки и библиотеки
Когда нужно ускорить решение повторяющихся задач - используют библиотеки с заранее написанными функциями. Когда вся работа состоит из решения массива задач и ловкому маневрированию между ними - используют фреймворки. Они позволяют не только расширнить границы возможностей разработчика, но и в значительной мере ограждают от ошибок. Некоторые крутые фреймворки можно даже считать отдельными языками программирования. Ниже кратко про вот это вот все.

- twitter bootstrap - для быстрой разработки адаптивных страниц.  
- [react](https://create-react-app.dev/docs/getting-started/) - асинхронная обработка запросов, похоже на AJAX
- vue - позволяет без обновления страницы перегенерировать ее содержимое
- UIKit. Легкий и модульный интерфейс для разработки быстрых и мощных веб-интерфейсов. <https://getuikit.com/>
- Webix UI
- w2ui
- <https://photoswipe.com/documentation/getting-started.html>
- <https://fotorama.io/>

Мне понравилось оформление дерева с помощью спецсимволов, решил скопировать

```
├── css/  
│   └── bootstrap.min.css.map  
└── bootstrap.min.js.map  
```



## Где хостить сайт
Когда сайт написан, его нужно разместить в интернете. Самый простой вариант - это загрузить свои файлы на сервер в дата центре. Как правило, хостинг сайта размером до 1ГБ обходится $1/месяц. Но иногда можно и бесплатно. Список проверенных хостеров вынесен на отдельную страницу: [**Хостинг CMS**](./hosting-cms.md#hosting).

## Как управлять сайтом
Для управления сайтом лучше всего использовать CMS - систему управления сайтом. Про их разновидности в статье [**Хостинг CMS**](./hosting-cms.md#cms).

Как правило, админка крутится на том же сервере, где и хранятся все данные сайта. Поэтому нередки случаи когда мы видим новость что десятки государственных сайтов были взломаны, а украденные данные продаются в дарквэбе. К сожалению, этого не избежать в системах, где требуется обработка данных "на лету". Но для информационных сайтов отлично подходит статика. Тут даже CMS для статики подвезли. С их помощью можно конвертировать markdown в html. Подробнее в статье [**Хостинг CMS**](./hosting-cms.md#cms).

## В чем кодить
Как писать что-то более сложное чем просто статьи? Например редактировать дизайн своего сайта. Для этого лучше всего использовать разные IDE. Они упростят рутинные задачи. Хотя и вряд ли помогут разобраться со сложностью кода. Гуглить все-равно придется. 
- Notepad++ - простой блокнотик, переваривает все
- VSCode - универсальная IDE. Посложнее и понавороченнее.
- Другие программы по теме в статье [Инструменты программиста](./tools.md#web)


## Полезные сервисы
### Песочницы
Песочница - это место для игры с кодом. Его можно отлаживать, тестировать, сохранять и делиться. Ниже перечень известных мне сайтов-песочниц. Возможно некоторые ссылки ведут на какой либо пример - это хорошее демо ;-)
1. [JsFiddle](http://jsfiddle.net) - удобно 
    + [еще пример](http://jsfiddle.net/sLZq8/2/) 
    + [еще пример](https://jsfiddle.net/GdSVn/) 
    + <https://jsfiddle.net/gableroux/S2SMK/>
3. [Plunker](https://plnkr.co/edit/ATV5zGc1JUSb9O9Xszcs?p=preview&preview) - красиво
4. [JsBin](http://jsbin.com/rebogevoga/edit?html,output)
5. [CodePen](https://codepen.io/liptonicetea/pen/NdvxYe)
6. [w3school](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_display_toggle)
7. [pagedemos](http://pagedemos.com/)

### Бьютифаеры, форматтеры
1. [FreeFormatter.com](https://www.freeformatter.com/html-formatter.html)
2. [beautifier.io](https://beautifier.io/)
3. <https://codebeautify.org/jsviewer>
4. <https://html-cleaner.com/js/>
5. <https://beautifytools.com/javascript-beautifier.php>

### Севрисы комментариев на статический сайт

1. <https://github.com/utterance/utterances>  
1. <https://github.com/gitalk/gitalk>  
1. <https://github.com/meteorlxy/vssue>
1. <https://www.hypercomments.com/>
1. <https://gitlab.com/commento/commento>  
2. <https://donw.io/post/github-comments/>


## Полезные сниппеты
**Масштаб по экрану**  
Задать ширину страницы в соответствии с размером экрана.  
Документация: [ссылка](https://developer.mozilla.org/ru/docs/Glossary/Viewport)  
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

**Отменить переход по нажатой ссылке**  
Как отменить переход по ссылке с обработчиком onclick?  
Нужно что бы выполняемая функция вернула false.  
Вот пример: <a href="#" onclick="alert('test');return(false);">Ссылка</a>  
```
<a href="#" onclick="alert('test');return(false);">ссылка</a>
```

**Как задать базовый урл для всех относительных ссылок на странице?**  
Например для таких: "/index.html", "file.png"
```
<!-- в заголовке HTML: -->
<base href="./">
<!-- или для jekyll: -->
<base href="%site.baseurl%">
```

**Скачать ссылку принудительно**  
Скачать эту страницу как txt-файл: <a href="#" download="test.txt">ссылка</a>   
```
<a href="#" download="test.html">ссылка</a>
```

**Данные внутри ссылки**  
Протокол ссылки data:base64. Документация: [ссылка](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/Data_URIs>).  
Пример ссылки с протоколом data: <a href="data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E" download="test2.html">ссылка</a>  
```
<a href="data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E" download="test2.html">ссылка</a>
```

**Спойлеры**  
{% raw %}
```html
<details markdown="1">
<summary markdown="0">+ Сегодня в программе</summary>
* Table of Content  
{ : toc}
</details>
```
{% endraw %}



 




