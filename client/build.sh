portNumber=3000
echo "Starting web application"

echo "Killing process on $portNumber..."
../kill-port.sh $portNumber
echo "Process on $portNumber killed."

echo "Reinstalling node_modules..."
rm -rf node_modules
npm install
echo "node_modules reinstalled."
echo "The application should serve on http://localhost:$portNumber/ shortly by default."
npm start
