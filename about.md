---
title: Контакты
date: 2020-05-10T21:39:06+03:00
modified: 2021-06-14T00:17:45+03:00
---

**Тут должна быть поисковая форма в репозитории на github**

### About
Сайт для себя, работает как записная книжка и шпаргалка на будущее.  
Если инфа помогла - отблагодарить можно скинув доллар [на кофе](https://send.monobank.ua/jar/2Zk6tzkyGd)

### Черновички
<ul reversed="reversed">
{% for post in site.posts %}
  <li>
    {{ post.date | date: "%Y-%m-%d" | default: "ггммдд" }} 
      <a href="{{ post.url | prepend: site.baseurl }}">
        {{ post.title | default: "Новая запись" }}
      </a>
  </li>
{% endfor %}
</ul>

### Контакты
Все вопросы или предложения прошу писать в телегу. Альтернатива - гитхаб
- [**Feelcame (at) t.me**](https://t.me/feelcame)
