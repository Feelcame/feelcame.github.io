---
tags: Hello, world!, r u fine?
---

## arrays
{% assign my_arr = page.tags | split: ", " %}


{% for member in my_arr %}
- {{ member }}
{% endfor %}
