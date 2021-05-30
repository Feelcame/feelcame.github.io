---
date: 2021-05-30T13:48:14+03:00
modified: 2021-05-30T15:01:14+03:00
---

# All2

{% assign test = "привет" %}

{{ test }}

{% assign sorted = site.pages | sort: 'date', 'last' %}


{% comment %}
<div id="navigation">
{% for p in pags %}{% if p.dir == page.dir %}
<p><a href="{{ p.url }}">{{ p.title }}</a> </p>
{% endif %}{% endfor %}
</div>

{% endcomment %}
