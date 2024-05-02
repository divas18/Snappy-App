import React from "react";
import { Button } from "../ui/button";
import { IoMdLogOut } from "react-icons/io";
import { logoutHandler } from "@/lib/serverActions";

const LogoutButton = () => {
  // inline server Action
  /*   
  const formHandler = async () => {
      "use server";

      try {
        await signOut();
      } catch (error) {
        console.error(error);
        throw error;
      }
      redirect("/login");
    };
    */
  return (
    <form action={logoutHandler}>
      <Button size="icon" className="rounded-full">
        <IoMdLogOut size={"18px"} />
      </Button>
    </form>
  );
};

export default LogoutButton;
