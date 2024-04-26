---
title: Из чего же сделаны наши веб-сайты
date: 2021-01-17T00:34:10+02:00
modified: 2022-06-12T21:33:45+03:00
comments: 101
tags: web
pin: 6
---

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
4. <http://shpargalkablog.ru/2013/09/html-cheat-sheet.html>


## HTML разметка
Все сайты написаны на HTML. Всякие переносы или ссылки передаются в браузер в виде <тегов>. Это такой способ разметки текста, что бы браузер знал что как разукрасить. На этом функции HTML - все, закончились. Главное соблюсти структуру

Для более удобного редактирования текстов используются графические редакторы текста. Но компьютер тупой, он ожидает получить HTML. Поэтому при сохранении статьи, программа редактор преобразовывает все в HTML.
Можно также писать с разметкой Markdown, которая является компромиссом между машинным и человеческим форматом восприятия. Почитай подробнее в статье



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
Когда сайт написан, его нужно разместить в интернете. Самый простой вариант - это загрузить свои файлы на сервер в дата центре. Как правило, хостинг сайта размером до 1ГБ обходится $1/месяц. Но иногда можно и бесплатно. Список проверенных хостеров вынесен на отдельную страницу: [Хостинг CMS](./hosting.md#hosting).

## Как управлять сайтом
Для управления сайтом лучше всего использовать CMS - систему управления сайтом. Про их разновидности в статье [**Хостинг CMS**](./hosting.md#cms).

Как правило, админка крутится на том же сервере, где и хранятся все данные сайта. Поэтому нередки случаи когда мы видим новость что десятки государственных сайтов были взломаны, а украденные данные продаются в дарквэбе. К сожалению, этого не избежать в системах, где требуется обработка данных "на лету". Но для информационных сайтов отлично подходит статика. Тут даже CMS для статики подвезли. С их помощью можно конвертировать markdown в html. Подробнее в статье [**Хостинг CMS**](./hosting.md#cms).

## В чем кодить
Как писать что-то более сложное чем просто статьи? Например редактировать дизайн своего сайта. Для этого лучше всего использовать разные IDE. Они упростят рутинные задачи. Хотя и вряд ли помогут разобраться со сложностью кода. Гуглить все-равно придется. 
- Notepad++ - простой блокнотик, переваривает все
- VSCode - универсальная IDE. Посложнее и понавороченнее.
- Другие программы по теме в статье [Инструменты программиста](../profi-soft.md#web)

## Песочницы
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
8. [codesandbox](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics?on=codesandbox) 
9. [gitpod](https://gitpod.io/?on=gitpod#https://github.com/withastro/astro/tree/latest/examples/basics) 
10. [stackblitz](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics?file=README.md&on=stackblitz) 
11. <https://developer.mozilla.org/ru/play>

#### Совместное редактирование
- <https://collabedit.com/>
- <https://syncfiddle.net/>
- <https://codeshare.io/>
- <https://codesandbox.io/>
- <https://visualstudio.microsoft.com/ru/services/live-share/> <https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare> <https://www.youtube.com/watch?v=7LQlzwbmxPg>
- <https://codeshare.io/>
- <https://techrocks.ru/2020/04/08/12-tools-and-services-for-group-coding/>


### Бьютифаеры, форматтеры
1. [FreeFormatter.com](https://www.freeformatter.com/html-formatter.html)
2. [beautifier.io](https://beautifier.io/)
3. <https://codebeautify.org/jsviewer>
4. <https://html-cleaner.com/js/>
5. <https://beautifytools.com/javascript-beautifier.php>

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
<summary markdown="0">Сегодня в программе</summary>
* Table of Content  
{ : toc}
</details>
```
{% endraw %}


**Встраивание медиа в страницу**
<audio controls="" name="media"><source src="https://noasrv.caster.fm:10001/stream" type="audio/mpeg"></audio>
```
<audio controls="" autoplay="" name="media"><source src="https://noasrv.caster.fm:10001/stream" type="audio/mpeg"></audio>
```


**Таблица на всю ширину страницы**
(смотри исходник страницы)

<table><tbody style="width:100%;display:table;text-align:center;"><tr>
  <td><a href="#./soft"><b>Софт</b></a></td>
  <td><a href="#./books"><b>Книги</b></a></td>
  <td><a href="#./music"><b>Музыка</b></a></td>
  <td><a href="#./kino"><b>Кино</b></a></td>
</tr></tbody></table>


#wp
<https://themeansar.com/free-themes/>


## Полезные ссылки
- Отличие DNS-записей <https://developers.cloudflare.com/dns/manage-dns-records/reference/dns-record-types/>


- PicoCSS минималистичный CSS-фреймворк / шаблон для построения сайта
  - оф. сайт <https://picocss.com/examples>
  - сорцы <https://github.com/picocss/examples/blob/master/v2-html/index.html>
  - демо <https://4mrnhq.csb.app/>
- SakurфCSS - современная и красивая замена дефолтных браузерных стилей. Удобно для построения сайта с нуля
  - оф. сайт <https://oxal.org/projects/sakura/demo/?checkbox=on>
  - сорцы <https://github.com/oxalorg/sakura>
  - <https://blog.logrocket.com/styling-webpages-with-sakura-css/>