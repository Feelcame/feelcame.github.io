---
title: Flipper Zero - электронная игрушка юного электронщика
---

## Описание
Это как универсальный пульт дистанционного управления. Протоколы: IR, Radio, RFID, NFC, iButton. Совмещает в себе функции чтения, копирования и эмуляции ключей. Чисто програмно реализованы U2F, возможно что-то еще для чего нужен только микроконтроллер и дисплей

## Железо
Построено на чипе STM32 со встроенным Bluetooth. Для поддержки всех протоколов добавленны соответствующие чипы физического уровня. Упаковано в удобный кравсивый корпус с милым дисплейчиком, как в старых телефонах Siemens, с желтой подсветкой

## Прошивка
Есть официальная прошивка, в которой только легальные функции и примеры. Для получения всех преимуществ надо обновить базы данных на флешке через родное приложение. Благодаря открытому исходному коду прошивки - есть неофициальные прошивки. Но они могут быть менее стабильны

**программы**
- [прошивальщик](https://dfu-util.sourceforge.net/releases/) - консольный прошивальщик
- [DfuSe Demo ](https://www.st.com/en/development-tools/stsw-stm32080.html) - заливка бинарников в микроконтроллеры STM

## Базы данных
Голая прошивка очень не очень работает без данных. Предполагается, что сразу после покупки устройство будет подключено и через официальное приложение на флешку будет загружены базы данных
- Вроде как основная база берется отсюда: <https://github.com/UberGuidoZ/Flipper>



## Полезное
- [syncFlipper](https://github.com/LupusE/FlipperMgmt/blob/main/syncFlipper) - скрипт пользователя для автомавтического обновления баз на флешке  
<details markdown="1">
<summary markdown="0">Использованные базы</summary>
- ## for Information, see https://github.com/djsime1/awesome-flipperzero
- gitSync -g https://github.com/logickworkshop/Flipper-IRDB -m infrared
- gitSync -g https://github.com/Gioman101/FlipperAmiibo -m nfc
- gitSync -g https://github.com/tobiabocchi/flipperzero-bruteforce -m subghz
- gitSync -g https://github.com/UNC0V3R3D/Flipper_Zero-BadUsb -m badusb -t UNC0V3R3D
- gitSync -g https://github.com/I-Am-Jakoby/Flipper-Zero-BadUSB -m badusb -t I-Am-Jakoby
- gitSync -g https://github.com/FalsePhilosopher/badusb -m badusb -t FalsePhilosopher
- gitSync -g https://github.com/nocomp/Flipper_Zero_Badusb_hack5_payloads -m badusb -t hack5_payloads
- gitSync -g https://github.com/jimilinuxguy/flipperzero-touchtunes -m subghz -t touchtunes
- gitSync -g https://github.com/neverfa11ing/FlipperMusicRTTTL -m music_player -t rtttl
- gitSync -g https://github.com/Tonsil/flipper-music-files -m music_player -t fmf
- gitSync -g https://github.com/wetox-team/flipperzero-goodies -m ibutton -t wetox
- gitSync -g https://github.com/xb8/t119bruteforcer -m subghz -t t119pager

- starnewSync https://github.com/GlUTEN-BASH/Flipper-Starnew

- guidoSync https://github.com/UberGuidoZ/Flipper
</details>

