---
title: Контакты
date: 2020-05-10T21:39:06+03:00
modified: 2021-06-14T00:17:45+03:00
---

### Поисковая форма тут

### About
Сайт для себя. Целью ставится быстрый доступ к годному контенту. Еще он работает как записная книжка, благодаря программе [GitJournal](https://gitjournal.io/)

### Поддержка автора
Также можешь поддержать дальнейшие разработки, задонатив пару долларов на еду:  
* [На кофе](https://send.monobank.ua/jar/2Zk6tzkyGd)
* [На тортик](https://send.monobank.ua/jar/2Zk6tzkyGd)

### Блог
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
Все вопросы или предложения прошу писать в телеграм. Почта на всякий случай, если телегу вдруг забанят
- [**Feelcame (at) ya.ru**](https://t.me/feelcame)
- [**Feelcame (at) t.me**](https://t.me/feelcame)
