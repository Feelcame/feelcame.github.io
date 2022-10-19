<!--
Взять данные из ссылки, 
подставить в текст шаблона 
и вывести чере document.write
-->
<div id="cmnt" markdown="0">
<script>
var comments_channel = "profi_soft";
var post_id = "109";
post_id_new = window.location.search.substring(1);
if (post_id_new.length() >= 1) { post_id = post_id_new; }
document.write('<script async src="https://telegram.org/js/telegram-widget.js?14" data-telegram-discussion="' + comments_channel + '/' + post_id + '" data-comments-limit="10">\<\/script>');
</script>
</div>







