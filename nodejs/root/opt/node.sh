#!/bin/bash

cd /var/www/html

echo "==> Installing nodemon"
npm install nodemon -g

echo "==> Installing npm dependencies"
npm install

echo "==> Starting the server"
exec npm start
