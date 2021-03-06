---
layout: default
title: Блог и новости
---

# Все статьи
1. {: reversed="reversed"}
{% for post in site.posts %}
{{ post.date | date: "%y%m%d" }} [{{ post.title }}]({{ post.url | prepend: site.baseurl }})  
{% endfor %}

{% comment %}<!--

<time>{{ post.date | date: "%b %-d, %Y" }}</time>
<h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>


Коллекции:

{% for post in site.categories.articles %}
    <time>{{ post.date | date: "%b %-d, %Y" }}</time>
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
{% endfor %}

-->{% endcomment %}
