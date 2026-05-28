---
title: Статьи
layout: default
permalink: /:basename
---

# Блог
Все статьи с сортировкой по годам (to-do)

{%- comment -%}

{% include dir-ls.md dir="/r/" %}

<ul>
{% for page in site.pages %}
    <li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title | default: "Без названия"}}</a></li>
{% endfor %}
</ul>
{%- endcomment -%} 