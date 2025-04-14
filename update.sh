#!/bin/sh
set -e  # 遇到错误时终止脚本执行

echo "开始更新应用..."

# 记录当前时间
echo "开始时间: $(date)"

echo "拉取最新代码..."
git pull || { echo "git pull 失败"; exit 1; }

echo "开始构建应用..."
npm run build || { echo "构建失败"; exit 1; }

echo "重启应用..."
pm2 restart diqiao || { echo "重启失败"; exit 1; }

echo "更新完成: $(date)"
