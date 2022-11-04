---
title: 'Мультипоиск - поисковик по разным сайтам'
date: 2021-11-07T22:58:42+02:00
modified: 2022-07-07T09:44:58+03:00
tags: soft
---

на странице есть полее ввода и радио-кнопки для выбора где искать. по нажатию на кнопку поиск - происходит открытие нескольких вкладок с сайтами, на которых непосредственно происходит поиск. все

**пример**  
- есть магазины для покупки радиокомпонентов: digikey, moucer, lcsc
- в поле ввода пишем партнамбер компонента, нажимаем поиск
- происходит магия и открываются три вкладки с результатами поиска на этих сайтах

## Search helper

Скрипт автозаменятель данных в ссылке. Он просто подменяет поисковое слово во всех ссылках на странице тем, что введено в поле.

Актуален, когда нужно поискать одно и то же сочетание слов на многих сайтах

При изменении данных поле формы - он обходит все ссылки и вписывает туда введенный поисковой запрос. После этого пользователь остается кликать по ссылке колесиком мышки и наблюдать как экономится его время.

Список поисковиков можно вносить свой из буфера обмена, либо использовать один из предзаготовленных

Разумеется это javascript. 

При вводе запроса лучше не напрямую заменять данные в ссылках, а копировать их из скрытого поля и уже в скопированных заменять все

## Пример

<div markdown="0">
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

<h2>Еще одно демо</h2>
<form action="" method="get">
      <input type="email" class="subscription-email" placeholder="keks@flashnews.ru" id="subscription-email" onchange="updateLinks();">
    </form>
    <br>                                                                                                             
    <div class="output-text">text</div>
    <script>
    function updateLinks(){
      let message = document.querySelector('.output-text');
      let email = document.querySelector('.subscription-email');
      message.textContent = email.value;
    }
    </script>

</div>

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


## База источников
### Электроника
- 111
### Кино
- rutracker
- nnm
- czx
- hd balancer
### Музыка
- 111
