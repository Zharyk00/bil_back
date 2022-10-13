echo "switch to master"
git checkout master

echo "build the project"
npm run build

echo "send to the server"
scp -r ./dist/* root@159.65.123.228:/var/www/bil_back

echo "everything is sended successuly"


