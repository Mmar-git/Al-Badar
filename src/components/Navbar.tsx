"use client";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import Menumob from "./Menumob";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
// import NavIcons from "./NavIcons";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });
const NavIconsmob = dynamic(() => import("./NavIconsmob"), { ssr: false });
const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname
  const absolutePaths = [
    "/",
    "/about",
    "/cancellation",
    "/consultation",
    "FAQ",
    "/contact",
    "/guide",
    "/list",
    "/privacy",
    "/products",
    "/shipping",
    "/terms",
    "/tips",
  ];
  const isAbsolute = absolutePaths.includes(pathname || "");
  return (
    <div
      className={`h-20 w-full px-2 md:px-2 lg:px-4 xl:px-8 2xl:px-8 ${
        isAbsolute ? "absolute" : "relative"
      } z-10`}
    >
      {/* MOBILE */}
      <div className="h-full flex items-center justify-around md:hidden">
        <div className="flex items-center">
          <Menumob />
        </div>
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={1200}
              height={1200}
              className="mt-2 ml-8 w-40 h-30"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <NavIconsmob />
        </div>
      </div>
      {/* BIGGER SCREENS */}
      <div className="w-full hidden md:flex justify-around gap-8 h-full">
        {/* LEFT */}
        <div className="xl:w-1/2 flex items-center">
          <Menu />
        </div>
        {/* CENTER */}
        <div className="xl:w-1/2 flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={1200}
              height={1200}
              className="mt-5 mr-8 w-[11rem] h-[4rem]"
            />
          </Link>
        </div>
        {/* RIGHT */}
        <div className="flex items-center justify-between gap-8">
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
