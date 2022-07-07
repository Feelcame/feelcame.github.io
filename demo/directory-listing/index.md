## Примеры и тесты
Описание: [click](../coding/jekyll-navigation.md)

Список страниц в папке: 
```
index.md
```

<details markdown="1"><summary markdown="0">+ Нет параметров</summary>
```{ % include ls.md %}```   
{% include ls.md %}
</details>

<details markdown="1"><summary markdown="0">+ Передано DIR</summary>
```{ % include ls.md dir="/projects/" %}```   
{% include ls.md dir="/projects/" %}
</details>

<details markdown="1"><summary markdown="0">+ Передано TAG</summary>
```{ % include ls.md tag="hardware" %}```   
{% include ls.md tag="hardware" %}
</details>

<details markdown="1"><summary markdown="0">+ Передано TAG и DIR</summary>
```{ % include ls.md dir="/projects/" tag="hardware" %}```   
{% include ls.md dir="/projects/" tag="hardware" %}
</details>





