# arnau.dev - Next.js Portfolio

Personal portfolio website built with Next.js 14, Sanity CMS, and TailwindCSS.

## Essential Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build for production (includes linting)
npm start           # Start production server

# Code Quality
npx eslint . --fix  # Fix linting issues
npx tsc --noEmit    # TypeScript type checking
```

## Project Structure

Key directories:
- `/app` - Next.js App Router pages and layouts
- `/lib` - Utilities and Sanity client configuration
- `/schemas` - Sanity schema definitions
- `/types` - TypeScript type definitions
- `/public` - Static assets

## Important Files

- `package.json:7-11` - Build script includes linting
- `sanity.config.ts` - Sanity Studio configuration
- `lib/sanity.client.ts` - Sanity client setup
- `lib/sanity.query.ts` - GROQ queries for content
- `.env.example` - Required environment variables

## Environment Setup

Required variables (see `.env.example`):
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `NEXT_PUBLIC_SANITY_ACCESS_TOKEN` (optional)

## Sanity Studio

Access at `/studio` route (localhost:3000/studio in development).

## Code Patterns

- Use existing component patterns from `/app` directory
- Follow TailwindCSS conventions for styling
- Use TypeScript strictly - no `any` types
- Sanity queries in `lib/sanity.query.ts`

## Testing & Quality

IMPORTANT: Always run `npm run build` before committing - it includes type checking and linting.

## Deployment

Deployed on Vercel. Build command is `npm run build` which includes linting validation.