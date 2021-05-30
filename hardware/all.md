---
created: 2021-05-30T11:09:45+03:00
modified: 2021-05-30T11:11:20+03:00
---

# All pages

All pages on directory  
{{ page.url | remove: all.html }}

{% for p in site.pages %}
{{ p.path }}
{% endfor %}
