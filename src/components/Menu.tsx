"use client";

import Image from "next/image";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Image
        src="/menu.png"
        alt="Menu"
        width={1200}
        height={1200}
        className="cursor-pointer w-8 h-4"
        onClick={() => setOpen(true)} // Open the menu
      />
      <div
        className={`fixed top-0 left-0 h-full w-[28rem] bg-black text-white p-5 gap-8 text-2xl z-10 transition-all duration-500 ease-in-out transform ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        style={{
          fontFamily: '"Alumni Sans Pinstripe", serif',
          pointerEvents: open ? "auto" : "none", // Prevent clicks when closed
        }}
      >
        <Image
          src="/cross.png"
          alt="Close"
          width={1200}
          height={1200}
          className="h-7 w-7 cursor-pointer mt-3"
          onClick={() => setOpen(false)} // Close the menu
        />
        <div className="flex-1 flex-col px-2 py-5">
          <a
            href="/"
            className="w-full flex justify-between items-center h-[5rem] bg-transparent cursor-pointer"
            style={{ borderBottom: "0.5px solid #FFFFF0" }}
          >
            Home{" "}
            <Image
              src="/arrow2.png"
              width={1200}
              height={1200}
              alt="arrow"
              className="h-5 w-5"
            />
          </a>

          <a
            href="/about"
            className="w-full flex justify-between items-center h-[5rem] bg-transparent cursor-pointer"
            style={{ borderBottom: "0.5px solid #FFFFF0" }}
          >
            About Us{" "}
            <Image
              src="/arrow2.png"
              width={1200}
              height={1200}
              alt="arrow"
              className="h-5 w-5"
            />
          </a>
          <a
            href="/products"
            className="w-full flex justify-between items-center h-[5rem] bg-transparent cursor-pointer"
            style={{ borderBottom: "0.5px solid #FFFFF0" }}
          >
            Products{" "}
            <Image
              src="/arrow2.png"
              width={1200}
              height={1200}
              alt="arrow"
              className="h-5 w-5"
            />
          </a>

          <a
            href="/contact"
            className="w-full flex justify-between items-center h-[5rem] bg-transparent cursor-pointer"
            style={{ borderBottom: "0.5px solid #FFFFF0" }}
          >
            Contact Us{" "}
            <Image
              src="/arrow2.png"
              width={1200}
              height={1200}
              alt="arrow"
              className="h-5 w-5"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
