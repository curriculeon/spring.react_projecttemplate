#!/bin/bash

portNumber=3000
echo "Starting web application"

echo "Killing process on $portNumber..."
../kill-port.sh $portNumber
echo "Process on $portNumber killed."

# Extract Node.js version from package.json using grep and sed
nodeVersion=$(grep '"node":' package.json | sed -E 's/.*"node": *"([^"]+)".*/\1/')

echo "Installing and using Node.js version $nodeVersion..."
nvm install "$nodeVersion"
nvm use "$nodeVersion"

echo "Reinstalling node_modules..."
rm -rf node_modules
npm install
echo "node_modules reinstalled."
echo "The application should serve on http://localhost:$portNumber/ shortly by default."
npm start