import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import connectDatabase from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Github({
            clientId: process.env.NEXT_GITHUB_CLIENT_ID,
            clientSecret: process.env.NEXT_GITHUB_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXT_AUTH_SECRET,
    callbacks: {
        async signIn({account,profile}) {
            if(account?.provider === 'github') {
                await connectDatabase()
            }
        }
    }
});
