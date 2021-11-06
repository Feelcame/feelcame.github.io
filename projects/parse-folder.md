---
comments: true
modified: 2021-11-06T11:21:41+02:00
---

## Скрипт для вывода списка страниц в папке jekyll
В любом месте страницы можно написать одну строчку и она выведет список страниц подходящих по параметрам.  
{% raw %}```{{ include directory-listing.md tag="железо" }}```{% endraw %}

Нужно спарсить папку ```/projects/```.
Если передан параметр ```dir```, то парсить полностью всю папку по принятому адресу относительно корня сайта.
Если передан параметр ```tag```, то вывести только те страницы, которые помечены тегом, нопр. "hardware".  
Если комбинация этих параметров, то вывести только страницы с нужным тегом в  данной папке.
Если параметров не передано - парсить текущую папку (из которой происходит вызов).

**Алгоритм:**
1. взять все страницы
2. выбрать только те что в нужной папке
3. выбрать только те что с нужным тегом
4. вывести список оставшихся

Код тута: <https://github.com/Feelcame/feelcame.github.io/blob/master/_includes/directory-listing3.md>
{% raw %}
```
{% assign debug = true %}
{% assign directory = include.dir | default: page.dir %}
{% assign rec_tag = include.tag | default: "" %}
{% assign allpages = site.pages | sort: "path" %}
{% assign dirpages = allpages | where: "dir",  directory %}
{% if debug %}DIR: ({{ directory }}). TAG: ({{ rec_tag }}). Allpages[0]: ({{ allpages[0].url }}). Dirpages[0]: ({{ dirpages[0].url }}){% endif %}
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

### Тест без параметров
```{ % include directory-listing3.md %}```  
{% include directory-listing3.md %}

### Тест с обоими параметрами
```{ % include directory-listing3.md dir="/projects/" tag="hardware" %}```  
{% include directory-listing3.md dir="/projects/" tag="hardware" %}

### Тест параметра DIR
```{ % include directory-listing3.md dir="/projects/" %}```  
{% include directory-listing3.md dir="/projects/" %}

### Тест параметра TAG
```{ % include directory-listing3.md tag="hardware" %}```  
{% include directory-listing3.md tag="hardware" %}
