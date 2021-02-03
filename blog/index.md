---
title: Блог
layout: default
---

# Блог

{% for post in site.tags.blog %}
    <time>{{ post.created | date: "%b %-d, %Y" }}</time>
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
{% endfor %}
