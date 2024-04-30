import SnapchatLogo from "@/public/Snapchat-logo.png";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-300 h-screen">
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="bg-white p-10 flex flex-col items-center text-center shadow-lg rounded-md">
          <Image
            src={SnapchatLogo}
            alt="snapchat logo"
            width={50}
            height={50}
          />
          {children}
        </div>
      </div>
    </div>
  );
}
