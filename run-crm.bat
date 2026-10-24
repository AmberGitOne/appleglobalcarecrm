@echo off
REM ---------------------------------------------------------------
REM  Apple Globalcare CRM - one-click start
REM  Installs dependencies and builds the database the first time,
REM  then starts the server and opens the app.
REM ---------------------------------------------------------------

cd /d "%~dp0"
title Apple Globalcare CRM

echo.
echo   Apple Globalcare CRM
echo   ====================
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo   Node.js is not installed, or is not on your PATH.
  echo   Install it from https://nodejs.org then run this file again.
  echo.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo   Installing dependencies, this takes a moment...
  call npm install --no-audit --no-fund
  if errorlevel 1 (
    echo.
    echo   Dependency install failed. Scroll up for the reason.
    pause
    exit /b 1
  )
  echo.
)

if not exist "data\crm.db" (
  echo   Building the database...
  call npm run setup
  if errorlevel 1 (
    echo.
    echo   Database setup failed. Scroll up for the reason.
    pause
    exit /b 1
  )
  echo.
)

echo   Starting the server on http://localhost:4000
echo   Leave this window open. Press Ctrl+C to stop.
echo.

start "" http://localhost:4000
call npm start

pause
