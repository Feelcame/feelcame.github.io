---
title: Заметки хранящиеся в куках браузера
date: 2021-11-09T12:00:00+02:00
redirect_from:
  - /notes/
---

## Скрипт для хранеия информации в cookies или в localstorage браузера

Будет полезен на статическом сайте для вариации интерфейса в зависимости от предыдущих действий


## Демо
[ссылка](../../demo/notes/)
<div markdown="0">
<textarea style="width:200px; height: 60px;" id="area" placeholder="Напишите сообщение здесь"></textarea>
<br>
<button onclick="localStorage.removeItem('area');area.value=''">Очистить</button>
<script>
    area.value = localStorage.getItem('area');
    area.oninput = () => {
      localStorage.setItem('area', area.value)
    };
</script>
</div> 

## todo
+ markdown + редактор
- минималистичный размер шапки, что бы файл можно было редактировать как txt
- download
- share через ссылку, как в 4qr.xyz. перед генерацией ссылки просить ввести имя файла, с которым оно потом сохранится у того кто принял
- шифрование?
- список локально сохраненных заметок внизу страницы
- возможность очистить хранилище
- переименование заметок
- удаление заметок

## Полезные ссылки

- <https://ru.js.cx/task/form-autosave/solution/>
- <https://learn.javascript.ru/localstorage>
- <http://shpargalkablog.ru/2013/06/localStorage.html>
