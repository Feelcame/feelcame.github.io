---
date: 2021-05-30T13:48:14+03:00
modified: 2021-05-30T13:52:18+03:00
---

# All2

<div id="navigation">
{% for p in site.pages | sort: 'date' %}{% if p.dir == page.dir %}
<p><a href="{{ p.url }}">{{ p.title }}</a> </p>
{% endif %}{% endfor %}
</div>
