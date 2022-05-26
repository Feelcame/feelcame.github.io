<ol reversed id="navigation">
{% assign allpages = site.pages | where: "dir",  page.dir %}
{% assign sorted = allpages | sort: 'date' | reverse %}
{% for p in sorted %}{% if p.noindex != true %}
<li><a href="{{ p.url | prepend: site.baseurl }}">{{ p.title | default: "New page" }}</a> 
<time class="shaded">{{ p.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endif %}{% endfor %}
</ol>
