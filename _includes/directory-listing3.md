{% assign test = "true" %}

{% assign directory = include.dir %}
{% if directory == "" %}{% assign directory = page.dir %}{% endif %}
{% if test == "true" %}Переданный параметр dir: ({{ directory }}). page.dir: {{ page.dir }}. {% if directory == page.dir %} dir и page.dir равны {% endif %}<br>{% endif %}

{% assign rec_tag = include.tag %}
{% if test == "true" %}Переданный параметр tag: ({{ rec_tag }})<br>{% endif %}

{% assign allpages = site.pages | sort: "path" %}
{% if test == "true" %}Первая страница на всем сайте: {{ allpages[0].url }}<br>{% endif %}

{% assign dirpages = allpages | where: "dir",  directory %}
{% if test == "true" %}Первая страница  в папке: {{ dirpages[0].url }}<br>{% endif %}

{% assign resultpages = dirpages | sort: "date" %}

{% if test == "true" %}Все страницы с тегом ({{ rec_tag }}):<br>{% endif %}

<ol reversed id="navigation">
{% for pg in resultpages %}
{% if pg.tags contains rec_tag or rec_tag == "" %}
<li><a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: "New page" }}</a> 
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endif %}
{% endfor %}
</ol>
