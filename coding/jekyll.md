---
title: Jekyll CMS
date: 2021-09-05T10:40:58+03:00
modified: 2021-11-07T10:03:18+02:00
comments: true
index: 1
---

<details markdown="1"><summary  markdown="0">+ Спиок разделов</summary>
* Table of Content
{: toc }
</details>

## Что оно делает
**Jekyll** преобразовывает человекочитаемые markdown-тексты в обычный HTML. 

Про **Markdown** у меня есть целая [статья](./markdown.md). Что бы не повторяться, скажу лишь он значительно ускоряет написание статей. Когда технологии шагнут так далеко, что не смогут обработать весь сегодняшний джаваскрипт, то потомкам останутся читабельные исходники в формате ```.md```.

На [GitHub Pages](https://pages.github.com/), который предоставляет энтузиастам **бесплатный хостинг для документации**, используется именно Jekyll. Грех этим не пользоваться! Этот сайт тоже хостится на гитхабе. 

Не глядя на то что jekyll всего лишь конвертирует md в html, это вполне себе CMS. Официально предлагается использовать сайт как блог (читай доки), но можно все перестроить под себя. Он не генерирует страницу из БД при каждом запросе пользователя. И это плюс: **статика держит невероятные нагрузки!**


## Минимум для работы с Github Pages
Что бы **захостить свой сайт на Github Pages**, необходимо:
- На сайте <https://github.com/> создать репозиторий с названием username.github.io
- Создать в корне репозитория файл index.md или index.html. В файлах .md будет обрабатываться markdown, поэтому рекомендую использовать его
- В настройках репозитория на вкладке Pages активировать публикацию сайта.
- Там же, по желанию, выбрать тему. Вместе с ней установится файл ```_config.yml```
- Все, сайт доступен по адресу username.github.io. Можно переходить к наполнению



## Шаблоны страниц
При создании html, за основу берутся шаблоны. Они хранятся в папке _layouts. Полную структуру каталогов можно посмотреть в исходниках тем. Вот для примера [репозиторий темы minima](https://github.com/jekyll/minima). Когда выбираешь тему оформления в настройках, то к репозиторию сайта по сути заливается содержимое репозитория темы.

Основной шаблон, который используется по умолчанию для генерации страниц: ```/_layouts/default.html```.  
Внутри шаблона используются элементы программирования: [переменные](#переменные), [liquid-скрипты](#liquid-скрипты). Про них ниже.

Код шаблона на примере темы Cyan: [cyan/_layouts/default.html](https://github.com/pages-themes/cayman/blob/master/_layouts/default.html)

## Инклюд

Некоторые мелкие скрипты удобно подключать черед инклюд
{% raw %}
```
{% include directory-listing.md %}
```
{% endraw %}



## Конфигурация через ```_config.yml```
В файле ```_config.yml``` задаются все основные настройки сайта. Формат написания конфигов [YAML](#). Все заданные здесь параметры будут доступны из любого места сайта через переменную. Например ```{ { site.theme }}``` выведет название активированной темы. Такие переменныен активно используются в [шаблонах страниц](#)

Через файл ```_config.yaml``` можно очень тонко настраивать сайт. Например изменяя парсер markdown файлов добавляя модули - эдакие доп. обработчики содержимого перед публикацией. На Github Pages поддерживается строго ограниченный список модулей: <ссылка>

**Модули**
``` yaml
plugins:
  - jemoji
  - jekyll-paginate
  - jekyll-gist
```

**Параметры**
Если нужно задать правило для всего сайта. Например разрешить парсинг markdown внутри html
``` yaml
kramdown:
  parse_span_html: true
  parse_block_html: true
```
Но что бы не сломать сайт, для единичных случаев лучше использоать html-атрибут markdown.  
``` html
<div markdown="1">_markdown_ **разрешен**</div>
```
markdown="1": <span markdown="1">_markdown_ **разрешен**</span>  
markdown="0" <span markdown="0">_markdown_ **запрещен**</span>  


## Программирование
Шаблонизация страниц - отнюдь не новая тема. Шаблоны широко используются в популярных CMS и в конструкторах сайтов. Генератор статики Jekyll работает немного по другому, но принципы сохрангились прежние.

При генерации страниц Jekyll может исполнить сценарии, так называемые [liquid-скрипты](#liquid-скрипты). Их придумали и реализовали в компании Shopify. 

Shopify использовали их для своего eCommerce SaaS решения. Пользователям понравилось и вот, Jekyll тоже перенял этот опыт. Это напоминает мне о шаблонах TPL в OpenCart, которая написана на языке PHP. Там тоже используются вставки типа ```{ { page.title }}```, возможно это и есть liquid.

Лучшая документация всегда у производителя: <https://shopify.github.io/liquid/>

### Переменные  
Задается несколькими путями. Основной - задать в заголовке в формате YAML:  
``` title: test ```

Выводится в двойных фигурных скобках:  
``` {% raw %}{{ page.title }}{% endraw %} ```

Перед именем переменной содержится ее источник.  
Если берешь переменную со страницы, значит:  
``` page.title ```  
Если из глобальных настроек сайта, значит  
``` site.title ```

Также есть сложные источники переменных, например:   
``` site.github.is_project_page ```   

Они все опубликованы на сайте гитхаба, есть даже [ссылка на доку](https://github.com/jekyll/github-metadata/blob/master/docs/site.github.md).  
Там есть интересные переменные. Вот например: [site.github.repository_url]({{ site.github.repository_url }})  

### Условия, Логика
Условия работают через опереатор IF [или другие](https://shopify.github.io/liquid/tags/control-flow/). 
Поддерживаемые [опреаторы](https://shopify.github.io/liquid/basics/operators/): ```==, !=, >, <, >=, <=, or, and, contains```

{% raw %}
```
{% if site.theme == "manima" and page.layout %}
На странице используется тема Minima со стандартным шаблоном
{% endif %}
```
{% endraw %}

### Фильтры
Фильтры модифицируют содержимое переменной. Это пожалуй самое мощное средство автоматизации в Jekyll.
Через них можно делать что угодно, от разворачивания массива до кодирования url. Разве что циклы ими н еполучится заменить.  
Пример: ```{{{ page.title | default: site.title }}}```

Подребнее на сайте [Jekyll](https://jekyllrb.com/docs/liquid/filters/)
 
### Циклы
В примере ниже через цикл for выводится список всех страниц на сайте. 
Я использую такой же скрипт, но допиленный под себя. Можешь посмотреть [исходники]({{ site.github.repository_url }}/blob/master/_includes/drlis.md) и пример работы на [отдельной странице](/coding/directory-listing.html)  
{% raw %}
``` html
<ul>
  {% for page in site.pages %}
  <li>
	<h2><a href="{{ page.url }}">{{ page.title }}</a></h2>
  </li>
  {% endfor %}
</ul>
```
{% endraw %}



### Экранирование
1. Экранирования одного символа обратным слешем ```\*md\*```. Распространяется на большинство служебных символов: (**\* \- \`**)
3. Экранирование переменной ```{{{ page.title }}}```
2. Экранирования блоков кода ```{ % raw %}{ % endraw %}```

Экранировать Liquid скрипт можно обернув его в блок ```{ % raw %}```. Этот тег может экранировать что угодно, кроме себя самого :)  
[image](https://user-images.githubusercontent.com/17731587/140237209-3e4dc5fc-dcba-4331-8e81-0c39747712b7.png)

    {% raw %}{%{% endraw %} raw %}	
	{% raw %}
    ```
    {{ page.title }}
    ```
	{% endraw %}
	{% raw %}{%{% endraw %} raw %}	



### Коментарии
1. Нативные комментарии Jekyll ```{ % comment %}{ % endcomment %}```
2. Комментарий HTML ```<!--  -->```
3. Однострочный комментарий ```[//]: # "This is comment```

{% raw %}
```
{% comment %}Этот комментарий никогда не попадет на страницу {% endcomment %}
```
{% endraw %}

``` html
<!-- Комментарий HTML не будет отображаться браузером, но сохранится в исходниках страницы. -->
```
Открой исходник страницы что бы увидеть пасхалку. <!-- https://youtu.be/dQw4w9WgXcQ -->

Однострочный комментарий представляет из себя объявнение переменной, которая нигде не используется и не выводится.


## Полезные фишки
### Спойлеры с markdown

``` html
<details markdown="1"><summary markdown="0">+ Заголовок спойлера</summary>
Спрятанный внутри текст. Может содержать в себе <b>HTML</b> или **Markdown** разметку
</details>
```
<details markdown="1"><summary markdown="0">+ Нажми на меня</summary>
Спрятанный внутри текст. Может содержать в себе <b>HTML</b> или **Markdown** разметку
</details>



### Содержание
```
## Содержание
{: .no_toc }
* Table of Content  
{: toc }
```
Пример для данной страницы в [самом верху](). Заголовки, которые не нужно вносить в содержание, следует пометить как ```{: .no_toc }```




### Подсветка кода
- Три символа обратного ударения ( **\`\`\`** )
- Четыре поробела перед каждой строчкой кода
- Блок highlight. {% raw %}```{% highlight ruby %} ... {% endhighlight %}```{% endraw %}

**Три символа обратного ударения ( \`\`\` )**  
Добавлять нужно в начале и в конце блока кода. Это самый простой вариант вставить код на страницу.
Чтобы работала подсветка, после трех кавычек нужно указать язык ( **\`\`\`** html ). 
Список доступных на [официальном сайте](https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers).

**Четыре поробела перед каждой строчкой кода**
Что бы добавить сами кавычки, как часть кода, мне пришлось комбинировать методы вставки кода. Перед каждой строчкой добавлены по четыре пробела. 
[Скриншот](https://user-images.githubusercontent.com/17731587/140298165-48775712-ffb4-43af-b770-1a14a579233a.png)

    ``` html
	<strong id="test">Hello world!</strong>
    ```
	
``` html
<strong id="test">Hello world!</strong>
```

**Блок highlight**  
{% raw %}
```
{% highlight html linenos %}
<strong>Hello world!</strong>
{% endhighlight %}
```
{% endraw %}

{% highlight html %}
<strong id="test">Hello world!</strong>
{% endhighlight %}





## Полезные ссылки
+ Официальный сайт Jekyll CMS  <https://jekyllrb.com/docs/step-by-step/08-blogging/#list-posts>  
+ Официальный сайт Github Pages
+ Официальный сайт Shopify Liquid <https://shopify.github.io/liquid/>
+ Официальный сайт kramdown parser <https://kramdown.gettalong.org/converter/html.html>
+ Официальный сайт Rogue highlighter

- Все про liquid-скрипты на одной странице <https://github.com/Shopify/liquid/wiki/Liquid-for-Designers>
+ Возможно официальны сайт<https://shopify.dev/api/liquid>
- Примеры <https://shopify.dev/docs/themes/liquid/reference/basics>
+ Шпаргалка по Jekyll <https://devhints.io/jekyll>  
+ Шпаргалка по Jekyll для Github<https://devhints.io/jekyll-github>  
- Data Files <https://jekyllrb.com/docs/datafiles>
- GitHub Metadata, a.k.a. site.github <http://jekyll.github.io/github-metadata/site.github/>


- Шпаргалка по Markdown <http://bustep.ru/markdown/shpargalka-po-markdown.html#tables>
- Источник примера ниже <http://alexprivalov.org/markdown-short-reference>
- А это инфа по настройке jekyll <https://webref.ru/dev/building-jekyll-site/converting-static-site-to-jekyll>
- Дока как по апи гитхаба вытянуить комменнтарии из issue <https://docs.github.com/en/rest/reference/issues#comments>
- Пример комментов через issues <https://github.com/dwilliamson/donw.io>
+ Красивая тема <https://mademistakes.com/work/hpstr-jekyll-theme/>
+ <https://idratherbewriting.com/documentation-theme-jekyll/mydoc_commenting_on_files.html>
+ <http://parpersson.github.io/Manualmall/pages/>
- <https://runebook.dev/ru/docs/jekyll/liquid/filters/index>



<script src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.0/anchor.min.js" integrity="sha256-lZaRhKri35AyJSypXXs4o6OPFTbTmUoltBbDCbdzegg=" crossorigin="anonymous"></script>
<script>anchors.add();</script>