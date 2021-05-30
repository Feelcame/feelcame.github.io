---
created: 2021-05-30T11:09:45+03:00
modified: 2021-05-30T11:19:51+03:00
---

# All pages

All pages on directory  
{{ page.dir }}

{% for p in site.pages | where: page.dir, "/hardware/"  %}
{{ p.path }}
{% endfor %}
