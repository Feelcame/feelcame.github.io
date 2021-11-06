---
comments: true
modified: 2021-11-06T11:58:23+02:00
index: 1
---

## Jekyll: вывод списка страниц в папке 
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

## TODO

| strip_newlines <https://shopify.github.io/liquid/basics/whitespace/>  
| lol

{{ site.github.source.path}}/_includes/listdir.md }}  


## Листинг кода
Код тут: <https://github.com/Feelcame/feelcame.github.io/blob/master/_includes/drlis.md>

{% raw %}
``` html
{%- comment -%}Этот скрипт выводит список страниц в директории. Можно передать "dir" и "tag"
{%- endcomment -%}

{%- assign debug = false -%}
{%- assign directory = include.dir | default: page.dir -%}
{%- assign rec_tag = include.tag | default: "" -%}
{%- assign allpages = site.pages | sort: "path" -%}
{%- assign dirpages = allpages | where: "dir",  directory -%}
{%- assign datepages = dirpages | sort: "date" | reverse -%}
{%- assign sortedpages = datepages | sort: "index" | reverse -%}

Все страницы в папке ({{ directory }}){%- if rec_tag != "" %} с тегом ({{ rec_tag }}){%- endif -%}.  
{% if debug %}Allpages[0]: ({{ allpages[0].url }}). Dirpages[0]: ({{ dirpages[0].url }}){% endif -%}

<ol reversed id="navigation">
{%- for pg in sortedpages -%}
{%- if pg.tags contains rec_tag or rec_tag == "" -%}
{%- assign index = pg.index | default: nil -%}
{%- if index > 0 or index == nil %}
<li>{%- if index > 0 -%}📌{%- endif -%}
<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a> 
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time>
</li>
{% endif -%}
{%- endif -%}
{%- endfor -%}
</ol>
```
{% endraw %}

### Передано TAG и DIR
```{ % include drlis.md dir="/projects/" tag="hardware" %}```

{% include drlis.md dir="/projects/" tag="hardware" %}

### Передано TAG
```{ % include drlis.md tag="hardware" %}```

{% include drlis.md tag="hardware" %}

### Передано DIR
```{ % include drlis.md dir="/projects/" %}```

{% include drlis.md dir="/projects/" %}

### Тест без параметров
```{ % include drlis.md %}```

{% include drlis.md %}

