---
title: Забери питомца из приюта
style: 
---

Чтобы все нормально работало - нужно в региональных настройках выставить разделитель элементов списка - запятую ","

## Список животин

<ul>
{% for pet in site.data.pets %}
<li>  
{% if pet.photo != "" %}  
<img alt="фото самого красивого убийцы" src="./img/dog.jpg" width="300px" height="300px"><br>  
<a href="./img/dog.jpg">*скачать фото*</a>  
{% endif %}
<br>
<b>Кличка:</b> {{ pet.name }}<br> 
<b>Масть:</b> {{ pet.color }}<br> 
<b>Идентификатор:</b> {{ pet.number }}<br> 
<details markdown="1"><summary markdown="0">+ Подробная информация</summary>
<b>Вакцинация:</b> {{ pet.vaccine }}<br> 
<b>Стерилизация:</b> {{ pet.sterile }}<br> 
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
{% comment %}
{% endcomment %}
