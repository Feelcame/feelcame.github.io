---
title: все теги
---

## все теги

<ol reversed="reversed">
  {% for post in site.tags %}
    <li>{{ post.created | date: "%y%m%d" }}
      <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title | default: Без имени}}</a>
    </li>
  {% endfor %}
</ol>

# из примера

{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
