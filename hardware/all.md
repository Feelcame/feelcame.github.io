---
created: 2021-05-30T11:09:45+03:00
modified: 2021-05-30T13:14:24+03:00
---

# All pages

All pages on directory  
{{ page.dir }}


### pages:
<div id="navigation">
{% for p in site.pages %}{% if p.dir == page.dir %}
<p><a href="{{ p.url }}">{{ p.title }}</a><br>
{{ p.date date: | "%Y-%m-%d" | default: "гггг-мм-дд" }}</p>
{% endif %}{% endfor %}
</div>
