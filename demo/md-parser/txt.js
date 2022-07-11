//скопировать текст в рабочую область, а ориг скрыть
var bodyEl = document.getElementsByTagName('body')[0];
bodyEl.setAttribute("style", "background: lightgreen;");
var articleEl = document.getElementsByTagName('article')[0];
var mdEl = document.createElement("main");
bodyEl.insertBefore(mdEl, articleEl);
mdEl.innerHTML = articleEl.innerText;
mdEl.setAttribute("style", articleStyle);
var articleStyle = articleEl.attributes.style.value;
articleEl.attributes.style.value += "display:none;"


