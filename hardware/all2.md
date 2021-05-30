---
date: 2021-05-30T13:48:14+03:00
modified: 2021-05-30T14:12:07+03:00
---

# All2

{% assign pages = site.pages | sort: 'date' %}

<div id="navigation">
{% for p in pages | sort: 'date' %}{% if p.dir == page.dir %}
<p><a href="{{ p.url }}">{{ p.title }}</a> </p>
{% endif %}{% endfor %}
</div>
