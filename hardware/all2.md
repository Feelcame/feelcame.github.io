---
date: 2021-05-30T13:48:14+03:00
modified: 2021-06-01T01:22:55+03:00
---

# All2

{% assign direct = site.pages | where: "dir",  page.dir %}
{% assign sorted = direct | sort: 'date' %}


<div id="navigation">
{% for p in sorted %}
<p><a href="{{ p.url }}">{{ p.title }}</a></p>
{% endfor %}
</div>


{% comment %}
{% endcomment %}
