---
title: Карта сайта
layout: default
permalink: /:basename
---

# Блог site.tags.blog

<ul>
{% for post in site.tags.blog %}
    <li>{{ post.created | date: "%b %-d, %Y" }}
    <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>

# Все страницы
(Интереесно что здесь выведется)

<ul>
{% for page in site.pages %}
    <li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title | default: "Без названия"}}</a></li>
{% endfor %}
</ul>
