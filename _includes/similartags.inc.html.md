---
created: 2021-03-08T23:18:50+02:00
modified: 2021-03-09T00:02:22+02:00
---

# ### статьи с тегом: #{{ include.tags }}

<h4>передано: {{ include.tags }}.</h4>

<ol reversed="reversed">
  {% for tag in site.tags %}
    {% if tag[0] == "загрузки" %}
      {% for post in tag[1] %}
         <li>
           {{ post.date | date: "%y%m%d" }}
           <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title | default: Без имени}}</a>
         </li>
       {% endfor %}
    {% endif %}
  {% endfor %}
</ol>