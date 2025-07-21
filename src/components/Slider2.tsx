"use client";
import { useState } from "react";
import Image from "next/image";
const Slider2 = () => {
  return (
    <>
      <div className="hidden md:flex w-full flex overflow-hidden relative">
        <div
          className="w-2/3 flex flex-col justify-center px-20 gap-4"
          style={{
            fontFamily: '"Alumni Sans Pinstripe", serif',
          }}
        >
          <h1 className="text-5xl text-[#B68D3B]">Welcome to Al-Badar</h1>
          <p className="text-lg">
            Rooted in Heritage. Designed for the Present. Inspired by the
            Divine. Al-Badar is more than just a brand — it is a legacy in the
            making. Born from a deep respect for tradition and a passion for
            excellence, our mission is to create products that embody timeless
            elegance while resonating with the modern soul. Whether you are
            seeking refined luxury, spiritual connection, or authentic
            craftsmanship, Al-Badar offers a collection that speaks to your
            values, identity, and aspirations. At Al-Badar, every detail
            matters. From the purity of our ingredients and materials to the
            stories woven into every creation, we honour the past while
            embracing the future. Our commitment to quality is uncompromising,
            and our designs are driven by purpose — to inspire, to elevate, and
            to leave a meaningful impression. What We Stand For: Tradition &
            Spirituality: Our roots lie in timeless principles. We draw
            inspiration from Islamic art, ethics, and culture, weaving them into
            products that uplift both body and soul. Craftsmanship & Quality:
            Whether it’s a bottle of handcrafted attar, a carefully sewn
            garment, or a curated lifestyle item — expect excellence in every
            piece. Purposeful Living: Al-Badar stands for more than luxury. We
            aim to offer experiences that reflect who you are — grounded,
            graceful, and guided by deeper values. Discover the Al-Badar
            Experience: Browse our collections and explore products that carry
            not just beauty, but meaning. Every fragrance, fabric, and finish is
            thoughtfully created to resonate with your essence — subtle yet
            striking, powerful yet pure. Welcome to a space where elegance meets
            intention. Welcome to Al-Badar — Light from the Divine.
          </p>
        </div>
        <div className="w-1/3 p-12">
          <div className="rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl"
            >
              <source src="/Timeline new bottle.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="flex md:hidden w-full flex flex-col overflow-hidden relative">
        <div className="w-full p-8">
          <div className="rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl"
            >
              <source src="/Timeline new bottle.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div
          className="w-full h-full flex flex-col justify-center px-6 gap-4"
          style={{
            fontFamily: '"Alumni Sans Pinstripe", serif',
          }}
        >
          <h1 className="text-4xl text-[#B68D3B]">Welcome to Al-Badar</h1>
          <p>
            Rooted in Heritage. Designed for the Present. Inspired by the
            Divine. Al-Badar is more than just a brand — it is a legacy in the
            making. Born from a deep respect for tradition and a passion for
            excellence, our mission is to create products that embody timeless
            elegance while resonating with the modern soul. Whether you are
            seeking refined luxury, spiritual connection, or authentic
            craftsmanship, Al-Badar offers a collection that speaks to your
            values, identity, and aspirations. At Al-Badar, every detail
            matters. From the purity of our ingredients and materials to the
            stories woven into every creation, we honour the past while
            embracing the future. Our commitment to quality is uncompromising,
            and our designs are driven by purpose — to inspire, to elevate, and
            to leave a meaningful impression. What We Stand For: Tradition &
            Spirituality: Our roots lie in timeless principles. We draw
            inspiration from Islamic art, ethics, and culture, weaving them into
            products that uplift both body and soul. Craftsmanship & Quality:
            Whether it&apos;s a bottle of handcrafted attar, a carefully sewn
            garment, or a curated lifestyle item — expect excellence in every
            piece. Purposeful Living: Al-Badar stands for more than luxury. We
            aim to offer experiences that reflect who you are — grounded,
            graceful, and guided by deeper values. Discover the Al-Badar
            Experience: Browse our collections and explore products that carry
            not just beauty, but meaning. Every fragrance, fabric, and finish is
            thoughtfully created to resonate with your essence — subtle yet
            striking, powerful yet pure. Welcome to a space where elegance meets
            intention. Welcome to Al-Badar — Light from the Divine.
          </p>
        </div>
      </div>
    </>
  );
};

export default Slider2;
