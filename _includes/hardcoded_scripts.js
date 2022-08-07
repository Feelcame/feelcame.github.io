<script>
// переключатель кнопки навигации
function showNav() {
document.getElementById('nav').style.display='block'; 
document.getElementById('navButton').style.display='none';
return(false);
}

var links = document.links;
var linksCount = links.length;

for (var i = 0; i < linksCount; i++) {
	// отключаем пустые ссылки
	var link = links[i].attributes.href.value; // ссылка как прописано в коде
	if (link == "" || link == "#"){
		links[i].setAttribute("onclick", "return false;"); // идеально
	}
	
	// заставляем все внешние ссылки открываться в новой вкладке
	if (links[i].hostname != location.hostname) { 
		links[i].target = '_blank';
	}
}

</script>

<!-- Добавление ссылки на якорь возле заголовков -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.0/anchor.min.js" integrity="sha256-lZaRhKri35AyJSypXXs4o6OPFTbTmUoltBbDCbdzegg=" crossorigin="anonymous"></script>
<script>anchors.add();</script>
