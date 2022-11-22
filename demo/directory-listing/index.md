## Примеры и тесты
Описание: [click](../../projects/jekyll-navigation.md)

Список страниц в папке: 
```
index.md
```

<details markdown="1"><summary markdown="0">+ Нет параметров</summary>
```{ % include dir-ls.md %}```   
{% include dir-ls.md %}
</details>

<details markdown="1"><summary markdown="0">+ Передано DIR</summary>
```{ % include dir-ls.md dir="/projects/" %}```   
{% include dir-ls.md dir="/projects/" %}
</details>

<details markdown="1"><summary markdown="0">+ Передано TAG</summary>
```{ % include dir-ls.md tag="hardware" %}```   
{% include dir-ls.md tag="hardware" %}
</details>

<details markdown="1"><summary markdown="0">+ Передано TAG и DIR</summary>
```{ % include dir-ls.md dir="/projects/" tag="hardware" %}```   
{% include dir-ls.md dir="/projects/" tag="hardware" %}
</details>





