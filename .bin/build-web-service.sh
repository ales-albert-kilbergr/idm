#!/usr/bin/env sh

echo "[Build] Build idm-web-service";

skipInstall=false

while [ $# -gt 0 ]; do
  case "$1" in
    --skip-install)
      skipInstall=true
      ;;
  esac
  shift
done

if [ "$skipInstall" = false ]; then
  echo "[BUILD] run install". 
  yarn;
else 
  echo "[BUILD] skip install"
fi


rm -rf ./dist/apps/web-service

yarn nx build web-service

cd ./dist/apps/web-service

pwd

docker build . -t kilbergr/idm-web-service

echo "[BUILD] done"

#yarn install