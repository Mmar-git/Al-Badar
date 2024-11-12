"use client";
import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  // // TEMPORARY
  // const stock = 4;
  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();

  const { addItem, isLoading } = useCartStore();

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium text-xl">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="py-2 px-4 rounded-3xl ring-1 text-xl  ring-yellow flex items-center justify-between w-32 bg-black">
            <button
              className="cursor-pointer text-2xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-2xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-md">Product is out of stock</div>
          ) : (
            <div className="text-md">
              Only <span className="text-orange-500">{stockNumber} items</span>{" "}
              left!
              <br /> {"Don't"} miss it
            </div>
          )}
        </div>
        <button
          onClick={() => addItem(wixClient, productId, variantId, quantity)}
          disabled={isLoading}
          className="w-36 text-xl rounded-3xl ring-1 ring-yellow text-yellow py-2 px-4 hover:bg-yellow hover:text-white disabled:cursor-not-allowed disabled:bg-yellow-200 disabled:ring-0 disabled:text-white disabled:ring-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
