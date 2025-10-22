**Статьи и заметки**

### Публикация сайта через Github Pages
1. На аккаунте создать репозиторий `usermane.github.com`, где username - имя профиля гитхаб
2. В настройках репозитория разрешить публикацию страниц
3. Готово. Сайт доступен по адресу `username.github.io`

### Требования
Подробности на оф.сайте <https://jekyllrb.com/docs/installation/>

1. Установить Ruby  <https://rubyinstaller.org/downloads/>
2. Установить RubyGems `gem update --system` или через бинарник `ruby setup.rb`
3. Установка "Jekyll" и пакетного менеджера "bundle"
```
gem install jekyll bundler
```
4. Установка зависимостей, прописанных в Gemfile
```
bundle install
```

## Запуск локально для отладки
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


