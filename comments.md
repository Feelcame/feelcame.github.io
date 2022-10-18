<!--
Взять данные из ссылки, 
подставить в текст шаблона 
и вывести чере document.write
-->

<script>
var comments_channel = "profi_soft";
var post_id = 109;
if (post_id > 1){
document.write('
<div id="comments" 
style="max-width:700px;padding:10px;margin:auto;background: #faf8f8;">
<script async src="https://telegram.org/js/telegram-widget.js?14" 
data-telegram-discussion="' + comments_channel + '/' + post_id + '" 
data-comments-limit="10">
<\/script>
<\/div>
');
}
</script>








