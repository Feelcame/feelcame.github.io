{%- comment -%}Этот скрипт выводит список страниц в директории. Можно передать "dir" и "tag"  
{%- endcomment -%}

{%- assign debug = true -%}  
{%- assign directory = include.dir | default: page.dir -%}  
{%- assign rec_tag = include.tag | default: "" -%}  
{%- assign allpages = site.pages | sort: "path" -%}  
{%- assign dirpages = allpages | where: "dir",  directory -%}  
{%- assign datepages = dirpages | sort: "date" -%}  
{%- assign sortedpages = datepages | sort: "index" | reverse -%}  
sortedpages.size: {{ sortedpages.size }}<br>

{%- assign allowedpages = sortedpages | where_exp: "item", "item.index == nil" -%}  
allowedpages.size: {{ allowedpages.size }}<br>



{%- if debug -%}Статьи в папке ({{ directory }}){%- if rec_tag != "" %} с тегом ({{ rec_tag }}){%- endif -%}
{%- endif -%}
<ol reversed id="navigation">
{%- for pg in allowedpages -%}
  {%- if pg.tags contains rec_tag or rec_tag == "" -%}
    {%- assign pg_index = pg.index | default: nil -%}
    <li>{%- if pg_index > 0 -%}📌{%- endif -%}
      <a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a> 
    <time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time>
    </li>
  {%- endif -%}
{%- endfor -%}
</ol>

