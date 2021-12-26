{%- comment -%}  
Этот скрипт выводит список страниц в директории. Можно передать "dir" и "tag".  
Сортирует все найденные страницы по дате (сначала новые). Если у страницы нет даты - она выводится внизу.  
Закрепленные страницы выводит вверху со специальной пометкой.  
{%- endcomment -%}  

{%- assign directory = include.dir | default: page.dir -%}  
{%- assign rec_tag = include.tag | default: "" -%}  
{%- assign spoiler = include.spoiler | default: "" -%}

{%- {%- comment -%}ВСЕ СТРАНИЦЫ{%- endcomment -%}  
  assign all_pages = site.pages 
  | sort: "path" 
  | where: "dir",  directory 
  | sort: "date" 
  | reverse 
-%}  

{%- {%- comment -%}ЗАКРЕП{%- endcomment -%}  
  assign pinned_pages = all_pages 
  | where_exp: "item", "item.index != nil" 
  | where_exp: "item", "item.index > 0" 
  | sort: "index" 
-%}  

{%- {%- comment -%}БЕЗ ДАТЫ{%- endcomment -%}  
  assign wo_date_pages = all_pages 
  | where_exp: "item", "item.date == nil" 
-%}  

{%- {%- comment -%}ТОЛЬКО С ДАТОЙ{%- endcomment -%}  
  assign output_pages = all_pages 
  | where_exp: "item", "item.date != nil" 
-%} 

{%- comment -%}ТЕГИ{%- endcomment -%}  
{%- if rec_tag != "" %}  
{%- assign output_pages = output_pages | where_exp: "item", "item.tags contains rec_tag" -%}  
{%- endif %}  

{%- capture result -%}
<!-- Debug. dir: ({{ directory }}). tag: ({{ rec_tag }}), qty: ({{ output_pages.size }}) -->
<ol reversed id="navigation">
{%- for pg in output_pages -%}
<li>{%- if pg.index > 0 -%}:pushpin:{%- endif %}
<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a>
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>

{% endfor -%}
</ol>
{%- endcapture -%}

{%- if spoiler != "" -%}
<details markdown="1" open><summary markdown="0">+ {{ spoiler }}</summary>
{{ result }}
</details>
{%- else -%}
{{ result }}
{%- endif -%}
{%- comment -%}{%- endcomment -%}
