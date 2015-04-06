#!/bin/bash

cd /var/www/html

echo "==> Installing bower"
npm install bower -g

echo "==> Installing npm dependencies"
npm install --unsafe-perm

echo "==> Dependency Versions"
grunt --version
echo "node:"
node --version
echo "npm:"
npm --version
echo "bower:"
bower --version

echo "==> Build embed assets and run tests"
grunt

echo "==> Starting the server"
exec npm start
