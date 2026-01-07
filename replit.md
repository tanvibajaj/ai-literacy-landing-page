# replit.md

## Overview

This is a full-stack web application built with React and Express, using the Visa Product Design System (VPDS/Nova) for UI components. The project follows a monorepo structure with separate client and server directories, sharing common types and schemas. It's designed to create Visa-branded applications with a consistent design language.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter (lightweight React router alternative to React Router)
- **State Management**: TanStack React Query for server state management
- **UI Components**: Visa Product Design System (VPDS) via `@visa/nova-react` - this is mandatory for all UI components
- **Styling Approach**: VPDS utility classes and components. Tailwind is available but VPDS CSS resets override Tailwind spacing utilities, so use the `Utility` component from Nova for layout and spacing instead of Tailwind classes like `flex`, `gap-*`, `p-*`, `m-*`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: Node.js HTTP server with Vite dev server integration in development
- **API Pattern**: RESTful APIs prefixed with `/api`
- **Session Management**: express-session with connect-pg-simple for PostgreSQL session storage (memorystore available for development)

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - contains all database table definitions
- **Validation**: Zod schemas generated from Drizzle schemas using drizzle-zod
- **Migrations**: Drizzle Kit for schema migrations, output to `./migrations`

### Project Structure
```
├── client/           # React frontend
│   ├── src/          # Source code
│   └── public/       # Static assets including VPDS CSS
├── server/           # Express backend
├── shared/           # Shared types and schemas
├── custom_instruction/ # VPDS usage guidelines (important!)
└── migrations/       # Database migrations
```

### Key Design Decisions

**VPDS Component Usage**: All UI must use Visa Nova components from `@visa/nova-react`. Before using any component, research it at `https://design.visa.com/components/<component>/?code_library=react&version=3.0.0`. The `Utility` component handles layout with props like `vFlex`, `vFlexCol`, `vGap={16}`, `vPadding={24}`.

**Storage Interface Pattern**: The server uses a storage abstraction (`IStorage` interface) that currently defaults to in-memory storage (`MemStorage`) but can be swapped for database storage. This enables easy testing and future flexibility.

**Build Process**: Custom build script (`script/build.ts`) uses Vite for client and esbuild for server, bundling specific dependencies to reduce cold start times.

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database access with schema defined in `shared/schema.ts`

### UI Framework
- **Visa Nova Design System**: `@visa/nova-react`, `@visa/nova-icons-react`, `@visa/nova-styles`
- VPDS CSS loaded as static files from `/client/public/vpds/` to bypass PostCSS processing

### Authentication
- **Passport.js**: With passport-local strategy for username/password authentication
- Session-based auth with PostgreSQL session store

### Key NPM Packages
- `express-session` + `connect-pg-simple`: Session management
- `@tanstack/react-query`: Data fetching and caching
- `zod` + `drizzle-zod`: Runtime validation
- `wouter`: Client-side routing
- `ws`: WebSocket support (available for real-time features)