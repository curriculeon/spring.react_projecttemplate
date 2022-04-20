echo "Building application..."
cd ./server
./build.sh &

cd ../client
./build.sh &