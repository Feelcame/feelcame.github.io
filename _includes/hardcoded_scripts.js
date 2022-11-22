// переключатель кнопки навигации
function showNav() {
document.getElementById('nav').style.display='block'; 
return false;
}

// переключатель кнопки поиска
function showSearch(){
	let inputForm = document.querySelector('#search-input-form');
	let input = document.querySelector('#search-input');
	inputForm.style.display='block'; 
	input.focus(); 
	//input.scrollIntoView();
	return false;
}
