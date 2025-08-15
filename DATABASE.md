# Database Setup Guide

This guide will help you set up a local PostgreSQL database using Docker for the Memoer project.

## Quick Start

1. **Run the automated setup script:**
   ```bash
   ./scripts/db-setup.sh
   ```

This script will automatically:
- Start the PostgreSQL Docker container
- Wait for the database to be ready
- Run Prisma migrations
- Generate the Prisma client

## Manual Setup

If you prefer to set up the database manually, follow these steps:

### 1. Start PostgreSQL Container

```bash
# Start the PostgreSQL service
docker-compose up -d postgres

# Check if the container is running
docker-compose ps
```

### 2. Verify Database Connection

```bash
# Check if PostgreSQL is ready
docker-compose exec postgres pg_isready -U memoer -d memoer

# Connect to the database (optional)
docker-compose exec postgres psql -U memoer -d memoer
```

### 3. Run Prisma Migrations

```bash
# Apply database migrations
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate
```

## Database Configuration

### Connection Details
- **Host:** localhost
- **Port:** 5432
- **Database:** memoer
- **Username:** memoer
- **Password:** memoer_password

### Environment Variables
Make sure your `.env` file contains:

```env
DATABASE_URL="postgresql://memoer:memoer_password@localhost:5432/memoer?schema=public"
SHADOW_DATABASE_URL="postgresql://memoer:memoer_password@localhost:5432/memoer_shadow?schema=public"
```

## Useful Commands

### Database Management
```bash
# View database logs
docker-compose logs postgres

# Stop the database
docker-compose down

# Remove database and start fresh
docker-compose down -v
docker-compose up -d postgres
```

### Prisma Commands
```bash
# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database and apply migrations
npx prisma migrate reset

# Push schema changes without creating migrations
npx prisma db push

# Generate Prisma client after schema changes
npx prisma generate
```

## Troubleshooting

### Common Issues

1. **Port 5432 already in use**
   ```bash
   # Check what's using port 5432
   lsof -i :5432
   
   # Stop local PostgreSQL service if running
   brew services stop postgresql
   # or
   sudo systemctl stop postgresql
   ```

2. **Permission denied errors**
   - The initialization script automatically grants the necessary permissions
   - If you still encounter issues, manually connect and run:
   ```sql
   GRANT ALL PRIVILEGES ON DATABASE memoer TO memoer;
   GRANT ALL ON SCHEMA public TO memoer;
   ```

3. **Connection refused**
   - Ensure Docker is running
   - Wait for the health check to pass
   - Check container logs: `docker-compose logs postgres`

4. **Migration errors**
   - Ensure the database is running and accessible
   - Try resetting: `npx prisma migrate reset`
   - Check shadow database permissions

### Health Check

The PostgreSQL container includes a health check that verifies:
- The database server is running
- The `memoer` user can connect
- The `memoer` database is accessible

You can check the health status with:
```bash
docker-compose ps postgres
```

## Security Notes

- The default credentials are for development only
- Change the password in production environments
- Consider using Docker secrets for production deployments
- The database is only accessible from localhost by default
