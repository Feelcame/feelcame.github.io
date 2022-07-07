---
title: Вывод навигации в Jekyll
date: 2021-11-05T11:58:23+02:00
modified: 2021-11-06T11:58:23+02:00
tags: project coding
comments: false
pin: 5
---

В любом месте страницы можно написать одну строчку и она выведет список всех страниц подходящих по параметрам.  
Синтаксис:
```
{% raw %}
{% include ls.md dir="/projects/" tag="hardware" pinned="only" date="no" %}
{% endraw %}
```

Исходники моего велосипеда тут: [**ссылка**]({{ site.github.repository_url }}/blob/master/_includes/ls.md).  
Репозиторий гитхаб: [**ссылка**](https://github.com/Feelcame/jekyll-directory-listing)

Данный скрипт был написан до того, как я обнаружил туториал от Jekyll: [как сделать навигацию](https://jekyllrb.com/tutorials/navigation/). Но это и хорошо - у меня получилось лучше 👍

## Описание параметров
Все параметры опциональны. Если они не переданы, подставляются стандартные значения.

- **DIR** - 
  Указывает какую папку парсить. Если параметр не передан - парсить текущую папку (из которой происходит вызов).

- **TAG** - 
  Позволяет вывести только те страницы, которые помечены нужным тегом.  

- **PINNED** - 
  Указывает нужно ли перед основным списков вывести список закрепленных в отдельным блоке ```<ul>```. 
  Что бы это работало, параметр должен быть не пустой. Но если в нем передать строку ```only```, то выведется только закреп, а основной список будет скрыт.  
  
  Чтобы добавить страницу в закрепленные - в ней нужно прописать метку ```pin: 1```. Закрепы выводятся в основном списке со скрепкой впереди. 
  Если у страницы задана метка```pin: 0```, то она вообще игнорируется.

- **DATE** - 
  По умолчанию рядом с каждой ссылкой выводится дата публикации, а возле страниц без даты выводится значение по-умолчани. Чтобы его скрыть, в параметре нужно передать строку "no". Это сработает только если у страницы не задана дата


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



<details markdown="1"><summary markdown="0">+ Версия 3.220107 спойлер, закреп, блоки</summary>

{% raw %}
``` html
{%- comment -%}  
Этот скрипт выводит список страниц в директории. Можно передать "dir", "tag" и "pinned".  
Сортирует все найденные страницы по дате (сначала новые). Если у страницы нет даты - она выводится внизу.  
{%- endcomment -%}  

{%- assign directory = include.dir | default: page.dir -%}  
{%- assign rec_tag = include.tag | default: false -%}  
{%- assign spoiler = include.spoiler | default: false -%}
{%- assign showpinned = include.pinned | default: false -%}

{%- comment -%}ВСЕ СТРАНИЦЫ{%- endcomment -%}  
{%- 
  assign all_pages = site.pages 
  | where: "dir",  directory 
  | where_exp: "item", "item.pin != 0"
  | sort: "date" 
  | reverse 
-%}  

{%- comment -%}ТЕГИ{%- endcomment -%}  
{%- if rec_tag %}  
{%- assign all_pages = all_pages | where_exp: "item", "item.tags contains rec_tag" -%}  
{%- endif %}  

{%- comment -%}ЗАКРЕП{%- endcomment -%}  
{%- 
  assign pinned_pages = all_pages 
  | where_exp: "item", "item.pin != nil" 
  | where_exp: "item", "item.pin > 0" 
  | sort: "pin" 
-%}  

{%- comment -%}БЕЗ ДАТЫ{%- endcomment -%}  
{%- 
  assign wo_date_pages = all_pages 
  | where_exp: "item", "item.date == nil" 
  | reverse
-%}  

{%- comment -%}ТОЛЬКО С ДАТОЙ{%- endcomment -%}  
{%- 
  assign output_pages = all_pages 
  | where_exp: "item", "item.date != nil" 
-%} 


{%- comment -%}ФОРМИРУЕМ ВЫВОД{%- endcomment -%}  
{%- capture result -%}
<!-- Debug. dir: ({{ directory }}). tag: ({{ rec_tag }}), qty: ({{ output_pages.size }}) -->
<ol reversed id="navigation">
{%- for pg in output_pages -%}
<li>{%- if pg.pin > 0 -%}:pushpin:{%- endif %}
<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a>
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>

{%- comment -%}ПЕРЕНОСЫ{%- endcomment -%}  
{%- assign ostatok = forloop.length | modulo: 5 -%}
{%- assign modul = forloop.index | plus: 5 | minus: ostatok | modulo: 5 -%}
{%- if modul == 0 and forloop.index != forloop.length -%}<br>{%- endif %}
{% endfor -%}
</ol>

{%- comment -%}СПИСОК СТРАНИЦ БЕЗ ДАТЫ{%- endcomment -%}  
<ul>
{%- for pg in wo_date_pages -%}
<li>{%- if pg.pin > 0 -%}:pushpin:{%- endif %}
<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a>
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>

{% endfor -%}
</ul>
{%- endcapture -%}


{%- comment -%}ФОРМИРУЕМ ЗАКРЕП{%- endcomment -%}  
{%- capture pins -%}
<ul>
{%- for pg in pinned_pages -%}
<li>
<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a>
</li>
{% endfor -%}
</ul>
{%- endcapture -%}


{%- comment -%}ВЫВОДИМ РЕЗУЛЬТАТ{%- endcomment -%}  
{%- if showpinned %}
{{ pins }}
{%- endif %}  

{%- if showpinned !="only" %}
{%- if spoiler -%}
<details markdown="1" open><summary markdown="0">+ {{ spoiler }}</summary>
{{ result }}
</details>
{%- else -%}
{{ result }}
{%- endif -%}
{%- endif -%}

```
{% endraw %}
</details>


<details markdown="1"><summary markdown="0">+ Версия 4.</summary>

{% raw %}
``` html
пока что тут пусто. надеюсь так и останется
```
{% endraw %}
</details>

## Примеры и тесты
На отдельной странице: [ссылка](../demo/directory-listing/)


{% comment %}

<details markdown="1"><summary markdown="0">+ Передано TAG и DIR</summary>
```{ % include ls.md dir="/projects/" tag="hardware" %}```   
{% include ls.md dir="/projects/" tag="hardware" %}
</details>

<details markdown="1"><summary markdown="0">+ Передано TAG</summary>
```{ % include ls.md tag="hardware" %}```   
{% include ls.md tag="hardware" %}
</details>

<details markdown="1"><summary markdown="0">+ Передано DIR</summary>
```{ % include ls.md dir="/projects/" %}```   
{% include ls.md dir="/projects/" %}
</details>


<details markdown="1"><summary markdown="0">+ Нет параметров</summary>
```{ % include ls.md %}```   
{% include ls.md %}
</details>


{% endcomment %}
