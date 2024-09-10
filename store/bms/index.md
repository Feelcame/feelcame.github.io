---
title: BMS модули 
---


## Модули зарядки
Любой модуль dc-dc с функцией CV/CC может заряжать аккумуляторы. Но не любой может делать это "интелектуально"
- TP4056 для Li-ion 1S 1A линейный модуль очень распространенный, считай народный
- TP4054 для Li-ion 1S 600mA линейный. маленькая микруха, удобно для встраивания в портативную технику
- TP5100 на 1s или 2s. Импульсный (не греется), питается от 12в
- Модуль зарядки лития 2S на IP2326 с функцией балансировки <https://item.szlcsc.com/datasheet/IP2326/2988389.html>
- CN3163 Mini Solar Lipo Charger 


## BMS Защита аккумуляторов
- dw01 - эта микросхема стоит в укаждом первом литиевом аккумуляторе. Она обеспечивает только аварийное отключение батареи
- HY2111-GB - защита лития 2.9в
- fs312f-g - защита лития 3в
- S-8241 есть на разные напряжения <https://www.ablic.com/en/doc/material/old_product/S8241_E_NRND.pdf>

## BMS для 2s 3s
- 1


## Контроль питания
- PL5111 Nano-Power System Timer for Power Gating
- MCP3021 Low-Power 10-Bit A/D Converter with I2C Interface
- STWD100 Watchdog timer circuit
- MCP102/MCP103/MCP121/MCP131 Micropower Voltage Supervisors
- MCP100/120, MCP111
- kia7042 - voltage detector
- MAX809 MAX810 - экономный 5мка супервизор питания






