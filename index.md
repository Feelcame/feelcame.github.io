---
title: Домик
date: 2020-07-16T13:31:13+03:00
modified: 2023-03-20T22:24:23+03:00
layout: home
---

## Популярные статьи
- [Программы для Android](/soft/android.md)
- [Программы для Windows](/soft/windows.md)
- [Jekyll - CMS для статичных сайтов](/code/jekyll.md)

---

<style>
a.button7 {
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
  line-height: 4;
  margin-left: 10px;
  margin-right: 10px;
} 
a.button7:hover { background: rgb(53, 167, 110); }
a.button7:active {
  background: rgb(33,147,90);
  box-shadow: 0 3px rgb(33,147,90) inset;
}
a.not_prefer{
  background: rgb(128 205 165);
}
</style>



<br>

<div style="text-align: center;">
	
<h1><strong>Привет, это админ</strong></h1>

<div style="max-width: 416px; text-align: center;margin-right: auto; margin-left: auto;">
<p>
Надеюсь тебе понравились мои статьи.<br>
Я занимаюсь разработкой электроники, от PCB до Firmware. Если тебе нужно спроектировать что-то, пожалуйста, напиши мне
</p>
</div>
	
<br>


<!--
<a href="/demo/64/?гараж.txt#0J/RgNC+0YHRgtC40YLQtSwg0LPQsNGA0LDQtiDRg9C20LUg0LrRgtC+LdGC0L4g0LrRg9C/0LjQuw" class="button7 not_prefer" title="мимо">купить&nbsp;гараж</a>
-->
<a href="/projects/" class="button7 not_prefer" title="узнать больше">мои&nbsp;проекты</a>
<a href="https://memcdn.t.me" class="button7 not_prefer" title="мяу">видео&nbsp;с&nbsp;котиками</a>
<a href="/about.html" class="button7" title="выбери меня">заказать&nbsp;разработку</a>

</div>



{% comment %}
<div style="text-align: center;">
	
<h1><strong>ПРОДАМ ГАРАЖ</strong></h1>

<div style="max-width: 416px; text-align: center;margin-right: auto; margin-left: auto;">
<p>
Шутка-минутка. Всего лишь занимаюсь разработкой электроники. <br>
Могу и для тебя что-нибудь спроектировать
</p>
</div>
	
<br>


<a href="/demo/64/?гараж.txt#0J/RgNC+0YHRgtC40YLQtSwg0LPQsNGA0LDQtiDRg9C20LUg0LrRgtC+LdGC0L4g0LrRg9C/0LjQuw" class="button7 not_prefer" title="мимо">купить&nbsp;гараж</a>
<a href="https://memcdn.t.me" class="button7 not_prefer" title="мяу">видео&nbsp;с&nbsp;котиками</a>
<a href="/about.html" class="button7" title="выбери меня">написать&nbsp;автору</a>

</div>

{% endcomment %}

<br><br><br><br><br><br><br><br><br>

---

- "site.url": `{{ site.url }}`
- "site.baseurl": `{{ site.baseurl }}`
- "pages_hostname": `{{ site.github.pages_hostname }}`
- "owner_name": `{{ site.github.owner_name }}`
- "repository_name": `{{ site.github.repository_name }}`
- "url" (or the CNAME): `{{ site.github.url }}`


