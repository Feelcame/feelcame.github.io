<div class="site-comments">
<h2 id="comments">Комментарии:</h2>
{% assign comments_channel = site.comments_channel | default: "" %}  
{% assign post_id = page.comments | default: 0 %}  
{% if post_id > 1 and comments_channel != "" -%}
<div style="text-align: center;">
<a class="commentBtn" href="/comments.html?{{ post_id }}" target="_blank"><b>💬 Показать комментарии</b></a><br>
<a href="tg://resolve?domain={{ comments_channel }}&post={{ post_id }}" target="_blank">или открыть в telegram</a>
</div>
{%- else -%}  
<strong>Комментарии закрыты.</strong>
{%- endif -%}
</div>


{%- comment -%}
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



<!--
Чтото непонятное 
<script>
//var text = encodeURIComponent(btoa('<div id="comments" style="max-width:700px;padding:10px;margin:auto;background: #faf8f8;"><script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="{{ comments_channel }}/{{ post_id }}" data-comments-limit="10"><\/script><\/div>'));
//document.write('<li><a class="commentBtn" href="https://4QR.xyz/r/?' + text + '" target="_blank">в браузере</a></li>');
</script>
-->
{%- endcomment -%}
