---
date: 2020-12-17T00:51:55+02:00
modified: 2021-06-01T01:24:03+03:00
tags: железо
title: Железо и схемотехника
---

### Статьи в папке {{ page.dir }}:
<ol id="navigation">
{% assign allpages = site.pages | sort: 'date' | reverse %}
{% for p in allpages %}{% if p.dir == page.dir %}{% if p.noindex != true %}
<li><a href="{{ p.url | prepend: site.baseurl }}">{{ p.title }}</a> 
<time class="shaded">{{ p.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>
{% endif %}{% endif %}{% endfor %}
</ol>


### **Статьи по теме разработки/эксплуатации hardware**
1. [Типы коннекторов](./connectors.md)
1. [Запись звука конференции](./запись-конференции-audacity.md)
1. [RFID-идентификация](./RFID.md)
1. [Разводка печантых плат](./PCB.md)
1. [Регулятор громкости](./регулятор_громкости.md) 
1. [Питение и регуляторы напряжения](./регуляторы_напруги.md)
1. [автостарт андроид телефона при подаче питания](автостарт-андроид-телефона.md)
1. [Altium_Designer](Altium_Designer)


### **статьи блога с тегом: "{{ page.tags }}"**


{% include similar.md tags=page.tags %}



Ссылка на эту страницу  
{{ page.url }}
