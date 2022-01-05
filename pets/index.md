---
title: Забери питомца из приюта
style: 
---


## Список рекомендуемых товаров 2

{% comment %}
<ul>
{% for pet in site.data.pets %}
<li>
{% if pet.photo != "" %}  
<img src="./img/dog.jpg" alt="фото"><br><a href="./img/dog.jpg">скачать фото</a>
{% endif %}
<br>
<b>Кличка:</b> {{ pet.name }}<br> 
<b>Масть:</b> {{ pet.name }}<br> 
<b>Идентификатор:</b> {{ pet.number }}<br> 
<details markdown="1"><summary markdown="0">+ Подробная информация</summary>
<b>Вакцинация:</b> {{ pet.vaccine }}<br> 
<b>Стерилизация:</b> {{ pet.name }}<br> 
<b>Место вылова:</b> {{ pet.mestovylova }}<br> 
</details> 
<b>Хозяин:</b> 
{% if pet.owner == "" %}
<div style="background: yellow;">Ищем хозяина!</div> 
Что бы забрать питомца к себе позвоните нам. <a href="#/contacts.html">Контакты</a>
{% else %}
Хозяин найден! Благодарим за внимание!
{% endif %}
</li>
<br> 
{% endfor %}
</ul>
{% endcomment %}
