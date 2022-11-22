// оптимизировать работу ссылок
function beautifyLinks() {
	var links = document.links;
	var linksCount = links.length;
	for (var i = 0; i < linksCount; i++) {
		// запретить переход по пустым ссылкам
		var link = links[i].attributes.href.value;
		if (link == "" || link == "#"){
			links[i].setAttribute("onclick", "return false;");
		}
		// открывать внешние ссылки в новой вкладке
		if (links[i].hostname != location.hostname) { 
			links[i].target = '_blank';
		}
	}
}
beautifyLinks();



// Подсветка результатов поиска по сайту
// https://stackoverflow.com/questions/16251505/how-to-highlight-all-text-occurrences-in-a-html-page-with-javascript/47440755#47440755

var search = decodeURIComponent(window.location.search.substring(1));
var pair = search.split("&")[0];
var key = pair.split("=")[0];
var q = pair.split("=")[1];
if (location.pathname == "/search" || key != "search") { q=""; }

var c=0;
function selectNext(){
	if (q.length > 2){
		if (c<1){
			document.body.innerHTML += '<a href="#" class="float-btn" onclick="selectNext(); return false;" >еще</a>'; 	
			c++;
		}
		window.find(q);
	}
	return false;
}
selectNext();



function showSearch(){
	let inputForm = document.querySelector('#search-input-form');
	let input = document.querySelector('#search-input');
	inputForm.style.display='block'; 
	input.focus(); 
	input.scrollIntoView();
	return false;
}
