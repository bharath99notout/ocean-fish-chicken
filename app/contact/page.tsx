const PHONE = "6366007222";

export default function ContactPage() {
  return (
    <div>
      {/* Banner */}
      <div style={{
        background: "linear-gradient(135deg, #0c4a6e, #0369a1)",
        color: "white",
        padding: "48px 20px",
        textAlign: "center",
      }}>
        <h1 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 900, marginBottom: 10 }}>Contact Us</h1>
        <p style={{ color: "#bae6fd", fontSize: 16 }}>We are just a call or WhatsApp away!</p>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 20px" }}>
        {/* Contact Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 40 }}>
          <a
            href={`tel:${PHONE}`}
            style={{
              background: "#0c4a6e",
              color: "white",
              borderRadius: 16,
              padding: "28px 20px",
              textAlign: "center",
              textDecoration: "none",
              display: "block",
            }}
          >
            <div style={{ fontSize: 44, marginBottom: 12 }}>📞</div>
            <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>Call Us</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#7dd3fc" }}>{PHONE}</div>
            <div style={{ fontSize: 13, color: "#bae6fd", marginTop: 8 }}>Tap to call directly</div>
          </a>

          <a
            href={`https://wa.me/91${PHONE}?text=Hi! I'd like to place an order.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#15803d",
              color: "white",
              borderRadius: 16,
              padding: "28px 20px",
              textAlign: "center",
              textDecoration: "none",
              display: "block",
            }}
          >
            <div style={{ fontSize: 44, marginBottom: 12 }}>💬</div>
            <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>WhatsApp</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#86efac" }}>{PHONE}</div>
            <div style={{ fontSize: 13, color: "#bbf7d0", marginTop: 8 }}>Tap to open WhatsApp</div>
          </a>

          <div style={{
            background: "#f0f9ff",
            border: "2px solid #bae6fd",
            borderRadius: 16,
            padding: "28px 20px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>🕐</div>
            <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6, color: "#0c4a6e" }}>Working Hours</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0369a1" }}>7:00 AM – 8:00 PM</div>
            <div style={{ fontSize: 13, color: "#64748b", marginTop: 8 }}>Monday to Sunday</div>
          </div>
        </div>

        {/* Order via WhatsApp CTA */}
        <div style={{
          background: "linear-gradient(135deg, #0c4a6e, #0369a1)",
          borderRadius: 20,
          padding: "36px 24px",
          textAlign: "center",
          color: "white",
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 10 }}>Ready to Order?</h2>
          <p style={{ color: "#bae6fd", marginBottom: 24, fontSize: 15 }}>
            Just send us a WhatsApp message with your order. We will confirm and deliver!
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/91${PHONE}?text=Hi! I'd like to place an order.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#22c55e",
                color: "white",
                padding: "13px 28px",
                borderRadius: 28,
                fontWeight: 800,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              💬 WhatsApp Now
            </a>
            <a
              href={`tel:${PHONE}`}
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "white",
                padding: "13px 28px",
                borderRadius: 28,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
