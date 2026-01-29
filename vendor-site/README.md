Padisquare – Multi-Vendor Mini Sites (Frontend Task)

A simplified multi-vendor storefront built with Next.js App Router.
Vendors have their own mini-sites where users can browse products with search, sorting, pagination, and dark mode support.

🔗 Live Demo: (add your Vercel link here)
📦 Repository: (this repo)

✨ Features
Landing Page

Padisquare hero section

List of available vendors

Vendor cards with logo, name, and description

Clickable cards route users to vendor storefronts

Vendor Storefront

Dynamic routing using /site/[vendorSlug]

Vendor name, logo, and hero section

Product grid

Product search

Sorting:

Price (low → high)

Price (high → low)

Most recent

Pagination

Empty state handling (vendor with no products)

Loading spinner with simulated API delay

UI & UX

Fully responsive design

Tailwind CSS styling

Dark mode support

Global navigation with return to home

Graceful error handling

🛠️ Tech Stack

Next.js 14+ (App Router)

React Server Components

Tailwind CSS

TypeScript

Mock data (JSON)

Vercel (deployment)

🧠 Architectural Decisions
App Router

Used app/ directory for routing

layout.tsx for shared UI (header, theme toggle)

loading.tsx for route-level loading states

not-found.tsx only for invalid vendor routes

Multi-Tenant Simulation

Vendor pages are generated using dynamic routes:

/site/[vendorSlug]


Vendor and product data are fetched from local JSON files to simulate an API.

Empty State vs Error State

Invalid vendor → triggers notFound()

Valid vendor with no products → displays a friendly empty state message with a “Go back” button

This separation ensures better UX and clearer business logic.
