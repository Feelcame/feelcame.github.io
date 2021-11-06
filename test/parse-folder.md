---
comments: true
---

## Скрипт для вывода списка страниц в папке
В любом месте страницы можно написать одну строчку и она выведет список страниц подходящих по параметрам.  
{% raw %}```{{ include directory-listing.md tag="железо" }}```{% endraw %}

Нужно спарсить папку ```/projects/```.
Если передан параметр ```dir```, то парсить полностью всю папку по принятому адресу относительно корня сайта.
Если передан параметр ```tag```, то вывести только те страницы, которые помечены тегом, нопр. "hardware".  
Если комбинация этих параметров, то вывести только страницы с нужным тегом в  данной папке.
Если параметров не передано - парсить текущую папку (из которой происходит вызов).

## Тестовый пример

1. взять все страницы
2. выбрать только те что в нужной папке
3. выбрать только те что с нужным тегом
4. вывести список оставшихся

{% assign test = "true" %}

{% assign directory = include.dir %}
{% if test == "true" %}{% assign directory = "/test/" %}Переданный параметр dir: ({{ directory }})<br>{% endif %}

{% assign rec_tag = include.tag %}
{% if test == "true" %}{% assign rec_tag = "" %}Переданный параметр tag: ({{ rec_tag }})<br>{% endif %}

{% assign allpages = site.pages | sort: "path" %}
{% if test == "true" %}Первая страница на всем сайте: {{ allpages[0].url }}<br>{% endif %}

{% assign dirpages = allpages | where: "dir",  directory %}
{% if test == "true" %}Первая страница  в папке: {{ dirpages[0].url }}<br>{% endif %}

{% assign resultpages = dirpages | sort: "date" %}

{% if test == "true" %}Все страницы с тегом ({{ rec_tag }}):<br>{% endif %}

<ol reversed id="navigation">
{% for pg in resultpages %}
{% if pg.tags contains rec_tag or rec_tag == "" %}
<li><a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: "New page" }}</a> 
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endif %}
{% endfor %}
</ol>

## Протестируем
{% include directory-listing3.md dir="/software/" %}


## Листинг кода
{% raw %}
``` 
{% assign test = "true" %}

{% assign directory = include.dir %}
{% if test == "true" %}{% assign directory = "/projects/" %}Переданный параметр dir: ({{ directory }})<br>{% endif %}

{% assign rec_tag = include.tag %}
{% if test == "true" %}{% assign rec_tag = "" %}Переданный параметр tag: ({{ rec_tag }})<br>{% endif %}

{% assign allpages = site.pages | sort: "path" %}
{% if test == "true" %}Первая страница на всем сайте: {{ allpages[0].url }}<br>{% endif %}

{% assign dirpages = allpages | where: "dir",  directory %}
{% if test == "true" %}Первая страница  в папке: {{ dirpages[0].url }}<br>{% endif %}

{% if test == "true" %}Все страницы с тегом ({{ rec_tag }}):<br>{% endif %}

<ol reversed id="navigation">
{% for pg in dirpages %}
{% if pg.tags contains rec_tag or rec_tag == "" %}
<li><a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: "New page" }}</a> 
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endif %}
{% endfor %}
</ol>
```
{% endraw %}



