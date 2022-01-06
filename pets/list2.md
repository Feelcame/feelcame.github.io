---
title: Забери питомца домой
layout: page
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
таблица тут: [ссылка](https://github.com/Feelcame/feelcame.github.io/blob/master/_data/pets2.csv)

<style>
a img.photo { border-color: transparent; border-width: 3px; border-style: solid; }
a:hover img.photo { border-color: #88CCCC; }
li.card { border-color: #f3f3f3; border-width: 1px; border-style: solid; background-color: #f9f9f9; border-radius: 0.9rem; padding: 10px; list-style: none; }
</style>

<ul>
{% for pet in site.data.pets2 %}
{% if forloop.first %}{% continue %}{% endif %}
{% unless pet.mestovylova %}{% continue %}{% endunless %}
<li class="card">
<b>ФОТО тварини: {{ pet.photo }}</b><br>
{% if pet.photo %}  
<a href="./img/dog.jpg"><img alt="фото самого красивого убийцы" src="./img/dog.jpg" width="300px" height="300px" class="photo" title="скачать фото"></a><br>
{% else %}
<img alt="фото не загружено" src="./img/nophoto.png" width="300px" height="300px" class="photo" title="фото немає"><br>
{% endif %}
<b>Дата та місце вилову тварини:</b> 
{{ pet.mestovylova }}<br>
<b>Наявність або відсутність ідентифікуючих ознак та їх номери:</b> 
{{ pet.id | newline_to_br }}<br>
<b>Здійснені заходи з ветеринарного огляду тварини (ветеринарна допомога, карантинування, дегільментизація, інсектоакарицидна обробка, вакцинація, стерилізація, ідентифікація):</b><br> 
{% if pet.vaccine %}{{ pet.vaccine | newline_to_br }}<br> {% endif %}
<b>Відомості про власника тварини (ПІБ, місце проживання, договір про передачу тварини у власність):</b> 
{% if pet.owner %}
Хозяин найден! Благодарим за внимание! ({{ pet.owner }})<br> 
{% else %}Что бы забрать питомца к себе, позвоните нам.
<div style="background-color: yellow;">Ищем хозяина! <a href="#/contacts.html"><strong>Контакты</strong></a></div> 
{% endif %}
<details markdown="1"><b>Вид:</b> 
{{ pet.category }}<br> 
<b>Стать:</b> 
{{ pet.gender }}<br> 
<b>Приблизний вік:</b> 
{{ pet.age }}<br> 
<b>Природні ознаки:</b> 
{{ pet.signs }}<br> 
<b>Зовнішні ознаки (окрас шерсті, вага, особливі ідентифікуючі ознаки):</b> 
{{ pet.color }}<br> 
<b>Попередня оцінка стану здоров’я тварини:</b> 
{{ pet.health }}<br> 
<b>Відомості про опікуна в разі його наявності (ПІБ, місце проживання):</b> 
{{ pet.guardian }}<br> 
<b>Дата та місце повернення тварини, якщо тварина повернута до ареалу перебування (у місця вилову):</b> 
{{ pet.address }}<br> 
</details> 
<br>
</li>
<br>
{% endfor %}
</ul>
{% comment %}
{% endcomment %}
