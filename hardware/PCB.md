---
title: Печатные платы PCB
date: 2020-12-21T00:00:00+02:00
modified: 2021-05-30T10:33:32+03:00
comments: true
pin: 3
---

*Привет!* Здесь раскажу пару (десятков?) полезных фич про разводку печатных плат для электроники. Сначала пояснение для самых маленьких. На печатных платах делаются большинство электронных устройств. Ниже инфа про их разработку, изготовление и просто полезности.

### Программа для разработки
Для проектирования нужна CAD-программа (computer aided design).  
Я использую эти:
- [EAGLE](#eagle) - бесплатна с некоторыми ограничениями.  
  Раньше разрабатывалась компанией Cadsoft, сейчас программу купила Autodesk.  
  Есть платная версия за $60/месяц. Покупается только в комплекте с "Fusion 360" - програмой для 3D-моделирования.
- [Altium](#altium) - платная. Стоит $10к единоразово. При покупке год саппорта.  
  Для личных целей хватает триала (30 дней) или можно купить на торрентах
- KiCAD - бесплатная, не проверял. От авторов FreeCAD
- некоторые другие по случаю, easyeda, sprint layout, DipTrace...
- есть еще с десяток известных и не очень


### Инфа по Eagle 
{: id="eagle"}  
Орел условно бесплатный. С некоторыми ограничениями: максимум два слоя, ограничение размера PCB 100\*100mm
* [Скачать](https://www.autodesk.com/products/eagle/free-download) - на официальном сайте Autodesk
* [Eagele для начинающих](http://easyelectronics.ru/rabota-v-eagle-cad-chast-1.html)
* <http://microsin.net/adminstuff/others/eagle-faq.html> - Справка и ответы на часто задаваемые вопросы от любителей
* <http://eagle.autodesk.com/eagle/libraries> - Официальный репозиторий библиотек (устаревает, но пока жив)
* <http://we.easyelectronics.ru/search/topics/?q=eagle>


### Altium
раздел переехал [сюда](altium-designer.md)
Его основная задача - разводка плат для сложных вещей. Соответственено он сам сложный, но это скорее наследие из прошлого. Но пояснениедля новичка все-равно требуется
* www .altium.com - [Интерактивная трассировка](https://www.altium.com/ru/documentation/altium-designer/interactive-routing-ad?version=18.1)
* easyelectronics.ru - [FAQ по работе в Altium Designer](http://we.easyelectronics.ru/faq/faq-po-rabote-v-altium-designer.html)
* easyelectronics.ru - [Виды библиотек компонентов](http://we.easyelectronics.ru/CADSoft/bd-biblioteki-dlya-altium-designer.html)
* microsin.net - [Горячие клавиши](http://microsin.net/adminstuff/others/altium-designer-editor-shortcuts.html)
* microsin.net - [Полигоны](http://microsin.net/adminstuff/others/altium-designer-polygon-pours-and-copper-regions.html)
* microsin.net - [Как делать библиотеки](http://microsin.net/adminstuff/others/altium-designer-building-an-integrated-library.html)
* Видеоуроки от BSVi - [youtube](https://www.youtube.com/playlist?list=PLgUwXvgNkHQJ3G5UoLGMfHJM2c-m4Afdx) + [телега](https://t.me/joinchat/SwRd2oF2DdCRhoam) + [торрент](https://rutracker.org/forum/viewtopic.php?t=3885433)
* Видеоуроки от Сабунина - [youtube](https://www.youtube.com/channel/UCG7N5CqXpyK8nQjr1EmMgng) + [телега](https://t.me/joinchat/RVccqiNy9BfP1nQ9) + [торрент](https://rutracker.org/forum/viewtopic.php?t=4712666)
* Видеоуроки от Altium Russia - [Ютуб канал](https://www.youtube.com/channel/UCvZ_kyV4ATrQfjmtVpuj0LQ)


### Библиотеки компонентов
Для создания схемы и, соответственно, платы нужны библиотеки компонетов. Их можно создать самому по даташиту или скачать готовые на сайте производителя. Рекомендую второй вариант, так как здесь ниже шанс ошибиться. Лучше использовать библиотеки рекомендуемые производителем.

По опыту, на создание **хорошей** библиотеки (символ + футпринт) для компонента с восмью ногами уходит 2-3 часа. Так что готовые библиотеки значительно экономят время. Единственное, нужно остерегаться автоматически сгенерированных библиотек, они часто ужасного качества и легче с нуля сделать чем делать из говна конфетку. 

Если производитель осилил только чертеж в даташите и не предоставляет ни символов ни футпринтов, то придется рисовать самому. Или поискать на сторонних ресурсах, возможно кто-то уже нарисовал библиотек и выложил ее в свободный доступ. 

Если все же решили попытать удачу, ниже список сервисов с бесплатными либами. 

**Внимание!** Будьте внимательны с чужими библиотеками, в них бывают неочевидные ошибки. 

* [**snapeda**](https://www.snapeda.com/home/) - Библиотеки компонентов. *Логин: pleasedontbugme пароль: bugmenot*
* [**octopart**](https://octopart.com/) - Библиотеки с норм символами. Собственность Altium
* [diymodules](https://www.diymodules.org/eagle-search?text=ESP8266&desc=1) - библиотеки модулей только eagle. не работает
* [componentsearchengine.com](https://componentsearchengine.com/part-view/CC1101RGPR/Texas%20Instruments) - нужно указывать полный partnumber
* [ultralibrarian](https://ultralibrarian.com) - немножечко говняные библиоткеки, гененрируются автоматически. Работают с производителем ST

> Большинство сайтов требуют регистрацию, но это обходится с помощью <http://bugmenot.com>


### Производство на заводе
Платы нужно произвести. По состоянию на 2021 год есть масса заводов которые с радостью производят тестовые партии по десять штук почти даром. Это их вложение на будущее, такая субсидию для тебя. Ведь когда ты настроишь все свои процессы под определенный завод и будешь готов выпустить партиб из тысяч устройств, то не захорчешь перестраиваться под ругие дизайн рулсы. Тут и начинается их заработок
* [jlcpcb.com](https://jlcpcb.com) - дешево, просто
* [pcbway.com](https://pcbway.com) - дороже jlc, геморно, но всеравно доступно
* завод в киеве
* <https://oshpark.com/>
* other

### Произвести самому
Диайвайщики и мамкины хацкеры тут?

### Купить компоненты
Раздел переехал на отдельную страницу: [ссылка](buy-parts.md)

### Разновидности футпринотов
<http://lehih80.blogspot.com/2017/07/smd.html>

<details markdown="1"><summary markdown="0">спойлер. SMD резисторы</summary>
![image](https://user-images.githubusercontent.com/17731587/125964908-1f234bae-b865-4f63-bde5-f72e4305fa06.png)
</details>
<details markdown="1">
<summary markdown="0">спойлер. SMD-конденсаторы</summary>
![image](https://user-images.githubusercontent.com/17731587/125965015-2595e13e-57ab-4de5-bdd0-0e9386b8d625.png)
</details>


## Полезные ссылки
- [5 Советов по быстрому созданию и редактированию библиотек в Altium](http://sapr-journal.ru/uroki-altium/5-sovetov-po-bystromu-sozdaniyu-i-redaktirovaniyu-bibliotek-v-altium-designer-14/)
- [7 правил проектирования печатных плат](https://habr.com/ru/post/414141/)
- [Создание связности_AD
](https://www.altium.com/ru/documentation/altium-designer/creating-connectivity-ad?version=18.1)
- [Altium Designer: что делать если проект стал сложным?](https://habr.com/ru/post/426951/)
- <https://www.rezonit.ru/articles/tekhnika-razvodki-pechatnykh-plat/>
