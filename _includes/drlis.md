{%- comment -%}  
Этот скрипт выводит список страниц в директории. Можно передать "dir" и "tag".  
Сортирует все найденные страницы по дате (сначала новые). Если у страницы нет даты - она выводится внизу.  
Закрепленные страницы выводит вверху со специальной пометкой.  
{%- endcomment -%}  

{%- assign directory = include.dir | default: page.dir -%}  
{%- assign rec_tag = include.tag | default: "" -%}  

{%- comment -%}ВСЕ СТРАНИЦЫ{%- endcomment -%}  
{%- 
  assign all_pages = site.pages 
  | sort: "path" 
  | where: "dir",  directory 
  | sort: "date" 
  | reverse 
-%}  

{%- {%- comment -%}ЗАКРЕПЛЕННЫЕ{%- endcomment -%}  
  assign pinned_pages = all_pages 
  | where_exp: "item", "item.index != nil" 
  | where_exp: "item", "item.index > 0" 
  | sort: "index" 
-%}  

{%- {%- comment -%}ТОЛЬКО БЕЗ ДАТЫ{%- endcomment -%}  
  assign wo_date_pages = all_pages 
  | where_exp: "item", "item.date == nil" 
-%}  

{%- {%- comment -%}ТОЛЬКО С ДАТОЙ{%- endcomment -%}  
  assign output_pages = all_pages 
  | where_exp: "item", "item.date != nil" 
-%} 

{%- comment -%}ЛЕГАСИ{%- endcomment -%}  
{%- assign sorted_pages = all_pages -%}  
{%- assign not_pinned_pages = sorted_pages | where_exp: "item", "item.index == nil" -%}  
{%- assign finish_pages = output_pages -%}  


{%- comment -%}ОБРАБОТКА ТЕГОВ{%- endcomment -%}  
{%- if rec_tag != "" %}  
{%- assign finish_pages = output_pages | where_exp: "item", "item.tags contains rec_tag" -%}  
{%- endif %}  

{%- capture result -%}
<!-- Debug. dir: ({{ directory }}). tag: ({{ rec_tag }}), qty: ({{ finish_pages.size }}) -->
<ol reversed id="navigation">
{%- for pg in finish_pages -%}
<li>{%- if pg.index > 0 -%}:pushpin:{%- endif %}
<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a>
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>

{% endfor -%}
</ol>
{%- endcapture -%}

{%- assign spoiler = include.spoiler | default: "" -%}
{%- if spoiler != "" -%}
<details markdown="1" open><summary markdown="0">+ {{ spoiler }}</summary>
{{ result }}
</details>
{%- else -%}
{{ result }}
{%- endif -%}
{%- comment -%}{%- endcomment -%}
