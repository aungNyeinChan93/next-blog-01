
# Next.js Blog 2025

## Overview
This is a modern blog application built with Next.js 14+, TypeScript, Prisma, and Tailwind CSS. It features authentication, article management, user profiles, comments, and an admin dashboard.

## Features
- User authentication (login/register)
- Article CRUD (create, read, update, delete)
- Comments on articles
- User profile and settings
- Admin dashboard for managing users and articles
- Responsive UI with reusable components
- Prisma ORM for database management

## Folder Structure
```
src/
	app/                # Next.js app directory (routing, pages)
		(admin)/           # Admin dashboard & users
		(auth)/            # Auth pages (login, register)
		(main)/            # Main app (articles, profile)
		(tests)/           # Test/demo pages
		api/               # API routes
	components/          # UI and feature components
	features/            # Business logic (actions, utils)
	generated/prisma/    # Prisma client & generated files
	lib/                 # Utility libraries
public/
	articles/            # Article images/assets
	*.svg                # SVG assets
prisma/
	schema.prisma        # Prisma schema
	migrations/          # Database migrations
```

## Getting Started
1. **Install dependencies**
	 ```bash
	 npm install
	 ```
2. **Setup environment variables**
	 - Copy `.env.example` to `.env` and update values as needed.
3. **Run database migrations**
	 ```bash
	 npx prisma migrate dev
	 ```
4. **Start the development server**
	 ```bash
	 npm run dev
	 ```

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npx prisma studio` — Open Prisma Studio

## Tech Stack
- Next.js
- TypeScript
- Prisma
- Tailwind CSS

## License
MIT
