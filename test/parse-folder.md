---
comments: true
---

## Скрипт для вывода списка страниц в папке
В любом месте страницы можно написать одну строчку и она выведет список страниц подходящих по параметрам.  
{% raw %}```{{ include directory-listing.md tag="железо" }}```{% endraw %}

Нужно спарсить папку ```/projects/```.
Если передан параметр ```dir```, то парсить полностью всю папку по принятому адресу относительно корня сайта.
Если передан параметр ```tag```, то вывести только те страницы, которые помечены тегом, нопр. "hardware".  
Если комбинация этих параметров, то вывести только страницы с нужным тегом в  данной папке.
Если параметров не передано - парсить текущую папку (из которой происходит вызов).

**Алгоритм:**
1. взять все страницы
2. выбрать только те что в нужной папке
3. выбрать только те что с нужным тегом
4. вывести список оставшихся

Код тута: <https://github.com/Feelcame/feelcame.github.io/blob/master/_includes/directory-listing3.md>

### Тест без параметров
```{ % include directory-listing3.md %}```

{% include directory-listing3.md %}

### Таст с обоими параметрами
```{ % include directory-listing3.md dir="/projects/" tag="hardware" %}```

{% include directory-listing3.md dir="/projects/" tag="hardware" %}

### Таст параметра DIR
```{ % include directory-listing3.md dir="/test/" %}```

{% include directory-listing3.md dir="/test/" %}

### Таст параметра TAG
```{ % include directory-listing3.md tag="hardware" %}```

{% include directory-listing3.md tag="hardware" %}



