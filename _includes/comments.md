<p>
<h2 id="comments">Комментарии:</h2>
{% assign comments_channel = "profi_soft" %}  
{% assign post_id = page.comments %}  
{% if post_id > 1 -%}
Где желаете комментировать?
<ul>
<li><a class="commentBtn" href="tg://resolve?domain={{ comments_channel }}&post={{ post_id }}" target="_blank">в telegram</a></li>
<li><a class="commentBtn" href="/comments.html?{{ post_id }}" target="_blank">в браузере</a></li>
<!--
<script>
//var text = encodeURIComponent(btoa('<div id="comments" style="max-width:700px;padding:10px;margin:auto;background: #faf8f8;"><script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="{{ comments_channel }}/{{ post_id }}" data-comments-limit="10"><\/script><\/div>'));
//document.write('<li><a class="commentBtn" href="https://4QR.xyz/r/?' + text + '" target="_blank">в браузере</a></li>');
</script>
-->
</ul>




{%- else -%}  
<strong>Комментарии закрыты.</strong>
{%- endif -%}
</p>

{% comment %}
<!--
TODO: показывать попап вместо открытия в новой вкладке https://learn.javascript.ru/popup-windows
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;
open('/', 'test', params);

<script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="{{ comments_channel | default: "#" }}/{{ post_id }}" data-comments-limit="5"></script>  
</ul>


{%- elsif com_id == 1 or com_id == true -%}
<script async src="https://comments.app/js/widget.js?2" data-comments-app-website="zuRUPyyL" data-limit="5"></script>  
<div id="tgLoginBtn">Попробуй <a href="tg://resolve?domain=rf_art&post=806">быструю авторизацию</a></div>  
-->

{% endcomment %}

