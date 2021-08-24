---
date: 2021-08-24T14:19:55+03:00
modified: 2021-08-24T14:35:39+03:00
---

<ol reversed id="navigation">
{% assign allpages = site.pages | where: "dir",  page.dir %}
{% assign sorted = allpages | sort: 'date' | reverse %}
{% for p in sorted %}{% if p.index > 0 %}
<li><a href="{{ p.url | prepend: site.baseurl }}">{{ p.title | default: "New page" }}</a> 
<time class="shaded">{{ p.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endif %}{% endfor %}
</ol>
