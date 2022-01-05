---
title: Забери питомца из приюта
style: 'a img.photo { border-color: transparent; border-width: 3px; border-style: solid; }
a:hover img.photo { border-color: #88CCCC; }
li.card { border-color: #f3f3f3; border-width: 1px; border-style: solid; background-color: #f9f9f9; border-radius: 0.9rem; padding: 10px; list-style: none; }'
---

Чтобы все нормально работало - нужно в региональных настройках выставить разделитель элементов списка - запятую ","

## Список животин

<ul>
{% for pet in site.data.pets %}
<li class="card">
{% if pet.photo %}  
<a href="./img/dog.jpg"><img alt="фото самого красивого убийцы" src="./img/dog.jpg" width="300px" height="300px" class="photo" title="скачать фото"></a><br>
{% else %}
<a href="./img/nophoto.jpg"><img alt="фото не загружено" src="./img/nophoto.jpg" width="300px" height="300px" class="photo"></a><br>
{% endif %}
<b>Кличка:</b> {{ pet.name }}<br> 
<b>Масть:</b> {{ pet.color }}<br> 
<b>Идентификатор:</b> {{ pet.number }}<br>
<b>Хозяин:</b> <!-- ({{pet.owner }})<summary markdown="0">+ Подробная информация</summary> -->
{% if pet.owner %}
Хозяин найден! Благодарим за внимание!
{% else %}
<div style="background-color: yellow;">Ищем хозяина!</div> 
Что бы забрать питомца к себе позвоните нам. <a href="#/contacts.html">Контакты</a>{% endif %}<details markdown="1"><b>Вакцинация:</b> {{ pet.vaccine }}<br> 
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
