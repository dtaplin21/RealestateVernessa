# Building & Houses Real Estate Platform

## Overview

This is a full-stack real estate development and services platform built with React, Express, and PostgreSQL. The application showcases luxury real estate development projects, company information, customer reviews, and includes a newsletter subscription system. It features a modern, responsive design using shadcn/ui components with Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, Projects, Company, Reviews, and Contact
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and dark mode support
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with structured error handling and request logging
- **Development**: Hot reload with Vite integration for development mode
- **Build**: esbuild for production bundling

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Shared schema definitions between client and server using Zod
- **Storage**: Dual storage implementation with in-memory storage for development and database storage for production
- **Migrations**: Drizzle Kit for database schema management

### Key Features
- **Newsletter System**: Email subscription with duplicate prevention
- **Project Showcase**: Dynamic project listings with status tracking
- **Customer Reviews**: Display system for client testimonials
- **Contact Forms**: Structured contact and inquiry handling
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Development Workflow
- **Type Safety**: Full TypeScript coverage from database to UI components
- **Code Quality**: Consistent code organization with path aliases
- **Hot Reload**: Development server with automatic rebuilding
- **Error Handling**: Comprehensive error boundaries and user feedback

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Neon database driver for PostgreSQL connections
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management and validation

### UI Framework
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Frontend build tool and development server
- **typescript**: Static type checking
- **zod**: Runtime type validation and schema definition
- **drizzle-kit**: Database schema management and migrations

### Production Services
- **Neon Database**: Managed PostgreSQL hosting
- **Environment Variables**: DATABASE_URL for database connection configuration