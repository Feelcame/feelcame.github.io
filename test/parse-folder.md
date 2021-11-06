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

{% assign first_tag = include.tag | split: " " | first %}
include.tag: {{ first_tag }}<br>
{% assign directory = include.dir | split: " " | first %}
include.dir: ({{ directory }})<br>
{% assign directory = "/projects/" %}
directory: {{ directory }}<br>
{% if directory == "" %}{% assign directory = page.dir %}{% endif %}
if !directory: {{ directory }}<br>


{% assign allpages = site.pages | sort: page.path %}
allpages: {{ allpages[0].url }}<br>
{% assign dirpages = allpages | where: "dir",  directory %}
dirpages: {{ dirpages[0].url }}<br>
{% assign tagpages = dirpages | where: "tags",  first_tag %}
tagpages: {{ tagpages[0].url }}<br>
{% assign resultpages = tagpages %}
resultpages: {{ resultpages[0].url }}<br>

<ol reversed id="navigation">
{% for page in resultpages %}
<li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title | default: "New page" }}</a> 
<time class="shaded">{{ page.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endfor %}
</ol>

## Листинг кода
{% raw %}
``` 
{% assign first_tag = include.tag | split: " " | first %}
{% assign directory = include.dir | split: " " | first %}
{% if directory == "" %}{% assign directory = page.dir %}{% endif %}

{% assign allpages = site.pages %}
{% assign dirpages = allpages | where: "dir",  directory %}
{% assign tagpages = dirpages | where: "tags",  first_tag %}
{% assign sortedpages = tagpages | sort: 'date' | reverse %}
{% assign allowedpages = sortedpages | where_exp: "page", "page.index >= 0"	 %}
{% assign resultpages = allowedpages %}

<ol reversed id="navigation">
{% for page in resultpages %}
<li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title | default: "New page" }}</a> 
<time class="shaded">{{ page.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endfor %}
</ol>
```
{% endraw %}


## Тесты


