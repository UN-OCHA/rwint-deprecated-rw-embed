#!/bin/bash

cd /var/www/html

echo "==> Installing nodemon"
npm install nodemon -g

echo "==> Installing bower"
npm install bower -g

echo "==> Installing npm dependencies"
npm install

echo "==> Build embed assets and run tests"
grunt

echo "==> Starting the server"
exec npm start
