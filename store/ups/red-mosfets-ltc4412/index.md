---
title: DC 12V 8A Dual-Sources Automatic Transfer Switches Controller Battery UPS Power Supply Module
---

Вітаю, шановні. Замовив отаку плату червону на тест. Хотів подивитись схему, но китайці затерли маркування логічного елемента. Може цю плату вже обговорбвали тут на форумі? Підскажіть ключові слова для пошуку. Ссилка https://www.aliexpress.com/item/1005004397621655.html
Мені вдалось нагуглити даташіт на мікросхему зі схожим включенням. Скоріш за все це вона і є. Аж магія загадковості пропала ✨
То є LTC4412 https://www.analog.com/media/en/technical-documentation/data-sheets/4412fb.pdf

Description:
It is used for two-way 12V power supply intelligent switching near ideal diode function. This enables efficient "combining" operation of multiple power supplies designed to extend battery life and reduce self-heating. When turned on, the voltage drop across the MOSFET is typically 20mV. For applications that use a wall adapter or battery, the second way is automatically turned off when the first access voltage is greater than the set point. (It can be used as a two-way battery to supply power to the load for intelligent switching. For example, the first battery is preferentially powered. When the first battery is dead, it automatically switches to the second circuit.)
Parameters:
Working Voltage: 6V-15V (default 12V power supply)
Maximum Current: 8A
Wiring Method: bonding pad
Size: 41mm x 43mm
Status Indicator: red, green


After single channel operation (CH1, the primary channel) modification, back-to-back P MOSFETs' Gate controls: (1) if CH1 has power, thru R6 470K a weak pull-up applied (2) if CH2 has power and currently the active channel, then LTC4412's G_drive (pin 5) will let CH2 V+ pass thru Q5 Si2301 p-ch/D6/R9 1K, to drive CH1's PMOS gate to H, thus disable CH1 (3) if LTC4412 pin4 (STATUS) is active Low, thru R10 2K it will pull CH1's PMOS gate Low to activate CH1 (4) if CH2 has no power, CH1's V+ thru 180K/1N4148 diode new hack, will provide minimum positive voltage to trick uP that both channels have voltage and CH1 > CH2, thus CH1 is chosen active (A) both CH1 and CH2 are diode-OR'ed to supply power to 5V buck to run uP (2) LTC4412 pin5 to drive CH2 MOSFETs' Gate; pin1 ties to CH2 power input; pin6 common V+ output; pin2 GND; pin3 control signal in (3) Hack: solder a 180K resistor on right-hand side R10, its left connects to 1N4148 diode, the diode's cathode connects to IN2 V+


Плата не работает вообще, если второй источник питания не подключен. Если включить с двумя источниками, второй источник выключить, а затем включить (пока первый все еще активный) - питание пропадает вовсе. Те, кто думал ее использовать для переключения роутера на резервное питание - это не вариант от слова совсем.


CH1 is the priority channel, CH2 is the (battery) backup channel. CH2 must have high enough sustained voltage (min. 5.5V) to make all switching MOSFET work as expected. That is, even the Red LED is lit (means primary is active), the back-to-back P-Ch MOSFET may not be turned on, unless CH2 has voltage on it. To make it fully functional, CH2 needs to have 11.5V and enough current supply capability to make it as a true backup power supply. Normal CH1 switch-on point is 11.5V and switch-off point is 9V. Note if the CH2 battery is discharged, even when primary power on CH1 is back, MOSFET won't turn on; in this case, briefly apply 5.5V on CH2, even temporarily, will turn on CH1 MOSFET for good.
Additional feedback: I designed a hack which is to handle CH2 battery feed input is completely dead (or CH2 power is out of order.) In standard configuration, CH1 by itself will not turn both P-ch MOSFET on, thus no output. My hack is to enable CH1-only operation, in which output will always be CH1 input voltage, including low CH1 voltage operation, and the 11.5V_on/9V_off profile is disabled. This mode is immediately transitioned back to normal mode of operation when CH2 voltage supply is back on-line. Hack is to tie a 180K resistor in series with a diode and placed in between CH1 P-ch MOSFETs' common GATE (which is Right side of R10 resistor) and the CH2 power input terminal. The diode (1N4148 is good enough) Cathode is facing the CH2 input direction.