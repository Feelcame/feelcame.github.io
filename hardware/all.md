---
date: 2021-05-30T11:09:45+03:00
modified: 2021-07-18T00:48:00+03:00
---

# All pages

All pages on directory  
{{ page.dir }}


### pages:

{% include directory-listing.md %}

{% comment %}

<div id="navigation">
{% assign allpages = site.pages | sort: 'date' | reverse %}
{% for p in allpages %}{% if p.dir == page.dir %}{% if p.noindex != true %}
<p><a href="{{ p.url | prepend: site.baseurl }}">{{ p.title }}</a> 
<time class="shaded">{{ p.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></p>
{% endif %}{% endif %}{% endfor %}
</div>

{% endcomment %}
