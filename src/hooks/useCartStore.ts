import { create } from "zustand";
import { currentCart } from "@wix/ecom";
import { WixClient } from "@/context/wixContext";

type CartState = {
  cart: currentCart.Cart;
  isLoading: boolean;
  counter: number;
  getCart: (wixClient: WixClient) => void;
  addItem: (
    wixClient: WixClient,
    productId: string,
    variantId: string,
    quantity: number
  ) => void;
  removeItem: (wixClient: WixClient, itemId: string) => void;
  replaceCart: (wixClient: WixClient, lineItems: any[]) => Promise<void>;
};

export const useCartStore = create<CartState>((set) => ({
  cart: { lineItems: [], _id: "0" }, 
  isLoading: true,
  counter: 0,
  getCart: async (wixClient) => {
    try {
      const cart = await wixClient.currentCart.getCurrentCart();
      set({
        cart: cart || { lineItems: [], _id: "0" },
        isLoading: false,
        counter: cart?.lineItems.length || 0,
      });
    } catch (err) {
      set((prev) => ({ ...prev, isLoading: false }));
    }
  },
  addItem: async (wixClient, productId, variantId, quantity) => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const response = await wixClient.currentCart.addToCurrentCart({
        lineItems: [
          {
            catalogReference: {
              appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
              catalogItemId: productId,
              ...(variantId && { options: { variantId } }),
            },
            quantity: quantity,
          },
        ],
      });
      
      set({
        cart: response.cart!,
        counter: response.cart?.lineItems.length,
        isLoading: false,
      });
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      set({ isLoading: false });
    }
  },   
  removeItem: async (wixClient, itemId) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
      [itemId]
    );

    // FIX: The 'remove' response also contains a 'cart' object.
    set({
      cart: response.cart!,
      counter: response.cart?.lineItems.length,
      isLoading: false,
    });
  },
  replaceCart: async (wixClient, lineItems) => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const response = await wixClient.currentCart.updateCurrentCart({
        lineItems,
      });
      // This is correct as 'update' returns the cart directly.
      set({
        cart: response,
        isLoading: false,
        counter: response.lineItems?.length || 0,
      });
    } catch (err) {
      console.error("Error in replaceCart:", err);
      set({ isLoading: false });
    }
  },
}));
