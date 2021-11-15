---
modified: 2021-11-16T01:04:40+02:00
title: Компьютеры в сборе
---

## Список товаров
<ul>
{% for product in site.data.products %}
<li>
  Фото: {{ product.photos | split: ">" | first }}<br>
  Название: <b>{{ product.name }}</b><br>
  Цена: {{ product.price }}. Наличие: {{ product.stock }}<br>
  Описание: {{ product.description }}<br>
  <a href="#">В корзину</a>
</li>
{% endfor %}
</ul>
