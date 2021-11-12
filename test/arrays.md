---
tags: "Hello, world!, u r good?"
---

## arrays
{{ assign my_arr = page.tags | split: ", " }}


{% for member in my_arr %}
- {{ member }}
{% endfor %}
