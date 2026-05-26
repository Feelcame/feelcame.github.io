{%- comment -%}  
Скрипт выводит список страниц в директории. Можно передать опциональные параметры. 
Пример:
{% include jcat.md dir="/r/" tag="soft" date="true|false" spoiler="Мои статьи" %}
{%- endcomment -%}  

{%- assign directory = include.dir | default: page.dir -%}  
{%- assign tag = include.tag | default: false -%}  
{%- assign ntag = include.ntag | default: "" | strip -%}
{%- assign spoiler = include.spoiler | default: false -%}
{%- assign showdate = include.date | default: false -%}

{%- 
  assign dir_pages = site.pages 
  | where: "dir",  directory 
  | where_exp: "item", "item.name != 'redirect.html'"
  | sort: "name"
  | sort: "date"
-%}  


{%- assign toshow_pages = dir_pages | where_exp: "item", "item.pin != 0" -%}  
{%- assign result_pages = toshow_pages -%} 


{%- assign ntag_pages = toshow_pages -%}
{%- if ntag != "" and tag == false -%}
  {%- assign ntags = ntag | split: " " -%}
  {%- assign temp_pages = "" | split: "" -%}
  {%- for item in ntag_pages -%}
    {%- assign exclude = false -%}
    {%- if item.tags -%}
      {%- for t in ntags -%}
        {%- if t != "" and item.tags contains t -%}
          {%- assign exclude = true -%}
          {%- break -%} {%- endif -%}
      {%- endfor -%}
    {%- endif -%}
    {%- unless exclude -%}
      {%- assign temp_pages = temp_pages | push: item -%}
    {%- endunless -%}
  {%- endfor -%}
  {%- assign ntag_pages = temp_pages -%}
  {%- assign result_pages = ntag_pages -%}
{%- endif -%}

 
{%- if tag and tag != "empty" %}  
{%- assign tag_pages = toshow_pages | where_exp: "item", "item.tags contains tag" -%}  
{%- assign result_pages = tag_pages -%} 
{%- endif %}  

{%- assign wo_tag_pages = dir_pages | where_exp: "item", "item.tags == nil" -%}  
{%- if tag == "empty" %}{%- assign result_pages = wo_tag_pages -%}{%- endif %}

{%- assign wo_tag_size = wo_tag_pages.size -%}  
{%- assign dir_size = dir_pages.size -%}  
{%- assign toshow_size = toshow_pages.size -%}  
{%- assign hidden_size = dir_size | minus: toshow_size -%}  
{%- assign ntag_size = ntag_pages.size | default: 0 -%}
{%- assign result_size = result_pages.size -%}  

{%- comment -%}ФОРМИРУЕМ ВЫВОД{%- endcomment -%}  
{%- capture result -%}
{%- if result_size == 0 -%}<p>((пустой список))</p>{%- endif %}
<!-- tag:{{ tag }} total:{{ dir_size }} hidden:{{ hidden_size }} wo_tags:{{ wo_tag_size }} result:{{ result_size }}-->
<ol id="{{ tag | default: "" }}" count="{{ result_size }}" style="scroll-margin-top: 40px;">
{%- for pg in result_pages -%}
<li>{%- if pg.pin > 0 -%}:pushpin:{%- endif %}
<a href="{{ pg.url | relative_url }}">{{ pg.title | default: pg.name }}</a>
{%- unless showdate == "false" -%}
{%- if showdate == "true" -%}{%- assign placeholder = "гггг-мм-дд" -%}{%- endif -%}
<time class="shaded">
{{ pg.date | date: "%Y-%m-%d" | default: placeholder | default: "" }}
</time>
{%- endunless -%}</li>

{%- assign modul = forloop.index | modulo: 10 -%}
{%- if modul == 0 and forloop.index != forloop.length -%}<br>{%- endif %}
{% endfor -%}
</ol>
{%- endcapture -%}

{%- if spoiler -%}
<details markdown="0"><summary markdown="0">{{ spoiler }} ({{ result_size }})<a class="anchorjs-link " href="#{{ tag | default: "" }}" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></summary>
{{ result }}
</details>
{%- else -%}
{{ result }}
{%- endif -%}

