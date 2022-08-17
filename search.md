---
layout: default
---
<!-- HTML elements for search -->
<input type="text" id="search-input" placeholder="Search blog posts..">
<ul id="results-container"></ul>

<!-- or without installing anything 
<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
-->


<script src="{{ site.baseurl }}/assets/js/simple-jekyll-search.js"></script>


<script>
  window.simpleJekyllSearch = new SimpleJekyllSearch({
	searchInput: document.getElementById('search-input'),
	resultsContainer: document.getElementById('results-container'),
	json: '{{ site.baseurl }}/assets/json/search.json',
	searchResultTemplate: '<li><a href="{url}?query={query}" title="{desc}">{title}</a></li>',
	noResultsText: 'No results found',
	limit: 10,
	fuzzy: false,
	exclude: ['Welcome']
  })
</script>