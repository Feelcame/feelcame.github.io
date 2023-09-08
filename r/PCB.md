---
title: Печатные платы PCB
date: 2020-12-21T00:00:00+02:00
modified: 2021-05-30T10:33:32+03:00
comments: true
pin: 3
tags: pcb
---

Привет! Здесь раскажу про разводку печатных плат для электроники. Это такие зеленые досточки внутри устройств. На них крепится вся начинка. Ну ты знаешь. Ниже инфа про их разработку, изготовление и полезные лайфхаки для производства.
<details markdown="1">
<summary markdown="0">Сегодня в программе</summary>
- тут появится навигация
{: toc }
</details>


### Программа для разработки
Для проектирования нужна CAD-программа (computer aided design).  
- **Eagle CAD** - бесплатная CAD. Простая приятная  
- **altium** - платная продвинутая, почти стандарт индустрии
- **kicad** - опенсорс
- **easyeda** - веб редактор от производителя печатных плат jlcpcb<br>
  <https://cxem.net/software/easyeda.php>
- **diptrace** - вроде норм
- **sprint layout** - простейшая программа для рисования лейаута, без схематика

- **Splan** - старенькая и надежная программа для рисования схем. на торрентах раздщается с обширной библиотекой
- **gerbv** - просмотр gerber (герберов) файлов перед отправкой нга завод

Я использую эти:
- [EAGLE](#eagle) - бесплатна с некоторыми ограничениями.  
  Раньше разрабатывалась компанией Cadsoft, сейчас программу купила Autodesk.  
  Есть платная версия за $60/месяц. Покупается только в комплекте с "Fusion 360" - програмой для 3D-моделирования.
- [Altium](#altium) - платная. Стоит $10к единоразово. При покупке год саппорта.  
  Для личных целей хватает триала (30 дней) или можно купить на торрентах
- KiCAD - бесплатная, не проверял. От авторов FreeCAD
- некоторые другие по случаю, easyeda, sprint layout, DipTrace...
- есть еще с десяток известных и не очень






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
- [EasyEDA](https://easyeda.com/) - немного неочевидно, но в этой бесплатной CAD-системе можно делиться своими библиотеками, что успешно делает сообщество. А производитель поддерживает. Ситуация вин-вин, пользователям библиотеки, производителю заказы плат. Можно экспортировать в формат альтиума. Будьте осторожны, либы могут содержать ошибки

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

## Стати по теме
- [Eagle CAD для разводки плат](./eagle-cad.md)
- [Что не так с Altium Designer](./altium-designer.md)
- [Где купить компоненты](./buy-parts.md)

### Разновидности футпринотов
<http://lehih80.blogspot.com/2017/07/smd.html>

<details markdown="1"><summary markdown="0">спойлер. SMD резисторы</summary>
![image](https://user-images.githubusercontent.com/17731587/125964908-1f234bae-b865-4f63-bde5-f72e4305fa06.png)
</details>
<details markdown="1">
<summary markdown="0">спойлер. SMD-конденсаторы</summary>
![image](https://user-images.githubusercontent.com/17731587/125965015-2595e13e-57ab-4de5-bdd0-0e9386b8d625.png)
</details>

## Заказ
Что нужно уточнить при заказе производства PCB
- Via. Метализация отверстий
- Сложный контур, V-cut, фрезеровка
- Маска
- Пайка, сборка, трафареты
- Какие минимальные гарантированные допуски (ширина дорожки и тд)
- технология (лут, фоторезист, чпу)
- мин. отверстие
- шелкография
- финишное покрытие


## Полезные ссылки
- [5 Советов по быстрому созданию и редактированию библиотек в Altium](http://sapr-journal.ru/uroki-altium/5-sovetov-po-bystromu-sozdaniyu-i-redaktirovaniyu-bibliotek-v-altium-designer-14/)
- [7 правил проектирования печатных плат](https://habr.com/ru/post/414141/)
- [Создание связности_AD
](https://www.altium.com/ru/documentation/altium-designer/creating-connectivity-ad?version=18.1)
- [Altium Designer: что делать если проект стал сложным?](https://habr.com/ru/post/426951/)
- <https://www.rezonit.ru/articles/tekhnika-razvodki-pechatnykh-plat/>

- <http://microsin.net/adminstuff/others/altium-designer-gerber-output-options.html>
- <http://microsin.net/adminstuff/others/pcb-terms-and-acronyms.html>