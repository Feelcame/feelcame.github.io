---
date: 2021-05-30T13:48:14+03:00
modified: 2021-05-30T15:05:54+03:00
---

# All2

{% assign test = "привет" %}

{{ test }}

{% assign sorted = site.pages | sort: 'dir' %}


<div id="navigation">
{% for p in sorted %}{% if p.dir == page.dir %}
<p><a href="{{ p.url }}">{{ p.title }}</a></p>
{% endif %}{% endfor %}
</div>

{% comment %}
{% endcomment %}
