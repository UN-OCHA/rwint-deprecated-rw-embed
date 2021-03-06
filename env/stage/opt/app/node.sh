#!/usr/bin/env bash

cd $NODE_APP_DIR

if [ ! $@ == "--skip-build" ]
  then

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
fi

if [ ! $@ == "--build-only" ]
  then
  echo "==> Starting the server"
  exec npm start
fi
