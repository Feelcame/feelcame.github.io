// Добавить недостающие поля в хтмл
function createElements(){
	//console.log("createElements");

  var editButton = document.getElementById('edit-button')
  //var loadButton = document.getElementById('download-link')
  var outputArea = document.getElementById('output-html')
  var mdArea = document.getElementById('markdown');
  
  if (outputArea == null){
	// создать элемент
	var outputEl = document.createElement("section");
	outputEl.setAttribute("id", "output-html");
	// Получаем ссылку на элемент, перед которым мы хотим вставить sp1
	//var mdArea = document.getElementById("markdown");
	//Получаем ссылку на родителя sp2
	var parentDiv = mdArea.parentNode;
	// Вставляем sp1 перед sp2
	parentDiv.insertBefore(outputEl, mdArea);
	// скрыть сырой маркдаун
	mdArea.style.display='none';
  }
  
  //todo. переделать на appendChild плюс innerHTML, вставить все кнопки внутрь общего элемента, отцентровать
  
  if (editButton == null){
	var editButton = document.createElement("a");
	editButton.setAttribute("href", "#!");
	editButton.setAttribute("onclick", "changeMode();return false;");
	editButton.setAttribute("id", "edit-button");
	editButton.innerText = "Edit";
	//var mdArea = document.getElementById("markdown");
	var parentDiv = mdArea.parentNode;
	//вставляем кнопку после markdown
	parentDiv.insertBefore(editButton, mdArea.nextSibling);
  }
  
	//<a href="#" id="download-link">Download</a>
	var loadButton = document.createElement("a");
	loadButton.setAttribute("href", "#");
	loadButton.setAttribute("onclick", "alert(1);return false;");
	loadButton.setAttribute("id", "download-link");
	loadButton.innerText = "Download";
	var editButton = document.getElementById('edit-button')
	var parentDiv = editButton.parentNode;
	//вставляем кнопку после markdown
	var newlink = parentDiv.insertBefore(loadButton, mdArea.nextSibling);
  
	//дополним шапку
	var head = document.getElementsByTagName('head')[0];

	//<meta charset="UTF-8">
	const encoding = document.createElement('meta');
	encoding.setAttribute("charset", "UTF-8");
	head.appendChild(encoding);

	//<meta name="viewport" content="width=device-width, initial-scale=1">
	const deviceWidth = document.createElement('meta');
	deviceWidth.name = 'viewport';
	deviceWidth.content = 'width=device-width, initial-scale=1';
	head.appendChild(deviceWidth);

	//<link rel="stylesheet" href="./md-notes.css">
	const style = document.createElement('link');
	style.href = './md-notes.css';
	style.rel = 'stylesheet';
	head.appendChild(style);

	//<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Cousine:400,700,400italic,700italic'>
	const font = document.createElement('link');
	font.href = 'https://fonts.googleapis.com/css?family=Cousine:400,700,400italic,700italic';
	font.rel = 'stylesheet';
	head.appendChild(font);

  console.log("elements is created");
  return false;
}


//отработать нажатие на кнопку
function changeMode(){
  var editButton = document.getElementById('edit-button'); 
  var outputArea = document.getElementById('output-html');
  var mdArea = document.getElementById('markdown');
  if (editButton == null){
	console.log("haven't a button");
  } else if (editButton.innerText == "Edit"){
	//сменить надпись на кнопке и переключить видимость окон
	editButton.innerText='View'; 
	mdArea.style.display='block'; 
	outputArea.style.display='none';
  } else if (editButton.innerText == "View"){
	editButton.innerText='Edit'; 
	outputArea.style.display='block'; 
	mdArea.style.display='none';
  }
  return false;
}

// Сохранять в local storage
function saveNote(){
	//
	return false;
}

// Восстановить из local storage
function RestoreNote(){
	//
	return false;
}

// Обработать нажатие кнопки скачать
function downloadTxt(){
	//
	return false;
}

// Markdown parser
function parseMd(md){
  
  //ul
  md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
  md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
  md = md.replace(/^\*(.+)/gm, '<li>$1</li>');
  
  //ol
  md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
  md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
  md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
  
  //blockquote
  md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
  
  //h
  md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
  md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
  md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
  md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
  md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
  md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');
  
  //alt h
  md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
  md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');
  
  //images
  md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
  
  //links
  md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');
  
  //font styles
  md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
  md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
  md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
  
  //pre
  md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
  md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
  
  //code
  md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');
  
  //p
  md = md.replace(/^\s*(\n)?(.+)/gm, function(m){
    return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
  });
  
  //strip p from pre
  md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
  
  return md;
  
}





// где-то тут начинается исполнение кода
var creatingStatus = createElements();


var rawMode = false;
    mdEl = document.getElementById('markdown'),
    outputEl = document.getElementById('output-html'),
    parse = function(){
      outputEl[rawMode ? "innerText" : "innerHTML"] = parseMd(mdEl.innerText);
    };

parse();
mdEl.addEventListener('keyup', parse, false);

//Raw mode trigger btn
(function(){

  var trigger = document.getElementById('raw-switch'),
      status = trigger.getElementsByTagName('span')[0],
      updateStatus = function(){
        status.innerText = rawMode ? 'On' : 'Off';
      };

  updateStatus();
  trigger.addEventListener('click', function(e){
    e.preventDefault();
    rawMode = rawMode ? false : true;
    updateStatus();
    parse();
  }, false);
  
}());

