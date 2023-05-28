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
  | sort: "name" | reverse
  | sort: "date" | reverse 
-%}  
{%- assign dir_size = all_pages.size -%}  

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
{%- if all_pages.size == 0 -%}<p>((пустой список))</p>{%- endif %}
<ol reversed debug_tag="{{ rec_tag }}" debug_count="{{ all_pages.size }}/{{ dir_size }}">
{%- for pg in output_pages -%}
<li>{%- if pg.pin > 0 -%}:pushpin:{%- endif %}
<a href="{{ pg.url | relative_url }}">{{ pg.title | default: pg.name }}</a>
{%- unless showdate == "no" -%}
<time class="shaded">
{{ pg.date | date: "%Y-%m-%d" | default: "" }}</time>
{%- endunless -%}</li>

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
<a href="{{ pg.url | relative_url }}">{{ pg.title | default: pg.name }}</a>
{% unless showdate == "no" %}
{%- if showdate == "yes" -%}{%- assign placeholder = "гггг-мм-дд" -%}{%- endif -%}
<time class="shaded">
{{ pg.date | date: "%Y-%m-%d" | default: placeholder | default: "" }}
</time>
{% endunless %}</li>

{% endfor -%}
</ul>
{%- endcapture -%}


{%- comment -%}ФОРМИРУЕМ ЗАКРЕП{%- endcomment -%}  
{%- capture pins -%}
<ul>
{%- for pg in pinned_pages -%}
<li>
<a href="{{ pg.url | relative_url }}">{{ pg.title | default: pg.name }}</a>
</li>
{% endfor -%}
</ul>
{%- endcapture -%}


{%- comment -%}ВЫВОДИМ РЕЗУЛЬТАТ{%- endcomment -%}  
{%- if showpinned == "yes" or showpinned == "only" %}
{{ pins }}
{%- endif %}  

{%- unless showpinned =="only" %}
{%- if spoiler -%}
<details markdown="0"><summary markdown="0">{{ spoiler }}</summary>
{{ result }}
</details>
{%- else -%}
{{ result }}
{%- endif -%}
{%- endunless -%}
