---
date: 2021-03-08T20:47:11+02:00
modified: 2021-03-08T23:09:43+02:00
title: Разработка ВЧ-устройств и антен
comments: true
tags: hf
---



## Измеряем диаграмму направленности антенны

1. вариант хардовый  
Поставить источник сигнала на измеряемую антенну. А приемную сторону двигать по кругу фиксированного радиуса и мерять уровень приема
1. Вариант основанный на взаимозаменяемости передающей и принимающей антенн.  
* Поставить источник сигнала (диполь) неподвижно. 
* Вторую измеряемую антенну тоже зафиксировать неподвижно, но на штативе с возможностью менять угол поворота на произвольный. 
* Крутить приемную антенну вокруг своей оси и мерять уровень приема
1. Запрограммировать все это в Ардуино


## Про Noise Figure
Каждый усилитель вносит в исходный сигнал некий уровень шума. В основном это связано с тепловыйм шумом и колебаниями электронов на уровне атомов. Количестро теплового шума в отношении сигнала зависит от температуры окружающей среды и полосы частот. Что бы детальнее понять природу этого явления - ниже список статей по теме. В том числе про методику измерения

Статьи
- Измеряем параметры усилителей с помощью анализатора спектра и генератора сигналов <https://eax.me/amplifier-measurements/>
- Noise Figure <https://www.microwaves101.com/encyclopedias/noise-figure>
- <https://www.ti.com/lit/an/slaa652/slaa652.pdf?ts=1613122080936&ref_url=https%253A%252F%252Fduckduckgo.com%252F>
- <https://www.microwavejournal.com/ext/resources/whitepapers/2013/May/1131_Noise_Figure_CAE_Final_Final-2.pdf?1522716192>
- <https://muehlhaus.com/support/mwo-appnotes/matching_network_loss>
- <https://www.edn.com/planning-the-design-cycle-for-adding-an-antenna-to-a-wireless-device/>
- <https://eax.me/books-issue-25/>
- 

## Моделирование ВЧ
- [CST STUDIO SUITE 2021](http://eurointech.ru/eda/microwave_design/cst/CST-STUDIO-SUITE.phtml) - моделирование трехмерных электромагнитных структур
- [Antenna Magus](http://eurointech.ru/eda/microwave_design/cst/Antenna-Magus.phtml) - специализированный продукт для проектирования антенн
- AWR MWO - моделирование ВЧ-схем, EM-лейаутов и систем связи. Интерфейс виндовый с окошечками <https://rutracker.org/forum/tracker.php?f=1192&nm=AWR>
- HFSS - моделирование и анализ вч трактов и антен. интерфейс как у програм родом из девяностых. Работает на линуксе
- Ansys ...
- MMANA-GAL - калькулятор для рассчета антенн <http://gal-ana.de/basicmm/ru/>
- GAL-ANA – программа расчета антенн на базе NEC2 и MININEC3m <http://gal-ana.de/indexr.htm>
- Bi-Quad Antenna Calculator <https://www.changpuak.ch/electronics/bi_quad_antenna_designer.php>

## Просмотр scattering parameters

Нашел всего несколько на просторах интернета. Делюсь:
- [SPA](https://www.ag-rf-engineering.de/products/software/s-parameter-viewer/)
- [SnP View](#)
- <https://www.dataweek.co.za/63748n>
- <http://www.hp.woodshot.com/>
- <https://books.google.com.ua/books?id=U9FEDwAAQBAJ&dq=scattering+parameters+android&hl=ru&source=gbs_navlinks_s>
- <https://snpview.com/>
- <http://www.arkrfsystems.com/SPview.htm>
- <https://sparamnx.xmicrowave.com/>
- <http://www.magimaji.com/>
- <https://www.dataweek.co.za/63748n>
- <https://www.mathworks.com/matlabcentral/fileexchange/68893-s-parameter-utilities>
- <https://teledynelecroy.com/support/softwaredownload/sparamviewer.aspx>
- <https://cxem.net/software/rfsim99.php>




## Полезные ссылки
- <https://www.antenna-theory.com/antennas/patches/antenna.php>
- <https://www.will-kelsey.com/smith_chart/>
- <https://www.microwaves101.com/cool-links>
- <https://www.qsl.net/va3iul/>
- <https://www.falstad.com/circuit/>
- <https://books.google.com.ua/books/about/Microwave_and_RF_Engineering.html?id=LSAhywAACAAJ&source=kp_cover&redir_esc=y>
- <http://www.platan.ru/shem/pdf/str10-14n.pdf>


## Внешние антенны для 3G/4G модемов

Как усилить сигнал сотовой сети. Антены направленные и обычные. Роутеры для модемов. Как выносить на улицу. Гермобоксы для уменьшения потерь на вч-кабеле. Питание модема. Как направить на базовую станцию. Через какие программы искать БС


Индуктивный антенный переходник для 3G/4G модема и роутера 
<Индуктивный антенный переходник для 3G/4G модема и роутера>

- GlassWire - файервол с мониторингом сетевой активности
- Network Cell Info - показывает на графике качество сигнала от разных базовых станций. 
  [4pda](https://4pda.to/forum/index.php?showtopic=743366)
- Cell Mapper - показывает расположение базовых станций на карте. Данные рассчитывает методом триангуляции
  [оф.сайт](https://www.cellmapper.net),
  [play](https://play.google.com/store/apps/details?id=cellmapper.net.cellmapper),
  [4pda](https://4pda.to/forum/index.php?showtopic=743432)


## Полезные ссылки
- Выбор 4g-модема
- Антенны. Проектирование
- полезный сайт про самодельные антенны <https://3g-aerial.biz/chto-takoe-mimo-antenna>
