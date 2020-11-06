#!/usr/bin/env bash
echo "┏━━━ 📦 Running Webpack Dev Server $(pwd) ━━━━━━━━━━━━━━━━━━━"
yarn webpack serve --config ./config/webpack.development.config.js --hot