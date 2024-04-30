import React from "react";
import Login from "@/components/Login";
import { signIn } from "@/auth";

const LoginPage = () => {
  // inline function level
  const signinHandler = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <form action={signinHandler}>
      <Login />
    </form>
  );
};

export default LoginPage;
