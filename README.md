![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-28.3.2-2496ED?style=for-the-badge&logo=docker&logoColor=white)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Running in a Docker Development Environment

As the project is configured for a Docker development environment, follow these instructions to ensure a consistent and isolated environment.

**Prerequisites:** Ensure that [Docker Desktop](https://www.docker.com/products/docker-desktop/) is installed and running on your machine.

1.  [cite\_start]Open the terminal at the root of the project (where the `docker-compose.yml` is located [cite: 2]).
2.  [cite\_start]For the first run, execute the command to build the Docker image [cite: 1] and start the container:

<!-- end list -->

```bash
docker compose up --build
```

3.  For subsequent runs, use the command below to start the container quickly, leveraging Docker's cache:

<!-- end list -->

```bash
docker compose up
```

[cite\_start]Your application will be available at [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)[cite: 2].

**Note:** This configuration uses volumes to sync files, which enables hot-reloading. [cite\_start]While performance is excellent on environments like the Mac M1, performance may vary on other operating systems like Windows[cite: 2].

## Learn More

To learn more about Next.js, take a look at the following resources:

  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome\!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
```