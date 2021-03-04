---
layout: default
title: Блог и новости
---

# Все статьи

{% for post in site.posts %}
<time>{{ post.date | date: "%b %-d, %Y" }}</time>
<h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
{% endfor %}

Коллекции:

~~~
{% for post in site.categories.articles %}
    <time>{{ post.date | date: "%b %-d, %Y" }}</time>
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
{% endfor %}
~~~


<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
