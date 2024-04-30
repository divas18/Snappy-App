import Image from "next/image";
import React from "react";
import MyAi from "@/public/myai-asset.png";
import { Button } from "./ui/button";
import { FaLaptop } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto">
      <div>
        <h1 className="text-7xl font-medium">
          Snapchat is <br />
          now on the <br />
          web!
        </h1>
        <h1 className="my-5 text-xl">
          Chat, Snap, and video call your friends from
          <br /> wherever you are.
        </h1>
        <Button className="gap-2 rounded-full">
            <FaLaptop />
            Login to Chat</Button>
      </div>
      <div>
        <Image src={MyAi} alt="my ai image" width={650} height={650} />
      </div>
    </div>
  );
};

export default Header;