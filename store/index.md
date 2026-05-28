---
title: Магазин
pin: 0
;style: '.grid ul{overflow:hidden;flex-wrap:wrap} .grid ul{/*display:table;flex-wrap:wrap*/;display:flex;flex-flow:row wrap;padding:0} .grid ul li{text-align:center;float:left;box-sizing:border-box;width:calc(50% - 8px);padding:7px 10px;background:#eee;margin:4px;list-style-type:none;min-height:50px;/*height:5em;*/padding-left:15px;padding-right:15px;border-radius:10px} .grid ul li a{padding: 0.75rem 0rem;} .grid ul :first-child {margin-top: 4px;}'
;permalink: /:basename
---



{% assign base_dir = "/store/" %}

<ul>
  {% assign subdirs = "" | split: "" %}
  
  {% for p in site.pages %}
    {% assign starts_with = p.dir | slice: 0, base_dir.size %}
    
    {% if starts_with == base_dir and p.dir != base_dir %}
      {% assign dir_parts = p.dir | split: "/" %}
      {% assign folder_name = dir_parts[2] %}
      
      {% if folder_name %}
        {% assign folder_path = base_dir | append: folder_name | append: "/" %}
        
        {% unless subdirs contains folder_path %}
          {% assign subdirs = subdirs | push: folder_path %}
        {% endunless %}
      {% endif %}
    {% endif %}
  {% endfor %}

  {% assign sorted_subdirs = subdirs | sort %} 
  
  {% for folder_path in sorted_subdirs %}
    {% assign folder_parts = folder_path | split: "/" %}
    {% assign fallback_name = folder_parts | last | capitalize %}
    
    {% assign folder_index = site.pages | where: "dir", folder_path | where: "name", "index.html" | first %}
    {% assign folder_title = folder_index.title | default: fallback_name %}
    
    {% assign page_count = 0 %}
    {% for p in site.pages %}
      {% assign p_starts = p.dir | slice: 0, folder_path.size %}
      {% if p_starts == folder_path and p.name != "index.html" %}
        {% assign page_count = page_count | plus: 1 %}
      {% endif %}
    {% endfor %}
    
    <li>📁 <a href="{{ folder_path | relative_url }}">{{ folder_title }}</a> ({{ page_count }})</li>
  {% endfor %}

  {% assign current_pages = site.pages | where: "dir", base_dir %}  
  {% for page in current_pages %}
    {% if page.name != "index.html" %}
      <li>📄 <a href="{{ page.url | relative_url }}">{{ page.title | default: "Без названия" }}</a></li>
    {% endif %}
  {% endfor %}
</ul>




## Сортировка вручную

- **Источники питания**
	- [ИБП для роутера](../store/ups.md)
	- [DC ИБП How To](../store/ups2.md)
	- [UPS Источники бесперебойного питания](../store/ups.md)
	- [DCDC преобразователи](../store/dcdc.md)
	- [BMS защита батареи, зарядки](../store/bms.md)
	- [Аккумуляторы и повербанки](../store/battery.md)
	- [Блоки питания 220](../store/acdc.md)

- **Оборудка**
	- [Инструмент ручной](../store/tools.md)
	- [Инструмент для пайки](../store/soldering.md)
	- [Мультиметры и USB-тестеры](../store/tester.md)

- **Компоненты**
	- [Arduino и микроконтроллеры](../store/arduino.md)
	- [Рассыпуха RCL](../store/rcl.md)
	- [Светодиоды LED](../store/led.md)
	- [Кабели разъемы коннекторы](../store/cables.md)
	- [Микросхемы](../store/ic.md)
	- [Антенны и радиомодули](../store/radio.md)

- **Для компа**
	- [Пульты](../store/remote.md)
	- [Телефоны и аксессуары](../store/phones.md)
	- [Модемы и роутеры](../store/modem.md)
	- [Медиаприставки](../store/tvbox.md)

- **Для дома**
	- [Аудиосистемы](../store/audio.md)
	- Освещение
	- Охранные системы

---

- [Промо (тест)](promo)
- [Корзина (тест)](/cart)


