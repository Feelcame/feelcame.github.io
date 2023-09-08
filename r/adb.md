---
title: Прошивка и настройка Android-телефона
date: 2021-06-02T03:16:45+03:00
modified: 2021-08-24T13:33:23+03:00
tags: native
---

- Оглавление
{:toc}

---

- зачем прошивать и вообще что это
- сток/кастом прошивки
- разблокировка загрузчика. некоторые производители говнари и не дают шить сторонние прошивки
- рекавери. что это и для чего
- ADB, fastboot что можно и что нельзя
- root-права и ограничения при их наличии/отсутствии
- debloat (bloat - раздувать). удаление стандартного софта
- замена стандартноого софта
- повысь конфиденциальность
- откажись от гугла. как скачать APK без плей саркета
- что можно сделать из старого телефона. гитайские поддельные телефоны (их в топку)
- некоторые телефоны просто ломаются без причины (дешевые компоненты)


## Программы и утилиты
- 0x192/universal-android-debloater. норм. 
  [github](https://github.com/0x192/universal-android-debloater/releases),
  [список пакетов](https://raw.githubusercontent.com/0x192/universal-android-debloater/main/resources/assets/uad_lists.json)
- ADB_AppControl. норм. 
  [оф.сайт](https://adbappcontrol.com/)
- XiaomiADBFastbootTools. устарело. 
  [github](https://github.com/Szaki/XiaomiADBFastbootTools)
- ADB-RUN. 
  [4pda](https://4pda.to/forum/index.php?showtopic=437824), 
  [оф.сайт](https://androidp1.ru/adb-run-obzor-funktsiy/)
- ApkShellext2. Показ иконок apk
- adb

## скачать APK

* [Raccoon](https://4pda.ru/forum/index.php?showtopic=592899&st=160#entry98072856)
* aURORA store
* app and game 4pda
* <http://apkdl.net> 
* t.me/apkdl_bot
* 4pda

## Прошивка телефона android (xiaomi)

**Есть два пути** официальный и правильный. 

Официальным можно прошить только последнюю версию от производителя.  
Преимущество - обычно это проще. Но только если производитель не схлопнулся и не прекратил поддержку, тогда все. Обязательно требуется поддержка. 

Казалось бы, есть нативные способы прошивки через sideload или fastboot. Официальные версии должны аж бегом залетать. Но не тут то было - рюсначала разблокировать загрузчик и только тогда сможешь обновиться. А некоторые производители типа саянов требуют паузу 720 часов перед разблокировка возможности шиться. Что тут скажешь - плохие люди, очень.

Правильный - разблокировка загрузчика, установка кастом рекавери, прошивка любой прошивки.  
Преимущество - можно прошить любую прошивку, хоть самому собрать из исходников. Не зависишь от производителя.  
Недостаток - предыдущее предложение не совсем правда. Исходники ядра все равно должен предоставить производитель. А может и не предоставить. Такое часто практикуют геи-монополисты типа иопл с мелкософтом

## 
Какие стандартные приложения можно безопасно удалить?

Через ADB можно отключить приложения и они не смогут самостоятельно включиться до заводского сброса. Если есть разблокированный загрузчик+рекавери+рут, то этот список тебе тоже будет интересен
- Программы и утилиты. [ссылка](#программы-и-утилиты)

<details markdown="1"><summary markdown="0">Motorola</summary>

[источник](https://4pda.to/forum/index.php?showtopic=526899&st=10080#entry38586664)

```
com.android.chrome-1
com.google.android.apps.books-1
com.google.android.apps.docs-1
com.google.android.apps.docs-2
com.google.android.apps.magazines-1
com.google.android.apps.maps-1
com.google.android.apps.translate-1
com.google.android.apps.plus-1
com.google.android.gm-1
com.google.android.marvin.talkback-1
com.google.android.music-1
com.google.android.play.games-1
com.google.android.talk-1
com.google.android.tts-1
com.google.android.videos-1
com.google.android.youtube-1
com.motorola.migrate-1
com.motorola.bodyguard-1
com.motorola.fmplayer-1
com.motorola.genie-1
com.motorola.contextual.smartrules2-1
com.motorola.setup
```
</details>


## xiaomi
<https://4pda.to/forum/index.php?showtopic=921645#entry77962469>


## Очистка сток-прошивки

- [Полезные андроид приложения без найденных трекеров и логеров и в лучшем случае - с отсутствием разрешения доступа в интернет | Платные и бесплатные полезные андроид приложения (и их лучшие альтернативы) без явно обнаруживаемой слежки за пользователем
](https://4pda.to/forum/index.php?showtopic=10051080



