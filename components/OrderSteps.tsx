const steps = [
  { step: "1", icon: "📱", title: "WhatsApp or Call Us", desc: "Send us a message or call on 6366007222 with your order" },
  { step: "2", icon: "📋", title: "Tell Us What You Need", desc: "Share the items and quantity you want. We confirm availability." },
  { step: "3", icon: "🚚", title: "We Come to You", desc: "We deliver fresh to your doorstep at the agreed time." },
  { step: "4", icon: "😊", title: "Enjoy Fresh Food!", desc: "Pay on delivery. No advance needed for regular orders." },
];

export default function OrderSteps() {
  const PHONE = "6366007222";
  return (
    <section style={{ background: "#0c4a6e", padding: "60px 20px", color: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 800, marginBottom: 8 }}>
          How to Order
        </h2>
        <p style={{ textAlign: "center", color: "#7dd3fc", marginBottom: 48, fontSize: 16 }}>
          Super simple — 4 easy steps!
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
          marginBottom: 48,
        }}>
          {steps.map((s) => (
            <div key={s.step} style={{ textAlign: "center" }}>
              <div style={{
                width: 60, height: 60, borderRadius: "50%",
                background: "#0369a1",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px",
                fontSize: 28,
                border: "3px solid #7dd3fc",
              }}>
                {s.icon}
              </div>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>{s.title}</div>
              <p style={{ color: "#bae6fd", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
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
            }}
          >
            💬 WhatsApp Us Now
          </a>
          <a
            href={`tel:${PHONE}`}
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "white",
              padding: "14px 32px",
              borderRadius: 32,
              fontWeight: 700,
              fontSize: 17,
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.4)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
