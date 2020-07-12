---
created: 2020-06-30T21:32:11+03:00
modified: 2020-07-13T00:34:50+03:00
title: Переменные Jekyll
---

# About 
Здесь немножко о переменных, которые использует компилятор страниц на GitHub Pages.
.
Просто тестирую как работает Lykyll :)  

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