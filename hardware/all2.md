---
date: 2021-05-30T13:48:14+03:00
modified: 2021-05-30T13:48:46+03:00
---

# All2

# pages:
<div id="navigation">
{% for p in site.pages | sort: 'date', 'last' %}{% if p.dir == page.dir %}{% if p.noindex != true %}
<p><a href="{{ p.url | prepend: site.baseurl }}">{{ p.title }}</a> 
<time class="shaded">{{ p.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></p>
{% endif %}{% endif %}{% endfor %}
</div>
