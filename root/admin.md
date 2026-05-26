---
title: Админка
pin: 0
permalink: /:basename
---

\*_Вход добавляет кнопки для отладки, ничего более_

<form action="/admin" method="get">
<label for="user">Логин:</label><br>
<input type="text" id="user" name="user" required><br>
<label for="pass">Пароль:</label><br>
<input type="pass" id="pass" name="pass" required><br><br>
<button type="submit">Войти</button>
</form>
<div id="errmsg" style="display:none;">password incorrect</div>


<script>
var param = decodeURIComponent(window.location.search.substring(1));
var param1 = param.split("&")[0];
var param2 = param.split("&")[1];
var user = param1.split("=")[1];
var pass = param2.split("=")[1];

function setCookie(name, value, days = 30, options = {}) {
const expires = new Date(Date.now() + days * 864e5).toUTCString();
let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=" + (options.path || "/");
if (options.domain) cookie += "; domain=" + options.domain;
if (options.secure) cookie += "; Secure";
if (options.sameSite) cookie += "; SameSite=" + options.sameSite;
document.cookie = cookie;
console.log("Cookie set:", cookie);
}

if (param && user == "admin" && pass == "admin") {
	setCookie("login", user, 30, { secure: true, sameSite: "Lax" });
} 
else if (param && user != "admin") {
document.errmsg.setAttribute("style", "display:contents;color:red;");
} 
</script>
