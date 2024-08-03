---
title: Каталог инструментов
pin: 0
---


<div class="grid">
{% include dir-ls.md date="no" dir="/shop/" %}
</div>

## Список рекомендуемых
<ul>
{% for product in site.data.products %}
<li>
{% assign namemask = "/store/photos/" | append: product.vendorcode %}
{% assign photos = site.static_files | where_exp: "item", "item.path contains namemask" %}
{% if photos.size > 0 %}
{% assign mainphoto = photos | first %}
{% else %}
{% assign mainphoto = "/assets/img/nophoto.jpg" %}
{% endif %}
<img src="{{ mainphoto.path }}" alt="фотография" width="300px" height="300px"><br>
<b>{{ product.name }}</b><br> 
Цена: <b>${{ product.price }}</b>.<br>  
{% if photos.size > 1 %}Фото({{ photos.size }}): 
{% for photo in photos %}<a href="{{ photo.path }}" target="_blank">[{{ forloop.index }}]</a> {% endfor %}<br>{% endif %}  
{% if product.description != '' %}{{ product.description }}<br>{% endif %}  
<form name="item-id" method="get" action="#add-to-cart">
<label class="" for="">в наличии: {{ product.stock }}</label><br>  
<input type="number" value="1" min="1" max="5" size="4">
<input type="submit" value="Купить" onclick="alert('Добавлено в корзину');return false;">
</form>
</li>
  <br>
{% endfor %}
</ul>


{% comment %}


## Список рекомендуемых товаров 1


<ul>
{% for product in site.data.products %}
<li>
  Фото: {{ product.photos | split: ";" | first }}<br>
  Название: <b>{{ product.name }}</b><br>
  Цена: {{ product.price }}. Наличие: {{ product.stock }}<br>
  Описание: {{ product.description }}<br>
  <a href="#">В корзину</a>
</li>
{% endfor %}
</ul>
{% endcomment %}


{% comment %}
## Example
<ul>
{% for member in site.data.members %}
  <li>
    <a href="https://github.com/{{ member.github }}">
      {{ member.name }}
    </a>
  </li>
{% endfor %}
</ul>
{% endcomment %}


{% comment %}
## Все категории
{% 
  assign categories = site.pages 
  | where_exp: "item", "item.dir contains page.dir" 
  | where: "name", "index.md" 
  | sort: "index"
%}

<div class="grid">
<ul>
{% for cat in categories %}
<li><a href="{{ cat.url }}">{{ cat.title | default: cat.dir | remove: page.dir }}</a><!--{{ cat.index }}--></li>
{% endfor %}
</ul>
</div>
{% endcomment %}





