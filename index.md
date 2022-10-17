---
title: Добро пожаловать домой
date: 2020-07-16T13:31:13+03:00
modified: 2022-08-19T02:24:23+03:00
layout: home
---


<header class="page-header" role="banner">
<h1 class="project-name">Привет</h1><br>
<h2 class="project-tagline">Все статьи распределены по категориям. Выбери нужную</h2>
	<div id="nav">
	<a href="/hardware/" class="btn">😎 Железки</a>
	<a href="/coding/" class="btn">🎮 Кодинг</a>
	<a href="/software/" class="btn">💾 Софт</a>
	<a href="/about" class="btn">🔍</a>
	<br>
	<a href="/life/" class="btn">Лайфстайл</a>
	</div>
</header>

<main id="content" class="main-content" role="main">




**Дом проектов Ромы**

Мой канал с котиками - [**@memcdn**](tg://resolve?domain=memcdn)

[Мои проекты](/projects/)

[Каталог инструментов](/shop/)

---

**Хочешь больше?**  

Принимаю заказы на разработку мелкой электроники. Контакты по ссылке ниже!<br><br><br>

<p style="text-align: center;"><style>
a.button7 {
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
  line-height: 3.5;
} 
a.button7:hover { background: rgb(53, 167, 110); }
a.button7:active {
  background: rgb(33,147,90);
  box-shadow: 0 3px rgb(33,147,90) inset;
}
</style>

<a href="/about.html#обратная-связь" class="button7">Напиши мне, зай</a><br>
_(лучше, конечно же, в телеграм)_
</p>

<br><br><br><br><br><br><br><br><br>




<footer class="site-footer">
	<span class="site-footer-owner">
	{{ site.copyright | default: "©" }}  <a href="/about">{{ site.github.owner_name }}</a>.
	</span>
	<span>
	Made with: <a href="{{ site.github.repository_url }}">GitHub Pages</a>
	</span>
</br></br></br>
</footer>

</main>

<script>
// переопределение всех внешних ссылок на открытие в новой вкладке
var links = document.links;
for (var i = 0, linksLength = links.length; i < linksLength; i++) {
	if (links[i].hostname != window.location.hostname) { links[i].target = '_blank'; }
}
</script>
