---
title: Приложение для облегчения поиска по веб-сайтам
date: 2023-12-20T12:00:00
---

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


