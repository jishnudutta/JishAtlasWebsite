#!/bin/bash

set -e

echo "📥 Pulling latest changes..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building project..."
npm run build

echo "🐳 Rebuilding Docker container..."
docker compose up --build -d

echo "🧹 Removing unused Docker images..."
docker image prune -f

echo "✅ Deployment completed!"
