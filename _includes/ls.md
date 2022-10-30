{%- comment -%}  
Этот скрипт выводит список страниц в директории. Можно передать "dir", "tag" и "pinned".  
Сортирует все найденные страницы по дате (сначала новые). Если у страницы нет даты - она выводится внизу.  
{%- endcomment -%}  

{%- assign directory = include.dir | default: page.dir -%}  
{%- assign rec_tag = include.tag | default: false -%}  
{%- assign spoiler = include.spoiler | default: false -%}
{%- assign showpinned = include.pinned | default: false -%}
{%- assign showdate = include.date | default: false -%}

{%- comment -%}ВСЕ СТРАНИЦЫ{%- endcomment -%}  
{%- 
  assign all_pages = site.pages 
  | where: "dir",  directory 
  | where_exp: "item", "item.pin != 0"
  | where_exp: "item", "item.name != 'redirect.html'"
  | sort: "date" 
  | reverse 
-%}  

{%- comment -%}ТЕГИ{%- endcomment -%}  
{%- if rec_tag and rec_tag != "empty" %}  
{%- assign all_pages = all_pages | where_exp: "item", "item.tags contains rec_tag" -%}  
{%- endif %}  
{%- if rec_tag == "empty" %}  
{%- assign all_pages = all_pages | where_exp: "item", "item.tags == nil" -%}  
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
{% comment %}<!-- Debug. dir: ({{ directory }}). tag: ({{ rec_tag }}), qty: ({{ output_pages.size }}) -->{% endcomment -%}
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
{% unless showdate == "no" %}
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time>
{% endunless %}</li>

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
{%- if showpinned == "yes" %}
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
