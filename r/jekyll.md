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

Jekyll - это типичный [генератор статичных сайтов](/r/cms.md#static). На вход он берет статьи в формате [markdown](/r/markdown.md), а на выходе отдает пачку HTML-файлов. Он по умолчанию работает на серверах Github Pages, значит отпадает необходимость запускать сборку самостоятельно. Все произойдет автоматически - тебе остается только наблюдать за этим как за магией


## Первый запуск сайта
На самом деле запустить сайт на github-pages проще, чем может показаться. Даже если ты не сможешь с пол-пинка разобраться, рекомендую вникнуть в тему, так как сайт на хостинге от гитхаба дает массу преимуществ. Во-первых - это бесплатно, а значит твой сайт не удалят за неуплату. Во-вторых - ты сам контролируешь инфраструктуру сайта, можно под корень поменять шаблон рендеринга сайта

- Зарегистрируйся на сайте github.com
- Создай новый репозторий с именем username.github.io
- В корне создай файл index.md и напиши в нем "hello world"
- В настройках репозитория включи публикацию сайта через пункт "Pages". По желанию можешь выбрать одну из стандартных тем оформления

Все, сайт будет доступен по адресу username.github.io. Можно переходить к наполнению. Обрати внимание, что username надо заменить на твой логин на сайте (напоминание для ракушек)



## Темы оформления
Jekyll собирает страницы на основе шаблонов. Они хранятся в папке `_layouts`. Шаблон представляет собой html-каркас, в который как кирпичики вставляются остальные данные. Дефолтный шаблон - `/_layouts/default.html`.  Темы представляют из себя заготовки структуры сайта. Их можно менять или создать свою на основе предложенных. На моем сайте установлена немного модифицированная тема "Cyan".


- Структура каталогов <https://jekyllrb.com/docs/structure/>
- Тема Cyan - [репозиторий](https://github.com/pages-themes/cayman), [демо](https://pages-themes.github.io/cayman/)
- Тема minima - [репозиторий](https://github.com/jekyll/minima), [демо](https://jekyll.github.io/minima/)


## Отладка локально
Прежде чем перейти к дебрям, расскажу как поднять отладочную среду у себя на компе. Это может быть полезно, так как сборка локально происходит значительно быстрее.

Установить:
- [**Github Desktop**](#) - система контроля версий **git** с графическим интерфейсом. Понадобится для заливки (push) изменений в репозиторий
- [**Ruby**](#) - интерпретатор языка программирования
- **Зависимости** - подтянутся автоматом из файла Gemfile. Запустить установку командой `bundle install` в папке сайта. 
- [**Notepad++**](#) - редактор текстовых файлов с подсветкой markdown

Запустить:
- На гитхабе в корне репозитория выбери скачать репо. Скачай репозиторий через Github Pages в укромное местечко
- Если это первый запуск, то нужно установить зависимости (дополнительные библиотеки для работы Jekyll)
- Запустить сборку сайта. Для удобства сделал скрипт `debug.cmd` с единственной строкой `jekyll serve --port 4000 --open-url 127.0.0.1:4000`

При изменении любого из файлов исходников, сайт будет тут же перегенерирован прямо на лету. Очень удобно для отладки. Собранный сайт хранится в папке `/_site/`. Github Desktop будет выгружать на сервер только исходники - сборка происходит на стороне сервера. В принципе можно заархивировать папку с .html и залить собранный сайт на ближайший хостинг - все будет работать. 



## Конфигурация
Если ты хочешь что бы сайт генерировался на сервере гитхаба, то полезно будет ознакомиться с ограничениями:
- Поддерживается [ограниченное количество плагинов](https://pages.github.com/versions/)
- По умолчанию подключены некоторые плагины, которые нельзя отключить

Для того что бы среда отладки максимально соответствовала гитхабовской, предлагаю явно указать захардкодженные параметры в файл конфигурации и соответственно подключить их в Gemfile

<details markdown="1"><summary markdown="0">Gemfile</summary>
```
source "https://rubygems.org"

gem "jekyll"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "tzinfo"
  gem "tzinfo-data"
  gem "jekyll-theme-cayman"
  gem "jekyll-redirect-from"
  gem "jemoji"
  gem "jekyll-paginate"
  gem "jekyll-gist"
  gem "jekyll-relative-links"
  gem "jekyll-optional-front-matter"
  gem "jekyll-titles-from-headings"
  
end
gem "webrick", "~> 1.7"
# gem 'eventmachine', '1.2.7', git: 'https://github.com/eventmachine/eventmachine.git', tag: 'v1.2.7'
gem 'wdm', '>= 0.1.0'
```
</details>


Настройки сайта хранятся в файле `/_config.yml`. По умолчанию он пустой, или может содержит одну строку с названием выбранной темы `theme: jekyll-theme-cayman`. Если какай-то параметр не задан, применяется дефолтное значение. Ниже привожу свой файл конфигурации с комментариями. Я старался максимально заполнить неявно заданные параметры. Вот ссылка на текущий (рабочий) конфиг: [перейти](https://github.com/Feelcame/feelcame.github.io/blob/master/_config.yml)


<details markdown="1"><summary markdown="0">Файл конфигурации</summary>
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
# Но для единичных случаев лучше внедрить html-атрибут {: markdown="1" } или "0"
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
  - rouge
# for github pages compatibility
  - jekyll-optional-front-matter
  - jekyll-titles-from-headings
  - jekyll-relative-links
#  - jekyll-readme-index
#  - jekyll-coffeescript
#  - jekyll-gist
#  - jekyll-github-metadata
#  - jekyll-default-layout
```
</details>


## kramdown	
[**kramdown**](https://devhints.io/kramdown) - парсер текстовых файлов с разметкой [markdown](/r/markdown.md). В целом нормально работает. У него есть важные особенности, про которые стоит знать. Например можно экранировать служебные символы markdown, что бы вывести их буквальное значение. Для этого перед каждым символом нужно поставить бэкслэш: ```\*, \_, \-, \` ```

**Содержание** - позволяет вывести список разделов на странице.
Заголовки, которые не нужно вносить в содержание, следует пометить классом  `.no_toc`
```
- ToC
{: toc }
## Этот заголовок попадет в содержание
## А этот будет проигнорирован
{: .no_toc }
```

**Встроить парметр внутрь HTML-тэга**
```
## Include parameters to HTML-tag
{: #id .class markdown="1" }
```

**Отключить парсинг локально**. Иногда парсер конфликтует с кусками сырого HTML-кода. В данном случае нужно явно задать нужно ли парсить текст внутри блока.
``` html
<details markdown="1"><summary markdown="0">Заголовок спойлера</summary>
Спрятанный внутри спойлера текст
</details>
```


**Конфигурация**

<https://kramdown.gettalong.org/options.html>

<https://www.jekyll.com.cn/docs/configuration/markdown/>


## Liquid-скрипты
**Liquid** - язык написания шаблонов. Синтаксис очень похож на TPL-шаблоны в OpenCart, возможно, это одно и то же. 

Все скрипты отрабатывают при сборке, дальше работает только javascript. Соответственно, все что требуется от серверной стороны, должно быть подготовлено заранее. Например поиск по сайту не может работать на серверной стороне, но если базу перенести в статичный файл, то javascript справится. [Как это реализовано на моем сайте](#)

Через Liquid реализованы: 
- Переменные
- Условия
- Циклы
- Фильтры

Часто используемые скрипты удобно вынести в отдельный файл и подключать черед инклюд: 
{% raw %}
```
{% include dir-ls.md %}
```
{% endraw %}

Дока от Jekyll: <https://jekyllrb.com/docs/liquid/>  
Доки на оф.сайте (Shopify): <https://shopify.github.io/liquid/>

### Переменные

Вывести переменную: {% raw %}`{{ page.title }}`{% endraw %}. В условиях/циклах использовать без фигурных скобочек

Задать переменную можно так:
- {% raw %}`{% assign my_var = "value" %}`{% endraw %} - простая переменная
- {% raw %}`{% capture my_var %}value{% endcapture %}`{% endraw %} - внутри можно выполнять сложные операции
- Задать в заголовке страницы
- Задать в конфиге (глобальные переменные)

Полезное:
- Дока от Jekyll <https://jekyllrb.com/docs/variables/>
- Дока от Shopify <https://shopify.github.io/liquid/tags/variable/>
- [Про переменную site.github](https://jekyll.github.io/github-metadata/docs/site.github)

### Условия
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


## Экранирование и комментарии

**Экранирования блоков кода**. Когда нужно отобразить Liquid-скрипт в исходном виде, без его выполнения. Данная штука может экранировать что угодно, кроме себя самого, [но есть хак ;-)](https://user-images.githubusercontent.com/17731587/140237209-3e4dc5fc-dcba-4331-8e81-0c39747712b7.png)

    {% raw %}{%{% endraw %} raw %}	
	{%- raw %}
    ```
    {{ page.title }}
    ```
	{% endraw %}
	{%- raw %}{%{% endraw %} endraw %}	


**Коментарии**  
Шаблонизатор Liquid предоставляет возможность отменить вывод части страницы, при этом весь код в нем тоже не будет выполнен.

{% raw %}
```
{% comment %}Этот комментарий никогда не попадет на страницу {% endcomment %}
```
{% endraw %}
{% comment %}
**Однострочный комментарий**. В сообществе придумали еще один вариант - объявнение переменной, которая нигде не используется и не выводится.
```
[//]: # "This is comment"
```


**Комментарий HTML**. Ну это классика. Весь код выполняется, но браузером не отображается
```
<!-- Комментарий HTML сохранится в исходниках страницы -->
```
{% endcomment %}
<!-- Обожаю смотреть исходники https://youtu.be/dQw4w9WgXcQ -->


## Подсветка синтаксиса

Чтобы подсветить синтаксис нужно указать язык после открытия блока кода. Список доступных на [официальном сайте хайлайтера Rouge](https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers). Пример ниже:


    ``` html
	<strong id="test">Hello world!</strong>
    ```
	
``` html
<strong id="test">Hello world!</strong>
```

**Через liquid-скрипт:**

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

**Без разукрашивания:**
- четыре пробела перед каждой строчкой
- строчный вывод кода: ``` `это код` ```

## Переадресация

Есть два путя... Первый - permalink, жесткое изменение ссылки на статью. Прямая ссылка автоматически переадесует на permalink. Доки: <https://jekyllrb.com/docs/permalinks/>
``` yaml
permalink: /:basename
```
Второй - через плагин [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from). Для начала нужно его активировать (\_config.yml):
``` yaml
plugins:
  - jekyll-redirect-from
```

Задать переадресацию так:
``` yaml
redirect_from: 
  - /soft/windows/
  - /soft/windows
redirect_to: https://google.com
```
По указанному пути будут созданы файлы-заглушки с переадресацией. Указывать можно несколько путей сразу. В примере первая строчка (со слешем в конце) создаст страницу index.html внутри папки, а вторая создаст файл windows.html. Этот плагин позволяет также делать переадресацию из текущей страницы



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

- Подстветка синтаксиса <https://rouge.jneen.net/>

- переменные (наглядно) <https://it.knightnet.org.uk/kb/ghjekyll/standard-attributes/>


**Сторонние темы**
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




- Админка в стиле вордпрес <https://github.com/jekyll/jekyll-admin>
