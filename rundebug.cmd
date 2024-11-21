@echo off
cd /d "%~dp0"
echo Starting. Please wait...
cmd /k jekyll serve --port 80 --open-url localhost
pause