"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const start = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
    resetZoom();
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
    resetZoom();
  };

  const resetZoom = () => {
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
    setDragging(false);
    setIsMouseDown(false);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed || e.button !== 0) return; // Only respond to left-click
    setIsMouseDown(true);
    start.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isZoomed || !isMouseDown || !containerRef.current) return;

    setDragging(true);
    const container = containerRef.current;
    const deltaX = e.clientX - start.current.x;
    const deltaY = e.clientY - start.current.y;

    const bounds = {
      x: container.offsetWidth * 0.5,
      y: container.offsetHeight * 0.5,
    };

    // Clamp values to keep image inside bounds
    const clampedX = Math.max(Math.min(deltaX, bounds.x), -bounds.x);
    const clampedY = Math.max(Math.min(deltaY, bounds.y), -bounds.y);

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseUp = () => {
    setDragging(false);
    setIsMouseDown(false);
  };

  // Reset position when zoom toggled off
  useEffect(() => {
    if (!isZoomed) {
      setPosition({ x: 0, y: 0 });
    }
  }, [isZoomed]);

  return (
    <div className="relative group select-none" {...handlers}>
      {/* BIG IMAGE CONTAINER */}
      <div
        className="h-[450px] w-full relative overflow-hidden"
        onClick={() => setIsZoomed(!isZoomed)}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          cursor: isZoomed
            ? dragging || isMouseDown
              ? "grabbing"
              : "grab"
            : "pointer",
        }}
      >
        <Image
          src={`${items[index].image?.url}?q=100&w=2400&h=2400`}
          alt="product"
          fill
          draggable={false}
          className="object-cover rounded-md transition-transform duration-300"
          style={{
            transform: `scale(${isZoomed ? 1.5 : 1}) translate(${
              position.x
            }px, ${position.y}px)`,
            transition:
              dragging || isMouseDown ? "none" : "transform 0.3s ease",
          }}
        />

        {/* PREV BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 group-hover:flex"
        >
          &#8592;
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 group-hover:flex"
        >
          &#8594;
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 cursor-pointer"
            key={item._id}
            onClick={() => {
              setIndex(i);
              resetZoom();
            }}
          >
            <Image
              src={`${item.image?.url}?q=100&w=600&h=600`}
              alt="thumb"
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
