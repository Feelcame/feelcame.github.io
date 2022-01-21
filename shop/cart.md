---
title: Корзина
pin: 0
---

Инфа хранится в [LocalStorage](https://learn.javascript.ru/localstorage)

<a href="#" onclick="addToCart("1");">Добавить "1" в корзину</a><br>
<a href="#" onclick="addToCart("2");">Добавить "2" в корзину</a><br>
<a href="#" onclick="renderCart();">Показать корзину</a><br>


<div id="cart" style="display: none;">Содержимое корзины:</div>


<script>
function renderCart() {
  document.getElementById('cart').style.display='block';
  alert( localStorage.getItem('key1') );
  return(false);
}
  
function addToCart(param) {
  localStorage.setItem('key1', param);
  alert("Добавлено");
  return(false);
}
</script>
