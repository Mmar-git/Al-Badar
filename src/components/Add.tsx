"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { currentCart } from "@wix/ecom";

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
  const [notification, setNotification] = useState("");
  const wixClient = useWixClient();

  // 1. Get all necessary functions from your updated store
  const { addItem, isLoading, replaceCart } = useCartStore();

  const handleAddToCart = async () => {
    await addItem(wixClient, productId, variantId, quantity);
    setNotification("Product added to cart! 🛒");
    setTimeout(() => setNotification(""), 3000);
  };

  // 2. This is the final, correct "Buy Now" logic
  const handleBuyNow = async () => {
    try {
      // Create the line item object for the product to buy.
      const lineItemsToBuy = [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            options: { variantId: variantId },
          },
          quantity: quantity,
        },
      ];

      // Call the store to replace the cart's contents.
      // This updates the server AND your local state atomically.
      await replaceCart(wixClient, lineItemsToBuy);

      // Create a checkout from the now-correct current cart.
      const checkoutResponse =
        await wixClient.currentCart.createCheckoutFromCurrentCart({
          channelType: currentCart.ChannelType.WEB,
        });

      // Redirect to the checkout page.
      const { redirectSession } =
        await wixClient.redirects.createRedirectSession({
          ecomCheckout: { checkoutId: checkoutResponse.checkoutId! },
          callbacks: {
            postFlowUrl: window.location.origin,
            thankYouPageUrl: `${window.location.origin}/success`,
          },
        });

      if (redirectSession?.fullUrl) {
        window.location.href = redirectSession.fullUrl;
      }
    } catch (err) {
      console.error("Buy Now error:", err);
      alert("Error during checkout. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium text-xl">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="py-2 px-4 rounded-3xl ring-1 text-xl ring-yellow flex items-center justify-between w-32 bg-black">
            <button
              className="cursor-pointer text-2xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              disabled={isLoading}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-2xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() =>
                setQuantity((prev) => Math.min(prev + 1, stockNumber))
              }
              disabled={isLoading}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-md">Product is out of stock</div>
          ) : (
            <div className="text-md">
              Only <span className="text-orange-500">{stockNumber} items</span>{" "}
              left! <br /> Don&apos;t miss it
            </div>
          )}
        </div>
      </div>

      {notification && <div className="text-green-500">{notification}</div>}

      <div className="flex flex-col gap-2">
        <button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="w-full text-xl rounded-3xl ring-1 ring-yellow text-yellow py-2 px-4 hover:bg-yellow hover:text-white disabled:cursor-not-allowed disabled:bg-yellow-200"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          disabled={isLoading} // Added disabled state here as well
          className="w-full text-xl rounded-3xl bg-yellow text-black py-2 px-4 hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-yellow-200"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Add;
