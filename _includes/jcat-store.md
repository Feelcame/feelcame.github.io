{% comment %} Задаем базовую директорию, содержимое которой хотим вывести {% endcomment %}
{% assign base_dir = include.dir | default: page.dir %}

<ul>
  {% comment %} --- ШАГ 1: ПОИСК ВСЕХ ВЛОЖЕННЫХ ПОДПАПОК --- {% endcomment %}
  {% assign subdirs = "" | split: "" %}

  {% for p in site.pages %}
    {% comment %} Берем начало пути текущей страницы {% endcomment %}
    {% assign starts_with = p.dir | slice: 0, base_dir.size %}

    {% comment %} Проверяем: находится ли страница внутри base_dir, но не в самом корне {% endcomment %}
    {% if starts_with == base_dir and p.dir != base_dir %}
      
      {% comment %} Динамически получаем имя первой подпапки, отрезая базовый путь {% endcomment %}
      {% assign relative_path = p.dir | remove_first: base_dir %}
      {% assign folder_name = relative_path | split: "/" | first %}

      {% if folder_name and folder_name != "" %}
        {% assign folder_path = base_dir | append: folder_name | append: "/" %}

        {% comment %} Добавляем папку в массив, если ее там еще нет {% endcomment %}
        {% unless subdirs contains folder_path %}
          {% assign subdirs = subdirs | push: folder_path %}
        {% endunless %}
      {% endif %}

    {% endif %}
  {% endfor %}

  {% comment %} Сортируем собранные пути подпапок по алфавиту {% endcomment %}
  {% assign sorted_subdirs = subdirs | sort %} 

  {% comment %} --- ШАГ 2: ВЫВОД СПИСКА ПАПОК И ПОДСЧЕТ ЭЛЕМЕНТОВ В НИХ --- {% endcomment %}
  {% for folder_path in sorted_subdirs %}
    {% assign folder_parts = folder_path | split: "/" %}
    {% assign fallback_name = folder_parts | last | capitalize %}

    {% comment %} Ищем файл index.md внутри этой папки для заголовка {% endcomment %}
    {% assign folder_index = site.pages | where: "dir", folder_path | where: "name", "index.md" | first %}
    {% assign folder_title = folder_index.title | default: fallback_name %}

    {% assign page_count = 0 %}
    {% assign nested_folders = "" | split: "" %}

    {% for p in site.pages %}
      {% assign p_starts = p.dir | slice: 0, folder_path.size %}

      {% if p_starts == folder_path %}
        {% if p.dir == folder_path %}
          {% comment %} Считаем страницы, лежащие непосредственно в этой папке {% endcomment %}
          {% if p.name != "index.md" %}
            {% assign page_count = page_count | plus: 1 %}
          {% endif %}
        {% else %}
          {% comment %} Считаем уникальные вложенные подпапки СЛЕДУЮЩЕГО уровня {% endcomment %}
          {% assign sub_relative_path = p.dir | remove_first: folder_path %}
          {% assign subfolder_name = sub_relative_path | split: "/" | first %}

          {% if subfolder_name and subfolder_name != "" %}
            {% unless nested_folders contains subfolder_name %}
              {% assign nested_folders = nested_folders | push: subfolder_name %}
            {% endunless %}
          {% endif %}
        {% endif %}
      {% endif %}
    {% endfor %}

    {% comment %} Суммируем количество вложенных файлов и папок {% endcomment %}
    {% assign folder_count = nested_folders | size %}
    {% assign total_items_count = page_count | plus: folder_count %}

    <li>📁 <a href="{{ folder_path | relative_url }}">{{ folder_title }}</a> ({{ total_items_count }})</li>
  {% endfor %}

  {% comment %} --- ШАГ 3: ВЫВОД ФАЙЛОВ В БАЗОВОЙ ДИРЕКТОРИИ --- {% endcomment %}
  {% assign current_pages = site.pages | where: "dir", base_dir | where_exp: "item", "item.pin != 0" %}  

  {% for page in current_pages %}
    {% if page.name != "index.md" %}
      {% assign fallback_filename = page.name | remove: ".md" %}
      <li>📄 <a href="{{ page.url | relative_url }}">{{ page.title | default: fallback_filename }}</a></li>
    {% endif %}
  {% endfor %}
</ul>