---
created: 2021-01-15T00:28:21+02:00
modified: 2021-01-15T00:35:10+02:00
---

# Test

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

Егд