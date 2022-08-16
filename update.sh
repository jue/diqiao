#!/bin/sh
git pull
npm run build
pm2 reload all
