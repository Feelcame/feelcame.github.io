---
title: Как заряжать аккумуляторы
date: 2021-09-01T12:00:00
tags: power
---

- ToC  
{:toc}

---

- Виды аккумуляторов Li-ion, Lead-Acid, LiFePo, NiCd
- Зарядка, ток напряжение
- Микросхемы для зарядки / готовые решения
- Паралельное/последовательное включение
- Разрядка. Защита
- Восстановление, Балансировка банок
- Быстрая зарядка Quick Charge

## Разрядка и защита
Для защиты можно использовать BMS или готовые платы на их основе.

Микросхемы для 1s1p li-ion:
- dw06 - то же что и dw01, но со встроенными ключами
- MCP121 - супервизор, притягивает ногу к земле при заданном пороге напряжения
- [Monitors & Reset Circuits - LCSC](https://www.lcsc.com/products/Monitors-Reset-Circuits_934.html)

## Быстрая зарядка. Quick Charge. Power Delivery

Шел 2015 год. Как и USB Power Delivery, спецификация предусматривала возможность повышения напряжения питания до 9, 12 или 20 В после согласования между зарядным устройством и гаджетом. Но, в отличие от USB Power Delivery, метод договора был гораздо проще и позволял использовать существующие кабели и разъёмы USB 2.0/3.0. По состоянию линий D+/D− гаджет определяет, что подключён к зарядному устройству, после чего выставляет на линии D+/D− определённое напряжение в соответствии с желаемым напряжением питания.

В момент подачи питания (состояние S1 на рисунке) зарядное устройство выдаёт в нагрузку 5 В и замыкает линии D+/D−. При этом такое ЗУ определяется как соответствующее стандарту USB Battery Charging. Если питаемый гаджет не соответствовал QC, то зарядное устройство продолжало работать в этом режиме, обеспечивая совместимость с USB Battery Charging и Quick Charge 1.0. Чтобы перейти в режим Quick Charge 2.0, гаджет подаёт 0,6 В на D+ (состояние S2). ЗУ определяет это напряжение как соответствие гаджета QC 2.0 и в ответ разъединяет D+ и D−, закорачивая D− на 0 В. Теперь и гаджет видит, что ЗУ соответствует QC 2.0, и подаёт на D+ 3,3 В (состояние S3). Теперь ЗУ отпускает D− и видит сочетание напряжений на D+/D−, которым гаджет выставляет требуемое напряжение питания. В состоянии S3 показан выход на 9 В, в состоянии S4 — выход на 12 В, далее — на 5 В.

![image](https://user-images.githubusercontent.com/17731587/152176914-c8e71fcd-d440-48b3-bb1a-70b36329d6fe.png)


## Восстановление батарей
- батареи ноутбука 3S2P
- батареи телефона

**Свинцовые аккумуляторы**
- [Китайские свинцовые аккумуляторы для фонарей. Обзор и эксплуатация](https://habr.com/ru/articles/551586/)
- [Использование и восстановление свинцовых АКБ мой опыт](https://habr.com/ru/articles/428710/)


---

- Блоки питания
- Преобразователи напряжения
- Защиты по питанию
- Источники тока. Ограничение/стабилизация
- Аккумуляторы. Менеджмент питания, MPS
- Альтернативные источники питания.
- Про КПД и тепловыделение

## Блоки питания
- безтрансформаторные (на гасящем конденсаторе, не развязаны гальванически от сети) <https://habr.com/ru/articles/476812/>
- трансформаторные
- импульсные

## Защита по питанию
- Защита от КЗ
- Защита от переполюсовки <https://habr.com/ru/post/254035/>
- Защита от повышенного напряжения
- Защита от пониженного напряжения
- Защита от перегрева
- Тампер. Выключиться при вскрытии корпуса
- Защита от подделки. Микросхема лицензии. Некоторые производители встраивают в свои устройства проверку подлинности кабелей, аккумов и т.д


## Источники тока
Для светодиодов или для зарядки аккумуляторов. Обычно это называют метод CC/CV.  

Например для заряда. Ставят DC/DC преобразователь и токовый шунт. Вкачивают на вход энергию и ограничивают либо когда достигнуто предельное значение тока(CC), либо когда достигнуто заданное напряжение(CV)

## Аккумуляторное питание
- Зарядка аккумов ([ссылка](/r/charging.md))
- Защита аккумов
- Менеджмент питания (MPS). Одновременная работа устройства и зарядка аккумов. Пока подключен основной БП - аккум заряжается, а питание устройства от БП. Как только БП отключается - автоматом переключается на питание от аккума. Аккум может использоваться как вспомогательный источник мощности при работе от основного БП, если тому не хратает мощности в данный момент

## Альтернативные источники питания
- Солнечные панели
- динамомашинки
- движение кисти руки
- пьезоэлементы
- радиоволны


## Про КПД
КПД - коэфициент полезного действия. Показывает какая часть энергии пошла в пользу. Например, если ты пытаешься добиваться бывшую, твой КПД равен 0%.
Подробнее рассмотрим на примере бесперебойника 220V, работу которого я проверял лично.

**Режим заряда**  
Бесперебойник включен в сеть и заряжает подключенный к нему аккумулятор. В нагрузку ничего не подключено
- Потребление от сети: 0.14a \* 220в = 30.8 Вт
- Подается на аккум: 0.77а \* 12в = 9.24 Вт
- КПД: 9.24 / 30.8 = 0.30

**Режим разряда**  
Аккумулятор заряжен. Сеть 220 отключена. Питание от аккумулятора. На выход подключена нагрузка в виде лампы накаливания 60 Вт. По измерениям 47.3 Вт (0.22а \* 215в)

- Холостой ход: 0.55а \* 12в = 6.6 Вт

- Потребляет от аккума: 7.16а \* 12в = 85.92 Вт
- Подается в нагрузку: 0.22а \* 220в = 48.4 Вт
- КПД: 48.4 / 85.92 = 0.56



## Полезные ссылки
- <https://ru.wikipedia.org/wiki/Quick_Charge>
- <http://www.hackvlog.com/2016/12/bitbanging-quick-charge-2.html>
- <http://www.obddiag.net/usb-power.html>
- <http://rones.su/techno/usb-type-c-anatomy.html>
- <http://rones.su/techno/zaryadka-mobilynika-po-usb.html>

- 18650 <https://alexgyver.ru/18650/>
- зарядка лития <https://alexgyver.ru/lithium_charging/>
- [Про супервизоры питания](http://we.easyelectronics.ru/Celeron/shemotehnika-tipovaya-shema-supervizora-pitaniya-detektor-ponizhennogo-napryazheniya-metodika-rascheta-20150324.html)


