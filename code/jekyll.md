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

Главная задача Jekyll преобразовать статью формате markdown в HTML. После этого его работа завершена - на выходе получаем пачку html-файлов. Но вся мякотка кроется какраз в процессе их создания - текстовые статьи могут обрабатываться как пользователь то запрограммирует

Есть и другие [генераторы статичных сайтов](./hosting.md#cms-static), в том числе более удобные. Я выбрал именно этот, так как он работает на серверах Github Pages. Это значит, что можно на любом устройстве отредактировать страницу через web-интерфейсе гитхаба. Система автоматизации **github actions** запустит Jekyll, тот пересоберет сайт и опубликует его.

## Разметка Markdown
Про **Markdown** у меня есть целая [**статья**](./markdown.md). Обычно его используют для написания статей. Перейди по ссылке, глянь. Здесь скажу лишь это текстовый формат, пригодный для чтения человеком. Когда в далеком будущем технологии захлебнутся во всем этом джаваскрипте, то потомкам останутся читабельные исходники. Скажи нет проприетарным форматам - используй markdown!

На github используется парсер md-файлов [kramdown](https://devhints.io/kramdown). В целом нормально работает. У него есть полезные особенности, про которые стоит знать
- Table of Content
- инклюд параметров в элементы
- настройка парсинга внутри div- и span-элементов html (через файл конфига)

```
- Содержание
{: toc }
## Заголовки, которые не нужно вносить в содержание, следует пометить классом  
{: .no_toc }
```

```
## Include parameters to HTML-tag
{: #id .class markdown="1" }
```


## Настройка Github Pages
Мой сайт хостится на [GitHub Pages](https://pages.github.com/). Данный сервис предоставляет энтузиастам **бесплатный хостинг для документации** (до 1ГБ на сайт). Так что если я вдруг забью на поддержку сайта - он не загнется, как это было бы с платным хостингом (upd. домен тоже лучше использовать стандартный `github.io`)

Что бы **захостить сайт на Github Pages**, необходимо:
- На сайте <https://github.com/> создать репозиторий с названием `username.github.io`
- В настройках репозитория на вкладке Pages активировать публикацию сайта
- Создать в корне репозитория файл index.md - это будет главная страница
- Создать файл `_config.yml` и прописать в него строчку `theme: jekyll-theme-cayman`. Это установит [тему](#темы)
- Все, сайт доступен по адресу `username.github.io`. Можно переходить к наполнению

Дальше можно настраивать темы и писать свои скрипты. На возможность здесь завязано очень много функций, поэтому если захочешь что-то поменять, то прирдется учиться редактировать темы

## Отладка локально
Прежде чем перейти к дебрям, расскажу как поднять отладочную среду у себя на компе

Что нужно установить:
- **Ruby** - интерпретатор языка программирования
- **Ruby библиотеки** - bundle, jekyll... Подтянутся автоматом из файла Gemfile
- **Github Desktop** - система контроля версий **git** с графическим интерфейсом. Понадобится для заливки(push) в репозиторий
- **Notepad++** - редактор текстовых файлов с подсветкой markdown

После установки Ruby со всеми зависимостями и скачивания репозитория с github, нужно запустить cmd в папке сайта. Далее запустить среду отладки

``` cmd
jekyll serve --open-url 127.0.0.1:4000
```

Для простоты можно в корне сайта создать файл `debug.cmd` с заранее прописаными командами и просто запускать его двойным кликом.

Локально собранный сайт нужен для отладки, но в принципе можно заархивировать папку с .html и залить собранный сайт на ближайший хостинг - все будет работать. При изменении исходников, разумеется всю процедуру придется повторить заново. Что бы этого всего не повторять вручную, рекомендуется систему сборки ставить на сервере

Также для отладки создан плагин <https://github.com/jekyll/jekyll-admin>

## Темы
При создании html, за основу берутся шаблоны. Они хранятся в папке `_layouts`. Шаблон представляет собой html-файл, в который потом вставляется текст статьи и другие переменные. 

Jekyll стремится быть простым снаружи, не гляда на всю сложность под капотом. Поэтому он не делает каких-то неявных манипуляций со страницами, только то что прописано шаблоне или в `_config.yml`. upd. А вот github делает - если параметр в конфиге не задан, то он его меняет на дефолтный

Основной шаблон, который используется по умолчанию для генерации страниц: `/_layouts/default.html`.  Полную **структуру каталогов** можно посмотреть в исходниках тем. Показательный пример шаблона смотри в теме Cyan (ссылка ниже)

- [Про назначение папок на оф.сайте](https://jekyllrb.com/docs/structure/)
- [Cyan](https://github.com/pages-themes/cayman) - [демо](https://pages-themes.github.io/cayman/)
- [minima](https://github.com/jekyll/minima) - [демо](https://jekyll.github.io/minima/)
- [just-the-docs](https://github.com/pmarsceill/just-the-docs) - [демо](https://just-the-docs.com/)
- [lynn9388/light-blog](https://github.com/lynn9388/light-blog) - [демо](https://lynn9388.github.io/light-blog/ )
- Тема <https://github.com/mmistakes/minimal-mistakes> 
- Тема <https://github.com/mmistakes/jekyll-theme-skinny-bones>
- Тема <https://github.com/holman/left>
- <https://github.com/poole/lanyon>
- <https://github.com/barryclark/jekyll-now>
- [Тема hyde](https://github.com/poole/hyde)
- [documentation-theme-jekyll](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_publishing_github_pages.html)
- [hagura](https://github.com/sharu725/hagura) + [порт на svelte](https://github.com/sharu725/hagura-sveltekit) + [демо](https://hagura.webjeda.com/) 
- [chola](https://github.com/sharu725/chola) + [демо](https://chola.sveltethemes.dev/). Это не тема, а просто макет на svelte 

## Файл конфигураци \_config.yml
В файле ```_config.yml``` задаются глобальные настройки рендеринга сайта. Формат написания конфигов `YAML`. Ниже пример настроек, которые я выработал для себя. Уверен, можно напихать намного больше всего в конфиг, но я предпочитаю использовать необходимый минимум

``` yaml
# Глобальные переменные
title: Домик
#url: ""
#baseurl: ""

# Конфигурация
theme: jekyll-theme-cayman
timezone: Europe/Kiev
markdown: kramdown
highlighter: rouge

# Разрешить рендерить markdown внутри html-тегов
# Но для единичных случаев лучше внедрить html-атрибут markdown="1" или "0"
kramdown:
  parse_span_html: true
  parse_block_html: true
  
# Заранее заданные переменные для файлов
defaults:
- scope:
    type: pages
  values:
    layout: default

# Модули. Список поддерживаемых гитхабом: https://pages.github.com/versions/
plugins:
  - jekyll-redirect-from
  - jemoji
  - jekyll-paginate
  - jekyll-gist

```

## Liquid-скрипты
**Liquid** язык написания скриптов. Jekyll предлагается использовать сайт как блог, но можно все перестроить под себя с помощью Liquid-скриптов. Серверная же часть по-прежнему представляет из себя набор html-файлов. И это плюс: **статика держит невероятные нагрузки!**

Все скрипты отрабатывают при сборке, дальше работает только javascript. Соответственно, все что требуется от серверной стороны, должно быть подготовлено заранее. Например поиск по сайту не может работать на серверной стороне, но если базу перенести в статичный файл, то javascript справится

Философия Jekyll возлагает огромную часть функционала на темы. Так что, что бы добавить какую-то функцию на свой сайт, скорее всего, придется написать ее самостоятельно

Через Liquid реализованы: Переменные, Условия, Циклы и Фильтры... Кстати Liquid-скрипты очень похожи на TPL-шаблоны в OpenCart, возможно, это одно и то же.

Шаблонные скрипты удобно подключать черед инклюд: `{% raw %}{% include dir-ls.md %}{% endraw %}`

Дока от Jekyll: <https://jekyllrb.com/docs/liquid/>  
Дока Shopify (автор liquid): <https://shopify.github.io/liquid/>

## Переменные

Переменные можно вывести в тело страницы {% raw %}`{{ page.title }}`{% endraw %} или использовать в условиях/циклах без фигурных скобочек

Задать переменную можно так:
- {% raw %}`{% assign my_var = "value" %}`{% endraw %}
- {% raw %}`{% capture my_var %}value{% endcapture %}`{% endraw %}
- Задать в заголовке страницы
- Задать в конфиге

Полезное:
- [Дока от Jekyll](https://jekyllrb.com/docs/variables/)
- [Дока от Shopify](https://shopify.github.io/liquid/tags/variable/)
- [Про переменную site.github](https://jekyll.github.io/github-metadata/docs/site.github)

## Условия
Условия работают через опереатор IF [и другие](https://shopify.github.io/liquid/tags/control-flow/).  
Поддерживаемые [логические опреаторы](https://shopify.github.io/liquid/basics/operators/): ```==, !=, >, <, >=, <=, or, and, contains```

{% raw %}
```
{% if site.theme == "manima" and page.layout %}
На странице используется тема Minima со стандартным шаблоном
{% endif %}
```
{% endraw %}

## Фильтры
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

## Циклы
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

## Экранирование
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



## Коментарии
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


## HTML

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
Пример для данной страницы в [самом верху](). Заголовки, которые не нужно вносить в содержание, следует пометить классом `{: .no_toc }`

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


