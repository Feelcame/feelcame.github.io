---
title: Корзина
pin: 0
---

Инфа хранится в [LocalStorage](https://learn.javascript.ru/localstorage)

<a href="#" onclick="addToCart('1');">Добавить "1" в корзину</a>  
<a href="#" onclick="addToCart('2');">Добавить "2" в корзину</a>  
<a href="#" onclick="renderCart();">Показать корзину</a>  

Содержимое:
<div id="cart" style="display: none;">
Корзина пуста!
</div>

<br><br><br>

<script>
function renderCart() {
  let cart = document.getElementById('cart')';
  cart.document.getElementById('cart').style.display='block';
  cart.innerHTML = localStorage.getItem('key1');
  alert( localStorage.getItem('key1') );
  return(false);
}

function addToCart(param) {
  localStorage.setItem('key1', param);
  alert("Добавлено");
  return(false);
}
</script>
