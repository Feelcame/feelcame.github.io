## Категории:
- Телефоны
- Аксессуары

## Список товаров

<ul>
{% for product in site.data.products %}
<li>
  {% assign photos = product.photo | split " " %}
  {% if photos > 0 %}Фото: {{ photos | first }}{% endif %}
  Название: <b>{{ product.name }}</b><br>
  Цена: {{ product.price }}. Наличие: {{ product.stock }}<br>
  Описание: {{ product.description }}
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
