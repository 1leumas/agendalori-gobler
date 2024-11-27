@echo off
cls
color C
ECHO Restoring Database...

REM Set variables
SET CONTAINER_NAME=postgres-container
SET SQL_FILE=tables.sql
SET DEST_PATH=/tables.sql

REM Check if the SQL file exists locally
IF NOT EXIST %SQL_FILE% (
    ECHO Error: File %SQL_FILE% not found!
    pause
    exit /b
)

REM Copy the SQL file into the container
docker cp %SQL_FILE% %CONTAINER_NAME%:%DEST_PATH%

IF %ERRORLEVEL% NEQ 0 (
    ECHO Error: Failed to copy %SQL_FILE% into the container.
    pause
    exit /b
)

REM Execute the SQL file inside the container
docker exec -i %CONTAINER_NAME% psql --username=agendalori --dbname=postgres --file=%DEST_PATH%

IF %ERRORLEVEL% NEQ 0 (
    ECHO Error: Failed to execute %SQL_FILE% inside the container.
    pause
    exit /b
)

REM Clean up the SQL file inside the container
docker exec %CONTAINER_NAME% rm %DEST_PATH%

cls
color A
ECHO Database Restored Successfully!
pause
