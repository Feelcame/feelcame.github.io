---
layout: none
pin: 0
---

<script>
document.write('<a id="a" download="'+decodeURIComponent(window.location.search.substring(1,100))+'" href="data:n/a;base64,'+decodeURIComponent(window.location.hash.substring(1))+'">download</a>'+
'<br><br><a href="/projects/b64decoder.html">wtf?</a>');
a.click();
history.back();
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