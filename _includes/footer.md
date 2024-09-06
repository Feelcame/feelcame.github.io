<div style="text-align: center;">
<br>
<br>
<span class="site-footer-owner">© 2018+</span>
{%- assign username = "Feelcame" -%}
{%- if site.github.owner_name and site.github.owner_name != "" -%}
{%- assign username =  site.github.owner_name | default: "Feelcame" -%}
{%- endif -%}
	<a href="#" title="это я"><strong>{{ username }}</strong></a><br>
	<time class="shaded"> 
		{{- site.time | date: "%Y-%m-%dT%H:%M:%S" }} 
		<a target = "_blank" href="{{ site.github.repository_url }}/edit/master/{{ page.path }}">[ред.]</a>
		{%- if page.name == "index.md" %} 
		<a target = "_blank" href="{{ site.github.repository_url }}/new/master{{ page.dir }}">[+]</a>
		{%- endif %}
	</time>
	<br>
<div style="max-width: 2px; height: 30px; background-color: #ccc; margin: auto;"></div>
<strong>Обратная связь: </strong><br>
	((<a href="https://forms.gle/UCfDCJHZsGKu5AHf7" target="_blank">email</a>)) -   
	((<a href="https://t.me/FeelSoftBot" target="_blank">telegram</a>))
<div style="max-width: 2px; height: 70px; background-color: #ccc; margin: auto;"></div>
</div>
<br><br><br>
