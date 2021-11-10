## Категории:
- Телефоны
- Аксессуары

## Список товаров

<ul>
{% for product in site.data.products %}
- **{{ product.name }}**<br>Цена: {{ product.price }}. Наличие: {{ product.stock }}<br>Описание: {{ product.description }}</a>
{% endfor %}
</ul>
