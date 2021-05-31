---
date: 2021-05-30T11:09:45+03:00
modified: 2021-06-01T01:22:15+03:00
noindex: true
---

# All pages

All pages on directory  
{{ page.dir }}


### pages:
<div id="navigation">
{% for p in site.pages | sort: 'date', 'last' %}{% if p.dir == page.dir %}{% if p.noindex != true %}
<p><a href="{{ p.url | prepend: site.baseurl }}">{{ p.title }}</a> 
<time class="shaded">{{ p.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></p>
{% endif %}{% endif %}{% endfor %}
</div>
