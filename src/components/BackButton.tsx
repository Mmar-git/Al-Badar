"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BackButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const handleBackButtonClick = () => {
    setIsVisible(false);
    router.back();
  };

  if (!isVisible) return null;

  return (
    <Image
      src="/Backbutton.jpg"
      alt=""
      width={1200}
      height={1200}
      className="cursor-pointer"
      onClick={handleBackButtonClick}
    />
  );
};

export default BackButton;
