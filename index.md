---
title: Домик
date: 2020-07-16T13:31:13+03:00
modified: 2022-08-19T02:24:23+03:00
layout: home
---


<header class="page-header" role="banner" markdown="0">
<h1 class="project-name">Привет</h1>
<h2 class="project-tagline">Все статьи распределены по категориям. Для начала выбери интересующую</h2>
	<div id="nav">
		<a href="{{ '/index' | relative_url }}" title="Домой" class="btn">🏠</a>
		<a href="{{ '/hard/' | relative_url }}" title="Железки" class="btn">😎 Хліб</a>
		<a href="{{ '/code/'   | relative_url }}" title="Программирование" class="btn">🎮 Сіль</a>
		<a href="{{ '/soft/' | relative_url }}" title="Софт" class="btn">💾 Вода</a>
		<a href="{{ '/life/' | relative_url}}" title="Лайфстайл" class="btn">💛Життя💙</a>
		<a href="{{ '/projects/' | relative_url}}" title="Проекты" class="btn">🛠 Проекти</a>
		<a href="{{ '/about'     | relative_url }}" title="Поиск" class="btn">🔍</a>
	</div>
</header>

<main id="content" class="main-content" role="main" markdown="1">

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

## Как это работает

Пожалуйста, почитай обращение в шапке. 
Понимаю, что сейчас у всех баннерная 
слепота и крупный шрифт никто не читает...

Навигация по сайту построена на 
взаимодействии с кнопками вверху. 
А на главной будет пусто, ну максимум 
какая-то реклама.


<br>
<br>
<br>




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
<a href="/about.html#обратная-связь" class="button7" title="выбери меня">написать&nbsp;автору</a>

</div>

<br><br><br><br><br><br><br><br><br>





<footer class="site-footer" markdown="0">
	<span class="site-footer-owner">
	{{ site.copyright | default: "©" }}  <a href="/about">{{ site.github.owner_name }}</a>.
	</span>
	<span>
	Made with GitHub Pages
	<!-- <a href="{{ site.github.repository_url }}">GitHub Pages</a>-->
	</span>
	
	<div>
	<a href="./projects/personal-page.html" style="color: #ccc;">[todo]</a>
	<a href="https://github.com/Feelcame/feelcame.github.io/edit/master/index.md" style="color: #fdf85c59;">[edit]</a>
	</div>
	
<br><br><br><br><br>
</footer>


</main>

<script>
// переопределение всех внешних ссылок на открытие в новой вкладке
var links = document.links;
for (var i = 0, linksLength = links.length; i < linksLength; i++) {
	if (links[i].hostname != window.location.hostname) { links[i].target = '_blank'; }
}
</script>
