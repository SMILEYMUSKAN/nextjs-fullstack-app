This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## NextJs Installation

### Creating next app
`npx create-next-app@latest`

## Initializing Prisma CLient
`npx prisma init`

## Migration to create database tables with *Prisma Migrate*
`npx prisma migrate dev`

## Browse data 
  `npx prisma studio`

## Seeding in prisma (insert data into db)
`npx prisma db seed`

## Reference Link (seeding prisma)
https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

# Steps (To seeding)

 1. Include below code in **package.json** file.

 ```json
 "prisma": {
  "seed": "ts-node prisma/seed.ts"
},
``````
2. Create **seed.ts** file in **/prisma** folder to define our seeding data.

3. Create some new courses in your **seed.ts** file: Ex:

```ts
const prisma  = require("@prisma/client");

const { PrismaClient } = prisma || {};

const prismaClientDb = new PrismaClient();

(async () => {
    const newCourse = await prismaClientDb.course.create({
        data : {
            name : "Python",
            description : "Python",
        }
    })
})()
```

4. Add **typescript, ts-node and @types/node** development dependencies:

`npm install -D typescript ts-node @types/node`

5. To seed the database, run the db seed CLI command:

`npx prisma db seed`