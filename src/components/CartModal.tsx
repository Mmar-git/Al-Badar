"use client";
import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";
import { currentCart } from "@wix/ecom";
import { event as fbqEvent } from "@/lib/fbpixel"; // ✅ correct import

const CartModal = () => {
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  const handleCheckout = async () => {
    try {
      if (!cart?.lineItems || cart.lineItems.length === 0) {
        alert("Your cart is empty. Please add items before proceeding.");
        return;
      }

      // 👉 Fire InitiateCheckout event BEFORE redirect
      try {
        const totalValue = (cart as any).subtotal.amount || 0;
        fbqEvent.initiateCheckout(totalValue); // ✅ matches your fbpixel.ts
      } catch (e) {
        console.error("Pixel InitiateCheckout failed:", e);
      }

      const checkout =
        await wixClient.currentCart.createCheckoutFromCurrentCart({
          channelType: currentCart.ChannelType.WEB,
        });

      const { redirectSession } =
        await wixClient.redirects.createRedirectSession({
          ecomCheckout: { checkoutId: checkout.checkoutId },
          callbacks: {
            postFlowUrl: window.location.origin,
            thankYouPageUrl: `${window.location.origin}/success`,
          },
        });

      if (redirectSession?.fullUrl) {
        window.location.href = redirectSession.fullUrl;
      }
    } catch (err) {
      console.error("Error during checkout:", err);
      alert("There was an error with your checkout. Please try again later.");
    }
  };

  return (
    <div
      className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-black ring-1 ring-yellow top-12 right-0 flex flex-col gap-6 z-20"
      style={{
        fontFamily: '"Alumni Sans Pinstripe", serif',
      }}
    >
      {!cart?.lineItems || cart.lineItems.length === 0 ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-2xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {cart.lineItems.map((item) => (
              <div className="flex gap-4" key={item._id}>
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold text-xl">
                        {item.productName?.original}
                      </h3>
                      <div className="p-1 bg-page-50 rounded-sm flex items-center gap-2">
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-lg text-green-300">
                            {item.quantity} x{" "}
                          </div>
                        )}
                        ₹{item.price?.amount}
                      </div>
                    </div>
                    <div className="text-md text-green-500">
                      {item.availability?.status}
                    </div>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-400">Qty. {item.quantity}</span>
                    <span
                      className="text-red-600"
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(wixClient, item._id!)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between font-semibold">
              <span className="font-normal text-xl">Subtotal</span>
              <span className="text-xl">₹{(cart as any).subtotal.amount}</span>
            </div>
            <p className="text-gray-400 text-md mt-2 mb-4">
              Shipping and taxes are calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-yellow hover:bg-yellow">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-yellow hover:bg-orange-500 text-white font-semibold disabled:cursor-not-allowed disabled:opacity-75"
                disabled={isLoading}
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
