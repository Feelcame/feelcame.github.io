---
permalink: /:basename
---

<div id="cmnt" markdown="0">
<script>
var comments_channel = "profi_soft";
var post_id = "111";
post_id_new = window.location.search.substring(1);
if (post_id_new.length >= 1) { post_id = post_id_new; }
document.write('<script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-post="' + comments_chanbel + '/' + pist_id + '" data-width="100%" data-userpic="false" data-color="29B127" data-dark="1" data-dark-color="72E350">\<\/script><script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="' + comments_channel + '/' + post_id + '" data-comments-limit="10">\<\/script>');
</script>
</div>

{% comment %}
<!--
Взять данные из ссылки, 
подставить в текст шаблона 
и вывести чере document.write
TODO. Добавить обратную ссылку на статью
-->
{% endcomment %}




