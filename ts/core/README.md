# Memoer - Open Source Memory Management Platform

An open-source memory management platform built with Next.js 15, Auth.js v5, Prisma, and PostgreSQL. Designed to be self-hostable, secure, and completely open source - similar to Langfuse's architecture.

## ✨ Features

- 🔐 **Secure Authentication** - Built with Auth.js v5 supporting multiple providers
- 📝 **Memory Management** - Create, organize, and search your memories
- 🗄️ **PostgreSQL Database** - Reliable and scalable data storage with Prisma ORM
- 🎨 **Modern UI** - Beautiful interface built with Tailwind CSS and Radix UI
- 🔧 **Self-Hostable** - Deploy anywhere you want, own your data
- ⚡ **Next.js 15** - Latest App Router with server components
- 📱 **Responsive Design** - Works perfectly on desktop and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (or Docker for easy setup)
- npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/memoer.git
   cd memoer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up PostgreSQL database**
   
   **Option A: Using Docker (Recommended)**
   ```bash
   # Start PostgreSQL with Docker Compose
   docker-compose up -d postgres
   ```
   
   **Option B: Use your own PostgreSQL instance**
   - Make sure PostgreSQL is running
   - Create a database named `memoer`

4. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   # Database (use this if using Docker)
   DATABASE_URL="postgresql://memoer:memoer_password@localhost:5432/memoer"
   
   # Or use your own PostgreSQL instance
   # DATABASE_URL="postgresql://username:password@localhost:5432/memoer"
   
   # Auth.js
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   
   # OAuth Providers (optional)
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

5. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Run database migrations
   npm run db:migrate
   
   # (Optional) Open Prisma Studio to view your database
   npm run db:studio
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Authentication**: [Auth.js v5](https://authjs.dev/) (NextAuth.js)
- **Database**: [PostgreSQL](https://postgresql.org/) with [Prisma ORM](https://prisma.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://radix-ui.com/)
- **TypeScript**: Full type safety throughout
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```
memoer/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   ├── dashboard/         # Dashboard pages
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── auth/              # Authentication components
│   │   ├── dashboard/         # Dashboard components
│   │   └── ui/                # UI primitives
│   ├── lib/                   # Utility functions
│   │   ├── auth.ts            # Auth.js configuration
│   │   ├── prisma.ts          # Prisma client
│   │   └── utils.ts           # Utility functions
│   └── hooks/                 # Custom React hooks
├── prisma/
│   └── schema.prisma          # Database schema
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🔐 Authentication Setup

### OAuth Providers

#### GitHub OAuth
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
4. Add your Client ID and Secret to `.env`

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Add your Client ID and Secret to `.env`

### Email/Password Authentication

The app supports traditional email/password authentication out of the box. Users can:
- Sign up with email and password
- Sign in with email and password
- Use OAuth providers as alternatives

## 🗄️ Database

The application uses PostgreSQL with Prisma ORM. The schema includes:

- **Users** - User accounts with authentication data
- **Sessions** - User sessions for Auth.js
- **Accounts** - OAuth account connections
- **Memories** - User-created memory entries

### Database Commands

```bash
# Generate Prisma client after schema changes
npm run db:generate

# Create and apply migrations
npm run db:migrate

# Push schema changes without migrations (development)
npm run db:push

# Open Prisma Studio (database GUI)
npm run db:studio
```

## 🚀 Deployment

### Self-Hosting

1. **Prepare your server**
   - Install Node.js 18+
   - Set up PostgreSQL database
   - Configure domain and SSL

2. **Build the application**
   ```bash
   npm run build
   ```

3. **Set production environment variables**
   ```bash
   # Update NEXTAUTH_URL to your domain
   NEXTAUTH_URL="https://yourdomain.com"
   
   # Use a strong secret
   NEXTAUTH_SECRET="your-production-secret-key"
   
   # Production database URL
   DATABASE_URL="postgresql://username:password@host:5432/memoer"
   ```

4. **Run database migrations**
   ```bash
   npm run db:migrate
   ```

5. **Start the application**
   ```bash
   npm start
   ```

### Using PM2 (Recommended)

```bash
# Install PM2 globally
npm install -g pm2

# Start the application with PM2
pm2 start npm --name "memoer" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

### Docker

The project includes a `docker-compose.yml` file for easy PostgreSQL setup:

```bash
# Start PostgreSQL database
docker-compose up -d postgres

# Stop PostgreSQL database
docker-compose down
```

Full Docker support for the application will be added in future releases.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Langfuse](https://langfuse.com/) for architecture inspiration
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Auth.js](https://authjs.dev/) for authentication
- [Prisma](https://prisma.io/) for the excellent ORM
- [Radix UI](https://radix-ui.com/) for UI primitives

## 🐛 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-org/memoer/issues) page
2. Create a new issue if your problem isn't already reported
3. Join our [Discord community](https://discord.gg/memoer) for real-time help

---

**Happy memory organizing! 🧠✨**