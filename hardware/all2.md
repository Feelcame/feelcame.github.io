---
date: 2021-05-30T13:48:14+03:00
modified: 2021-05-30T15:04:44+03:00
---

# All2

{% assign test = "привет" %}

{{ test }}

{% assign sorted = site.pages | sort: 'title' %}


<div id="navigation">
{% for p in sorted %}{% if p.dir == page.dir %}
<p><a href="{{ p.url }}">{{ p.title }}</a></p>
{% endif %}{% endfor %}
</div>

{% comment %}
{% endcomment %}
