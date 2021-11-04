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
