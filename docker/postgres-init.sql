-- PostgreSQL initialization script for Memoer project
-- This script sets up proper permissions and creates a shadow database for Prisma

-- Create the memoer application user
CREATE USER memoer WITH PASSWORD 'memoer_password';

-- Grant privileges on the main database
GRANT ALL PRIVILEGES ON DATABASE memoer TO memoer;

-- Create a shadow database for Prisma migrations
-- This is used by Prisma during development to validate migrations
CREATE DATABASE memoer_shadow WITH OWNER memoer;
GRANT ALL PRIVILEGES ON DATABASE memoer_shadow TO memoer;

-- Grant schema permissions on public schema for both databases
\c memoer;
GRANT ALL ON SCHEMA public TO memoer;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO memoer;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO memoer;

\c memoer_shadow;
GRANT ALL ON SCHEMA public TO memoer;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO memoer;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO memoer;

-- Set default privileges for future objects
\c memoer;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO memoer;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO memoer;

\c memoer_shadow;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO memoer;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO memoer;
