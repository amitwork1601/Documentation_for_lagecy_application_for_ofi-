@echo off
REM Script to build and serve MkDocs documentation

echo ========================================
echo MkDocs Documentation Builder
echo ========================================
echo.

REM Check if MkDocs is installed
python -m mkdocs --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: MkDocs is not installed!
    echo Please run: python -m pip install -r requirements.txt
    exit /b 1
)

echo MkDocs is installed.
echo.

REM Parse command line arguments
set ACTION=%1

if "%ACTION%"=="" (
    set ACTION=serve
)

if /i "%ACTION%"=="build" goto BUILD
if /i "%ACTION%"=="serve" goto SERVE
if /i "%ACTION%"=="clean" goto CLEAN

echo Unknown action: %ACTION%
echo Usage: run_mkdocs.bat [build^|serve^|clean]
echo.
echo   build  - Build static documentation site
echo   serve  - Start local development server (default)
echo   clean  - Remove built documentation
exit /b 1

:BUILD
echo Building static documentation site...
echo.
python -m mkdocs build
echo.
echo Build complete! Output in 'site' directory
echo To view, open: site\index.html
exit /b 0

:SERVE
echo Starting MkDocs development server...
echo.
echo Documentation will be available at: http://127.0.0.1:8000
echo Press Ctrl+C to stop the server
echo.
python -m mkdocs serve
exit /b 0

:CLEAN
echo Cleaning built documentation...
if exist site (
    rmdir /s /q site
    echo Documentation cleaned!
) else (
    echo No built documentation found.
)
exit /b 0
