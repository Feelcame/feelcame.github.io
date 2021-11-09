---
title: Search helper
date: 2021-11-07T22:58:42+02:00
modified: 2021-11-08T22:58:42+02:00
---

## Search helper

Скрипт автозаменятель данных в ссылке. Он просто подменяет поисковое слово во всех ссылках на странице тем, что введено в поле.

Актуален, когда нужно поискать одно и то же сочетание слов на многих сайтах

При изменении данных поле формы - он обходит все ссылки и вписывает туда введенный поисковой запрос. После этого пользователь остается кликать по ссылке колесиком мышки и наблюдать как экономится его время.

Список поисковиков можно вносить свой из буфера обмена, либо использовать один из предзаготовленных

Разумеется это javascript. 

При вводе запроса лучше не напрямую заменять данные в ссылках, а копировать их из скрытого поля и уже в скопированных заменять все

## Пример

<form>
Введи запрос: <input id="text" type="text" onchange="updateLinks();">
</form>

<div id="results">
Тут будут выведены ссылки с запросом: "###keywor###"
</div>

Список сервисов для поиска:  
<div id="links" class="hidden" markdown="1">
- [Mouser](https://www.google.com/search?q=###keywor###)
- [Mouser](#search.html?q=keyword)
- [Digikey](#search.html?q=keyword)
</div>

<script>
  function updateLinks(){
  // скопировать ссылки из блока links в блок results
  
  // заменить в них ключевую фразу на содержимое поля ввода
  
  }
</script>

## Листинг кода с подсветкой

``` html
<form>
Введи запрос: <input id="text" type="text" onchange="updateLinks();">
</form>

<div id="results">
Тут будут выведены ссылки с запросом: "###keywor###"
</div>

Список сервисов для поиска:  
<div id="links" class="hidden" markdown="1">
- [Mouser](https://www.google.com/search?q=###keywor###)
- [Mouser](#search.html?q=keyword)
- [Digikey](#search.html?q=keyword)
</div>
<script></script>
```

``` javascript
function updateLinks(){
// скопировать ссылки из блока links в блок results

// заменить в них ключевую фразу на содержимое поля ввода

}
```

