---
layout: default
title: Блог и новости
---

### **Все статьи**


<ul reversed="reversed">
{% for post in site.posts %}
  <li>
    {{ post.date | date: "%Y-%m-%d" | default: "ггммдд" }} 
      <a href="{{ post.url | prepend: site.baseurl }}">
        {{ post.title | default: "Новая запись" }}
      </a>
  </li>
{% endfor %}
</ul>

{% comment %}
<!-- нумерация строк -->
<ol reversed="reversed">
{% for post in site.posts %}
  <li>
    {{ post.date | date: "%y%m%d" | default: "ггммдд" }} 
      <a href="{{ post.url | prepend: site.baseurl }}">
        {{ post.title | default: "Новая запись" }}
      </a>
  </li>
{% endfor %}
</ol>





<!--

{% for post in site.posts %}
1. {{ post.date | date: "%y%m%d" }} [{{ post.title }}]({{ post.url | prepend: site.baseurl }})  
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
