import NextAuth, { Session } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import github from "next-auth/providers/github";

const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [
        github({
            clientId: process.env.NEXT_GITHUB_CLIENT_ID,
            clientSecret: process.env.NEXT_GITHUB_CLIENT_SECRET
        })
    ],
    callbacks: {
        async authorized({ auth, request }: { auth: Session | null; request: NextRequest }) {
            const user = auth?.user;
            const chatPath = request.nextUrl.pathname.startsWith("/chat");
            const authPath = request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/signup");

            if (!user && chatPath) {
                return false;
            }

            if (user && authPath) {
                return NextResponse.redirect(new URL("/chat", request.nextUrl));
            }
            return true;
        }
    },
};
export default NextAuth(authConfig).auth;