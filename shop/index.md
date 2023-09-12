---
title: Все категории
pin: 0
style: '.grid ul{overflow:hidden;flex-wrap:wrap} .grid ul{/*display:table;flex-wrap:wrap*/;display:flex;flex-flow:row wrap;padding:0} .grid ul li{text-align:center;float:left;box-sizing:border-box;width:calc(50% - 8px);padding:7px 10px;background:#eee;margin:4px;list-style-type:none;min-height:50px;/*height:5em;*/padding-left:15px;padding-right:15px;border-radius:10px} .grid ul li a{padding: 0.75rem 0rem;} .grid ul :first-child {margin-top: 4px;}'
---

этот магазин задуман как демо для [jekyll-shop](/projects/jekyll-shop.md)


<div class="grid">
{% include dir-ls.md date="no" dir="/shop/" %}
</div>

## Список рекомендуемых
<ul>
{% for product in site.data.products %}
<li>
{% assign namemask = "/shop/img/" | append: product.vendorcode %}
{% assign photos = site.static_files | where_exp: "item", "item.path contains namemask" %}
{% if photos.size > 0 %}
{% assign mainphoto = photos | first %}
{% else %}
{% assign mainphoto = "/shop/img/nophoto.jpg" %}
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


<details markdown="1">
```
Все категории/network
├── Сетевое оборудование/
│   ├── Маршрутизаторы
│   ├── Модемы 4g
│   └── Точки доступа
├── Радиооборудование/radio
│   ├── Антенны
│   ├── Усилители
│   ├── Повторители
│   ├── Анализаторы
│   └── Радиомодули
├── Безопасность/security
│   ├── Камеры
│   ├── Регистраторы
│   ├── Датчики
│   ├── Сигнализации
│   └── Умный дом
├── Компьютеры/computers
│   ├── Собранные
│   ├── Комплектуха
│   ├── Аксессуары-переходники
│   └── Манипуляторы
├── Телефоны/phones
│   ├── Чехлы, держатели, подставки, 
│   ├── Перходники
│   └── 
├── Аудиотехника/audio
│   ├── Усилители/amplifiers
│   ├── Колонки
│   ├── Наушники/earphones
│   ├── Беспроводная передача
│   ├── Микрофоны
│   └── Аудиокарты
├── Модули ардуино/modules
│   ├── Отладочные платы
│   ├── Датчики
│   ├── Дисплеи
│   └── Программаторы
├── Электронные компоненты/components
│   ├── Пассивные
│   ├── Транзисторы
│   ├── Микроконтроллеры
│   ├── Микросхемы DCDC
│   ├── Светодиоды
│   ├── Диоды
│   ├── Логика
│   ├── Кнопки
│   └── Микросхемы
├── Разъемы/connectors
│   ├── USB
│   ├── pinhead
│   ├── крокодилы
│   └── DC на плату
├── Силовая электроника/power
│   ├── Аккумуляторы
│   ├── Разъемы силовые
│   ├── Блоки питания
│   ├── Модули DCDC
│   └── Модули зарядки
├── Все для пайки/soldering
│   ├── Паяльники и печи
│   ├── Комплектуха и доп.инструмент
│   ├── Расходники олово флюс паста  
│   ├── Химия для пайки маска глицерин персульфат растворители спирт
│   ├── Термоусадка
│   └── Готовые наборы
├── Провода/cables
│   ├── USB
│   ├── Питание
│   ├── На метр. мгтф и другие
│   └── щупы оба с крокодилами и бананами
├── Инструменты/tools
│   ├── Отвертки, кусачки, узкогубцы
│   ├── Метизы-расходники
│   ├── Пинцеты
│   ├── Скальпели
│   ├── Щетки для чистки
│   └── Дрель
├── Лабораторное/lab-tools
│   ├── Лабораторный блок питания
│   ├── Микроскопы
│   ├── Осцилографы
│   ├── Анализаторы спектра
│   ├── Генератор
│   └── Мультиметры
├── Канцелярия/kancelyaria
│   ├── Маркер
│   ├── скотч
│   ├── пакетики зип-лок
│   ├── ухочистки
│   ├── Упаковка, коробки
│   ├── Шприцы 2мл + иголки
│   └── Клея
├── Бытовая техника/equipment
│   ├── Органайзеры 
│   ├── Стойки-кассетницы
│   ├── Светильники
│   └── Вытяжка
├── /
│   ├── 
│   ├── 
│   └── 
└── the end
```
</details>


