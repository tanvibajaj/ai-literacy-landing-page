# Visa Product Design System Application

## Overview

This is a full-stack web application built with React frontend and Express backend, designed specifically to showcase and implement the Visa Product Design System (VPDS). The application serves as a reference implementation demonstrating VPDS components, patterns, and design tokens in a real-world context.

The project follows a monorepo structure with shared code between client and server, using TypeScript throughout for type safety.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state management
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - VPDS (Visa Product Design System) via `@visa/nova-react`, `@visa/nova-styles`, and `@visa/nova-icons-react`
  - Radix UI primitives with shadcn/ui components as fallback
- **Build Tool**: Vite with HMR support

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **HTTP Server**: Node.js native HTTP server wrapping Express
- **API Pattern**: RESTful API with `/api` prefix convention
- **Development**: TSX for TypeScript execution without compilation

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Managed via `drizzle-kit` with output to `./migrations`
- **Runtime Storage**: Memory-based storage class (`MemStorage`) available for development, with interface designed for easy database swap

### Project Structure
```
├── client/           # React frontend application
│   └── src/
│       ├── components/ui/  # shadcn/ui components (Radix-based)
│       ├── pages/          # Route components
│       ├── hooks/          # Custom React hooks
│       └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code (schemas, types)
└── attached_assets/  # Static assets and content
```

### Design System Integration
The application is mandated to use VPDS exclusively (see `design_guidelines.md`):
- Pre-built, accessibility-approved components from `@visa/nova-react`
- Design tokens for theming via `@visa/nova-styles`
- VPDS icons via `@visa/nova-icons-react`
- Styles imported in `client/src/vpds-styles.css` before Tailwind directives

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets`

## External Dependencies

### Database
- **PostgreSQL**: Required for production (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Database toolkit for TypeScript with schema-first approach

### UI Component Libraries
- **@visa/nova-react**: VPDS React component library
- **@visa/nova-styles**: VPDS styling and theming
- **@visa/nova-icons-react**: VPDS icon set
- **Radix UI**: Accessible component primitives (used by shadcn/ui fallback components)
- **shadcn/ui**: Component collection built on Radix (new-york style variant)

### Key Runtime Dependencies
- **@tanstack/react-query**: Server state synchronization
- **react-hook-form** + **@hookform/resolvers**: Form handling with Zod validation
- **wouter**: Lightweight routing
- **zod**: Schema validation (shared between client/server)
- **drizzle-zod**: Zod schema generation from Drizzle schemas

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **TSX**: TypeScript execution for Node.js
- **esbuild**: Production server bundling
- **Replit plugins**: Dev banner, cartographer, and runtime error overlay