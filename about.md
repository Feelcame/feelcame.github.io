# about1
jjjj  
[Repository]({{ site.github.repository_url }})  
[.zip]({{ site.github.zip_url }})  
[.tar.gz]({{ site.github.tar_url }})  
.
.
.
ссылка "a href": <a href="{{ site.github.zip_url }}">Видно?.zip</a>
.
site.github.is_project_page? 
{% if site.github.is_project_page %}
если видно этот текст или ссылку, значит да. <a href="{{ site.github.repository_url }}">Repository</a>
{% endif %}
.
site.show_downloads? 
{% if site.show_downloads %}
если видно, значит да. <a href="{{ site.github.tar_url }}">.tar.gz</a>
{% endif %}
Тут все "endif" закончились.
.
.
Скрипт комментариев, который должен подгрузить iframe:
<script async src="https://comments.app/js/widget.js?2" data-comments-app-website="zuRUPyyL" data-limit="5"></script>
