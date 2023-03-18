---
title: Jekyll - CMS для статичных сайтов
date: 2021-09-05T10:40:58+03:00
modified: 2021-11-14T21:16:29+02:00
tags: web
comments: 95
pin: 3
---

<details markdown="1" open><summary markdown="0">Спиок разделов</summary>
* Table of Content
{: toc }
</details>

## Что оно делает
**Jekyll** преобразовывает человекочитаемые markdown-тексты в обычный HTML. У него есть [аналоги](./hosting.md#cms-static), в том числе более удобные.  
Но именно эта CMS работает на серверах Github Pages, что позволяет перегенерировать html из репозитория. То есть можно на любом устройстве отредактировать страницу в интерфейсе гитхаба, а он сам пересоберет сайт и опубликует его.

Про **Markdown** у меня есть целая [статья](./markdown.md). Что бы не повторяться, скажу лишь он значительно ускоряет написание статей. Когда технологии шагнут так далеко, что не смогут обработать весь сегодняшний джаваскрипт, то потомкам останутся читабельные исходники в формате ```.md```.  
На github используется парсер md-файлов [kramdown](https://devhints.io/kramdown) (просто еще одна реализация md на языке ruby)

Этот сайт тоже хостится на [GitHub Pages](https://pages.github.com/). Данный сервис предоставляет энтузиастам **бесплатный хостинг для документации** (до 1ГБ на сайт). Так что если я вдруг забью на поддержку сайта - он не загнется, как это было бы с платным хостингом (upd. Домен тоже лучше использовать стандартный)

Jekyll - это вполне себе CMS. Официально предлагается использовать сайт как блог (читай доки), но можно все перестроить под себя с помощью Liquid-скриптов. Но серверная часть по-прежнему представляет из себя набор html-файлов. И это плюс: **статика держит невероятные нагрузки!**

## Из чего состоит
Эта CMS использует такие технологии:
- [**Jekyll**] - система сборки статических сайтов
- [**markdown**] - язык разметки текста
- [**kramdown**] - парсер-преобразователь из .md в .html
- [**Liquid**] - язык написания скриптов для jekyll

опционально:
- **git** - система контроля версий и заливки(push) в репозиторий
- **github** - хранилище репозиториев с исходными текстами
- **github pages** - публикует сайт в большой интернет
- **github actions** - автоматизирует процесс сборки сайта на github pages при любом изменении
- **heroku** - просто написал его здесь что бы знали что есть альтернативы гитхабу

я использую:
- **Notepad++** - редактор текстовых файлов
- **GitJournal** - Заметки для android с синхронизацией через git. Мой блокнот - это данный сайт
- **в поисках хорошего редактора markdown**. у тебя есть такой? напиши комментарий: [**тык**](#comments)

## Минимум для работы с Github Pages
Что бы **захостить свой сайт на Github Pages**, необходимо:
- На сайте <https://github.com/> создать репозиторий с названием username.github.io
- Создать в корне репозитория файл index.md или index.html. В файлах .md будет обрабатываться markdown, поэтому рекомендую использовать его
- В настройках репозитория на вкладке Pages активировать публикацию сайта.
- Там же, по желанию, выбрать тему. Вместе с ней установится файл ```_config.yml```
- Все, сайт доступен по адресу username.github.io. Можно переходить к наполнению

Еще желательно чуть-чуть разбираться как работает Jekyll и Liquid-скрипты. 

Документация по Jekyll: <https://jekyllrb.com/docs/pages/>  

## Шаблоны страниц
При создании html, за основу берутся шаблоны. Они хранятся в папке _layouts. Когда выбираешь тему оформления в настройках, то в репозиторий сайта, по сути копируются все файлы темы.

По умолчанию для простоты Jekyll не наделен какими либо дополнительными функциями. Он публикует страницу, и на этом заканчивакет работу. Сайт и его функционал буквально приходится написать самому с нуля.  
К сожалению, официальная документация очень куцо описывает функционал кастомизации. И дается очень мало примеров, как надо делать. Информацию буквально приходится выкусывать кусочками из разных источников по кусочкам. Но я смог собрать список полезных ресурсов для изучения большинства фич данной CMS, и ссылки на инфу добавил в самом низу страницы в разделе #полезные-ссылки [тык](#полезные-ссылки)

Основной шаблон, который используется по умолчанию для генерации страниц: ```/_layouts/default.html```.  
Показательный пример шаблона из темы Cyan: [cyan/_layouts/default.html](https://github.com/pages-themes/cayman/blob/master/_layouts/default.html)

Полную **структуру каталогов** можно посмотреть в исходниках тем.  
Вот для примера [репозиторий темы minima](https://github.com/jekyll/minima).  
Про назначение папок читай на оф.сайте: <https://jekyllrb.com/docs/structure/>

**Инклюд**

Некоторые мелкие скрипты удобно подключать черед инклюд
{% raw %}
```
{% include directory-listing.md %}
```
{% endraw %}



## Файл конфигураци (\_config.yml)
В файле ```_config.yml``` задаются все основные настройки сайта. Формат написания конфигов [YAML](#). Все заданные здесь параметры будут доступны из любого места сайта через переменную. Например ```{ { site.theme }}``` выведет название активированной темы. Такие переменныен активно используются в шаблонах страниц.

Через файл ```_config.yaml``` можно очень тонко настраивать сайт. Например изменяя парсер markdown файлов или добавляя модули - эдакие доп. обработчики содержимого перед публикацией. На Github Pages поддерживается строго ограниченный список модулей: [ссылка](https://pages.github.com/versions/)

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
Шаблонизация страниц - отнюдь не новая задача. Шаблоны широко используются в популярных CMS. А конструкторы сайтов на них основаны. В Jekyll принципы сохранились прежние, хоть работает немного по другому.

При генерации страниц Jekyll может исполнить сценарии, так называемые **liquid-скрипты**. Их придумали и реализовали в компании Shopify. 

Через Liquid реализованы: Переменные, Условия, Логика, Фильтры, Циклы... В обзем все, что нужно программисту для счастья.

Shopify использовали их для своего eCommerce решения. Пользователям понравилось, вот и Jekyll тоже перенял этот опыт. Liquid напомнил мне о шаблонах TPL в OpenCart, которая написана на языке PHP. Там тоже используются вставки типа ```{ { page.title }}```, возможно, это одно и то же.

Дока от Jekyll: <https://jekyllrb.com/docs/liquid/>  
Дока Shopify: <https://shopify.github.io/liquid/>

### Переменные  

- **Вывести**: {% raw %}```{{ page.title }}```{% endraw %}. Перед именем переменной содержится ее источник.    
- Задать через **assign**: {% raw %}```{% assign my_var = "value" %}```{% endraw %}
- Здать через **capture**: {% raw %}```{% capture my_var %} anything {% endcapture %}```{% endraw %}
- Задать в заголовке страницы:  
```
---
title: test
---
```

Дока от Jekyll: <https://jekyllrb.com/docs/variables/>  
Дока от Shopify: <https://shopify.github.io/liquid/tags/variable/>  
Про переменную [site.github](https://jekyll.github.io/github-metadata/docs/site.github)

### Условия, Логика
Условия работают через опереатор IF [и другие](https://shopify.github.io/liquid/tags/control-flow/).  
Поддерживаемые [логические опреаторы](https://shopify.github.io/liquid/basics/operators/): ```==, !=, >, <, >=, <=, or, and, contains```

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

Пример:  
{% raw %}
```
{{ "Feelcame" | prepend: "github.com/" }}
```
{% endraw %}  
```
{{ "Feelcame" | prepend: "github.com/" }}
```

Дока от Jekyll:<https://jekyllrb.com/docs/liquid/filters/>  
Дока от Shopify: <https://shopify.github.io/liquid/> (слева в навигации)

### Циклы
В примере ниже через цикл for выводится список всех страниц на сайте. Я использую такой же скрипт, но допиленный под себя - ссылка под примером. 
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

Мой скрипт навигации: [исходники]({{ site.github.repository_url }}/blob/master/_includes/dir-ls.md) и [пример работы](/coding/directory-listing.html)  

### Экранирование
1. Экранирования одного символа обратным слешем ```\*md\*```. Распространяется на большинство служебных символов: (**\* \- \`**)
2. Экранирования блоков кода ```{ % raw %}{ % endraw %}```


Экранировать Liquid скрипт можно обернув его в блок ```{ % raw %}```. Этот тег может экранировать что угодно, 
[кроме себя самого :) ](https://user-images.githubusercontent.com/17731587/140237209-3e4dc5fc-dcba-4331-8e81-0c39747712b7.png)

    {% raw %}{%{% endraw %} raw %}	
	{% raw %}
    ```
    {{ page.title }}
    ```
	{% endraw %}
	{% raw %}{%{% endraw %} endraw %}	



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
<details markdown="1"><summary markdown="0">Заголовок спойлера</summary>
Спрятанный внутри текст. Может содержать в себе <b>HTML</b> или **Markdown** разметку
</details>
```
<details markdown="1"><summary markdown="0">Нажми на меня</summary>
Спрятанный внутри текст. Может содержать в себе <b>HTML</b> или **Markdown** разметку
</details>



### Содержание
```
## Содержание
{: .no_toc }
* Table of Content  
{: toc }
```
Пример для данной страницы в [самом верху](). Заголовки, которые не нужно вносить в содержание, следует пометить классом ```{: .no_toc }```

Да, пометки это тоже важная фича Jekull. О ней я узнал случайно, на официальном сайте об этом не пишут. Если дочитал дор сюда - бери на вооружение



### Подсветка кода
- Три символа обратного ударения ( **\`\`\`** )
- Четыре поробела перед каждой строчкой кода
- Блок highlight. {% raw %}```{% highlight ruby %} ... {% endhighlight %}```{% endraw %}

**Три символа обратного ударения ( \`\`\` )**  
Добавлять нужно в начале и в конце блока кода. Это самый простой вариант вставить код на страницу.
Чтобы работала подсветка, после трех кавычек нужно указать язык ( **\`\`\`** html ). 
Список доступных на [официальном сайте](https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers).

    ``` html
	<strong id="test">Hello world!</strong>
    ```
	
``` html
<strong id="test">Hello world!</strong>
```


**Четыре поробела перед каждой строчкой кода**  
Что бы добавить сами кавычки, как часть кода, мне пришлось комбинировать методы вставки кода. Перед каждой строчкой добавлены по четыре пробела: [**cкриншот**](https://user-images.githubusercontent.com/17731587/140298165-48775712-ffb4-43af-b770-1a14a579233a.png)

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



### Переадресация со старых страниц, постоянные ссылки
Для сохранения работоспособности старой ссылки, при перемещении статьи, юзай плагин <https://github.com/jekyll/jekyll-redirect-from>.

В заголовок файла добавить ```redirect_to``` или ```redirect_from```. Поддерживаются массивы, для переадресации со множества адресов.

В файл \_config.yml нужно добавить:
```
plugins:
  - jekyll-redirect-from
```

**Permalink**
Задает постоянную ссылку на статью. Прямая ссылка автоматически переадесует на permalink

## Полезные ссылки
+ Оф. сайт Jekyll CMS  <https://jekyllrb.com/docs/step-by-step/08-blogging/#list-posts>  
+ Оф. сайт Github Pages <https://pages.github.com>
+ Справка по Github Pages <https://docs.github.com/en/pages>
+ Справка Shopify Liquid <https://shopify.github.io/liquid/>
+ Оф. сайт kramdown parser <https://kramdown.gettalong.org/converter/html.html>
+ Оф. сайт Rogue highlighter <http://rouge.jneen.net/>

- Все про liquid-скрипты на одной странице <https://github.com/Shopify/liquid/wiki/Liquid-for-Designers>
+ Возможно официальны сайт<https://shopify.dev/api/liquid>
- Примеры <https://shopify.dev/docs/themes/liquid/reference/basics>
+ Шпаргалка по Jekyll <https://devhints.io/jekyll>  
+ Шпаргалка по Jekyll для Github<https://devhints.io/jekyll-github>  
- Data Files <https://jekyllrb.com/docs/datafiles>
- GitHub Metadata, a.k.a. site.github <http://jekyll.github.io/github-metadata/site.github/>
- тема оформления <https://github.com/sergiokopplin/indigo>

- Шпаргалка по Markdown <http://bustep.ru/markdown/shpargalka-po-markdown.html#tables>
- Источник примера ниже <http://alexprivalov.org/markdown-short-reference>
- А это инфа по настройке jekyll <https://webref.ru/dev/building-jekyll-site/converting-static-site-to-jekyll>
- Дока как по апи гитхаба вытянуить комменнтарии из issue <https://docs.github.com/en/rest/reference/issues#comments>
- Пример комментов через issues <https://github.com/dwilliamson/donw.io>
+ Красивая тема <https://mademistakes.com/work/hpstr-jekyll-theme/>
+ <https://idratherbewriting.com/documentation-theme-jekyll/mydoc_commenting_on_files.html>
+ <http://parpersson.github.io/Manualmall/pages/>
- <https://runebook.dev/ru/docs/jekyll/liquid/filters/index>

- <http://jlord.us/forkngo/>
- <http://jlord.us/sheetsee.js/>

- Коллекция плагинов (не работают на github) <https://github.com/planetjekyll/awesome-jekyll-plugins>
- breadcrumbs <https://jekyllcodex.org/without-plugin/breadcrumbs/>

- Читшип по markdown <https://devhints.io/kramdown>
- Очень хороший разбор нюансов в kramdown <http://prgssr.ru/articles/osobennosti-sintaksisa-kramdown-chast-1.html>

- тема оформления <https://github.com/sergiokopplin/indigo>

- markdown kramdown syntax ```{: .class #id key="value" download="" }``` <https://about.gitlab.com/blog/2016/07/19/markdown-kramdown-tips-and-tricks/>
- и еще про ```{: }``` <https://kramdown.gettalong.org/converter/html.html>

- про концепцию статичных сайтов <https://dou.ua/lenta/articles/jamstack/>
- <https://github.com/christian-fei/Simple-Jekyll-Search>
- <https://github.com/picocms/Pico>


- Тема <https://github.com/mmistakes/minimal-mistakes> 
- Тема <https://github.com/mmistakes/jekyll-theme-skinny-bones>
- Тема <https://github.com/holman/left>
- <https://github.com/poole/lanyon>
- <https://github.com/barryclark/jekyll-now>
- [Тема hyde](https://github.com/poole/hyde)

