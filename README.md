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


## Project Development Steps

1. npx create-next-app@latest

2. setup for shadcn ui, by simply following the Docs. shadcn ui basically help to develop component quickly, it provides reusable components that can be customizable too. (https://ui.shadcn.com/docs/components)

3. We use react-icons - https://react-icons.github.io/react-icons/ for various icons.

4. Here, mongoose for Database. Setup by using New Project & then general setup.

5. For authentication we use auth.js (https://authjs.dev/), and follows the guided documentation. Here auth.ts is responsible for whole lot of things for authentications. auth.ts file has callback which contains logic for signIn, signUp.

6. for setup and authentication, we use github as provider by grabbing the clientId & clientSecret.

7. To store the data of user after signUp, chats and messages, we need to create Models of user, chat and message.


We use Middleware, when user successfully authenticated using any provider (github) then redirects user to particular webpage.

Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.


## use ui.shadcn.com components 

the easiest way to use the component that can be customized too, https://ui.shadcn.com/docs/components

## authjs.dev

for authentication we use https://authjs.dev/ 