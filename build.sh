#!/bin/bash

BLACK='\033[0;30m'
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE_BROWN='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
LIGHT_GREY='\033[0;37m'
NC='\033[0m' # No Color


printf "${BLUE}Building For Production...${NC}\n";

rm ./public/css/app.css
rm ./public/css/app.css.map
npm run sass:production

npm run ts:build
npm run browserify:production

printf "${GREEN}✅  Built!${NC}\n";
exit 0;
