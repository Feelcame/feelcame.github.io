---
date: 2021-05-30T13:48:14+03:00
modified: 2021-05-30T15:54:52+03:00
---

# All2

{% assign test = "привет" %}

{{ test }}

{% assign sorted = site.pages | sort: 'dir' %}

{% assign hard = sorted | where: dir, page.dir %}

{% assign alfa = hard | sort: 'title' %}

<div id="navigation">
{% for p in alfa %}
<p><a href="{{ p.url }}">{{ p.title }}</a></p>
{% endfor %}
</div>

{% comment %}
{% if p.dir == page.dir %}
{% endif %}
{% endcomment %}
