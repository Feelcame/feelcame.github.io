<div id="nav">
	<a href="{{ '/index.html' | relative_url }}" title="Домой" class="btn not-mobile">🏠</a>
	<a href="{{ '/r/' | relative_url }}" title="Хліб" class="btn">💛 Статьи</a>
	<a href="{{ '/projects/' | relative_url }}" title="Сіль" class="btn">💾 Проекты</a>
	<a href="{{ '/store/promo' | relative_url }}" title="Вода" class="btn">😎 Инструмент</a>
	<a href="{{ '/notes/' | relative_url }}" title="Козацька їда" class="btn">🎮 Заметки</a>
	<a href="{{ '/search' | relative_url}}" title="Поиск" class="btn not-mobile">🔍</a>
</div>
<span id="mob">
	<a href="{{ '/index.html' | relative_url }}" title="Домашня" class="btn">🏠</a>
	<a href="/search" id="searchBtn" onclick="return showSearch();" title="Поиск" class="btn">🔍</a>
	<a href="#trigger" id="navBtn" onclick="return showNav();" title="Меню" class="btn">🍔</a>
</span>
