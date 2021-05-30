---
date: 2021-05-30T13:48:14+03:00
modified: 2021-05-30T14:35:06+03:00
---

# All2

{% capture pags %}

{{ site.pages | sort: 'date' }}

{% endcspture %}



{% comment %}
<div id="navigation">
{% for p in pags %}{% if p.dir == page.dir %}
<p><a href="{{ p.url }}">{{ p.title }}</a> </p>
{% endif %}{% endfor %}
</div>

{% endcomment %}
