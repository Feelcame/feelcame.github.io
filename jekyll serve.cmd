cd /d %~dp0
start /min "waiting" "cmd /c timeout /t 10 && explorer http://127.0.0.1:4000"
start "" "cmd /k cd && echo Starting Jekyll... && jekyll serve"