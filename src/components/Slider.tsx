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
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video with dark filter */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
          src="/timeline3.mov"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Your Content */}
        <div className="relative flex flex-col items-center justify-center text-center gap-8 p-6 w-full h-full">
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-white font-thin"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            Fragrance. Timeless Elegance
          </h1>
          <Link href="/products">
            <button
              className="w-32 rounded-md border border-white text-white bg-transparent py-3 px-4 text-xl"
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
