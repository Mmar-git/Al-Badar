import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";
import { cart, checkout, currentCart, orders} from "@wix/ecom";
import { redirects } from "@wix/redirects";
import { members } from '@wix/members';

export const wixClientServer = async () => {
    let refreshToken;
  
    try {
      const cookieStore = cookies();
      refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
    } catch (e) {}
  
    const wixClient = createClient({
      modules: {
        products,
        collections,
        orders,
        members,
        currentCart, // optional, if you still need currentCart functions
      cart,        // ✅ this is needed for fresh cart creation
      checkout,    // ✅ this is needed to create checkout
      redirects, 
      },
      auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        tokens: {
          refreshToken,
          accessToken: { value: "", expiresAt: 0 },
        },
      }),
    });
  
    return wixClient;
  };