const features = [
  { icon: "🌊", title: "100% Fresh", desc: "Sourced fresh every morning. No frozen stock." },
  { icon: "🚚", title: "Home Delivery", desc: "We come to your door. No need to visit the market." },
  { icon: "⚖️", title: "Honest Weight", desc: "Accurate weighing every time. No shortcuts." },
  { icon: "🧹", title: "Clean Cutting", desc: "Hygienic cleaning and cutting done on request." },
  { icon: "💰", title: "Best Price", desc: "Competitive market prices. No hidden charges." },
  { icon: "📱", title: "Easy Ordering", desc: "Just WhatsApp or call us. Super simple." },
];

export default function WhyUs() {
  return (
    <section style={{ background: "#f0f9ff", padding: "60px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 800, color: "#0c4a6e", marginBottom: 8 }}>
          Why Choose Us?
        </h2>
        <p style={{ textAlign: "center", color: "#64748b", marginBottom: 48, fontSize: 16 }}>
          We bring the freshest catch straight to your kitchen
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "white",
                borderRadius: 16,
                padding: "28px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                border: "1px solid #e0f2fe",
              }}
            >
              <span style={{ fontSize: 36, flexShrink: 0 }}>{f.icon}</span>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#0c4a6e", marginBottom: 6 }}>{f.title}</h3>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
