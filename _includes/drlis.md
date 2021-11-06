---
date: 2021-11-06T11:24:29+02:00
modified: 2021-11-06T12:22:55+02:00
---

{% assign debug = true %}
{% assign directory = include.dir | default: page.dir %}
{% assign rec_tag = include.tag | default: "" %}
{% assign allpages = site.pages | sort: "path" %}
{% assign dirpages = allpages | where: "dir",  directory %}
{% assign datepages = dirpages | sort: "date" | reverse %}
{% assign sortedpages = datepages | sort: "index" %}




{% if debug %}DIR: ({{ directory }}). TAG: ({{ rec_tag }}). Allpages[0]: ({{ allpages[0].url }}). Dirpages[0]: ({{ dirpages[0].url }}){% endif %}


<ol reversed id="navigation">
{% for pg in sortedpages %}
{% if pg.tags contains rec_tag or rec_tag == "" %}
{% assign index = pg.index | default: nil %}
{% if index > 0 or index == nil %}
<li>#{{ index }}<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: "New page" }}</a> 
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endif %}
{% endif %}
{% endfor %}
</ol>
