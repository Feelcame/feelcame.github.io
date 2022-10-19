<!--
Взять данные из ссылки, 
подставить в текст шаблона 
и вывести чере document.write
-->
<div id="cmnt" markdown="0">
<script>
var comments_channel = "profi_soft";
var post_id = "109";
document.write('Test
\<script async src="https://telegram.org/js/telegram-widget.js?14" 
data-telegram-discussion="' + comments_channel + '/' + post_id + '" 
data-comments-limit="10">
\<\/script>');
</script>
</div>







