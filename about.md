---
layout: default
type: Journal
modified: 2020-07-10T13:59:54+03:00
---

# О нас 

Сайт для себя. 
Целью ставится быстрый доступ к годному контенту.

Если у Вас есть вопросы или предложения, прошу писать в телеграм или на почту:
feelcame.at.ya.ru
https://t.me/feelcame

Также, если Вам очень нравится собранная здесь информация, вы можете скинуть мне на вкусняшки:
* [На кофе](https://t.me/feelpowerbot?start=tea)
* [На пончик](https://t.me/feelpowerbot?start=tea)
* [На торт](https://t.me/feelpowerbot?start=tea)
* [На Jameson ](https://t.me/feelpowerbot?start=tea)
* [На дальнейшие разботки](https://t.me/feelpowerbot?start=tea)




Ссылки вида "site.github.repository_url". (подробнее смотри исходники)  
[Repository]({{ site.github.repository_url }})  
[Скачать.zip]({{ site.github.zip_url }})  
[Скачать.tar.gz]({{ site.github.tar_url }})  

Простая ссылка "a href": <a href="#">Видно?</a>  

Проверка. site.github.is_project_page? 
{% if site.github.is_project_page %}если видно этот текст, значит да.{% endif %}  
Проверка. site.show_downloads? 
{% if site.show_downloads %}Сработало!{% endif %}  

Переменные логические:  
site.github.is_project_page: {{ site.github.is_project_page }};  
site.show_downloads: {{ site.show_downloads }};  

Переменные.  
site.copyright: {{ site.copyright | default: :copyright: }};  
site.github.owner_url: {{ site.github.owner_url }};  
site.github.owner_name: {{ site.github.owner_name }};  
site.layout: {{ site.layout }};  
page.layout: {{ page.layout }};  
site.github.is_user_page: {{ site.github.is_user_page }};  

Логическое "или":  
page.title | default: site.title | default: site.github.repository_name: {{ page.title | default: site.title | default: site.github.repository_name }};  

Скрипт комментариев, который должен подгрузить iframe:  

<script async src="https://comments.app/js/widget.js?2" data-comments-app-website="zuRUPyyL" data-limit="5"></script>