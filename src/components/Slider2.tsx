"use client";
import { useState } from "react";
import Image from "next/image";
const Slider2 = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
        {/* Fallback for unsupported browsers */}
        Your browser does not support the video tag.
      </video>

      {/* Content Layer */}
      <div className="relative hidden md:flex items-center w-full h-full z-10 ml-12">
        <Image
          src="/hero2img.png"
          alt="Image"
          width={1200}
          height={1200}
          className="h-[34rem] w-[28rem]"
        />
      </div>
      <div className="relative flex flex-col gap-12 md:hidden items-center justify-center py-4 w-full h-full z-10">
        <Image
          src="/hero2img.png"
          alt="Image"
          width={1200}
          height={1200}
          className="h-[32rem] w-[24rem]"
        />
        <div
          className="text-center"
          style={{
            fontFamily: '"Alumni Sans Pinstripe", serif',
          }}
        >
          <h3 className="text-[#FFFFF0] text-5xl">Essence of Tradition</h3>
          <h2 className="text-[#FFFFF0] text-6xl">Luxury in Every Drop</h2>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
