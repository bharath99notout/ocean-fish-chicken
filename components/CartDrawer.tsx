"use client";
import { useState } from "react";
import { useCart } from "@/lib/cartContext";
import type { CartItem } from "@/lib/cartContext";
import { useRouter } from "next/navigation";

const PHONE = "6366007222";


function buildWhatsAppMessage(cart: CartItem[], total: number, address: string): string {
  const lines: string[] = ["Hi! I'd like to place an order from *Costal Fresh Fish & Chicken*:\n"];

  // Robust grouping — handles any missing section field gracefully
  const seaFish   = cart.filter((c) => c.item.section === "sea");
  const freshFish = cart.filter((c) => c.item.section === "freshwater");
  const chicken   = cart.filter((c) => c.item.category === "chicken");
  // Fallback: any item not captured above
  const others    = cart.filter(
    (c) => !["sea", "freshwater"].includes(c.item.section ?? "") && c.item.category !== "chicken"
  );

  const printItems = (items: CartItem[]) =>
    items.forEach((c) => {
      const qty   = c.pack.grams >= 1000 ? `${c.pack.grams / 1000} kg` : `${c.pack.grams}g`;
      const total = c.pack.price * c.count;
      lines.push(`• ${c.item.name} — ${qty} × ${c.count} = ₹${total}`);
    });

  if (seaFish.length) {
    lines.push("🌊 *Sea Fish:*");
    printItems(seaFish);
    lines.push("");
  }
  if (freshFish.length) {
    lines.push("🏞️ *River & Pond Fish:*");
    printItems(freshFish);
    lines.push("");
  }
  if (others.length) {
    lines.push("🐟 *Fish:*");
    printItems(others);
    lines.push("");
  }
  if (chicken.length) {
    lines.push("🍗 *Chicken:*");
    printItems(chicken);
    lines.push("");
  }

  lines.push(`💰 *Total: ₹${total}*`);
  lines.push("");
  lines.push(`📍 *Delivery Address:*\n${address.trim()}`);
  lines.push("");
  lines.push("Please confirm availability, delivery time & payment. Thank you! 🙏");

  return encodeURIComponent(lines.join("\n"));
}

