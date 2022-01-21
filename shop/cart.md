---
title: Корзина
pin: 0
---


<a href="#" onclick="addToCart();">Добавить в корзину</a>

<a href="#" onclick="renderCart();">Показать корзину</a>

<div id="cart" style="display: none;">Содержимое корзины:</div>


<script>
function renderCart() {
  document.getElementById('cart').style.display='block';
  alert( localStorage.getItem('key1') );
  return(false);
}
  
function addToCart() {
  localStorage.setItem('key1', "1");
  alert("Добавлено");
  return(false);
}
</script>
