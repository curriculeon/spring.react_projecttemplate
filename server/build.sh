portNumber=8080
echo "Starting web application"

echo "Killing process on $portNumber..."
powershell ../kill-port.ps1 $portNumber
kill -kill `lsof -t -i tcp:$portNumber` 2>&1
echo "Process on $portNumber killed."

echo "Rebuilding class files..."
rm -rf target

echo "The application should serve on http://localhost:$portNumber/ shortly by default."
mvn spring-boot:run
