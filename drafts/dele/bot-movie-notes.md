---
date: 2021-08-21T18:26:17+03:00
modified: 2022-07-07T09:47:01+03:00
tags: 
---

# Идея: бот список просмотра

Типа как кинопоиск, но в телеге

Бот которого добавляет в канал админом и он добавляет под каждый пост кнопку-ссылку для перехода непосредственно в самого бота. Текст ссылки "Смотреть позже".

В боте при нажатии старт проверяется гет-параметр start и его содержимое добавляется в базу под номером n+1. 

После добавления проводится анализ текста и проводится поиск по базе названий фильмов и предлагается привязать ссылку на КиноПоиск к этой заметке.

При просмотре списка всех заметок выводится номер заметки и только первые 32 символа от каждой зметки. 
Внизу кнопки с числами номерами заметок. И кнопки пагинация.

При нажатии на кнопку с номером заметки открывается карточка с этой заметкой. Внутри кнопки "смотреть", "просмотрено" и "назад". 

Пагинация по 32 заметки (например)

В главном меню инлайн кнопки: список, настройки...

При просмотре списка перемещать непросмотренные вверх. Настраивается в подменю "сортировка" настроек
