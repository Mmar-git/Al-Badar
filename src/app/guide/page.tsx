"use client";
import React, { useState } from "react";

const panelsData = [
  {
    title: "Classic Jasmine",
    description:
      "A luxurious, pure jasmine fragrance that exudes sensual warmth and elegance. ",
    imageUrl: "/guide6.jpg",
  },
  {
    title: "Celestial Mist",
    description:
      "A delicate, airy fragrance inspired by morning dew on petals, blending soft floral sweetness with mist-like freshness.",
    imageUrl: "/guide1.jpg",
  },
  {
    title: "Floral Harmony",
    description:
      "A refined blend of elegant floral notes, capturing the essence of a blooming garden",
    imageUrl: "/guide2.jpg",
  },
  {
    title: "Azure Lotus",
    description:
      "A serene, refreshing attar inspired by the rare blue lotus, blending aquatic coolness with delicate floral notes. ",
    imageUrl: "/guide3.jpg",
  },
  {
    title: "Serene Rose",
    description:
      "A luxurious blend of rose and sea salt, crafted from pure essential oils for a timeless, balanced fragrance.",
    imageUrl: "/guide4.jpg",
  },
  {
    title: "Citrus Breeze",
    description:
      "An energizing blend of lemon, lime, and orange with a touch of greenery, offering a crisp, refreshing scent.",
    imageUrl: "/guide5.jpg",
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="px-4 md:px-8 lg:px-6 xl:px-10 2xl:px-24 w-full flex flex-col items-center overflow-hidden"
      style={{ fontFamily: '"Alumni Sans Pinstripe", serif' }}
    >
      <div
        className="w-screen h-screen xl:flex-row bg-cover bg-center fade-in"
        style={{
          backgroundImage: "url('/GuideDesk.jpg')",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-8 p-6 w-full h-full bg-black bg-opacity-40">
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-white font-thin text-white"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            Fragrance Guide
          </h1>
        </div>
      </div>
      <div className="flex w-[90vw] overflow-hidden max-w-screen-lg mx-auto mt-10 space-x-2">
        {panelsData.map((panel, index) => (
          <div
            key={index}
            className={`relative h-[80vh] rounded-lg cursor-pointer flex-shrink-0 transition-all duration-700 ease-in-out ${
              activeIndex === index ? "flex-[5]" : "flex-[0.5]"
            }`}
            style={{
              backgroundImage: `url(${panel.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => setActiveIndex(index)}
          >
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 rounded-lg transition-opacity duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-4xl font-bold mb-2">{panel.title}</h3>
              <p className="text-2xl w-[12rem] lg:w-[16rem] text-center">
                {panel.description}
              </p>
            </div>
            <div
              className={`absolute inset-0 transition-transform transform ${
                activeIndex === index ? "scale-105" : "scale-100"
              } hover:scale-105 bg-black bg-opacity-0 rounded-lg`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
