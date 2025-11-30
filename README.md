🌟 Mini Dashboard — Next.js 14 + Zod + RSC + Zustand + Suspense

A modern, full-stack, server-first dashboard built with Next.js 14, demonstrating:

React Server Components (RSC)

Zod for end-to-end validation

Zustand for lightweight global state

React Suspense for async boundaries

Premium UI design (glassmorphism, animations, particles, spotlight)

Client/Server component separation using best practices

Type-safe forms with react-hook-form + Zod

Server Actions / API Routes for secure mutations

This project is designed as an interview-ready showcase of modern React architecture.

🚀 Features
🟦 Server-First Architecture (React Server Components)

All data fetching happens in server components

Faster initial load, smaller client bundles, zero unnecessary hydration

🟧 Zod Validation (Shared Schemas)

Single source of truth for form validation

Zod validates on both client & server

No duplicated types or validation logic

🟩 Zustand Global State

UI preferences stored globally:

darkMode

showEmail

layout (grid/list)

Minimal re-renders, tiny footprint

🟪 React Suspense

Async server components wrapped in <Suspense />

Clean fallback loading states

🟫 Premium UI + Animations

Framer Motion animations

3D tilt effects

Depth orbs

Spotlight gradient

Particle field

Glassmorphism cards

Tailwind CSS styling

🧱 Tech Stack
Tech Purpose
Next.js 14 (App Router) RSC, routing, server actions
TypeScript Strong typing
Zod Schema validation
Zustand Global UI state
Tailwind CSS Styling
Framer Motion Animations
React Hook Form Client-side form control
Server Actions / API Routes Mutations
📁 Project Structure
app/
page.tsx # Server Component → Landing page wrapper
profile/
new/
page.tsx # Server wrapper → loads the Profile form
dashboard/
page.tsx # Server Component → RSC + Suspense
UserSummary.tsx # RSC for server-side data loading
PreferencesPanel.tsx # Client Component (Zustand)

components/
HeroLanding.tsx # Client Component (animations, spotlight, particles)
NewProfileForm.tsx # Client Component (Zod + RHF)

lib/
validation.ts # Zod schemas + types
store.ts # Zustand store
db.ts # Temporary persistence (cookie or memory)

🧩 Architecture Overview
┌──────────────────────────────┐
│ Landing Page │
│ Client-only animations │
└───────────────┬──────────────┘
│
▼
┌────────────────────────┐
│ Profile Form (Client) │
│ Zod + RHF + Server Action│
└──────────────┬─────────┘
│
▼
┌────────────────────────┐
│ Dashboard (RSC) │
│ Suspense-wrapped async │
└──────────────┬─────────┘
│
▼
┌────────────────────┴────────────────────┐
│ UserSummary (RSC) │
│ Fetches server-side profile data │
└────────────────────┬────────────────────┘
│
▼
PreferencesPanel (Client, Zustand)

🛠️ Getting Started

Install dependencies:

pnpm install

Run the dev server:

pnpm dev

Visit the app:

http://localhost:3000

🧪 Profile Creation Flow

User loads the /profile/new form

Zod validates inputs on the client

The form POSTs to a server action (or API route)

Server validates again with the same Zod schema

Profile persists via cookie or in-memory

User is redirected to /dashboard

Dashboard loads profile via a server component

📊 Dashboard

Server-rendered user profile summary

Suspense-wrapped loading boundary

Client-side preferences panel using Zustand

Fully styled, animated UI

🔐 Server Actions (or API Routes)

Profile creation is handled securely on the server using:

Full Zod validation

Type safety

No client-side mutation logic

Clean redirects

🎨 UI & Design

Tailwind utility classes

Motion layout animations

3D tilt hover cards

Glass panels with backdrop blur

Gradients, shadows, depth orbs

Cursor-following spotlight

Ambient particle effects

This gives the entire project a premium, modern, production-level feel.

🧰 Potential Enhancements

Swap in Prisma + SQLite for persistent storage

Add “Edit Profile” flow

Add dark mode powered by Zustand

Add more RSC examples

Add skeleton loaders

Add error boundaries

Add full Storybook setup

Deploy to Vercel

📜 License

MIT License — free to use, extend, or showcase.
