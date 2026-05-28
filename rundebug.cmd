@echo off
@chcp 65001 >nul
cd /d "%~dp0"
:loop
cls
echo Starting. Please wait...
echo %CD%
echo jekyll serve --port 80 --open-url localhost:80
echo ===============================================
cmd /c "jekyll serve --port 80 --open-url localhost:80" < nul
if NOT %ERRORLEVEL% EQU 0 (
echo ===============================================
echo Error code: %ERRORLEVEL%
pause
)
goto loop