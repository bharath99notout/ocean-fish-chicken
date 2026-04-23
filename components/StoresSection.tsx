const PHONE = "6366007222";

const STORES = [
  {
    label:    "Store 1 — RT Nagar",
    icon:     "📍",
    address:  "Near RT Nagar Police Station,\nDinnur Main Rd, P&T Colony,\nRT Nagar, Bengaluru – 560032",
    maps:     "https://maps.google.com/?q=RT+Nagar+Police+Station,+Dinnur+Main+Rd,+RT+Nagar,+Bengaluru+560032",
  },
  {
    label:    "Store 2 — Hosa Road",
    icon:     "📍",
    address:  "Chikkathogur Main Rd,\nPragathi Nagar, Electronic City,\nBengaluru – 560100",
    maps:     "https://maps.google.com/?q=Chikkathogur+Main+Rd,+Pragathi+Nagar,+Electronic+City,+Bengaluru+560100",
  },
];

export default function StoresSection() {
  return (
    <section style={{ background: "#f0f9ff", padding: "52px 20px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#0c4a6e", margin: "0 0 8px" }}>
            Our Stores
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, margin: 0 }}>
            Visit us at any of our outlets — fresh catch every morning
          </p>
        </div>

        {/* Existing Stores */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 24 }}>
          {STORES.map((store) => (
            <div
              key={store.label}
              style={{
                background: "white", borderRadius: 16,
                padding: "22px 20px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                border: "1px solid #bae6fd",
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 800, color: "#0369a1", marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>
                {store.label}
              </div>
              <p style={{ fontSize: 14, color: "#334155", lineHeight: 1.7, whiteSpace: "pre-line", margin: "0 0 14px" }}>
                {store.icon} {store.address}
              </p>
              <a
                href={store.maps}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 13, fontWeight: 700, color: "#0369a1",
                  textDecoration: "none",
                  background: "#eff6ff", padding: "6px 14px",
                  borderRadius: 20, border: "1px solid #bfdbfe",
                }}
              >
                🗺️ Get Directions
              </a>
            </div>
          ))}
        </div>

        {/* Coming Soon — Gattahalli */}
        <div style={{
          background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)",
          borderRadius: 16, padding: "22px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16, marginBottom: 28,
          boxShadow: "0 4px 20px rgba(12,74,110,0.25)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              background: "rgba(255,255,255,0.15)", borderRadius: 12,
              padding: "10px 14px", fontSize: 28,
            }}>🚀</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#7dd3fc", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>
                Coming Soon
              </div>
              <div style={{ fontSize: 18, fontWeight: 900, color: "white" }}>
                New Outlet — Gattahalli
              </div>
              <div style={{ fontSize: 13, color: "#bae6fd", marginTop: 2 }}>
                Our 3rd store is launching soon in the Gattahalli area!
              </div>
            </div>
          </div>
          <span style={{
            background: "#fbbf24", color: "#78350f",
            padding: "6px 16px", borderRadius: 20,
            fontWeight: 800, fontSize: 13,
          }}>
            🎉 Stay Tuned
          </span>
        </div>

        {/* Bulk Orders */}
        <div style={{
          background: "white", borderRadius: 16,
          border: "2px dashed #fed7aa",
          padding: "20px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 14,
        }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#c2410c", marginBottom: 4 }}>
              🧺 Bulk Orders?
            </div>
            <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>
              Restaurants, caterers & large orders — we've got you covered with special pricing.
            </p>
          </div>
          <a
            href={`tel:${PHONE}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#ea580c", color: "white",
              padding: "12px 22px", borderRadius: 12,
              fontWeight: 800, fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(234,88,12,0.3)",
              whiteSpace: "nowrap",
            }}
          >
            📞 Call {PHONE}
          </a>
        </div>

      </div>
    </section>
  );
}
