import Link from "next/link";

const PHONE = "6366007222";

export default function Hero() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #075985 100%)",
      color: "white",
      padding: "80px 20px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decorative circles */}
      <div style={{ position: "absolute", top: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", bottom: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🐟🍗</div>
        <h1 style={{ fontSize: "clamp(28px, 6vw, 52px)", fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>
          Costal Fresh Fish &amp; Chicken
          <span style={{ display: "block", color: "#7dd3fc", fontSize: "clamp(16px, 3vw, 24px)", fontWeight: 600, marginTop: 8, letterSpacing: 3 }}>
            FRESH DAILY
          </span>
        </h1>

        <p style={{ fontSize: "clamp(15px, 2.5vw, 20px)", color: "#bae6fd", marginBottom: 12, lineHeight: 1.7 }}>
          Fresh catch of the day. Delivered to your doorstep.
        </p>
        <p style={{ fontSize: "clamp(13px, 2vw, 16px)", color: "#7dd3fc", marginBottom: 40 }}>
          🌊 100% Fresh &nbsp;•&nbsp; 🚚 Home Delivery &nbsp;•&nbsp; 📞 Call &amp; Order
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={`https://wa.me/91${PHONE}?text=Hi! I'd like to place an order.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#22c55e",
              color: "white",
              padding: "14px 32px",
              borderRadius: 32,
              fontWeight: 800,
              fontSize: 17,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 4px 15px rgba(34,197,94,0.4)",
              transition: "transform 0.2s",
            }}
          >
            💬 Order on WhatsApp
          </a>
          <Link
            href="/menu"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "white",
              padding: "14px 32px",
              borderRadius: 32,
              fontWeight: 700,
              fontSize: 17,
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.4)",
            }}
          >
            View Menu
          </Link>
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 20px", fontSize: 14, color: "#e0f2fe" }}>
            📞 Call: <strong>6366007222</strong>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 20px", fontSize: 14, color: "#e0f2fe" }}>
            🕐 Open: 7 AM – 8 PM
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 20px", fontSize: 14, color: "#e0f2fe" }}>
            🚚 Free Delivery Nearby
          </div>
        </div>
      </div>
    </section>
  );
}
