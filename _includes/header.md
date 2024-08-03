<div id="nav">
	<a href="{{ '/index.html' | relative_url }}" class="btn not-mobile">🏠</a>
	<a href="{{ '/r/soft' | relative_url }}" class="btn">💾 Кодинг</a>
	<a href="{{ '/r/hard' | relative_url }}" class="btn">🔧 Железки</a>
	<a href="{{ '/d/' | relative_url }}" class="btn">📸 Загрузки</a>
	<a href="{{ '/store/' | relative_url }}" class="btn">💬 Обзоры</a>
	<a href="{{ '/projects/' | relative_url }}" class="btn">📚 Проекты</a>
	<a href="{{ '/search' | relative_url}}" class="btn not-mobile">🔍</a>
</div>
<span id="mob">
	<a href="{{ '/index.html' | relative_url }}" class="btn">🏠</a>
	<a href="/search" id="searchBtn" onclick="return showSearch();" class="btn">🔍</a>
	<a href="#trigger" id="navBtn" onclick="return showNav();" class="btn">🍔</a>
</span>
