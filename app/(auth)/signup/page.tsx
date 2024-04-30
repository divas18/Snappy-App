import React from "react";
import Signup from "@/components/Signup";
import { signIn } from "@/auth";

const SignupPage = () => {
  // inline function level
  const signupHandler = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <form action={signupHandler}>
      <Signup />
    </form>
  );
};

export default SignupPage;
