---
date: 2021-09-05T10:40:58+03:00
modified: 2021-10-05T10:58:55+03:00
title: Jekyll CMS
---

<details markdown="1"><summary  markdown="0">+ Спиок разделов</summary>
* Table of Content
{: toc }
</details>

## Что оно делает
**Jekyll** преобразовывает человекочитаемые markdown-тексты в обычный HTML. MD - это по сути обычные файлы TXT, но круче. Есть [**статья**](./markdown.md) на эту тему. Используется на GitHub Pages, который позволяет энтузиастам **бесплатно** хостить свои доки. Грех этим не пользоваться! Тем более что когда технологии шагнут так далеко что не смогут обработать весь сегодняшний джаваскрипт, то потомкам останутся читабельные исходники. Этот сайт тоже сделан на jekyll. 

Не глядя на то что jekyll всего лишь конвертирует md в html, это вполне себе CMS. Официально предлагается использовать сайт как блог (читай доки), но можно все перестоить под себя. Он не генерирует страницу из БД при каждом запросе пользователя. И это плюс: статика держит невероятные нагрузки! 

Удобство при написании статей обеспечивают такие функции как: markdown, шаблоны страниц, переменные и liquid-скрипты.

Написан на ruby, соответственно заимствует его синтаксис. Это хорошо, потому что руби очень продуманный высокоуровневый язык. 


## Элементы программирования
При генерации страниц Jekyll может исполнить некоторые сценарии, написанные на ruby. Некоторые из поддерживаемых возможностей: условия, циклы, сортировки...

(тут надо бы добавить примеры и ссылку на официальный сайт)

## Liquid скриптинг
Компания Shopify создала систему гибкого скриптования шаблонов для своего сервиса интернет-магазинов shopify.com. Это напоминает мне о шаблонах TPL в OpenCart 3. Там тоже используются похожие вставки типа \{\{ code \}\}

Так вот, для настройки страниц можно (и нужно) использовать так называемые Liquid-скрипты. Это как голый код на PHP или Ruby, но он предподготовленный и можно использовать только те функции, которые уже заданы и разрешены. При любой ошибке в файле конфигурации перестанет собираться сайт, а при ошибке скипта жидкого скрипта в странице - он будет интерпретировани как обычный текст.  

## Циклы, вывод всех страниц
С помощью цикла for можно вывести список всех страниц (постов) на сайте. То-есть не нужно прописывать ссылки вручную. Это дает возможность сосредоточиться на написании качественного контента вместо того что бы переживать не забыл ли ты часом добавить ссылку в навигацию. Я сначала пытался делать сайт таким образо, поэтому знаком личнго стем какая это попоболь. При количестве страниц больше десяти начинаются сложности.

Пример такого цикла:
``` html
<ul>
  { % for post in site.posts %}
    <li>
      <h2><a href="{ { post.url }}">{ { post.title }}</a></h2>
      { { post.excerpt }}
    </li>
  { % endfor %}
</ul>
```

Это пример для выведения постов. Они должны храниться в папке \_posts и иметь специфичное название 2001-01-01-Filename.md

**Что бы вывести список всех страниц в папке** используй скрипт из исходников этого сайта.  
{% raw %}
``` html
<ol reversed id="navigation">
{% assign allpages = site.pages | where: "dir",  page.dir %}
{% assign sorted = allpages | sort: 'date' | reverse %}
{% for p in sorted %}{% if p.noindex != true %}
<li><a href="{{ p.url | prepend: site.baseurl }}">{{ p.title | default: "New page" }}</a> 
<time class="shaded">{{ p.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endif %}{% endfor %}
</ol>
```
{% endraw %}





### Инклюд

Некоторые мелкие скрипты удобно подключать черед инклюд
```
{ % include directory-listing.md % }
```





## Конфигурация через config.yml
Также стоит знать что кроме "жидких" скриптов для ещё большей кастомизации генератор можно настраивать в файле конфига \_config.yaml. Вплоть до того, что можно изменить парсер markdown файлов. Стандартный, кстати, называется kramdown. Его официальная документация хорошо гуглится [google]

В файле \_config.yml задается вся конфигурация публикуемого с помощью Jekyll сайта. В том числде модули - эдакие доп. обработчики содержимого перед публикацией.

На Github Pages поддерживается строго ограниченный список модулей: <ссылка>

Модули добавляются так:
```
plugins:
  - jemoji
  - jekyll-paginate
  - jekyll-gist
```





**Парсинг markdown внутри html**
Если нужно задать правило для всего сайта:
```
kramdown:
  parse_span_html: true
  parse_block_html: true
```

Если нужно запарсить (1) или наоборот исключить (0) из парсинга всего один блок:
```
<div markdown="1">**markdown _text_**</div>
```





## Полезные фишки
### Спойлеры с форматированием markdown

