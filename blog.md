---
layout: default
title: Блог и новости
---

# Все статьи

<ol reversed="reversed">
  <li>{{ post.date | date: "%y%m%d" }} <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
</ol>




{% comment %}
<!--

{% for post in site.posts %}
1. {{ post.date | date: "%y%m%d" }} [{{ post.title }}]()  
{% endfor %}

<time>{{ post.date | date: "%b %-d, %Y" }}</time>
<h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>


Коллекции:

{% for post in site.categories.articles %}
    <time>{{ post.date | date: "%b %-d, %Y" }}</time>
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
{% endfor %}

-->
{% endcomment %}
