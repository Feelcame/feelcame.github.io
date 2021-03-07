---
title: Загрузки
comments: false
modified: 2020-12-14T11:13:31+02:00
created: 2020-05-16T13:39:53+03:00
tags: загрузки downloads
---

<table><tbody style="width:100%;display:table;text-align:center;"><tr>
  <td><a href="./soft"><b>Софт</b></a></td>
  <td><a href="./books"><b>Книги</b></a></td>
  <td><a href="./music"><b>Музыка</b></a></td>
  <td><a href="./kino"><b>Кино</b></a></td>
</tr></tbody></table>


## Статьи по теме:

1. ггммдд [название](./)
1. 201126 [поделиться-большим-файлом](./201126_поделиться-большим-файлом.md)
1. 201119 [скачать_APK с пк](./201119_скачать_APK.md)
1. 201119 [Удаленное управление android](./201119_удаленное_управление_android.md)
1. 201010 [Редакторы PDF](./201010_Редакторы_PDF.md)  
{: reversed="reversed"}


## статьи с тегом: #загрузки
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

## статьи блога {{ site.tags.git[0].title }}
<ol reversed="reversed">
  {% for post in site.tags.загрузки %}
    <li>{{ post.date | date: "%y%m%d" }}
      <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title | default: Без имени}}</a>
    </li>
  {% endfor %}
</ol>


## все теги

{% for tag in site.tags.загрузки %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}


***

> Часто хочется сохранить ссылку на какую нибудь полезную загрузку так, что бы не потерять. Но после того как синхронизация закладок оперы подвела с хранением, а конструктор wen.ru приказал долго жить - я наконец переехал на github pages. Теперь все ссылки и не только хранятся здесь. А благодаря системе контроля версий Git - у меня всегда останутся локальные копии фазписей, даже если майкрософт решит зафакапить такой прекрасный сервис, как гитхаб. Слава Торвальдсу, создаашему гит ;-)
> 
> Если будете копировать что-то отсюда - сообщите мне об этом в комментах на странице контактов, я буду щаслив узнать что кому-то принес пользу ;-)
