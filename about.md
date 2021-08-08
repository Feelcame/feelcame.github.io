---
title: Контакты
date: 2020-05-10T21:39:06+03:00
modified: 2021-08-08T16:09:57+03:00
comments: true
---

**Тут должна быть поисковая форма в репозитории на github**

Сайт для себя, работает как ***записная книжка*** и шпаргалка на будущее.
Если сайт полезный - можешь [заказать платную консультацию](https://t.me/feelcame)  

Мои контакты:  
[t.me/feelcame](https://t.me/feelcame).  
Альтернатива - гитхаб.  
По работе: _корпоративный email_

### Черновички
<ul reversed="reversed">
{% for post in site.posts %}
  <li>
    {{ post.date | date: "%Y-%m-%d" | default: "гг-мм-дд" }} 
      <a href="{{ post.url | prepend: site.baseurl }}">
        {{ post.title | default: "Новая запись" }}
      </a>
  </li>
{% endfor %}
</ul>

### native telegram comments
<script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="feelsoft/221" data-comments-limit="5"></script>

### еще одни комментарии
