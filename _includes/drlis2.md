{%- comment -%}Этот скрипт выводит список страниц в директории. Можно передать "dir" и "tag"{%- endcomment -%}

{%- assign debug = true -%}  
{%- assign directory = include.dir | default: page.dir -%}  
{%- assign allpages = site.pages | sort: "path" -%}  
{%- assign dirpages = allpages | where: "dir",  directory -%}  
{%- assign datepages = dirpages | sort: "date" -%}  
{%- assign sortedpages = datepages | sort: "index" | reverse -%}  
{%- assign notpinnedpages = sortedpages | where_exp: "item", "item.index == nil" -%}  
{%- assign finish_pages = sortedpages | where_exp: "item", "item.index > 0" | concat: notpinnedpages -%}  

{%- assign rec_tag = include.tag | default: "" -%}  
{%- if rec_tag != "" %}  
{%- assign finish_pages = finish_pages | where_exp: "item", "item.tags == rec_tag" -%}  
{%- endif %}  

{%- if debug -%}
  Статьи в папке ({{ directory }})
  {%- if rec_tag != "" %}
    с тегом ({{ rec_tag }})
  {%- endif -%}
{%- endif %}

<ol reversed id="navigation">
{%- for pg in finish_pages -%}
  {%- assign pg_index = pg.index | default: nil -%}
  <li>{%- if pg_index > 0 -%}📌{%- endif -%}
    <a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a> 
    <time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time>
  </li>
{%- endfor -%}
</ol>

