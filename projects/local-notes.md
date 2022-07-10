---
title: Заметки хранящиеся в куках браузера
date: 2021-11-09T12:00:00+02:00
tags: temp
---

## Скрипт для хранеия информации в cookies или в localstorage браузера

Будет полезен на статическом сайте для вариации интерфейса в зависимости от предыдущих действий


## Демо

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

## Полезные ссылки

- <https://ru.js.cx/task/form-autosave/solution/>
- <https://learn.javascript.ru/localstorage>
