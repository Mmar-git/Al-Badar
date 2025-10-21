import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";
import { cart, checkout, currentCart, orders} from "@wix/ecom";
import { redirects } from "@wix/redirects";
import { members } from '@wix/members';

// wixClientServer.ts (only showing relevant part)
export const wixClientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = cookies();
    const cookieVal = cookieStore.get("refreshToken")?.value;
    refreshToken = cookieVal && cookieVal !== "{}" ? JSON.parse(cookieVal) : undefined;
  } catch (e) {}

  // FALLBACK: if cookie not present, use server env var (string or JSON)
  if ((!refreshToken || !refreshToken.refreshToken) && process.env.WIX_REFRESH_TOKEN) {
    try {
      // allow either raw token string or a JSON like {"refreshToken":"..."}
      const parsed = JSON.parse(process.env.WIX_REFRESH_TOKEN);
      refreshToken = parsed;
    } catch (e) {
      // not JSON, treat as raw token string
      refreshToken = { refreshToken: process.env.WIX_REFRESH_TOKEN };
    }
  }

  const wixClient = createClient({
    modules: {
      products,
      collections,
      orders,
      members,
      currentCart,
      cart,
      checkout,
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
