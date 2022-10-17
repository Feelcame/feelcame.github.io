<p>
<h2 id="comments">Комментарии:</h2>
{% assign comments_channel = "profi_soft" %}  
{% assign post_id = page.comments %}  
{% if post_id > 1 -%}
Где желаете комментировать?
<ul>
<li>
<script>
var text = encodeURIComponent(btoa('<p id="comments"><script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="{{ comments_channel }}/{{ post_id }}" data-comments-limit="10"><\/script><\/p>'));
document.write('<a href="https://4QR.xyz/r/?' + text'" target="blank">в браузере</a>');
</script>

</li>
<li><a href="tg://resolve?domain={{ comments_channel }}&post={{ post_id }}" target="blank">в telegram</a></li>
</ul>




{%- else -%}  
<strong>Комментарии закрыты.</strong>
{%- endif -%}
</p>

{% comment %}

<!--
<script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="{{ comments_channel | default: "#" }}/{{ post_id }}" data-comments-limit="5"></script>  
</ul>


{%- elsif com_id == 1 or com_id == true -%}
<script async src="https://comments.app/js/widget.js?2" data-comments-app-website="zuRUPyyL" data-limit="5"></script>  
<div id="tgLoginBtn">Попробуй <a href="tg://resolve?domain=rf_art&post=806">быструю авторизацию</a></div>  
-->

{% endcomment %}

