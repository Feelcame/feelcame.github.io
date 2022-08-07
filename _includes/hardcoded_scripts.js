<script>
// переключатель кнопки навигации
function showNav() {
document.getElementById('nav').style.display='block'; 
document.getElementById('navButton').style.display='none';
return(false);
}

var links = document.links;
var linksCount = links.length;
var emptyAnchorAdress = location.href.split('#')[0] + "#";
for (var i = 0; i < linksCount; i++) {
	// отключаем скрол при клике на пустой якорь
	var linkAdress = links[i].href; // полный адрес интерпретируемый браузером
	if (linkAdress == emptyAnchorAdress) {
		//links[i].onclick = "return(false);"; // не работает
		//links[i].href = "javascript:void(0);"; // не красиво
		links[i].href = "#!"; // норм
	}
	
	// отключаем пустые ссылки
	var link = links[i].attributes.href.value; // ссылка как прописано в коде
	if (link == ""){
		links[i].setAttribute("onclick", "return false;"); // идеально
	}
	
	// переопределение всех внешних ссылок на открытие в новой вкладке
	if (links[i].hostname != location.hostname) { 
		links[i].target = '_blank';
	}
}

</script>

<!-- Добавление ссылки на якорь возле заголовков -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.0/anchor.min.js" integrity="sha256-lZaRhKri35AyJSypXXs4o6OPFTbTmUoltBbDCbdzegg=" crossorigin="anonymous"></script>
<script>anchors.add();</script>
