This is the HackIA Madrid landing page, a [Next.js](https://nextjs.org) app bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

- `src/app/page.tsx` — assembles the landing page sections.
- `src/components/` — `Header`, `Hero`, `QueEs` ("what is HackIA"), `RegistrationSection` / `RegistrationForm` (client-side validated signup form), `Footer`.
- `src/app/globals.css` — design tokens (colors, gradients, shadows) and global styles.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load Montserrat (display), Inter (body) and JetBrains Mono.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
