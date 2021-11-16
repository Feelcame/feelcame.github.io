---
title: Все категори
modified: 2021-11-15T23:10:55+02:00
---

**Все категории**
- Телефоны
- [Компьютеры](./category/computers/index.md)
  - c
  - c
- Аксессуары

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
