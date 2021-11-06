---
date: 2021-11-05T11:58:23+02:00
modified: 2021-11-06T11:58:23+02:00
comments: true
index: 1
tags: coding
---

## Jekyll: вывод списка страниц в папке 
В любом месте статьи можно написать одну строчку и она выведет список всех страниц подходящих по параметрам.  
```{ % include drlis.md dir="/projects/" tag="hardware" %}```

Код тут: <{{ site.github.repository_url }}/blob/master/_includes/drlis.md>

## Описание
1. Если передан параметр ```dir```, то парсить полностью всю папку.  
2. Если передан параметр ```tag```, то вывести только те страницы, которые помечены нужным тегом.  
3. Если параметров не передано - парсить текущую папку (из которой происходит вызов).  
4. Вывести список оставшихся


## New...

{% include drlis2.md tag="" %}


## Листинг кода

<details markdown="1"><summary markdown="0">+ Проверенно работает 2021-11-06</summary>

{% raw %}
``` html
{%- comment -%}Этот скрипт выводит список страниц в директории. Можно передать "dir" и "tag"  
{%- endcomment -%}

{%- assign debug = false -%}  
{%- assign directory = include.dir | default: page.dir -%}  
{%- assign rec_tag = include.tag | default: "" -%}  
{%- assign allpages = site.pages | sort: "path" -%}  
{%- assign dirpages = allpages | where: "dir",  directory -%}  
{%- assign datepages = dirpages | sort: "date" -%}  
{%- assign sortedpages = datepages | sort: "index" | reverse -%}  

Все страницы в папке ({{ directory }}){%- if rec_tag != "" %} с тегом ({{ rec_tag }}){%- endif -%}.  
{% if debug -%}Allpages[0]: ({{ allpages[0].url }}). Dirpages[0]: ({{ dirpages[0].url }}){%- endif -%}

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
</details>

## Примеры 

<details markdown="1"><summary markdown="0">+ Передано TAG и DIR</summary>
```{ % include drlis.md dir="/projects/" tag="hardware" %}```   
{% include drlis.md dir="/projects/" tag="hardware" %}
</details>

<details markdown="1"><summary markdown="0">+ Передано TAG</summary>
```{ % include drlis.md tag="hardware" %}```   
{% include drlis.md tag="hardware" %}
</details>

<details markdown="1"><summary markdown="0">+ Передано DIR</summary>
```{ % include drlis.md dir="/projects/" %}```   
{% include drlis.md dir="/projects/" %}
</details>


<details markdown="1"><summary markdown="0">+ Нет параметров</summary>
```{ % include drlis.md %}```   
{% include drlis.md %}
</details>

## Ваши отзывы. Напиши что думаешь по этому поводу
