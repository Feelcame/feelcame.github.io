<hr>
<div class="site-comments">
{% assign comments_channel = site.comments_channel | default: "" %}  
{% assign post_id = page.comments | default: 0 %}  
{% if post_id > 1 and comments_channel != "" -%}
<style>
.site-comments {
	background-color: #f3f3f3;
	padding-top:1rem;
	text-align: center;
}

.btn-tg {
    line-height: 1.5;
    padding: 0.8rem 3rem;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 1rem;
    color: #FFF;
    background-color: #4ba3e2;
    border-color: rgba(255,255,255,0.6);
    border-style: solid;
    border-width: 1px;
    border-radius: 0.3rem;
    transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}

.btn-tg:hover {
    text-decoration: none;
    background-color: #3f99d9;
    border-color: rgba(255,255,255,0.9)
}

a.btn-tg {
text-decoration: none;
}
</style>

<a href="/comments.html?{{ post_id }}" class="btn-tg" target="_self">💬 Показать комментрарии</a><br>
или<br>
<a href="tg://resolve?domain={{ comments_channel }}&post={{ post_id }}" target="_self">открыть в telegram</a><br>

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
