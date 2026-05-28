---
title: Магазин
pin: 0
;style: '.grid ul{overflow:hidden;flex-wrap:wrap} .grid ul{/*display:table;flex-wrap:wrap*/;display:flex;flex-flow:row wrap;padding:0} .grid ul li{text-align:center;float:left;box-sizing:border-box;width:calc(50% - 8px);padding:7px 10px;background:#eee;margin:4px;list-style-type:none;min-height:50px;/*height:5em;*/padding-left:15px;padding-right:15px;border-radius:10px} .grid ul li a{padding: 0.75rem 0rem;} .grid ul :first-child {margin-top: 4px;}'
;permalink: /:basename
---


{% comment %} Задаем базовую директорию, содержимое которой хотим вывести {% endcomment %}
{% assign base_dir = "/store/" | default: include.dir | default: page.dir %}

<ul>
  {% comment %} Создаем пустой массив для хранения списка найденных подпапок {% endcomment %}
  {% assign subdirs = "" | split: "" %}
  
  {% comment %} --- ШАГ 1: ПОИСК ВСЕХ ПОДПАПОК --- {% endcomment %}
  {% for p in site.pages %}
    {% comment %} Берем начало пути текущей страницы, равное длине базовой директории {% endcomment %}
    {% assign starts_with = p.dir | slice: 0, base_dir.size %}
    
    {% comment %} Проверяем: находится ли страница внутри /store/, но при этом не в самом корне /store/ {% endcomment %}
    {% if starts_with == base_dir and p.dir != base_dir %}
      {% comment %} Разбиваем путь страницы на части по слешу ("/") {% endcomment %}
      {% assign dir_parts = p.dir | split: "/" %}
      {% comment %} Извлекаем название первой подпапки (индекс 2, так как 0 — пустота до первого слеша, 1 — "store") {% endcomment %}
      {% assign folder_name = dir_parts[2] %}
      
      {% if folder_name %}
        {% comment %} Формируем полный путь к найденной подпапке {% endcomment %}
        {% assign folder_path = base_dir | append: folder_name | append: "/" %}
        
        {% comment %} Если этой подпапки еще нет в нашем массиве subdirs, добавляем (push) ее {% endcomment %}
        {% unless subdirs contains folder_path %}
          {% assign subdirs = subdirs | push: folder_path %}
        {% endunless %}
      {% endif %}
    {% endif %}
  {% endfor %}

  {% comment %} Сортируем собранные пути подпапок по алфавиту {% endcomment %}
  {% assign sorted_subdirs = subdirs | sort %} 
  
  {% comment %} --- ШАГ 2: ВЫВОД СПИСКА ПАПОК И ПОДСЧЕТ ФАЙЛОВ В НИХ --- {% endcomment %}
  {% for folder_path in sorted_subdirs %}
    {% comment %} Получаем название папки для вывода (если у нее не задан заголовок) {% endcomment %}
    {% assign folder_parts = folder_path | split: "/" %}
    {% assign fallback_name = folder_parts | last | capitalize %}
    
    {% comment %} Ищем файл index.md внутри этой папки, чтобы взять его title (заголовок) {% endcomment %}
    {% assign folder_index = site.pages | where: "dir", folder_path | where: "name", "index.md" | first %}
    {% assign folder_title = folder_index.title | default: fallback_name %}
    
	{% comment %} Считаем количество страниц внутри этой папки {% endcomment %}
    {% assign page_count = 0 %}
    {% for p in site.pages %}
      {% assign p_starts = p.dir | slice: 0, folder_path.size %}
      {% comment %} Если страница лежит в этой папке и это не index.md — увеличиваем счетчик {% endcomment %}
      {% if p_starts == folder_path and p.name != "index.md" %}
        {% assign page_count = page_count | plus: 1 %}
      {% endif %}
    {% endfor %}
	
	{% comment %} Считаем количество вложенных папок внутри этой папки {% endcomment %}
    {% assign nested_folders = "" | split: "" %}
    {% comment %} Определяем уровень вложенности текущей папки, чтобы правильно вырезать имя подпапки {% endcomment %}
    {% assign folder_depth = folder_path | split: "/" | size %}

    {% for p in site.pages %}
      {% assign p_starts = p.dir | slice: 0, folder_path.size %}
      
      {% comment %} Если страница лежит глубже текущей папки (путь начинается так же, но он длиннее) {% endcomment %}
      {% if p_starts == folder_path and p.dir != folder_path %}
        {% assign p_dir_parts = p.dir | split: "/" %}
        {% comment %} Извлекаем имя следующей папки по уровню глубины {% endcomment %}
        {% assign subfolder_name = p_dir_parts[folder_depth] %}
        
        {% if subfolder_name %}
          {% comment %} Добавляем папку в массив, только если ее там еще нет (считаем уникальные) {% endcomment %}
          {% unless nested_folders contains subfolder_name %}
            {% assign nested_folders = nested_folders | push: subfolder_name %}
          {% endunless %}
        {% endif %}
      {% endif %}
    {% endfor %}
    
    {% comment %} Итоговое количество уникальных вложенных папок {% endcomment %}
    {% assign folder_count = nested_folders | size %}
	
	{% comment %} Суммируем количество вложенных элементов (папки и страницы) {% endcomment %}
	{% assign page_count = page_count | plus: folder_count %}

	
    {% comment %} Выводим ссылку на папку, её название и количество страниц в скобках {% endcomment %}
    <li>📁 <a href="{{ folder_path | relative_url }}">{{ folder_title }}</a> ({{ page_count }})</li>
  {% endfor %}

  {% comment %} --- ШАГ 3: ВЫВОД ФАЙЛОВ В БАЗОВОЙ ДИРЕКТОРИИ --- {% endcomment %}
  {% comment %} Находим все страницы, которые лежат ровно в базовой директории (/store/) {% endcomment %}
  {% assign current_pages = site.pages | where: "dir", base_dir | where_exp: "item", "item.pin != 0" %}  

  
  {% for page in current_pages %}
    {% comment %} Исключаем из вывода главный индексный файл раздела {% endcomment %}
    {% if page.name != "index.md" %}
      {% comment %} Выводим ссылку на файл и его заголовок (или "Без названия", если заголовка нет) {% endcomment %}
      <li>📄 <a href="{{ page.url | relative_url }}">{{ page.title | default: "Без названия" }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