``` html
<details markdown="1"><summary markdown="0">+ Заголовок спойлера</summary>
Спрятанный внутри текст. Может содержать в себе <b>HTML</b> или **Markdown** разметку, 
если правильно сконфигурировать Jekyll
</details>
```

<details markdown="1"><summary markdown="0">+ Нажми на меня</summary>
Спрятанный внутри текст. Может содержать в себе <b>HTML</b> или **Markdown** разметку, 
если правильно сконфигурировать Jekyll
</details>





### Вывести содержание страницы

```
## Содержание
{: .no_toc }
* Table of Content  
{: toc }
```
Пример для данной страницы в [самом верху](). Заголовки, которые не нужно вносить в содержание, следует пометить как ```{: .no_toc }```





### Вставить листинг кода с подсветкой синтаксиса
Это делается добавлением трех символов обратной кавычки ( **\`\`\`** ) в начале и в конце блока кода. Есть альтернативныйе методы, например добавить четыре пробела перед каждой строчкой кода, но об этом позже.

Можно добавлять подсветку кода. Для этого после трех кавычек нужно написать название языка ( **\`\`\`** html ). 
Подробнее на [официальном сайте](https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting)


    ``` html
    <div class="row">
      <strong id="test">
        your text is here
      </strong>
    </div>
    ```

Пример как это выглядит: 

``` html
<div class="row">
  <strong id="test">
    your text is here
  </strong>
</div>
```

Что бы добавить сами кавычки, как часть кода, мне пришлось перед каждой строчкой добавить по четыре пробела.

---

Если нужно добавить код который содержит двойные фигурные скобки или Liquid скрипт, 

    {% raw %}{%{% endraw %} raw {% raw %}%}{% endraw %}{% raw %}
    ```
    {{ page.title }}
    ```{% endraw %}
    {% raw %}{%{% endraw %} endraw {% raw %}%}{% endraw %}

Иначе оно обработается как команда и будет выведен результат работы этой команды

Этот тег может экранировать что угодно, [кроме себя](https://user-images.githubusercontent.com/17731587/140237209-3e4dc5fc-dcba-4331-8e81-0c39747712b7.png)  
![кроме себя](https://user-images.githubusercontent.com/17731587/140237209-3e4dc5fc-dcba-4331-8e81-0c39747712b7.png)





## Коментарии 
**Нативные комментарии Jekyll**
{% raw %}
```
{% comment %} Этот текст никогда не попадет на страницу {% endcomment %}
```
{% endraw %}

Пример внутри скобок: 
({% comment %} Этот текст никогда не попадет на страницу {% endcomment %}).  
Текст не должен вывестись совсем. Если ты его видишь, значит что то пошло не по плану.



**Еще вариант использовать HTML**.  
В таком случае текст не будет отображаться браузером, но сохранится в исходниках страницы.
``` html
<!-- <strong id="test">hidden</strong> text -->
```
Пример снутри скобок: 
(<!-- <b>hidden</b> text -->).  
Открой исходник страницы что бы увидеть.



**Однострочный комментарий**.  
Представляет из себя объявнение переменной, которая нигде не используется и не выводится.
```

[//]: # "This is comment"
```
Пример ниже:

[//]: # "This is comment"
Ахахa этого же не будет видно на сайте :) 
Вот тебе скриншот  
![image](https://user-images.githubusercontent.com/17731587/140238467-6f68abb2-15e6-410c-84b3-91915680d759.png)





## Более ранние заметки:

Просто тестирую как работает Lykyll :) Напимер вот гитхабовские ссылки
[site.github.repository_url]({{ site.github.repository_url }})  
[site.github.zip_url]({{ site.github.zip_url }})  
[site.github.tar_url]({{ site.github.tar_url }})  

Простая ссылка "a href": <a href="#">Видно?</a>  

**Условия.**  
- if site.github.is_project_page: {% if site.github.is_project_page %}TRUE{% endif %}
- if site.show_downloads: {% if site.show_downloads %}TRUE{% endif %}
- **Логическое "или":** page.title | default: site.title | default: site.github.repository_name:
{{ page.title | default: site.title | default: site.github.repository_name }};

**Переменные логические:**  
- site.github.is_project_page: {{ site.github.is_project_page }}
- site.show_downloads: {{ site.show_downloads }}

**Переменные.**  
- site.copyright: {{ site.copyright | default: :copyright: }};  
- site.github.owner_url: {{ site.github.owner_url }};  
- site.github.owner_name: {{ site.github.owner_name }};  
- site.layout: {{ site.layout }};  
- page.layout: {{ page.layout }};  
- site.github.is_user_page: {{ site.github.is_user_page }};  


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
+ Красивая тема <https://mademistakes.com/work/hpstr-jekyll-theme/>


