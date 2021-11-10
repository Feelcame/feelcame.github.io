<p>
<h2>Комментарии:</h2>
{%- if page.comments > 1 -%}  
<script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="{{ site.chtg | default: "rf_art" }}/{{ page.comments }}" data-comments-limit="5"></script>  
{%- else -%}    
<script async src="https://comments.app/js/widget.js?2" data-comments-app-website="zuRUPyyL" data-limit="5"></script>  
<div id="tgLoginBtn">Попробуй <a href="tg://resolve?domain=rf_art&post=806">быструю авторизацию</a></div>
{%- endif -%}
</p>
