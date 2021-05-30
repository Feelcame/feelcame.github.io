---
created: 2021-05-30T11:09:45+03:00
modified: 2021-05-30T12:35:30+03:00
---

# All pages

All pages on directory  
{{ page.dir }}


### pages:
<div>
{% for p in site.pages %}
  {% if p.dir == page.dir %}
    <p>{{ p.url }}</p>
  {% endif %}
{% endfor %}
</div>
