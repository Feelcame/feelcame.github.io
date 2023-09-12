---
layout: none
---

<script>
document.write('<a id="a" download="'+decodeURIComponent(window.location.search.substring(1,100))+'" href="data:n/a;base64,'+decodeURIComponent(window.location.hash.substring(1))+'">download</a>');
a.click();
history.back();
document.write('<br><br><a href="https://feelcame.github.io/projects/base64-url-downloader.html">wtf?</a>');
</script>


{% comment %}
<!--


<script>//*v3
document.write("redirecting...<br>");
var a = document.createElement('a');
a.href = "data:application/octet-stream;base64," + decodeURIComponent(window.location.hash.substring(1));
a.download = decodeURIComponent(window.location.search.substring(1,100));
a.innerText = "download";
document.body.innerText = "";
document.body.append(a);
a.click();
//history.back();
</script>


<script>// v2
var f = decodeURIComponent(window.location.search.substring(1,100));
document.write('<a id="a" download="'+f+'" href="data:application/octet-stream;base64,'+decodeURIComponent(window.location.hash.substring(1))+'">'+f+'</a>');
a.click();
</script>


<script>// v1
var a = document.createElement('a');
a.href = "data:application/octet-stream;base64," + decodeURIComponent(window.location.hash.substring(1));
a.download = decodeURIComponent(window.location.search.substring(1,100));;
a.click();
</script>


-->
{% endcomment %}