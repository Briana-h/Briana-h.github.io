# Briana K Hernandez Damian - Creative Portfolio

## Overview

This is a modern, responsive personal portfolio website built as a full-stack application showcasing the creative work of Briana K Hernandez Damian. The application features a clean, professional design with smooth animations and interactive elements to display artwork, experience, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

Contact Information:
- Email: 1brianah1@gmail.com
- LinkedIn: https://www.linkedin.com/in/briana-h-9aa565351/

Skills to highlight:
- Adobe Illustrator
- Adobe Photoshop
- Canva
- Digital Art
- Brand Design
- Traditional Drawing

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix
- **Middleware**: Custom logging and error handling middleware
- **Development**: Hot reload with Vite integration in development mode

### Key Components

#### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling
- **Hero Section**: Profile image and introduction
- **About Section**: Personal description and background
- **Skills Section**: Technical skills including Adobe Creative Suite
- **Portfolio Gallery**: Responsive grid layout for artwork display
- **Experience Section**: Professional experience cards
- **Contact Section**: Contact information and social links
- **Footer**: Site navigation and additional information

#### UI System
- **Design System**: shadcn/ui components with consistent theming
- **Color Scheme**: Blue and cream color palette with CSS custom properties
- **Typography**: Poppins and Inter fonts from Google Fonts
- **Icons**: Font Awesome for iconography
- **Animations**: CSS transitions and custom animation classes

### Data Flow

#### Static Assets
- Images stored in `attached_assets/` directory
- Assets imported directly into components
- Optimized loading with proper alt text and responsive sizing

#### Component Structure
- Modular component architecture
- Reusable UI components in `components/ui/`
- Page-specific components in `components/`
- Single-page application with section-based navigation

### External Dependencies

#### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack Query
- **Database**: Drizzle ORM with PostgreSQL support
- **Development**: Vite, TypeScript, ESBuild

#### Database Schema
- Basic user schema defined in `shared/schema.ts`
- Drizzle ORM configuration for PostgreSQL
- Database migrations in `migrations/` directory
- Environment variable configuration for database URL

### Deployment Strategy

#### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public/`
2. **Backend Build**: ESBuild bundles server code to `dist/`
3. **Asset Optimization**: Vite handles asset optimization and bundling

#### Production Configuration
- **Server**: Express.js serves static files in production
- **Database**: PostgreSQL with Neon serverless database
- **Environment**: Node.js production environment
- **Scripts**: Separate development and production scripts

#### Development Setup
- **Hot Reload**: Vite middleware for development
- **TypeScript**: Full TypeScript support across frontend and backend
- **Path Aliases**: Configured for clean imports
- **Error Handling**: Runtime error overlay for development

### Technical Decisions

#### Frontend Framework Choice
- **React**: Chosen for component reusability and ecosystem
- **TypeScript**: Type safety and better development experience
- **Tailwind**: Utility-first CSS for rapid development and consistency

#### Backend Architecture
- **Express.js**: Simple, lightweight server framework
- **Memory Storage**: Currently using in-memory storage with interface for future database integration
- **Shared Schema**: Common types between frontend and backend

#### Database Strategy
- **Drizzle ORM**: Type-safe database operations with PostgreSQL
- **Schema-First**: Database schema defined in TypeScript
- **Migration Support**: Built-in migration system for schema changes

#### Styling Approach
- **Design System**: Consistent component library with shadcn/ui
- **CSS Variables**: Dynamic theming support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

This architecture provides a solid foundation for a creative portfolio website with room for future enhancements like content management, user authentication, and dynamic content loading.