@echo off
setlocal

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found on PATH.
  echo Install Node.js LTS, then see RUN.md for setup and launch instructions.
  echo.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found on PATH.
  echo Install Node.js LTS, then see RUN.md for setup and launch instructions.
  echo.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Installing dependencies with npm install...
  call npm install
  if errorlevel 1 (
    echo.
    echo npm install failed. See RUN.md for the manual setup instructions.
    echo.
    pause
    exit /b 1
  )
) else (
  echo Dependencies already installed; skipping npm install.
)

echo Starting Space Game at http://localhost:9999
echo Press Ctrl+C in this window to stop the dev server.
start "" /b cmd /c "timeout /t 3 /nobreak >nul 2>nul & start http://localhost:9999"

call npm run dev
set "DEV_EXIT=%ERRORLEVEL%"

echo.
echo Dev server stopped.
pause
exit /b %DEV_EXIT%
