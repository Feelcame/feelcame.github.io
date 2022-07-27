function createElements(){
	//дополним шапку
	var header = '<meta charset="UTF-8">';
	header += '<meta name="viewport" content="width=device-width, initial-scale=1">';
	header += '<link rel="stylesheet" href="./md-notes.css">';
	header += '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cousine:400,700,400italic,700italic">';
	var head = document.getElementsByTagName('head')[0];
	head.innerHTML += header;


	//добавляем кнопки управления <nav>
	var navLinks = '<section id="output-html"></section>';
	navLinks += '<nav style="display:flex;align-items:center;justify-content:center;">'
	navLinks += '<a href="#" id="download-link" onclick="return false;">Download</a>';
	navLinks += '<a href="#" id="edit-button" onclick="changeMode();return false;">Edit</a>';
	navLinks += '<a href="#" id="share" onclick="return false;">Share</a></nav>';
	navLinks += '<a href="#" id="raw-switch" class="raw-switch">Raw: <span></span></a>';
	var body = document.getElementsByTagName('body')[0];
	body.innerHTML += navLinks;
	
	//скрыть исходник по-умолчанию
	document.getElementById('markdown').style.display='none';
	console.log("elements is created");
	return false;
}
createElements();


//отработать нажатие на кнопку Edit
function changeMode(){
  var editButton = document.getElementById('edit-button'); 
  var outputArea = document.getElementById('output-html');
  var mdArea = document.getElementById('markdown');
  if (editButton == null){
	console.log("haven't a button");
  } else if (editButton.innerText == "Edit"){
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


//<a href="#" id="raw-switch" class="raw-switch">Raw: <span></span></a>

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
