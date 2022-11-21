#!/usr/bin/env sh

echo "[Build] Build idm-web-service";
# Skip yarn install if needed
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

# Cleanup previous build if exists
rm -rf ./dist/apps/web-service
# Build an application from existing node_modules (should be cached)
yarn nx build web-service

cd ./dist/apps/web-service

docker build . -t kilbergr/idm-web-service

echo "[BUILD] done"
