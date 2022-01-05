---
title: Забери питомца из приюта
style: 'a img.photo { border-color: transparent; border-width: 3px; border-style: solid; }
a:hover img.photo { border-color: #88CCCC; }
li.card { border-color: #f3f3f3; border-width: 1px; border-style: solid; background-color: #f9f9f9; border-radius: 0.9rem; padding: 10px; list-style: none; }'
---
{% comment %}
<ul>
{% for pet in site.data.pets %}
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
{% endcomment %}


