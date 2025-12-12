@echo off
REM Complete workflow: Generate documentation and serve with MkDocs

echo ========================================
echo Documentation Generation and Serving
echo ========================================
echo.

echo Step 1: Generating documentation from repositories...
echo This may take several minutes depending on repository size...
echo.

python generate_docs.py
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Documentation generation failed!
    exit /b 1
)

echo.
echo ========================================
echo Documentation generation complete!
echo ========================================
echo.

echo Step 2: Starting MkDocs server...
echo.
echo Documentation will be available at: http://127.0.0.1:8000
echo Press Ctrl+C to stop the server
echo.

python -m mkdocs serve
