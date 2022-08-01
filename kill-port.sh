#!/bin/bash
if [ "$1" ]
then
    portNumbers=$(netstat -a -n -b -o | grep $1 | sed -e "s/[[:space:]]\+/ /g" | cut -d ' ' -f6)        
    { #try 
        for portNumber in $portNumbers; do
            echo taskkill //F //PID "$portNumber"
            taskkill //F //PID "$portNumber"
        done 
    } || { # catch
        for portNumber in $portNumbers; do
            echo taskkill /PID /F "$portNumber" 2>/dev/null
            taskkill /PID /F "$portNumber" 2>/dev/null
        done 
    }
fi