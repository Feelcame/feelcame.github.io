{%- comment %}Этот скрипт выводит список страниц в директории. Можно передать "dir" и "tag"{% endcomment -%}

{%- assign debug = false -%}
{%- assign directory = include.dir | default: page.dir -%}
{%- assign rec_tag = include.tag | default: "" -%}
{%- assign allpages = site.pages | sort: "path" -%}
{%- assign dirpages = allpages | where: "dir",  directory -%}
{%- assign datepages = dirpages | sort: "date" | reverse -%}
{%- assign sortedpages = datepages | sort: "index" | reverse -%}

DIR: ({{ directory }}). TAG: ({{ rec_tag }}). 
{% if debug %}Allpages[0]: ({{ allpages[0].url }}). Dirpages[0]: ({{ dirpages[0].url }}){% endif -%}

<ol reversed id="navigation">
{%- for pg in sortedpages -%}
{%- if pg.tags contains rec_tag or rec_tag == "" -%}
{%- assign index = pg.index | default: nil -%}
{%- if index > 0 or index == nil %}
<li>
{% if index > 0 %}📌{% endif %}<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a> 
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time>
</li>
{%- endif -%}
{%- endif -%}
{%- endfor %}
</ol>
