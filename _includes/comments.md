<div>
<h2>Комментарии:</h2>
{% assign com_id = page.comments | default: false %}
<!-- com_id: ({{ com_id }}) -->
{%- if com_id != false and com_id > 1 -%}
<script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="{{ site.chtg | default: "rf_art" }}/{{ com_id }}" data-comments-limit="5"></script>  

{%- elsif com_id != false and com_id == 1 -%}
<script async src="https://comments.app/js/widget.js?2" data-comments-app-website="zuRUPyyL" data-limit="5"></script>  
<div id="tgLoginBtn">Попробуй <a href="tg://resolve?domain=rf_art&post=806">быструю авторизацию</a></div>  

{%- else -%}  
<strong>Комментарии закрыты.</strong>

{%- endif -%}
</div>
