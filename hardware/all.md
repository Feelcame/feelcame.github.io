---
created: 2021-05-30T11:09:45+03:00
modified: 2021-05-30T12:55:33+03:00
---

# All pages

All pages on directory  
{{ page.dir }}


### pages:
<div>
{% for p in site.pages %}{% if p.dir == page.dir %}
<p>{{ p.date date: | "%Y-%m-%d" | default: "ггммдд" }} <a href="{{ p.url }}">{{ p.title }}</a></p>
{% endif %}
{% endfor %}
</div>
