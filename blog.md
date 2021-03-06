---
layout: default
title: Блог и новости
---

# Все статьи

{% for post in site.posts %}
1. {{ post.date | date: "%b %-d, %Y" }} [{{ post.title }}]({{ post.url | prepend: site.baseurl }})
{: reversed="reversed"}
{% endfor %}

{% comment %}
<!--


<time>{{ post.date | date: "%b %-d, %Y" }}</time>
<h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>


*** 

Коллекции:

~~~
{% for post in site.categories.articles %}
    <time>{{ post.date | date: "%b %-d, %Y" }}</time>
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
{% endfor %}
~~~

-->
{% endcomment %}
