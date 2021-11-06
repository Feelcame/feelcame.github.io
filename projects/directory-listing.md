---
comments: true
modified: 2021-11-06T11:58:23+02:00
index: 1
---

## Jekyll: вывод списка страниц в папке 
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

## Листинг кода
Код тута: <https://github.com/Feelcame/feelcame.github.io/blob/master/_includes/drlis.md>

``` html
hello
```



### Передано TAG и DIR
```{ % include drlis.md dir="/projects/" tag="hardware" %}```  
{% include drlis.md dir="/projects/" tag="hardware" %}

### Передано TAG
```{ % include drlis.md tag="hardware" %}```  
{% include drlis.md tag="hardware" %}

### Передано DIR
```{ % include drlis.md dir="/projects/" %}```  
{% include drlis.md dir="/projects/" %}

### Тест без параметров
```{ % include drlis.md %}```  
{% include drlis.md %}

