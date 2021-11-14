---
date: 2021-11-05T11:58:23+02:00
modified: 2021-11-06T11:58:23+02:00
tags: project coding
comments: true
index: 5
---

## Вывод навигации в Jekyll
В любом месте статьи можно написать одну строчку и она выведет список всех страниц подходящих по параметрам.  
```
{ % include drlis.md dir="/projects/" tag="hardware" %}
```

Мой велосипед тут: <{{ site.github.repository_url }}/blob/master/_includes/drlis.md>

Туториал как сделать навигацию от Jekyll: <https://jekyllrb.com/tutorials/navigation/>

## Описание
1. Если передан параметр ```dir```, то парсить полностью всю папку.  
2. Если передан параметр ```tag```, то вывести только те страницы, которые помечены нужным тегом.  
3. Если параметров не передано - парсить текущую папку (из которой происходит вызов).  
4. Вывести список оставшихся



## Листинг кода

<details markdown="1"><summary markdown="0">+ Версия 1.211106 Проверенно работает</summary>

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


<details markdown="1"><summary markdown="0">+ Версия 2.211108 Проверено. Теперь более читабельные код</summary>

{% raw %}
``` html
{%- comment -%}Этот скрипт выводит список страниц в директории. Можно передать "dir" и "tag"{%- endcomment -%}

{%- assign directory = include.dir | default: page.dir -%}  

{%- assign sorted_pages = site.pages | sort: "path" | where: "dir",  directory | sort: "date" | sort: "index" | reverse -%}  
{%- assign not_pinned_pages = sorted_pages | where_exp: "item", "item.index == nil" -%}  
{%- assign finish_pages = sorted_pages | where_exp: "item", "item.index > 0" | reverse | concat: not_pinned_pages -%}  

{%- assign rec_tag = include.tag | default: "" -%}  
{%- if rec_tag != "" %}  
{%- assign finish_pages = finish_pages | where_exp: "item", "item.tags contains rec_tag" -%}  
{%- endif %}  

{%- comment -%}Дебаг. dir: ({{ directory }}), tag: ({{ rec_tag }}), qty: ({{ finish_pages.size }}).{%- endcomment -%}

<ol reversed id="navigation">
{%- for pg in finish_pages -%}
  <li>{%- if pg.index > 0 -%}:pushpin:{%- endif -%}
    <a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a> 
    <time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time>
  </li>
{%- endfor -%}
</ol>
```
{% endraw %}
</details>



<details markdown="1"><summary markdown="0">+ Версия 3.211111 Добавлен вывод спойлера</summary>

{% raw %}
``` html
пока что тут пусто
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
