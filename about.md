# about1
jjjj
[Repository]({{ site.github.repository_url }})
[.zip]({{ site.github.zip_url }})
[.tar.gz]({{ site.github.tar_url }})


ссылка a href:  
<a href="{{ site.github.zip_url }}">Видно?</a>

if site.github.is_project_page:  
{% if site.github.is_project_page %}
  <a href="{{ site.github.repository_url }}">Repository</a>
  если видно, значит да  
{% endif %}

if site.show_downloads?  
{% if site.show_downloads %}
  если видно, значит да   
  <a href="{{ site.github.tar_url }}" class="btn">Contacts.tar.gz</a>
{% endif %}
endif
.

<script async src="https://comments.app/js/widget.js?2" data-comments-app-website="zuRUPyyL" data-limit="5"></script>