function generateOrderId(): string {
  return `COASTAL_${Date.now()}_${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}

function buildItemsSummary(cart: CartItem[]): string {
  return cart.map((c) => {
    const qty = c.pack.grams >= 1000 ? `${c.pack.grams / 1000}kg` : `${c.pack.grams}g`;
    return `${c.item.name} ${qty}×${c.count} ₹${c.pack.price * c.count}`;
  }).join(", ");
}

export default function CartDrawer() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateCount, clearCart, totalPrice, totalItems } = useCart();
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "phonepe">("phonepe");
  const [loading, setLoading] = useState(false);
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number; label: string } | null>(null);
  const [promoError, setPromoError] = useState("");
  const [promoLoading, setPromoLoading] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const totalSavings  = cart.reduce((s, c) => s + (c.pack.mrp - c.pack.price) * c.count, 0);
  const promoDiscount = appliedPromo?.discount ?? 0;
  const finalTotal    = totalPrice - promoDiscount;

  const handleApplyPromo = async () => {
    const code = promoInput.trim().toUpperCase();
    if (!code) return;
    setPromoLoading(true);
    try {
      const res  = await fetch("/api/promo/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, cartTotal: totalPrice }),
      });
      const data = await res.json();
      if (data.valid) {
        setAppliedPromo({ code, discount: data.discount, label: data.label });
        setPromoError("");
        setPromoInput("");
      } else {
        setPromoError(data.error ?? "Invalid promo code");
        setAppliedPromo(null);
      }
    } catch {
      setPromoError("Could not validate code. Try again.");
    } finally {
      setPromoLoading(false);
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoError("");
    setPromoInput("");
  };

  const handleSendOrder = async () => {
    if (!address.trim()) {
      setAddressError(true);
      return;
    }

    const promoNote = appliedPromo
      ? `\n🏷️ *Promo: ${appliedPromo.code}* (-₹${promoDiscount})`
      : "";

    if (paymentMethod === "cod") {
      const msg = buildWhatsAppMessage(cart, finalTotal, address);
      const codMsg = msg.replace(
        encodeURIComponent("Please confirm availability, delivery time & payment. Thank you! 🙏"),
        encodeURIComponent(`${promoNote}\n💵 *Payment: Cash on Delivery*\n\nPlease confirm availability & delivery time. Thank you! 🙏`.trimStart())
      );
      window.open(`https://wa.me/91${PHONE}?text=${codMsg}`, "_blank");
      clearCart();
      setIsOpen(false);
      setAddress("");
      setAppliedPromo(null);
      return;
    }

    // PhonePe flow
    setLoading(true);
    try {
      const orderId = generateOrderId();
      const phone = PHONE;

      // Save order to localStorage so success page can display it
      localStorage.setItem(`order_${orderId}`, JSON.stringify({
        orderId,
        amount: finalTotal,
        items: buildItemsSummary(cart),
        address: address.trim(),
        phone,
      }));

      const res = await fetch("/api/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount:  finalTotal,
          orderId,
          phone,
          items:   buildItemsSummary(cart),
          address: address.trim(),
        }),
      });

      const data = await res.json();

      if (data.success && data.redirectUrl) {
        clearCart();
        setIsOpen(false);
        window.location.href = data.redirectUrl;
      } else {
        alert(data.message ?? "Payment initiation failed. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, backdropFilter: "blur(2px)" }}
      />

      {/* Drawer */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(460px, 100vw)",
        background: "white", zIndex: 201,
        display: "flex", flexDirection: "column",
        boxShadow: "-4px 0 30px rgba(0,0,0,0.2)",
      }}>

        {/* Header */}
        <div style={{
          background: "#0c4a6e", color: "white",
          padding: "18px 20px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexShrink: 0,
        }}>
          <div>
            <h2 style={{ fontWeight: 800, fontSize: 20, margin: 0 }}>🛒 Your Cart</h2>
            <p style={{ fontSize: 13, color: "#bae6fd", margin: 0 }}>
              {totalItems === 0 ? "Empty" : `${totalItems} pack${totalItems > 1 ? "s" : ""} selected`}
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {cart.length > 0 && (
              <button onClick={clearCart} style={{
                background: "rgba(255,255,255,0.15)", border: "none",
                color: "white", padding: "6px 12px", borderRadius: 16,
                fontSize: 12, cursor: "pointer", fontWeight: 600,
              }}>
                Clear All
              </button>
            )}
            <button onClick={() => setIsOpen(false)} style={{
              background: "rgba(255,255,255,0.15)", border: "none",
              color: "white", width: 36, height: 36, borderRadius: "50%",
              fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              ✕
            </button>
          </div>
        </div>

        {/* Steps indicator */}
        {cart.length > 0 && (
          <div style={{
            display: "flex", background: "#f0f9ff",
            borderBottom: "1px solid #bae6fd", flexShrink: 0,
          }}>
            {["1. Items", "2. Address", "3. Payment"].map((step, i) => (
              <div key={step} style={{
                flex: 1, textAlign: "center", padding: "8px 4px",
                fontSize: 11, fontWeight: 700,
                color: "#0369a1",
                borderRight: i < 2 ? "1px solid #bae6fd" : "none",
              }}>
                {step}
              </div>
            ))}
          </div>
        )}

        {/* Cart Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "14px" }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#94a3b8" }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>🛒</div>
              <p style={{ fontSize: 18, fontWeight: 600, color: "#64748b" }}>Cart is empty</p>
              <p style={{ fontSize: 14, marginTop: 8 }}>Add items from the menu</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {cart.map((c) => {
                const lineTotal  = c.pack.price * c.count;
                const totalGrams = c.pack.grams * c.count;
                const qtyLabel   = totalGrams >= 1000 ? `${totalGrams / 1000} kg` : `${totalGrams}g`;

                return (
                  <div key={`${c.item.id}-${c.pack.grams}`} style={{
                    background: "#f8fafc", borderRadius: 14,
                    padding: "13px", border: "1px solid #e2e8f0",
                  }}>
                    {/* Name + Remove */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <div style={{ flex: 1, marginRight: 8 }}>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>
                          {c.item.section === "chicken" || c.item.category === "chicken" ? "🍗" :
                           c.item.section === "sea" ? "🌊" : "🏞️"} {c.item.name}
                        </div>
                        <div style={{ display: "flex", gap: 6, marginTop: 5, flexWrap: "wrap" }}>
                          <span style={{
                            background: "#eff6ff", color: "#0369a1",
                            fontSize: 11, fontWeight: 700,
                            padding: "2px 8px", borderRadius: 10, border: "1px solid #bfdbfe",
                          }}>
                            {c.pack.label} × {c.count} = {qtyLabel}
                          </span>
                          <span style={{
                            background: "#f0fdf4", color: "#15803d",
                            fontSize: 11, fontWeight: 700,
                            padding: "2px 8px", borderRadius: 10, border: "1px solid #bbf7d0",
                          }}>
                            ₹{c.pack.price}/pack
                          </span>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(c.item.id, c.pack.grams)} style={{
                        background: "#fee2e2", border: "none",
                        color: "#ef4444", width: 28, height: 28,
                        borderRadius: "50%", fontSize: 14,
                        cursor: "pointer", flexShrink: 0,
                      }}>
                        ✕
                      </button>
                    </div>

                    {/* Count controls */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{
                        display: "flex", alignItems: "center",
                        background: "white", borderRadius: 30,
                        border: "2px solid #e2e8f0", overflow: "hidden",
                      }}>
                        <button
                          onClick={() => updateCount(c.item.id, c.pack.grams, c.count - 1)}
                          style={{ width: 36, height: 36, border: "none", background: "transparent", fontSize: 20, cursor: "pointer", color: "#0369a1", fontWeight: 700 }}
                        >−</button>
                        <span style={{ padding: "0 6px", minWidth: 80, textAlign: "center", fontWeight: 700, fontSize: 13, color: "#1e293b" }}>
                          {c.count} × {c.pack.label}
                        </span>
                        <button
                          onClick={() => updateCount(c.item.id, c.pack.grams, c.count + 1)}
                          style={{ width: 36, height: 36, border: "none", background: "transparent", fontSize: 20, cursor: "pointer", color: "#0369a1", fontWeight: 700 }}
                        >+</button>
                      </div>
                      <span style={{ fontWeight: 900, fontSize: 18, color: "#0369a1" }}>₹{lineTotal}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ borderTop: "2px solid #e2e8f0", background: "white", flexShrink: 0 }}>

            {/* Address Input */}
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #f1f5f9" }}>
              <label style={{ fontSize: 13, fontWeight: 700, color: "#0c4a6e", display: "block", marginBottom: 6 }}>
                📍 Delivery Address <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <textarea
                value={address}
                onChange={(e) => { setAddress(e.target.value); setAddressError(false); }}
                placeholder="House No, Street, Area, City, Pincode..."
                rows={3}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: addressError ? "2px solid #ef4444" : "2px solid #e2e8f0",
                  fontSize: 13,
                  color: "#1e293b",
                  resize: "none",
                  outline: "none",
                  fontFamily: "inherit",
                  background: addressError ? "#fff5f5" : "white",
                  boxSizing: "border-box",
                }}
              />
              {addressError && (
                <p style={{ color: "#ef4444", fontSize: 12, margin: "4px 0 0", fontWeight: 600 }}>
                  ⚠️ Please enter your delivery address
                </p>
              )}
            </div>

            <div style={{ padding: "12px 16px" }}>
              {/* Promo Code */}
              <div style={{ marginBottom: 12 }}>
                {appliedPromo ? (
                  <div style={{
                    background: "#f0fdf4", border: "1.5px solid #86efac",
                    borderRadius: 10, padding: "10px 12px",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 800, color: "#15803d" }}>
                        🏷️ {appliedPromo.code}
                      </span>
                      <span style={{ fontSize: 12, color: "#16a34a", marginLeft: 8 }}>
                        {appliedPromo.label} applied!
                      </span>
                    </div>
                    <button
                      onClick={handleRemovePromo}
                      style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: 18, fontWeight: 700, padding: "0 4px" }}
                    >✕</button>
                  </div>
                ) : (
                  <div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <input
                        value={promoInput}
                        onChange={(e) => { setPromoInput(e.target.value.toUpperCase()); setPromoError(""); }}
                        onKeyDown={(e) => e.key === "Enter" && handleApplyPromo()}
                        placeholder="Enter promo code"
                        style={{
                          flex: 1, padding: "9px 12px", borderRadius: 10,
                          border: promoError ? "2px solid #ef4444" : "2px solid #e2e8f0",
                          fontSize: 13, fontWeight: 700, color: "#1e293b",
                          outline: "none", letterSpacing: 1,
                          background: promoError ? "#fff5f5" : "white",
                        }}
                      />
                      <button
                        onClick={handleApplyPromo}
                        disabled={promoLoading}
                        style={{
                          padding: "9px 16px", borderRadius: 10,
                          background: promoLoading ? "#94a3b8" : "#0c4a6e", color: "white",
                          border: "none", cursor: promoLoading ? "not-allowed" : "pointer",
                          fontWeight: 700, fontSize: 13, minWidth: 70,
                        }}
                      >{promoLoading ? "..." : "Apply"}</button>
                    </div>
                    {promoError && (
                      <p style={{ color: "#ef4444", fontSize: 12, margin: "4px 0 0", fontWeight: 600 }}>
                        ⚠️ {promoError}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Savings */}
              <div style={{
                background: "#dcfce7", borderRadius: 10,
                padding: "8px 14px", marginBottom: 6,
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: 13, color: "#15803d", fontWeight: 600 }}>🎉 You save vs Licious</span>
                <span style={{ fontWeight: 800, fontSize: 14, color: "#15803d" }}>₹{totalSavings}</span>
              </div>

              {/* Promo discount row */}
              {promoDiscount > 0 && (
                <div style={{
                  background: "#f0fdf4", borderRadius: 10,
                  padding: "8px 14px", marginBottom: 6,
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{ fontSize: 13, color: "#15803d", fontWeight: 600 }}>🏷️ Promo discount</span>
                  <span style={{ fontWeight: 800, fontSize: 14, color: "#15803d" }}>−₹{promoDiscount}</span>
                </div>
              )}

              {/* Total */}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, alignItems: "center", marginTop: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#1e293b" }}>Total Amount</span>
                <div style={{ textAlign: "right" }}>
                  {promoDiscount > 0 && (
                    <div style={{ fontSize: 13, color: "#94a3b8", textDecoration: "line-through" }}>₹{totalPrice}</div>
                  )}
                  <span style={{ fontSize: 24, fontWeight: 900, color: "#0c4a6e" }}>₹{finalTotal}</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div style={{ marginBottom: 12 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0c4a6e", marginBottom: 8 }}>
                  💳 Payment Method
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  {([
                    { id: "phonepe", label: "PhonePe", icon: "📲", color: "#5f259f" },
                    { id: "cod",     label: "Cash on Delivery", icon: "💵", color: "#15803d" },
                  ] as const).map(({ id, label, icon, color }) => (
                    <button
                      key={id}
                      onClick={() => setPaymentMethod(id)}
                      style={{
                        flex: 1, padding: "10px 8px",
                        border: paymentMethod === id ? `2px solid ${color}` : "2px solid #e2e8f0",
                        borderRadius: 12, background: paymentMethod === id ? `${color}15` : "white",
                        cursor: "pointer", fontWeight: 700, fontSize: 12,
                        color: paymentMethod === id ? color : "#64748b",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                      }}
                    >
                      <span style={{ fontSize: 20 }}>{icon}</span>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleSendOrder}
                disabled={loading}
                style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 10,
                  width: "100%",
                  background: loading
                    ? "#94a3b8"
                    : !address.trim()
                    ? "#94a3b8"
                    : paymentMethod === "phonepe"
                    ? "#5f259f"
                    : "#22c55e",
                  color: "white",
                  padding: "15px", borderRadius: 14,
                  fontWeight: 800, fontSize: 17,
                  border: "none", cursor: loading ? "not-allowed" : "pointer",
                  boxShadow: address.trim() && !loading
                    ? paymentMethod === "phonepe"
                      ? "0 4px 15px rgba(95,37,159,0.35)"
                      : "0 4px 15px rgba(34,197,94,0.4)"
                    : "none",
                }}
              >
                {loading ? (
                  <>⏳ Redirecting to PhonePe...</>
                ) : paymentMethod === "phonepe" ? (
                  <><span style={{ fontSize: 22 }}>📲</span> Pay with PhonePe</>
                ) : (
                  <><span style={{ fontSize: 22 }}>💬</span> Send Order on WhatsApp</>
                )}
              </button>

              {paymentMethod === "cod" && (
                <p style={{ fontSize: 11, color: "#64748b", margin: "8px 0 0", textAlign: "center" }}>
                  Order sent via WhatsApp • Pay ₹{finalTotal} cash at delivery
                </p>
              )}
              {paymentMethod === "phonepe" && (
                <p style={{ fontSize: 11, color: "#64748b", margin: "8px 0 0", textAlign: "center" }}>
                  Secure payment of ₹{finalTotal} via PhonePe • UPI / Cards / Wallets
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
