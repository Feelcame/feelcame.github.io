{% assign debug = true %}
{% assign directory = include.dir | default: page.dir %}
{% assign rec_tag = include.tag | default: "" %}
{% if rec_tag %}rec_tag is true<br>{% endif %}
{% if debug %}DIR: ({{ directory }}). TAG: ({{ rec_tag }}){% endif %}
{% assign allpages = site.pages | sort: "path" %}
{% assign dirpages = allpages | where: "dir",  directory %}
{% if debug %}allpages[0]: ({{ allpages[0].url }}){% endif %}
{% if debug %}dirpages[0]: {{ dirpages[0].url }}{% endif %}
<ol reversed id="navigation">
{% for pg in dirpages %}
{% if pg.tags contains rec_tag or rec_tag == "" %}
<li><a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: "New page" }}</a> 
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endif %}
{% endfor %}
</ol>
