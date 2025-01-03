**Статьи и заметки**

### Установка на комп для отладки
Подробности на оф.сайте <https://jekyllrb.com/docs/installation/>

1. Установить Ruby  <https://rubyinstaller.org/downloads/>
2. Установить RubyGems `gem update --system` или через бинарник `ruby setup.rb`

Установка "Jekyll" и пакетного менеджера "bundle"
```
gem install jekyll bundler
```
Установка зависимостей, прописанных в Gemfile
```
bundle install
```

## Запуск локального сервера
Запуск сервера
```
bundle exec jekyll serve
```
Bли вот так:
```
jekyll serve
```
А для того, что бы было удобнее, можно после старта сервера сразу же открыть браузер
```
cmd /k jekyll serve --port 80 --open-url localhost
```
именно эта команда прописана в файле `rundebug.cmd`

### Публикация сайта через Github Pages
1. На аккаунте создать репозиторий `usermane.github.com`, где username - имя профиля гитхаб
2. В настройках репозитория разрешить публикацию страниц
3. Готово. Сайт доступен по адресу `username.github.io`

## TODO

- Кнопочку "вверх" чтобы летала справа внизу  
- возможность изменять вид списка статей: в строчку или блоками 
- дизайн как у спотифая недавно сделали в виде карточек. у вастрика такие же карточки
- добавить тень у картинок. вот пример <http://shpargalkablog.ru/2013/06/youtube.html>
- Сделать алдмин-юзерскрипт. Что бы он хранился в локал сторадж. А выполнялся на каждой странице, где подключен мастер-скрипт который подгрузит основной и выполнит его. Нужно что бы сделать кастомизируемую админку на статичный сайт
- Сделать поиск не страницей, а появляющимся полем под шапкой. Нажатие энтер или клик по кнопке поиска открывает новую страницу с таким же полем ввода и офлайн поиском по джейсону. А также три радиокнопки: по сайту, по репо, через гугл
- сделать чтобы кнопки в мобильном меню не только открывали но и закрывали поиск/навигатор

- комментарии. сделать дизайн кнопок. расположить в строчку на компах и в столбик на телефонах
- добавить еще одну кнопку комментирования: "в телеграме tg://", "в новой вкладке" и "прямо здесь"

- при поиске разворачивать все спойлеры 
- также переписать скрипт подсветки, что бы все вхождения на странице были выделены

- Сделать из сайта чтото типа PWA (надо прописать manifest.json). Загружать весь сайт полностью в кэш (папка \_pages). Джаваскриптом проверять обновления. И внизу писать дату

- сделать списки блоками в два столбика
  ```
    style: 'ul{overflow:hidden;flex-wrap:wrap} ul{/*display:table;flex-wrap:wrap*/;display:flex;flex-flow:row wrap;padding:0} ul li{text-align:center;float:left;box-sizing:border-box;width:calc(50% - 8px);padding:7px 10px;background:#eee;margin:4px;list-style-type:none;min-height:50px;/*height:5em;*/padding-left:15px;padding-right:15px;border-radius:10px}'
  ```

- кастомная форма обратной связи


## Список изменений
- Сворачиваемую навигацию для телефонов  
- Сделать комменты активируемыми через параметр  
- когда на телефоне нажимаешь открыть навигацию - не нужно переходить по ссылке. 
- сделать в dir-ls.md сортировку по полю index. а если его значение < 0, то скрывать страницу из вывода
- Чтобы нажатие кнопки вверх разворачивало навигацию и оповещало об этом строкой над "content"
- Добавить на сайт три кнопки навигации в мобильной версии вместо одной. Дом, поиск, бутерброд для открытия списка категорий. Их придётся дублировать для телефона и для ПК, не получится раскидать через стили. Через медиа-запрос узнать что сайт открыт на телефоне и скрыть кнопки домой и поиск комповские. 
- При клике на бутерброд - кнопки категорий должны появиться над Тремя кнопками. Соответственно получится тортик из категорий и три кита на котором он лежит

## полезные ссылки

- [Кастомизация спойлеров](http://shpargalkablog.ru/2013/04/details-html.html)