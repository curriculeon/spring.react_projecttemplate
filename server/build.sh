portNumber=8080
echo "Starting web application"

echo "Killing process on $portNumber..."
../kill-port.sh $portNumber
echo "Process on $portNumber killed."

echo "Rebuilding class files..."
rm -rf target

echo "The application should serve on http://localhost:$portNumber/ shortly by default."
mvn spring-boot:run
