---
title: Забери питомца из приюта
style: 'a img.photo { border-color: transparent; border-width: 3px; border-style: solid; }
a:hover img.photo { border-color: #88CCCC; }
li.card { border-color: #f3f3f3; border-width: 1px; border-style: solid; background-color: #f9f9f9; border-radius: 0.9rem; padding: 10px; list-style: none; }'
---
<div id="breadcrumbs">
{%- assign crumbs = page.url | remove:'/index.html' | split: '/' -%}
<a href="/">Home</a>
{%- for crumb in crumbs offset: 1 -%}
{%- if forloop.last %} / {{ page.title -}}
{%- else %}
 / <a href="
  {%- assign crumb_limit = forloop.index | plus: 1 -%}
  {%- for crumb in crumbs limit: crumb_limit -%}
    {{- crumb | append: '/' | replace:'without-plugin/','without-plugins/' -}}
  {%- endfor -%}">
  {{- crumb | replace:'-',' ' | remove:'.html' | capitalize -}}
  </a>
{%- endif -%}
{%- endfor %}
</div>
[таблица тут](https://github.com/Feelcame/feelcame.github.io/blob/master/_data/pets1.csv)

<ul>
{% for pet in site.data.pets1 %}
<li class="card">
{% if pet.photo %}  
<a href="./img/dog.jpg"><img alt="фото самого красивого убийцы" src="./img/dog.jpg" width="300px" height="300px" class="photo" title="скачать фото"></a><br>
{% else %}
<a href="./img/nophoto.png"><img alt="фото не загружено" src="./img/nophoto.png" width="300px" height="300px" class="photo"></a><br>
{% endif %}
<b>Кличка:</b> {{ pet.name }}<br> 
<b>Масть:</b> {{ pet.color }}<br> 
<b>Идентификатор:</b> {{ pet.number }}<br>
<b>Хозяин:</b>
{% if pet.owner %}
Хозяин найден! Благодарим за внимание!
{% else %}Что бы забрать питомца к себе, позвоните нам. <a href="#/contacts.html"><strong>Контакты</strong></a>
<div style="background-color: yellow;">Ищем хозяина!</div> 
{% endif %}
<details markdown="1"><b>Вакцинация:</b> {{ pet.vaccine }}<br> 
<b>Стерилизация:</b> {{ pet.sterile }}<br> 
<b>Место вылова:</b> {{ pet.mestovylova }}
</details> 
<br>
</li>
<br>
{% endfor %}
</ul>
{% comment %}
{% endcomment %}
