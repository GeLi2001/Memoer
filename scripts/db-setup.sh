#!/bin/bash

# Database setup script for Memoer project
# This script helps you set up and manage your local PostgreSQL database

set -e

echo "🔧 Memoer Database Setup Script"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running. Please start Docker and try again.${NC}"
    exit 1
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  .env file not found. Creating from env.example...${NC}"
    cp env.example .env
    echo -e "${GREEN}✅ .env file created. Please review and update the values as needed.${NC}"
fi

echo "🐳 Starting PostgreSQL container..."
docker-compose up -d postgres

echo "⏳ Waiting for PostgreSQL to be ready..."
# Wait for the database to be ready
until docker-compose exec postgres pg_isready -U memoer -d memoer > /dev/null 2>&1; do
    echo "   Waiting for PostgreSQL..."
    sleep 2
done

echo -e "${GREEN}✅ PostgreSQL is ready!${NC}"

echo "🔄 Running Prisma migrations..."
npx prisma migrate dev --name init

echo "📊 Generating Prisma client..."
npx prisma generate

echo -e "${GREEN}🎉 Database setup complete!${NC}"
echo ""
echo "📋 Next steps:"
echo "   1. Review your .env file and update any placeholder values"
echo "   2. Start your development server with: npm run dev"
echo "   3. Access Prisma Studio with: npx prisma studio"
echo ""
echo "🔗 Database connection details:"
echo "   Host: localhost"
echo "   Port: 5432" 
echo "   Database: memoer"
echo "   Username: memoer"
echo "   Password: memoer_password"
