'use server'

import { signOut } from "@/auth";
import { redirect } from "next/navigation";

// module level server action
export const logoutHandler = async () => {
    try {
        await signOut();
    } catch (error) {
        console.error(error);
        throw error;
    }
    redirect('/login');
}