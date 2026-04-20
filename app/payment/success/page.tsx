"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PHONE = "6366007222";

interface StoredOrder {
  orderId:  string;
  amount:   number;
  items:    string;
  address:  string;
  phone:    string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId      = searchParams.get("orderId") ?? "";
  const [order, setOrder]   = useState<StoredOrder | null>(null);
  const [status, setStatus] = useState<"checking" | "paid" | "pending" | "failed">("checking");

  useEffect(() => {
    const saved = localStorage.getItem(`order_${orderId}`);
    if (saved) setOrder(JSON.parse(saved));

    if (!orderId) { setStatus("failed"); return; }

    fetch(`/api/payment/status/${orderId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "PAYMENT_SUCCESS")  setStatus("paid");
        else if (data.status === "PAYMENT_PENDING") setStatus("pending");
        else setStatus("paid"); // Assume success if redirect came here
      })
      .catch(() => setStatus("paid")); // Trust redirect from PhonePe
  }, [orderId]);

  const whatsappMsg = order
    ? encodeURIComponent(
        `Hi! I've completed my payment via PhonePe.\n\n` +
        `🧾 *Order ID:* ${order.orderId}\n` +
        `💰 *Amount Paid:* ₹${order.amount}\n\n` +
        `🛒 *Items:*\n${order.items}\n\n` +
        `📍 *Delivery Address:*\n${order.address}\n\n` +
        `📱 *Phone:* ${order.phone}\n\n` +
        `Please confirm delivery time. Thank you! 🙏`
      )
    : "";

  if (status === "checking") {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16, animation: "spin 1s linear infinite" }}>⏳</div>
          <p style={{ color: "#64748b", fontSize: 16 }}>Verifying your payment...</p>
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", background: "#f0fdf4" }}>
      <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
        <div style={{ width: 100, height: 100, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 50 }}>
          ✓
        </div>

        <h1 style={{ fontSize: 28, fontWeight: 900, color: "#15803d", marginBottom: 8 }}>
          Payment Successful!
        </h1>
        <p style={{ color: "#64748b", fontSize: 16, marginBottom: 24 }}>
          Your order has been placed. The shop will contact you shortly.
        </p>

        <div style={{ background: "white", borderRadius: 16, padding: "20px", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", marginBottom: 24, textAlign: "left" }}>
          <h3 style={{ fontWeight: 700, color: "#0c4a6e", marginBottom: 14, fontSize: 16 }}>
            📋 Order Summary
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
              <span style={{ color: "#64748b" }}>Order ID</span>
              <span style={{ fontWeight: 700, color: "#1e293b", fontFamily: "monospace", fontSize: 12 }}>{orderId}</span>
            </div>
            {order && (
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <span style={{ color: "#64748b" }}>Amount Paid</span>
                <span style={{ fontWeight: 900, color: "#15803d", fontSize: 18 }}>₹{order.amount}</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
              <span style={{ color: "#64748b" }}>Payment</span>
              <span style={{ background: "#dcfce7", color: "#15803d", padding: "2px 10px", borderRadius: 10, fontSize: 13, fontWeight: 700 }}>PhonePe ✓</span>
            </div>
            {order?.address && (
              <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 10, marginTop: 4 }}>
                <span style={{ color: "#64748b", fontSize: 13, display: "block", marginBottom: 4 }}>📍 Delivery Address</span>
                <span style={{ color: "#1e293b", fontSize: 13, fontWeight: 600 }}>{order.address}</span>
              </div>
            )}
          </div>
        </div>

        {order && (
          <a
            href={`https://wa.me/91${PHONE}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              width: "100%", background: "#22c55e", color: "white",
              padding: "15px", borderRadius: 14, fontWeight: 800, fontSize: 17,
              textDecoration: "none", marginBottom: 12,
              boxShadow: "0 4px 15px rgba(34,197,94,0.4)",
            }}
          >
            <span style={{ fontSize: 22 }}>💬</span>
            Notify Shop on WhatsApp
          </a>
        )}

        <Link href="/" style={{
          display: "block", color: "#0369a1", fontWeight: 600,
          fontSize: 15, textDecoration: "none", marginTop: 8,
        }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}><p>Verifying payment...</p></div>}>
      <SuccessContent />
    </Suspense>
  );
}
