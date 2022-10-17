---
comments_channel: profi_soft
---
{% assign com_id = page.comments %}  

<p>
<h2 id="comments">Комментарии:</h2>
{% if com_id > 1 -%}
Где желаете комментировать?
<ul>
<li><a href="#">в браузере</a></li>
<li><a href="tg://resolve?domain={{ comments_channel }}&post={{ post_id }}">в telegram</a></li>
</ul>

<script>
function run_comments(){
  var text = '<p id="comments"><script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="{{ comments_channel | default: "#" }}/{{ post_id }}" data-comments-limit="5"></script></p>';
  var url = "https://4QR.xyz/r/?" + encodeURIComponent(btoa(text));
  open(url, "_blank");
  return false;
}
</script>


{%- else -%}  
<strong>Комментарии закрыты.</strong>
{%- endif -%}
</p>

{% comment %}

<!--
<script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="{{ comments_channel | default: "#" }}/{{ post_id }}" data-comments-limit="5"></script>  
</ul>
-->

{%- elsif com_id == 1 or com_id == true -%}
<script async src="https://comments.app/js/widget.js?2" data-comments-app-website="zuRUPyyL" data-limit="5"></script>  
<div id="tgLoginBtn">Попробуй <a href="tg://resolve?domain=rf_art&post=806">быструю авторизацию</a></div>  
{% endcomment %}



