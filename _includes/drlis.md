{%- comment -%}Этот скрипт выводит список страниц в директории. Можно передать "dir" и "tag"{%- endcomment -%}

{%- assign directory = include.dir | default: page.dir -%}  

{%- assign sorted_pages = site.pages | sort: "path" | where: "dir",  directory | sort: "date" | sort: "index" | reverse -%}  
{%- assign not_pinned_pages = sorted_pages | where_exp: "item", "item.index == nil" -%}  
{%- assign finish_pages = sorted_pages | where_exp: "item", "item.index > 0" | reverse | concat: not_pinned_pages -%}  

{%- assign rec_tag = include.tag | default: "" -%}  
{%- if rec_tag != "" %}  
{%- assign finish_pages = finish_pages | where_exp: "item", "item.tags contains rec_tag" -%}  
{%- endif %}  

{%- capture result -%}
<ol reversed id="navigation">
{%- for pg in finish_pages -%}
  <li>{%- if pg.index > 0 -%}:pushpin:{%- endif -%}
    <a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a> 
    <time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time>
  </li>
{%- endfor -%}
</ol>
{%- endcapture -%}

{%- if include.spoiler == nil -%}
{{ result }}
{%- elseif include.spoiler == "" -%}
<details markdown="1" open><summary markdown="0">+ Все статьи в папке {{ directory }} с тегом: ({{ rec_tag }}), qty: ({{ finish_pages.size }})</summary>
{{ result }}
</details>
{%- elseif include.spoiler != "" and include.spoiler != nil -%}
<details markdown="1" open><summary markdown="0">+ include.spoiler</summary>
{{ result }}
</details>
{%- endif -%}
{%- comment -%}
{%- endcomment -%}
