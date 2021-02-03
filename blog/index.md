---
title: Блог
layout: default
---

# Блог

{% for post in site.tags.blog %}
    <time>{{ post.created | date: "%b %-d, %Y" }}</time>
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
{% endfor %}

# Все страницы
(Интереесно что здесь выведется)

<ul>
{% for page in site.pages %}
    <li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></li>
{% endfor %}
</ul>
