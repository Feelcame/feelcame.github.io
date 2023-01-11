---
title: Аккумуляторы
date: 2021-09-01T12:00:00
tags: power
---

- Виды аккумуляторов Li-ion, Lead-Acid, LiFePo, NiCd
- Зарядка, ток напряжение
- Разрядка. Защита. Балансировка банок
- Как работает Quick Charge

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






## Полезные ссылки
- <https://ru.wikipedia.org/wiki/Quick_Charge>
- <http://www.hackvlog.com/2016/12/bitbanging-quick-charge-2.html>
- <http://www.obddiag.net/usb-power.html>
- <http://rones.su/techno/usb-type-c-anatomy.html>
- <http://rones.su/techno/zaryadka-mobilynika-po-usb.html>
- <>
- 18650 <https://alexgyver.ru/18650/>
- зарядка лития <https://alexgyver.ru/lithium_charging/>
- [Про супервизоры питания](http://we.easyelectronics.ru/Celeron/shemotehnika-tipovaya-shema-supervizora-pitaniya-detektor-ponizhennogo-napryazheniya-metodika-rascheta-20150324.html)

