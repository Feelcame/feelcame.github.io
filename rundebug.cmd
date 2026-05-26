@echo off
@chcp 65001 >nul
cd /d "%~dp0"
echo Starting. Please wait...
echo jekyll serve --port 80 --open-url localhost:80
cmd /k "jekyll serve --port 80 --open-url localhost:80"
pause
start "" "%~f0"
exit /b