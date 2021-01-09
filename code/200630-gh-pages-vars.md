---
created: 2020-06-30T21:32:11+03:00
modified: 2021-01-09T21:16:39+02:00
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


Как оказалось, github использует jekyll для генерации страниц. А тот в свою очередь может использовать так называемые liquid скриптинг за авторством shopify. 
Вот официальная документация как им пользоваться: <https://github.com/Shopify/liquid/wiki/Liquid-for-Designers>

Также стоит знать что кроме "жидких" скриптов для ещё большей кастомизации генератор можно настраивать в файле конфига _config.yaml. Вплоть до того, что можно изменить парсер markdown файлов. Стандартный, кстати, называется kramdown. Его официальная документация [google]


А это инфа по настройке jekyll <https://webref.ru/dev/building-jekyll-site/converting-static-site-to-jekyll>