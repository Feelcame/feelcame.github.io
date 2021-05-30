---
date: 2021-05-30T13:48:14+03:00
modified: 2021-05-30T16:06:21+03:00
---

# All2

{% assign cdir = page.dir %}

{{ cdir }}

{% assign sorted = site.pages | sort: 'dir' %}

{% assign hard = sorted | where: "dir",  cdir %}

{% assign alfa = hard | sort: 'title' %}


<div id="navigation">
{% for p in hard %}
<p><a href="{{ p.url }}">{{ p.title }}</a></p>
{% endfor %}
</div>

{% comment %}
{% if p.dir == page.dir %}
{% endif %}
{% endcomment %}
