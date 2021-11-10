## Категории:
- Телефоны
- Аксессуары

## Список товаров

<ul>
{% for product in site.data.products %}
<li>
  {% if product.photos.size > 0 %}{{ product.photo | first }}{% endif %}
  <b>{{ product.name }}</b><br>
  Цена: {{ product.price }}. Наличие: {{ product.stock }}<br>
  Описание: {{ product.description }}
{% endfor %}
</ul>
