# 🌟 Mini Dashboard — Next.js 14 + Zod + RSC + Zustand + Suspense

A modern, full-stack dashboard built with **Next.js 14**, demonstrating:

- **React Server Components (RSC)**
- **Zod for end-to-end validation**
- **Zustand for global UI state**
- **React Suspense for async boundaries**
- **Premium UI design** (glassmorphism, animations, particles, spotlight)
- **Type-safe forms** with React Hook Form + Zod
- **Server Actions / API Routes** for secure server-side mutations
- Clean separation of **Server Components** and **Client Components**

This project is designed as an interview-ready showcase of modern React architecture.

---

## 🚀 Features

### 🟦 Server-First Architecture

- All data fetching uses **React Server Components**
- Zero unnecessary client-side JS
- Smaller bundles, faster initial loads

### 🟧 Zod Validation

- Shared Zod schema for both client and server
- Automatic TypeScript inference
- No duplicated types or validation logic

### 🟩 Zustand Global State

- UI preference management:
  - darkMode
  - showEmail
  - layout (grid/list)

### 🟪 React Suspense

- Async server components wrapped in `<Suspense />`
- Automatic fallback loading states

### 🟫 Premium UI / UX

- Animated spotlight background
- Floating depth orbs
- Particle field
- Framer Motion animations
- Tailwind CSS styling
- Glassmorphism panels

---

## 🧱 Tech Stack

| Tech                        | Purpose                      |
| --------------------------- | ---------------------------- |
| **Next.js 14 (App Router)** | Routing, RSC, server actions |
| **TypeScript**              | Strict typing                |
| **Zod**                     | Schema validation            |
| **Zustand**                 | Lightweight global state     |
| **Tailwind CSS**            | Styling                      |
| **Framer Motion**           | Animations                   |
| **React Hook Form**         | Client form handling         |

---

## 📁 Project Structure

app/
page.tsx # Server Component → Landing page
profile/
new/
page.tsx # Server wrapper → Profile form
dashboard/
page.tsx # Server Component → RSC + Suspense
UserSummary.tsx # RSC (async data)
PreferencesPanel.tsx # Client Component (Zustand)

components/
HeroLanding.tsx # Client Component (animations)
NewProfileForm.tsx # Client Component (Zod + RHF)

lib/
validation.ts # Zod schema + inferred types
store.ts # Zustand global UI store
db.ts # Temporary persistence helper

---

## 🛠️ Getting Started

Install dependencies:

```bash
pnpm install
```

pnpm dev

http://localhost:3000
