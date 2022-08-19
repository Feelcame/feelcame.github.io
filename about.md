---
title: Контакты
date: 2020-05-10T21:39:06+03:00
modified: 2022-08-19T15:31:42+03:00
comments: false
---
<input type="text" id="search-input" placeholder="Введи поисковой запрос.." style="width: 100%; padding: 12px 20px; margin: 8px 0; box-sizing: border-box;">
<ul id="results-container"></ul>

<script src="{{ site.baseurl }}/assets/js/simple-jekyll-search.js"></script>

<script>
  window.simpleJekyllSearch = new SimpleJekyllSearch({
	searchInput: document.getElementById('search-input'),
	resultsContainer: document.getElementById('results-container'),
	json: '{{ site.baseurl }}/assets/json/search.json',
	searchResultTemplate: '<li><a href="{url}#:~:text={query}" title="{name}" target="_blank">{title}</a></li>',
	noResultsText: 'No results found',
	limit: 20,
	fuzzy: false,
	exclude: ['Welcome']
  })
</script>

<details>
<strong>Внимание! Поиск перекинет на другой сайт</strong>
<form name="search" method="get" target="_blank" action="https://github.com/Feelcame/{{ site.github.repository_name }}/search">
<input type="search" name="q" placeholder="Поиск Github">
<button type="submit">Найти</button> 
</form>
</details>

## Обратная связь
Привет! Свяжись со мной любым удобным способом:
- [Телеграм](https://t.me/FeelSoftBot)
- [Email](https://forms.gle/UCfDCJHZsGKu5AHf7)
