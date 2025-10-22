{%- assign directory = include.dir | default: page.dir -%}  
{%- assign all_pages = site.pages 
	| where: "dir",  directory 
	| where_exp: "item", "item.name == index.md"
	| where_exp: "item", "item.name != 'redirect.html'"
	| sort: "path"
-%}  
{%- assign dir_size = all_pages.size -%}  

{%- capture result -%}
{%- if all_pages.size == 0 -%}<p>((пустой список))</p>{%- endif %}
<ol debug_count="{{ all_pages.size }}/{{ dir_size }}">
{%- for pg in output_pages -%}
<li>
<a href="{{ pg.url | relative_url }}">{{ pg.path}}/{{ pg.title | default: pg.name }}</a>
</li>
{% endfor -%}
</ol>
{%- endcapture -%}

{%- comment -%}ВЫВОДИМ РЕЗУЛЬТАТ{%- endcomment -%}   
{{ result }}
