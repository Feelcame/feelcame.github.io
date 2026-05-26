---
title: Скрипт вывода навигации в Jekyll (dir-ls.md)
date: 2021-11-05T11:58:23+02:00
modified: 2022-08-11T03:35:23+03:00
comments: 108
tags: web
---

**dir-ls.md** - этот скрипт для Jekyll выводит навигацию - список страниц в папке. Поддерживается кастомизация поведения через передачу параметров. 

Сортировка по дате (сначала новые). Группировка по пять ссылок, для удобства восприятия. Закрепленные выводятся в самом верху списка. Страницы без даты выводятся отдельно в самом низу

- ToC
{:toc}




## Использование
Простой пример:

	{% raw %}{% include dir-ls.md %}{% endraw %}

Передача параметров: 

	{% raw %}{% include dir-ls.md dir="/projects/" tag="hardware" pinned="yes" date="no" spoiler="Articles" %}{% endraw %}





## Описание параметров
{: #params }

**DIR** - указывает какую папку парсить. Если параметр не передан, используется текущая (из которой происходит вызов).  
- `(не передан)` - выводится содержимое текущей папки
- `/any/other/string/` - будет попытка парсить эту папку. Осторожнее с относительными путями

**TAG** - позволяет вывести только те страницы, которые помечены нужным тегом в заголовке страницы. Пример: `tags: code cool stuff`. Поле tags в данном примере - это массив из трех элементов. Обрати внимание на букву S в конце
- `(не передан)` - выведутся все страницы, без учета какие у них тэги
- `empty` - только страницы без тегов
- `code` - выведет только страницы с тегом "code"
- `cool stuff` - выведет только страницы в которых заданы оба тэга "cool" и "stuff", причем именно в такой же последовательности. Похоже это работает просто как текстовый поиск


**PINNED** - указывает нужно ли вывести закреп перед основным списком. Закрепленными считаются страницы с меткой `pin: 666` в заголовке файла. Что бы скрыть страницу из вывода - укажи `pin: 0`
- `(не передан)` - вывести только основной список без закрепа
- `yes` - перед основным списком также будет выведен закреп
- `only` - выведет только закреп без нумерации. Используй это что бы вывести только важные страницы там, где это нужно
Все другие аргументы будет проигнорированы и выполнится действие по-умолчанию

**DATE** - позволяет переопределить формат вывода даты рядом с каждой ссылкой
- `(не передан)` - выводится дата только к страницам, где она задана
- `yes` - возле каждой ссылки будет выведена дата. А если она не задана, то заглушка
- `no` - не добавлять метки времени ни к одной странице. будет скрыт даже html-тег


**SPOILER** - позволяет обернуть список в раскрывающееся меню details
- `(не передан)` - простой список
- `any string` - список будет выведен внутри свернутого спойлера с заголовком "any string"




## Скачать исходники
{: #src }

Текущее состояние: [**ссылка**]({{ site.github.repository_url }}/blob/master/_includes/dir-ls.md).  
Репозиторий гитхаб: [**ссылка**](https://github.com/Feelcame/jekyll-directory-listing)  
Демо: [**ссылка**](../demo/directory-listing/)  

>Данный скрипт был написан до того, как я обнаружил туториал от Jekyll: [как сделать навигацию](https://jekyllrb.com/tutorials/navigation/). Спойлер: у меня получилось лучше 👍 Но ты все-равно зайди почитай

## Известные проблемы
{: #bugs }
- Если выводить по тегам, то надо вручную проверять что все страницы вывелись. Идеально сделать отладочный вывод: сколько страниц в папке было, а сколько вывелось со всеми заданными тегами
- Заменить `prepend: site.baseurl` на более правильный вариант фильтра `relative_url`. Он исключает случайное дублирование слешей
- сортировка страниц без даты происходит в обратном порядке. по имени должно сортироваться в прямом порядке
- убрать параметр spoiler. он не нужен


## Пояснение работы
{: #work }

Внутри цикла FOR перебираются все страницы и оставляются только нужные. Затем сортировка, группировка, украшение html-тегами и вывод
	
{% raw %}
``` html
<ol>
{%- for pg in output_pages -%}
  <li>
    <a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a>
  </li>
{% endfor %}
</ol>
```
{% endraw %}

Для сортировки и фильтрации используются встроенные в Jekyll так называемые Liquid-фильтры. В примере ниже (строка 1) также показан пример передачи параметра

	{% raw %}
	{%- assign directory = include.dir | default: page.dir -%}  
	{%- 
	  assign output_pages = site.pages 
	  | where: "dir",  directory 
	  | where_exp: "item", "item.pin != 0"
	  | sort: "date" 
	  | reverse 
	-%}  
	{% endraw %}

## Список изменений  
{: #changelog }

<details markdown="1">
<summary markdown="0">Нажми, что бы посмотреть</summary>

v1.4.230323
- добавлен дебаг-вывод количества страниц. актуально для вывода по тегу
- убрано `id="navigation"` из тега списка, так как он не доложен повторяться. Используй заголовок перед выводом списка
- если список пустой, то будет выведено уведомление об этом

v1.4.221123
- изменено поведение `spoiler` - теперь он выводится свернутым
- изменен принцип работы параметра `date`. Теперь дату можно скрыть совсем, а по-умолчанию не выводится заглушка
- исправлена работа параметра `pinned="yes"`, раньше он не выводил данные
- переименовал в "dir-ls.md", раньше называлось просто ls.md

v1.3.220811
- теперь можно передать параметр `tag="empty"` - выведутся только страницы без каких либо тегов 
- что бы выводился закреп, теперь обязательно указывать именно `yes`, а не любую строку как ранее
- причесана документация

v1.2.220107 
- добавлен спойлер
- добавлен вывод закрепленных сообщений через тег `pinned`. А в общем списке они будут со скрепкой
- можно вывести только закрепленные сообщения, если передать параметр `pinned="only"`
- добавлено разбитие списка на блоки по пять сообщений

v1.1.211108 
- Теперь более читабельный код. Расставил переносы - получилось в два раза больше строк. Зато хоть можно понять шо тут происходит

v1.1.211106
- Можно передать `dir="articles"` и выведется список страниц в папке "articles"
- Фильтрация роезультатов по параметру `tag`

v1.0.0
- скопипастил цикл FOR из интернеетов и попробовал внедрить у себя на сайте. Версию назвал "1.0.0" т.к оно уже в работе

</details>

## Примеры кода (первые версии)
{: #code }

<details markdown="1"><summary markdown="0">Версия 1.211106 Проверенно работает</summary>
{% raw %}
``` html
{%- comment -%}Этот скрипт выводит список страниц в директории. Можно передать "dir" и "tag"  
{%- endcomment -%}

{%- assign debug = false -%}  
{%- assign directory = include.dir | default: page.dir -%}  
{%- assign rec_tag = include.tag | default: "" -%}  
{%- assign allpages = site.pages | sort: "path" -%}  
{%- assign dirpages = allpages | where: "dir",  directory -%}  
{%- assign datepages = dirpages | sort: "date" -%}  
{%- assign sortedpages = datepages | sort: "index" | reverse -%}  

Все страницы в папке ({{ directory }}){%- if rec_tag != "" %} с тегом ({{ rec_tag }}){%- endif -%}.  
{% if debug -%}Allpages[0]: ({{ allpages[0].url }}). Dirpages[0]: ({{ dirpages[0].url }}){%- endif -%}

<ol reversed id="navigation">
{%- for pg in sortedpages -%}
{%- if pg.tags contains rec_tag or rec_tag == "" -%}
{%- assign index = pg.index | default: nil -%}
{%- if index > 0 or index == nil %}
<li>{%- if index > 0 -%}📌{%- endif -%}
<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a> 
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time>
</li>
{% endif -%}
{%- endif -%}
{%- endfor -%}
</ol>
```
{% endraw %}
</details>


<details markdown="1"><summary markdown="0">Версия 2.211108 Проверено. Теперь более читабельные код</summary>

{% raw %}
``` html
{%- comment -%}Этот скрипт выводит список страниц в директории. Можно передать "dir" и "tag"{%- endcomment -%}

{%- assign directory = include.dir | default: page.dir -%}  

{%- assign sorted_pages = site.pages | sort: "path" | where: "dir",  directory | sort: "date" | sort: "index" | reverse -%}  
{%- assign not_pinned_pages = sorted_pages | where_exp: "item", "item.index == nil" -%}  
{%- assign finish_pages = sorted_pages | where_exp: "item", "item.index > 0" | reverse | concat: not_pinned_pages -%}  

{%- assign rec_tag = include.tag | default: "" -%}  
{%- if rec_tag != "" %}  
{%- assign finish_pages = finish_pages | where_exp: "item", "item.tags contains rec_tag" -%}  
{%- endif %}  

{%- comment -%}Дебаг. dir: ({{ directory }}), tag: ({{ rec_tag }}), qty: ({{ finish_pages.size }}).{%- endcomment -%}

<ol reversed id="navigation">
{%- for pg in finish_pages -%}
  <li>{%- if pg.index > 0 -%}:pushpin:{%- endif -%}
	<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a> 
	<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time>
  </li>
{%- endfor -%}
</ol>
```
{% endraw %}
</details>



<details markdown="1"><summary markdown="0">Версия 3.220107 спойлер, закреп, блоки</summary>

{% raw %}
``` html
{%- comment -%}  
Этот скрипт выводит список страниц в директории. Можно передать "dir", "tag" и "pinned".  
Сортирует все найденные страницы по дате (сначала новые). Если у страницы нет даты - она выводится внизу.  
{%- endcomment -%}  

{%- assign directory = include.dir | default: page.dir -%}  
{%- assign rec_tag = include.tag | default: false -%}  
{%- assign spoiler = include.spoiler | default: false -%}
{%- assign showpinned = include.pinned | default: false -%}

{%- comment -%}ВСЕ СТРАНИЦЫ{%- endcomment -%}  
{%- 
  assign all_pages = site.pages 
  | where: "dir",  directory 
  | where_exp: "item", "item.pin != 0"
  | sort: "date" 
  | reverse 
-%}  

{%- comment -%}ТЕГИ{%- endcomment -%}  
{%- if rec_tag %}  
{%- assign all_pages = all_pages | where_exp: "item", "item.tags contains rec_tag" -%}  
{%- endif %}  

{%- comment -%}ЗАКРЕП{%- endcomment -%}  
{%- 
  assign pinned_pages = all_pages 
  | where_exp: "item", "item.pin != nil" 
  | where_exp: "item", "item.pin > 0" 
  | sort: "pin" 
-%}  

{%- comment -%}БЕЗ ДАТЫ{%- endcomment -%}  
{%- 
  assign wo_date_pages = all_pages 
  | where_exp: "item", "item.date == nil" 
  | reverse
-%}  

{%- comment -%}ТОЛЬКО С ДАТОЙ{%- endcomment -%}  
{%- 
  assign output_pages = all_pages 
  | where_exp: "item", "item.date != nil" 
-%} 


{%- comment -%}ФОРМИРУЕМ ВЫВОД{%- endcomment -%}  
{%- capture result -%}
<!-- Debug. dir: ({{ directory }}). tag: ({{ rec_tag }}), qty: ({{ output_pages.size }}) -->
<ol reversed id="navigation">
{%- for pg in output_pages -%}
<li>{%- if pg.pin > 0 -%}:pushpin:{%- endif %}
<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a>
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>

{%- comment -%}ПЕРЕНОСЫ{%- endcomment -%}  
{%- assign ostatok = forloop.length | modulo: 5 -%}
{%- assign modul = forloop.index | plus: 5 | minus: ostatok | modulo: 5 -%}
{%- if modul == 0 and forloop.index != forloop.length -%}<br>{%- endif %}
{% endfor -%}
</ol>

{%- comment -%}СПИСОК СТРАНИЦ БЕЗ ДАТЫ{%- endcomment -%}  
<ul>
{%- for pg in wo_date_pages -%}
<li>{%- if pg.pin > 0 -%}:pushpin:{%- endif %}
<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a>
<time class="shaded">{{ pg.date | date: "%Y-%m-%d" | default: "гггг-мм-дд" }}</time></li>

{% endfor -%}
</ul>
{%- endcapture -%}


{%- comment -%}ФОРМИРУЕМ ЗАКРЕП{%- endcomment -%}  
{%- capture pins -%}
<ul>
{%- for pg in pinned_pages -%}
<li>
<a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title | default: pg.name }}</a>
</li>
{% endfor -%}
</ul>
{%- endcapture -%}


{%- comment -%}ВЫВОДИМ РЕЗУЛЬТАТ{%- endcomment -%}  
{%- if showpinned %}
{{ pins }}
{%- endif %}  

{%- if showpinned !="only" %}
{%- if spoiler -%}
<details markdown="1" open><summary markdown="0">{{ spoiler }}</summary>
{{ result }}
</details>
{%- else -%}
{{ result }}
{%- endif -%}
{%- endif -%}

```
{% endraw %}
</details>


<details markdown="1"><summary markdown="0">Версия 4.</summary>

{% raw %}
``` html
пока что тут пусто. надеюсь так и останется
```
{% endraw %}
</details>


{% comment %}

## Примеры и тесты
На отдельной странице: [ссылка](../demo/directory-listing/)



<details markdown="1"><summary markdown="0">Передано TAG и DIR</summary>
```{ % include dir-ls.md dir="/projects/" tag="hardware" %}```   
{% include dir-ls.md dir="/projects/" tag="hardware" %}
</details>

<details markdown="1"><summary markdown="0">Передано TAG</summary>
```{ % include dir-ls.md tag="hardware" %}```   
{% include dir-ls.md tag="hardware" %}
</details>

<details markdown="1"><summary markdown="0">Передано DIR</summary>
```{ % include dir-ls.md dir="/projects/" %}```   
{% include dir-ls.md dir="/projects/" %}
</details>


<details markdown="1"><summary markdown="0">Нет параметров</summary>
```{ % include dir-ls.md %}```   
{% include dir-ls.md %}
</details>


{% endcomment %}
