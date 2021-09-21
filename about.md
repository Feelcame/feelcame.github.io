---
title: Контакты
date: 2020-05-10T21:39:06+03:00
modified: 2021-08-21T15:31:42+03:00
comments: true
---

**Внимание! Поиск перекинет на другой сайт**
<form name="search" method="get" target="_blank" action="https://github.com/Feelcame/linker.pp.ua/search">
    <input type="search" name="q" placeholder="Поиск">
    <button type="submit">Найти</button> 
</form>

Сайт для себя, работает как ***записная книжка*** и шпаргалка на будущее.  
Если информация на сайте полезная, но ты считаешь что нужно что-то большее - [закажи разработку за деньги](#мои-контакты)

### Мои контакты 
Telegran: [@feelcame](https://t.me/feelcame) (приватно)  
GitHub: [Issues](https://github.com/Feelcame/feelcame.github.io/issues) (публично)  
По работе: _корпоративный email_ (напишу сам)

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
<script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="rf_art/807" data-comments-limit="5"></script>

### еще одни комментарии
