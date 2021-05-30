---
date: 2021-05-30T13:48:14+03:00
modified: 2021-05-30T16:02:59+03:00
---

# All2

{% assign cdir = page.dir %}

{{ cdir }}

{% assign sorted = site.pages | sort: 'dir' %}

{% assign hard = sorted | where: dir,  cdir %}


<div id="navigation">
{% for p in hard %}
<p><a href="{{ p.url }}">{{ p.title }}</a></p>
{% endfor %}
</div>

{% comment %}
{% if p.dir == page.dir %}
{% endif %}
{% endcomment %}
