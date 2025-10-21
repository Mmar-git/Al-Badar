import { NextResponse } from "next/server";
import { wixClientServer } from "@/lib/wixClientServer";

function digitsOnly(s?: string) {
  return (s || "").replace(/\D/g, "");
}

function lastN(s: string | undefined, n = 10) {
  const d = digitsOnly(s || "");
  return d.length <= n ? d : d.slice(-n);
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const phone = url.searchParams.get("phone") || "";
  const email = url.searchParams.get("email") || "";

  if (!phone && !email) {
    return NextResponse.json({ error: "Provide phone or email" }, { status: 400 });
  }

  console.log("Received query:", { phone, email });

  try {
    const wixClient = await wixClientServer();

    console.log("Calling Wix searchOrders()...");
    const response: any = await wixClient.orders.searchOrders();
    console.log("Raw response from Wix:", response);

    const rawOrders = Array.isArray(response.orders) ? response.orders : [];
    console.log("Number of orders fetched:", rawOrders.length);

    if (!rawOrders.length) {
      return NextResponse.json({ orders: [] });
    }

    const targetPhone = phone ? lastN(phone, 10) : null;
    const targetEmail = email ? email.trim().toLowerCase() : null;

    console.log("Filtering for:", { targetPhone, targetEmail });

    const matched = rawOrders.filter((order: any) => {
      const phones = [
        order?.buyerInfo?.phone,
        order?.billingInfo?.contactDetails?.phone,
        order?.shippingInfo?.contactDetails?.phone,
      ].filter(Boolean);

      console.log(`Order ${order._id} phones:`, phones);

      const phoneMatch = targetPhone
        ? phones.some((p: string) => lastN(p, 10) === targetPhone)
        : false;

      const emailMatch =
        targetEmail && order?.buyerInfo?.email?.toLowerCase() === targetEmail;

      if (phoneMatch || emailMatch) {
        console.log(`Matched order: ${order._id}`);
      }

      return phoneMatch || emailMatch;
    });

    console.log("Number of matched orders:", matched.length);

    const formatted = matched.map((order: any) => ({
      id: order._id ?? order.id ?? null,
      status: order.status,
      total:
        order.priceSummary?.subtotal?.amount ??
        order.priceSummary?.total?.amount ??
        0,
      trackingUrl: order.fulfillments?.[0]?.trackingInfo?.trackingUrl ?? null,
      date: order.createdDate ?? order.createdAt ?? null,
      receiver:
        `${order?.billingInfo?.contactDetails?.firstName || ""} ${order?.billingInfo?.contactDetails?.lastName || ""}`.trim(),
      address: `${order?.billingInfo?.address?.addressLine1 || ""}, ${order?.billingInfo?.address?.city || ""}`.trim(),
      paymentStatus: order?.paymentStatus,
    }));

    return NextResponse.json({ orders: formatted });
  } catch (err: any) {
    console.error("Orders API error:", err);
    return NextResponse.json(
      {
        error: "Failed to fetch orders from Wix",
        details: err.message || err.toString(),
      },
      { status: 500 }
    );
  }
}
