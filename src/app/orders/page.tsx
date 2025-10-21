"use client";

import { useState } from "react";
import Link from "next/link";

export default function OrdersPage() {
  const [phone, setPhone] = useState("");
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchOrders = async () => {
    if (!phone) return alert("Please enter your phone number");
    setLoading(true);
    setSearched(true);
    try {
      const res = await fetch(`/api/getOrders?phone=${phone}`);
      const data = await res.json();
      setOrders(data.orders || []);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch orders");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-10 bg-black">
      <h1 className="text-2xl font-bold mb-6">Check Your Orders</h1>

      <div className="flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border rounded px-3 py-2 w-64 bg-black"
        />
        <button
          onClick={fetchOrders}
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded"
        >
          {loading ? "Fetching..." : "Search"}
        </button>
      </div>

      {searched && orders.length === 0 && !loading && (
        <p className="text-gray-600">No orders found for this number.</p>
      )}

      <div className="w-full max-w-3xl space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-yellow-600 mb-4">
              Order #{order.id}
            </h2>

            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Date:</strong>{" "}
                {new Date(order.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <p>
                <strong>Payment:</strong> {order.paymentStatus}
              </p>
              <p>
                <strong>Total:</strong> ₹{order.total}
              </p>
              <p>
                <strong>Receiver:</strong> {order.receiver}
              </p>
              <p>
                <strong>Address:</strong> {order.address}
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <Link
                href={`/orders/${order.id}`}
                className="text-sm bg-gray-900 text-white px-4 py-2 rounded"
              >
                View Details
              </Link>
              {order.trackingUrl && (
                <a
                  href={order.trackingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Track Order
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/" className="underline text-sm text-gray-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
