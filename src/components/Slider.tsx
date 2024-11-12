"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="w-full h-full flex flex-col xl:flex-row items-center justify-center gap-8 bg-cover bg-center fade-in"
        style={{
          backgroundImage: "url('/Desktop 1.png')",
        }}
      >
        {/* TEXT CONTAINER */}
        <div className="flex flex-col items-center justify-center text-center gap-8 p-6 w-full h-full bg-black bg-opacity-40">
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-white font-thin text-white"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            Fragrance. Timeless Elegance
          </h1>
          <Link href="/products">
            <button
              className="w-32 rounded-md border border-white text-white bg-transparent text-white py-3 px-4 text-xl"
              style={{
                fontFamily: '"Alumni Sans Pinstripe", serif',
              }}
            >
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
