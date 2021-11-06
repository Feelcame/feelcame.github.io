{% assign debug = true %}

{% assign directory = include.dir | default: page.dir %}
{% assign rec_tag = include.tag | default: "" %}
{% if debug %}DIR: ({{ directory }}). TAG: ({{ rec_tag }}){% endif %}

{% assign allpages = site.pages | sort: "path" %}
{% assign dirpages = allpages | where: "dir",  directory %}
{% if debug %}Первая страница на всем сайте: {{ allpages[0].url }}<br>{% endif %}
{% if debug %}Первая страница  в папке: {{ dirpages[0].url }}<br>{% endif %}

<ol reversed id="navigation">
{% for pg in dirpages %}
{% if pg.tags contains rec_tag or rec_tag == "" %}
<li><a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: "New page" }}</a> 
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endif %}
{% endfor %}
</ol>
