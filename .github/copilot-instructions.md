# Copilot Instructions for next-app

## Project Overview
E-commerce Next.js 16 app router application with TypeScript. External API: `https://ecommerce.routemisr.com/api/v1`.
Build: `npm run build` | Dev: `npm run dev` | Lint: `npm run lint`

## Architecture & Patterns

### File Organization
- **`app/_Components/`** – React components grouped by feature (Navbar, ProductCard, etc.)
- **`app/_Components/_actions/`** – Server Actions (`"use server"`) for mutations & API calls
- **`app/_Services/`** – API service layer (`AllproductsServ.tsx`, `CategSlider.ts`, `GetAllCategServices.ts`)
- **`app/_Schema/`** – Zod validation schemas (LogInSchema.ts, Schema.ts)
- **`app/_types/`** – TypeScript interfaces (product.type.ts)
- **`app/Provider/`** – Context providers: `MysessionProvider` (NextAuth), `CartContextProvider` (state mgmt)
- **`lib/NextAuth.config.ts`** – Authentication config with Credentials provider + API sign-in

### Key Patterns

**NextAuth Integration:**
- Credentials provider authenticates against external API endpoint
- Token stored in JWT callback; accessible in `session` callback
- Sign-in/out redirect to `/login`
- See `lib/NextAuth.config.ts` for API call structure

**Server vs Client Components:**
- Use `"use server"` at top of action files in `_actions/`
- Wrap app with `MysessionProvider` (Session wrapper) in `layout.tsx`
- Context providers (`MysessionProvider`, `CartContextProvider`) use client-side state

**Styling:**
- Tailwind + shadcn/ui (`radix-ui`, `lucide-react`)
- Components from `components/ui/` (input, field, label, separator, sonner)
- Combine clsx/tailwind-merge for dynamic classes

**Forms & Validation:**
- React Hook Form + Zod schemas
- Example: `LogInSchema.ts` for login validation
- Pass resolvers via `@hookform/resolvers`

## External Dependencies & APIs
- **Auth API:** POST `https://ecommerce.routemisr.com/api/v1/auth/signin`
- **Product API:** Fetched via service layer (check `AllproductsServ.tsx`)
- **Remote Images:** Next.js Image allowed from `ecommerce.routemisr.com/**` (see next.config.ts)

## Common Tasks

**Adding a new page:**
1. Create `app/[feature]/page.tsx`
2. Use Server Components by default; mark interactive parts `"use client"`
3. Fetch via service in `app/_Services/` or use Server Actions

**Adding authentication:**
- Extend `lib/NextAuth.config.ts` providers or callbacks
- Update `app/api/auth/[...nextauth]/route.ts` if needed

**Form with API call:**
1. Define Zod schema in `app/_Schema/`
2. Create Server Action in `app/_Components/_actions/`
3. Use React Hook Form + resolver in client component
4. Toast feedback via `sonner` (Toaster in layout)

## Development Commands
- `npm run dev` – Start dev server (http://localhost:3000)
- `npm run build` – Build for production
- `npm run start` – Run production build
- `npm run lint` – Run ESLint

---
*Last updated: 2026-02-15*
