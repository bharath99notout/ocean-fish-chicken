"use client";
import { useCart } from "@/lib/cartContext";

const PHONE = "6366007222";

function buildWhatsAppMessage(
  cart: ReturnType<typeof useCart>["cart"],
  total: number
): string {
  const lines: string[] = ["Hi! I'd like to place an order:\n"];

  const seaFish   = cart.filter((c) => c.item.section === "sea");
  const freshFish = cart.filter((c) => c.item.section === "freshwater");
  const chicken   = cart.filter((c) => c.item.category === "chicken");

  if (seaFish.length) {
    lines.push("🌊 *Ocean & Sea Fish:*");
    seaFish.forEach((c) => {
      const lineTotal = c.pack.price * c.count;
      lines.push(
        `• ${c.item.name} — ${c.pack.label} × ${c.count} pack${c.count > 1 ? "s" : ""} = ₹${lineTotal}`
      );
    });
    lines.push("");
  }

  if (freshFish.length) {
    lines.push("🏞️ *River & Pond Fish:*");
    freshFish.forEach((c) => {
      const lineTotal = c.pack.price * c.count;
      lines.push(
        `• ${c.item.name} — ${c.pack.label} × ${c.count} pack${c.count > 1 ? "s" : ""} = ₹${lineTotal}`
      );
    });
    lines.push("");
  }

  if (chicken.length) {
    lines.push("🍗 *Chicken:*");
    chicken.forEach((c) => {
      const lineTotal = c.pack.price * c.count;
      lines.push(
        `• ${c.item.name} — ${c.pack.label} × ${c.count} pack${c.count > 1 ? "s" : ""} = ₹${lineTotal}`
      );
    });
    lines.push("");
  }

  lines.push(`💰 *Total: ₹${total}*`);
  lines.push("\nPlease confirm availability & delivery time. Thank you! 🙏");

  return encodeURIComponent(lines.join("\n"));
}

export default function CartDrawer() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateCount, clearCart, totalPrice, totalItems } =
    useCart();

  if (!isOpen) return null;

  const totalSavings = cart.reduce(
    (s, c) => s + (c.pack.mrp - c.pack.price) * c.count,
    0
  );
  const whatsappUrl = `https://wa.me/91${PHONE}?text=${buildWhatsAppMessage(cart, totalPrice)}`;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 200, backdropFilter: "blur(2px)",
        }}
      />

      {/* Drawer */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(440px, 100vw)",
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
            <h2 style={{ fontWeight: 800, fontSize: 20, margin: 0 }}>
              🛒 Your Cart
            </h2>
            <p style={{ fontSize: 13, color: "#bae6fd", margin: 0 }}>
              {totalItems === 0
                ? "Empty"
                : `${totalItems} pack${totalItems > 1 ? "s" : ""}`}
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                style={{
                  background: "rgba(255,255,255,0.15)", border: "none",
                  color: "white", padding: "6px 12px", borderRadius: 16,
                  fontSize: 12, cursor: "pointer", fontWeight: 600,
                }}
              >
                Clear All
              </button>
            )}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "rgba(255,255,255,0.15)", border: "none",
                color: "white", width: 36, height: 36, borderRadius: "50%",
                fontSize: 18, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#94a3b8" }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>🛒</div>
              <p style={{ fontSize: 18, fontWeight: 600, color: "#64748b" }}>Cart is empty</p>
              <p style={{ fontSize: 14, marginTop: 8 }}>Add items from the menu</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {cart.map((c) => {
                const lineTotal = c.pack.price * c.count;
                return (
                  <div
                    key={`${c.item.id}-${c.pack.grams}`}
                    style={{
                      background: "#f8fafc", borderRadius: 14,
                      padding: "14px", border: "1px solid #e2e8f0",
                    }}
                  >
                    {/* Item Name + Remove */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>
                          {c.item.category === "fish" ? "🐟" : "🍗"} {c.item.name}
                        </div>
                        {/* Pack size chip */}
                        <div style={{
                          display: "inline-block", marginTop: 4,
                          background: "#eff6ff", color: "#0369a1",
                          fontSize: 12, fontWeight: 700,
                          padding: "2px 10px", borderRadius: 20,
                          border: "1px solid #bfdbfe",
                        }}>
                          {c.pack.label} pack — ₹{c.pack.price} each
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(c.item.id, c.pack.grams)}
                        style={{
                          background: "#fee2e2", border: "none",
                          color: "#ef4444", width: 28, height: 28,
                          borderRadius: "50%", fontSize: 14,
                          cursor: "pointer", flexShrink: 0,
                        }}
                      >
                        ✕
                      </button>
                    </div>

                    {/* Pack Count Controls */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{
                        display: "flex", alignItems: "center",
                        background: "white", borderRadius: 30,
                        border: "2px solid #e2e8f0", overflow: "hidden",
                      }}>
                        <button
                          onClick={() => updateCount(c.item.id, c.pack.grams, c.count - 1)}
                          style={{
                            width: 38, height: 38, border: "none",
                            background: "transparent", fontSize: 20,
                            cursor: "pointer", color: "#0369a1", fontWeight: 700,
                          }}
                        >
                          −
                        </button>
                        <span style={{
                          padding: "0 4px", minWidth: 90,
                          textAlign: "center", fontWeight: 700, fontSize: 13, color: "#1e293b",
                        }}>
                          {c.count} × {c.pack.label}
                        </span>
                        <button
                          onClick={() => updateCount(c.item.id, c.pack.grams, c.count + 1)}
                          style={{
                            width: 38, height: 38, border: "none",
                            background: "transparent", fontSize: 20,
                            cursor: "pointer", color: "#0369a1", fontWeight: 700,
                          }}
                        >
                          +
                        </button>
                      </div>
                      <span style={{ fontWeight: 800, fontSize: 18, color: "#0369a1" }}>
                        ₹{lineTotal}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: "16px", borderTop: "2px solid #e2e8f0", background: "white", flexShrink: 0 }}>
            {/* Savings */}
            <div style={{
              background: "#dcfce7", borderRadius: 10,
              padding: "10px 14px", marginBottom: 12,
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ fontSize: 13, color: "#15803d", fontWeight: 600 }}>
                🎉 You save vs Licious / FreshToHome
              </span>
              <span style={{ fontWeight: 800, fontSize: 14, color: "#15803d" }}>
                ₹{totalSavings}
              </span>
            </div>

            {/* Total */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, alignItems: "center" }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#1e293b" }}>Total</span>
              <span style={{ fontSize: 24, fontWeight: 900, color: "#0c4a6e" }}>₹{totalPrice}</span>
            </div>

            {/* WhatsApp Order */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center",
                justifyContent: "center", gap: 10,
                width: "100%",
                background: "#22c55e", color: "white",
                padding: "16px", borderRadius: 14,
                fontWeight: 800, fontSize: 17,
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(34,197,94,0.4)",
              }}
            >
              <span style={{ fontSize: 22 }}>💬</span>
              Send Order on WhatsApp
            </a>
            <p style={{ textAlign: "center", fontSize: 12, color: "#94a3b8", marginTop: 8, margin: "8px 0 0" }}>
              Full order details sent automatically — just tap Send
            </p>
          </div>
        )}
      </div>
    </>
  );
}
