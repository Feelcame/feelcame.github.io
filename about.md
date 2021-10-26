---
title: Контакты
date: 2020-05-10T21:39:06+03:00
modified: 2021-08-21T15:31:42+03:00
comments: false
---

**Внимание! Поиск перекинет на другой сайт**
<form name="search" method="get" target="_blank" action="https://github.com/Feelcame/linker.pp.ua/search">
<input type="search" name="q" placeholder="Поиск">
<button type="submit">Найти</button> 
</form>

Сайт для себя, работает как ***записная книжка*** и шпаргалка на будущее.  
Если хочешь поддержать материально - [закажи разработку за деньги](#обратная-связь)

### Мои контакты 
Личка Telegram: [@feelcame](https://t.me/feelcame)  
Форум GitHub: [discussions](https://github.com/Feelcame/feelcame.github.io/discussions)  
Email по работе: заполните [форму ниже](#обратная-связь). Отвечу с _корпоративной почты_

## Обратная связь
<iframe src="https://formstruct.ru/form/6177bc223910cc59358b456d" width="100%" height="450" align="left" style="position:relative;" frameborder="0" scrolling="yes" markdown="0">Frame error</iframe>

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
