"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import Confetti from "react-confetti";
import { event as fbqEvent } from "@/lib/fbpixel";
import { useWixClient } from "@/hooks/useWixClient";

const SuccessPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const wixClient = useWixClient();

  const orderId = searchParams?.get("orderId");

  useEffect(() => {
    if (!orderId) return;

    // 👇 Fetch order details from Wix & fire Purchase pixel
    const trackPurchase = async () => {
      try {
        const order = await wixClient.orders.getOrder(orderId);

        if (order?.lineItems?.length > 0) {
          const productIds = order.lineItems.map(
            (item: any) => item.catalogReference?.catalogItemId ?? "unknown"
          );

          // ✅ Ensure numeric value
          const totalValue = parseFloat(
            order.priceSummary?.total?.amount || "0"
          );

          fbqEvent.purchase(productIds, totalValue);
          console.log("✅ FB Pixel Purchase event fired:", {
            productIds,
            totalValue,
          });
        }
      } catch (err) {
        console.error("❌ Failed to fetch order for pixel tracking:", err);
      }
    };

    trackPurchase();

    // redirect after 5s
    const timer = setTimeout(() => {
      router.push("/orders/" + orderId);
    }, 5000);

    return () => clearTimeout(timer);
  }, [orderId, router, wixClient]);

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen w-screen max-w-screen overflow-x-hidden">
      <Confetti
        width={typeof window !== "undefined" ? window.innerWidth : 1200}
        height={1000}
        className="absolute inset-0"
      />
      <h1 className="text-6xl text-green-700">Successful</h1>
      <h2 className="text-xl font-medium">
        We sent the invoice to your e-mail
      </h2>
      <h3>You are being redirected to the order page...</h3>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
};

export default SuccessPage;
