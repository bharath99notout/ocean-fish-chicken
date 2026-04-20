"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function FailureContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") ?? "";

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", background: "#fff1f2" }}>
      <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
        <div style={{ width: 100, height: 100, borderRadius: "50%", background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 50 }}>
          ✕
        </div>

        <h1 style={{ fontSize: 28, fontWeight: 900, color: "#b91c1c", marginBottom: 8 }}>
          Payment Failed
        </h1>
        <p style={{ color: "#64748b", fontSize: 16, marginBottom: 24 }}>
          Your payment could not be processed. No amount has been deducted.
        </p>

        {orderId && (
          <div style={{ background: "white", borderRadius: 16, padding: "16px 20px", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
              <span style={{ color: "#64748b" }}>Order ID</span>
              <span style={{ fontWeight: 700, color: "#1e293b", fontFamily: "monospace", fontSize: 12 }}>{orderId}</span>
            </div>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Link href="/" style={{
            display: "block", background: "#0c4a6e", color: "white",
            padding: "15px", borderRadius: 14, fontWeight: 800, fontSize: 17,
            textDecoration: "none", boxShadow: "0 4px 15px rgba(12,74,110,0.3)",
          }}>
            Try Again
          </Link>
          <Link href="/" style={{
            display: "block", color: "#0369a1", fontWeight: 600,
            fontSize: 15, textDecoration: "none", marginTop: 4,
          }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PaymentFailurePage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}><p>Loading...</p></div>}>
      <FailureContent />
    </Suspense>
  );
}
