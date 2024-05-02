import React from "react";
import SnapchatLogo from "@/public/Snapchat-logo.png";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TbGridDots } from "react-icons/tb";
import { IoLogInOutline } from "react-icons/io5";
import LogoutButton from "./shared/LogoutButton";
import { auth } from "@/auth";
import Link from "next/link";

const Navbar = async () => {
  const authUser = await auth();
  return (
    <div className="flex items-center justify-between w-screen px-10 py-4">
      <div className="flex items-center gap-2">
        <Image src={SnapchatLogo} alt="snapchat logo" width={50} height={50} />
        <Input type="text" placeholder="search" className="rounded-full" />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost">Stories</Button>
        <Button variant="ghost">Spotlight</Button>
        <Button variant="ghost">Chat</Button>
        <Button variant="ghost">Lenses</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full bg-white text-black"
        >
          <TbGridDots />
        </Button>
        <Button>Snapchat Ads</Button>
        <Button>Download</Button>
        {authUser ? (
          <LogoutButton />
        ) : (
          <Link href={"/login"}>
            <Button className="rounded-full gap-2">
              <IoLogInOutline />
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
