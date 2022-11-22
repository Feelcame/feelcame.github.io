---
title: Поиск
permalink: /:basename
---

<input type="text" id="search-input2" placeholder="Введи поисковой запрос.." style="width: 100%; padding: 12px 20px; margin: 8px 0; box-sizing: border-box;">

<ul id="results-container"></ul>

<script src="{{ site.baseurl }}/assets/js/simple-jekyll-search.js"></script>

<script>
  window.simpleJekyllSearch = new SimpleJekyllSearch({
	searchInput: document.getElementById('search-input2'),
	resultsContainer: document.getElementById('results-container'),
	json: '{{ site.baseurl }}/assets/json/search.json',
	searchResultTemplate: '<li><a href="{url}?search={query}" title="{name}" target="_blank">{title}</a></li>',
	noResultsText: 'No results found',
	limit: 20,
	fuzzy: false,
	exclude: ['Welcome']
  })
</script>


<script>
function setInput () {
var query = decodeURIComponent(window.location.search.substring(1)).split("&")[0].split("=")[1];
var pole = document.getElementById('search-input2');
pole.value = query;
const event = new Event('input');
pole.dispatchEvent(event);
return false;
}
setTimeout(setInput, 1000);
</script>





<!-- 
<div id="srch" markdown="0"></div>

<details>
<strong>Внимание! Поиск перекинет на другой сайт</strong>
<form name="search" method="get" target="_blank" action="https://github.com/Feelcame/{{ site.github.repository_name }}/search">
<input type="search" name="q" placeholder="Поиск Github">
<button type="submit">Найти</button> 
</form>
</details>


TODO. Добавить радиокнопки для переключения типа поиска 
или сделать три кнопки (по сайту, по репо, через гугл) 
Добавить всплывающую строку поиска по нажатию кнопки в меню


-->
