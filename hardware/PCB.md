---
title: Печатные платы PCB
comments: true
date: 2020-12-21T00:00:00+02:00
modified: 2021-05-30T10:33:32+03:00
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
Большинство требуют регистрацию, но это обходится с помощью <http://bugmenot.com>
* [snapeda](https://www.snapeda.com/parts/CC1101RGPR/Texas%20Instruments/view-part/?welcome=home) - Библиотеки компонентов. pleasedontbugme bugmenot zujeyod@maxmail.in
* [Octopart](https://octopart.com/cc1101rgpr-texas+instruments-25923081?r=sp#Specs) - Библиотеки с норм символами. Собственность Altium
* [diymodules](https://www.diymodules.org/eagle-search?text=ESP8266&desc=1) - библиотеки модулей только eagle
* [componentsearchengine.com](https://componentsearchengine.com/part-view/CC1101RGPR/Texas%20Instruments) - не проверено
* <https://ultralibrarian.com> - немножечко говняные библиоткеки, гененрируются автоматически. Работают с производителем ST

### Производство на заводе
Платы нужно произвести. По состоянию на 2021 год есть масса заводов которые с радостью производят тестовые партии по десять штук почти даром. Это их вложение на будущее, такая субсидию для тебя. Ведь когда ты настроишь все свои процессы под определенный завод и будешь готов выпустить партиб из тысяч устройств, то не захорчешь перестраиваться под ругие дизайн рулсы. Тут и начинается их заработок
* [jlcpcb.com](https://jlcpcb.com) - дешево, просто
* [pcbway.com](https://pcbway.com) - дороже jlc, геморно, но всеравно доступно
* завод в киеве
* other

### Произвести самому
Диайвайщики и мамкины хацкеры тут?

### Купить компоненты
* <https://www.digikey.com/> - норм
* <https://eu.mouser.com/> - норм 
* <https://lcsc.com/> - норм. китай. база для JLC
* <https://ru.farnell.com/> - хз
* <https://www.rs-online.com/> - долго. англия
* <https://catalog.vdmais.ua/> - тормозной сайт. норм асортимент
* <https://imrad.com.ua/> - норм
* <http://www.kosmodrom.com.ua/catalog.php> - норм. харьков. плохой поиск. дешевые цены
* <https://www.rcscomponents.kiev.ua/catalog> - норм. харьков. хороший поиск
* <https://radar.org.ua> - норм. харьков. мало компонентов
* ...
* <https://www.findchips.com/search/rt9013>
* <https://3v3.com.ua/> - модули с али
* <https://signal.net.ua/> 
* <https://voron.ua/> - плохие отзывы, брак
* <https://www.seeedstudio.com/> - тут футпринты беру
* <https://www.newark.com/>
* <https://www.sea.com.ua/ua/elektronnye-komponenty/>
* <http://triod.kiev.ua/> - лампы
* <http://radiomarket.lg.ua/> 
* <https://masteram.com.ua/uk/> - измерительное оборудрование
* <https://radio-shop.com.ua/>
* <https://radioshop.by/> - ьеларусь
* <https://radiomart.kz/> - казахстан
* <https://www.gearbest.com/> - онлайн магазин типа алисекспреса
* <https://www.jameco.com/>
* <https://www.qrz.ru/stores/sparkfun/>
* <https://www.futureelectronics.com/>
* <https://aliexpress.com> - китайский супермаркет. много подделок.
* <https://prom.ua> - украинский онлайн-базар. есть все, в т.ч. компоненты

### Разновидности футпринотов
<http://lehih80.blogspot.com/2017/07/smd.html>

![image](https://user-images.githubusercontent.com/17731587/125964908-1f234bae-b865-4f63-bde5-f72e4305fa06.png)
![image](https://user-images.githubusercontent.com/17731587/125965015-2595e13e-57ab-4de5-bdd0-0e9386b8d625.png)

