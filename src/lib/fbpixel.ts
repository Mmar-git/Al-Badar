// lib/fbpixel.ts
export const FB_PIXEL_ID = "1078070014412249"; // replace with your real ID

// Standard fbq function
export const fbq = (...args: any[]) => {
  // @ts-ignore
  if (typeof window !== "undefined" && window.fbq) {
    // @ts-ignore
    window.fbq(...args);
  }
};

// Predefined events
export const event = {
  pageView: () => {
    fbq("track", "PageView");
  },
  viewContent: (content_id: string, content_name: string, value: number, currency = "INR") => {
    fbq("track", "ViewContent", {
      content_ids: [content_id],
      content_name,
      value,
      currency,
    });
  },
  addToCart: (content_id: string, content_name: string, value: number, currency = "INR") => {
    fbq("track", "AddToCart", {
      content_ids: [content_id],
      content_name,
      value,
      currency,
    });
  },
  initiateCheckout: (value: number, currency = "INR") => {
    fbq("track", "InitiateCheckout", {
      value,
      currency,
    });
  },
  purchase: (content_ids: string[], value: number, currency = "INR") => {
    fbq("track", "Purchase", {
      content_ids,
      value,
      currency,
    });
  },
};
