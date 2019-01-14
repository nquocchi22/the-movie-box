@echo off
rem cd movie-box-ng-ui
for /F "tokens=5 delims= " %%P IN ('netstat -a -n -o ^| findstr :4200') DO TaskKill.exe /PID %%P /T /F
rem ng serve
