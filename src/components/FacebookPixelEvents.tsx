"use client";

import { useEffect } from "react";
import { event } from "@/lib/fbpixel";

type Props = {
  product: {
    _id: string;
    name: string;
    price?: {
      discountedPrice?: number;
      price?: number;
    };
  };
};

export default function FacebookPixelEvents({ product }: Props) {
  useEffect(() => {
    event.viewContent(
      product._id,
      product.name,
      product.price?.discountedPrice || product.price?.price || 0
    );
  }, [product]);

  return null;
}
