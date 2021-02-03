---
title: Блог
layout: default
---

# Блог

{% for post in site.categories.codes %}
    <time>{{ post.date | date: "%b %-d, %Y" }}</time>
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
{% endfor %}
