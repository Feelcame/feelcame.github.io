---
created: 2021-05-30T11:09:45+03:00
modified: 2021-05-30T13:38:26+03:00
---

# All pages

All pages on directory  
{{ page.dir }}


### pages:
<div id="navigation">
{% for p in site.pages %}{% if p.dir == page.dir %}{% if p.noindex != true %}
<p><a href="{{ p.url | prepend: site.baseurl }}">{{ p.title }}</a> 
<time class="shaded">{{ p.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></p>
{% endif %}{% endif %}{% endfor %}
</div>
