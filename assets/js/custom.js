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
var c=0;
function selectNext(){
	var q = decodeURIComponent(window.location.search.substring(3));
	if (q.length > 2){
		if (c<1){
			document.body.innerHTML += '<a href="#" class="float-btn" onclick="selectNext(); return false;" >next!</a>'; 	
			c++;
		}
		window.find(q);
	}
	//return false;
}
selectNext();

