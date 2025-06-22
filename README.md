# Light/Dark Mode Next.js Project

This project is a simple demonstration of a Next.js application with a fully functional light/dark mode toggle. It uses Tailwind CSS v3 for styling and supports theme switching at runtime, with the user's preference saved in localStorage. The project is bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- Light and dark mode toggle with smooth transitions
- Theme preference is saved and restored automatically
- Built with Next.js App Router and React Server Components
- Uses Tailwind CSS v3 for utility-first styling
- Responsive and modern UI

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

- `app/components/ThemeProvider.tsx`: Provides theme context and handles theme switching logic
- `app/components/ThemeToggle.tsx`: The button to toggle between light and dark mode
- `app/globals.css`: Global styles and Tailwind CSS imports
- `tailwind.config.ts`: Tailwind CSS configuration (dark mode enabled via class)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
