## Скрипт для вывода списка страниц в папке
В любом месте страницы можно написать одну строчку и она выведет список страниц подходящих по параметрам.  
{% raw %}```{{ include directory-listing.md tag="железо" }}```{% endraw %}

Нужно спарсить папку ```/projects/```.
Если передан параметр ```dir```, то парсить полностью всю папку по принятому адресу относительно корня сайта.
Если передан параметр ```tag```, то вывести только те страницы, которые помечены тегом, нопр. "hardware".  
Если комбинация этих параметров, то вывести только страницы с нужным тегом в  данной папке.
Если параметров не передано - парсить текущую папку (из которой происходит вызов).

## Тестовый пример

взять все страницы
выбрать только те что в нужной папке
выбрать только те что с нужным тегом
вывести список оставшихся

{% assign tag_first = include.tag | split: " " | first %}
<ol reversed>
{% for tag in site.tags %}
  {% if tag[0] == tag_first %}
    {% for post in tag[1] %}
      {% if page.dir == "/hardware/" %}
        <li>{{ post.date | date: "%y%m%d" }}<a href="{{ post.url | prepend: site.baseurl }}">{{ post.title | default: Без имени}}</a></li>
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}
</ol>


{% raw %}
``` 
<ol reversed id="navigation">
{% assign allpages = site.pages | where: "dir",  page.dir %}
{% assign sorted = allpages | sort: 'date' | reverse %}
{% for p in sorted %}{% if p.noindex != true %}
<li><a href="{{ p.url | prepend: site.baseurl }}">{{ p.title | default: "New page" }}</a> 
<time class="shaded">{{ p.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endif %}{% endfor %}
</ol>
```
{% endraw %}
