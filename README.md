# Emmanuel's Book Store

This is not real ecommerce! This is an ecommerce for portfolio purposes only. Try [live](https://emmanuels-book-store.vercel.app/) version.

## Get Started
```bash
git clone git@github.com:antoniozanotti/book-store.git
cd book-store
cp .env.example .env
# change .env file https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql
npm i
npx prisma migrate deploy
npx prisma db seed
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Organization Standards

### Folder Structure
- data: contains data seed.
- prisma: contains migrations, schema and seed script file included in package.json.
- src: constains application files.
  - app: default Next.js folder for navigation using App Router, layout, loading... Contains providers.tsx for global providers (TanstackProvider, NextUIProvider...)
  - assets: contains images and global css.
  - const: contains global consts (MIN_PRICE, MAX_PRICE...).
  - domain: contains the domain of application.
    - subdomain: every folder in /src/domain is a scope of domain such product, author, category...
      - components: they are visual react components, with css, texts, images and interaction. It can contains subfolder for organization. Must use file name suffix.
      - containers: they will always call one or more visual components, so you can understand them as a wrapper but without visual characteristics. They are responsible for prepare visual components wrapping them in a context and providing data from database when necessary. They also are responsible for call not found page if necessary. Must use file name suffix.
      - contexts: a context file will always contains one context (from react createContext()) and one hook to use the context. It can contains a reducer, to handle actions. It's a good place to store data in localStorage if necessary. Must use file name suffix.
      - helpers: pure js functions or custom hooks related to subdomain scope.
      - queries: queries for Tanstack Query. Must use file name suffix.
      - enums: enums related to subdomain scope, commonly used to reducer actions. Must use file name suffix.
      - types: custom types related to subdomain scope. Must use file name suffix.
  - helpers: pure js functions or custom hooks related to global scope.
  - lib: global third-party library files.
  - types: custom types related to global scope. Must use file name suffix.
- tests: constains Playwright automated tests. Must use file name suffix.

### Root Files
- .env.example: example file for .env
- playwright.config.ts: Playwright config file. I configured the projects based on Tailwind CSS breakpoints (default, sm, md, lg, xl, 2xl) and real devices.
- README.md: documentation file.
- tailwind.config.ts: Tailwind CSS config file. Configuration for NextUI, colours and fonts are here. Colours are chosen with https://colors.eva.design/.
- tsconfig.json: TS config file with some custom paths.

### File Name Convention
- Lower case
- Underscore between words
- Suffixes: -component, -container, -context, -type. -enum, -query, -spec

## Principles
- Full responsive
- Full TypeScript
- Automated tests
- Built for CI/CD
- Clean code
- Client and server rendering
- Cache
- UI/UX
- Performance
- Accessibility

## Pages
- Home:
  - New Release Books: Product Listing ordered by publication year.
  - Explore Our Top Categories: Category Listing.
  - Featured Authors: Authors Listing.
- Product
  - Intro
  - Synopses
  - Product Details: Year, Pages, Publisher, ISBN, Category
  - Other Books from same category
  - Other Books by same author
  - Price
  - Add to Cart
- Cart
  - Cart Items
  - Empty State
  - Controls to change quantity
  - Remove from cart
  - Subtotal by item
  - Subtotal
- Search
  - Search Books by Title, Author or ISBN
  - Filter by Category
  - Filter by Price Range
  - Filter by Publication Year Range
  - Order by Title or Price
  - Clear Filters
  - Infinite Pagination
- Author
  - Intro
  - Books
- Category
  - Intro
  - Product Listing
- CMS
  - Pages for About Us, Contact Us etc.

## What are tecnologies that I used?
- React 18
- Next.js 14 using App Router
- PostgreSQL
- Prisma for database migrations, seed data and database connection
  - Real Seed Data: cms pages, categories, books, authors.
  - Fake Seed Data: publisher, descriptions, prices, isbns, publication years, pages.
- Faker.js for fake seed data
- Tailwind CSS
- NextUI for UI component library
- Framer Motion for animation library
- Lucide for icons
- react-number-format for number formatting
- Tanstack Query for cache and paginate requests
- Axios for fetch requests
- Playwright for automated tests with different screen sizes.
- ESLint
- Vercel

## What isn't included on this project?
- Checkout process
- Account Registration

