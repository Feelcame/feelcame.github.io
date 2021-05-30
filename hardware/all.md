---
created: 2021-05-30T11:09:45+03:00
modified: 2021-05-30T11:42:07+03:00
---

# All pages

All pages on directory  
{{ page.dir }}

{% for p in site.collections.legal.docs %}
{{ p.path }} - {{ p.dir }}
{% endfor %}
