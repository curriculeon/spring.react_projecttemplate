portNumber=3000
echo "Starting web application"

echo "Killing process on $portNumber..."
powershell ../kill-port.ps1 $portNumber
kill -kill `lsof -t -i tcp:$portNumber` 2>&1
echo "Process on $portNumber killed."

echo "Reinstalling node_modules..."
rm -rf node_modules
npm install
echo "node_modules reinstalled."
echo "The application should serve on http://localhost:$portNumber/ shortly by default."
npm start
