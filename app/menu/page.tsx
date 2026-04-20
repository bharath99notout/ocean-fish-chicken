import { seaFishItems, freshwaterFishItems, chickenItems } from "@/lib/menuData";
import MenuCard from "@/components/MenuCard";

const comparisonRows = [
  { name: "Seer Fish / Surmai",   licious: 999,  fth: 1205, ours: 699,  per: "500g" },
  { name: "White Pomfret",        licious: 1249, fth: 809,  ours: 874,  per: "500g" },
  { name: "Tiger Prawns",         licious: 999,  fth: 569,  ours: 699,  per: "500g" },
  { name: "Bangda / Mackerel",    licious: 219,  fth: 229,  ours: 153,  per: "500g" },
  { name: "Catla Fish",           licious: 209,  fth: 159,  ours: 146,  per: "500g" },
  { name: "Chicken Curry Cut",    licious: 185,  fth: null, ours: 130,  per: "500g" },
  { name: "Boneless Chicken",     licious: 377,  fth: null, ours: 264,  per: "500g" },
];

function SectionHeader({ emoji, title, count, color }: { emoji: string; title: string; count: number; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
      <h2 style={{
        fontSize: 24, fontWeight: 800, color: "white", margin: 0,
        background: color, padding: "12px 22px", borderRadius: 14,
        display: "inline-flex", alignItems: "center", gap: 10,
      }}>
        {emoji} {title}
      </h2>
      <span style={{
        fontSize: 13, color: "#64748b", background: "#f8fafc",
        padding: "6px 14px", borderRadius: 20, border: "1px solid #e2e8f0", fontWeight: 600,
      }}>
        {count} varieties
      </span>
    </div>
  );
}

export default function MenuPage() {
  return (
    <div>
      {/* Banner */}
      <div style={{
        background: "linear-gradient(135deg, #0c4a6e, #0369a1)",
        color: "white", padding: "44px 20px", textAlign: "center",
      }}>
        <h1 style={{ fontSize: "clamp(22px, 5vw, 40px)", fontWeight: 900, marginBottom: 10 }}>
          Our Menu
        </h1>
        <p style={{ color: "#bae6fd", fontSize: 15, marginBottom: 12 }}>
          Fresh stock daily • Cleaned on request • Home delivery
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#15803d", borderRadius: 24, padding: "8px 20px", fontSize: 14, color: "white", fontWeight: 700 }}>
          🏷️ 30% cheaper than Licious — See comparison below
        </div>
      </div>

      {/* ── Price Comparison Table ── */}
      <div style={{ background: "#f0f9ff", padding: "36px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 22, fontWeight: 800, color: "#0c4a6e", marginBottom: 6 }}>
            💰 Price Comparison (per 500g pack)
          </h2>
          <p style={{ textAlign: "center", color: "#64748b", fontSize: 14, marginBottom: 20 }}>
            Compare our prices with Licious &amp; FreshToHome
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <thead>
                <tr style={{ background: "#0c4a6e", color: "white" }}>
                  <th style={{ padding: "14px 16px", textAlign: "left", fontSize: 13, fontWeight: 700 }}>Item</th>
                  <th style={{ padding: "14px 16px", textAlign: "center", fontSize: 13, fontWeight: 700 }}>🔴 Licious</th>
                  <th style={{ padding: "14px 16px", textAlign: "center", fontSize: 13, fontWeight: 700 }}>🟠 FreshToHome</th>
                  <th style={{ padding: "14px 16px", textAlign: "center", fontSize: 13, fontWeight: 700, background: "#15803d" }}>🟢 Ours</th>
                  <th style={{ padding: "14px 16px", textAlign: "center", fontSize: 13, fontWeight: 700, background: "#15803d" }}>vs Licious</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => {
                  const savingVsLicious = row.licious - row.ours;
                  return (
                    <tr key={row.name} style={{ background: i % 2 === 0 ? "white" : "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 700, fontSize: 14, color: "#1e293b" }}>
                        {row.name}
                      </td>
                      <td style={{ padding: "12px 16px", textAlign: "center", fontSize: 14, color: "#94a3b8", textDecoration: "line-through" }}>
                        ₹{row.licious}
                      </td>
                      <td style={{ padding: "12px 16px", textAlign: "center", fontSize: 14, color: "#64748b" }}>
                        {row.fth ? `₹${row.fth}` : "—"}
                      </td>
                      <td style={{ padding: "12px 16px", textAlign: "center", fontWeight: 900, fontSize: 16, color: "#15803d" }}>
                        ₹{row.ours}
                      </td>
                      <td style={{ padding: "12px 16px", textAlign: "center" }}>
                        <span style={{ background: "#dcfce7", color: "#15803d", padding: "3px 10px", borderRadius: 12, fontSize: 13, fontWeight: 700 }}>
                          ₹{savingVsLicious} less
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p style={{ textAlign: "center", fontSize: 12, color: "#94a3b8", marginTop: 12 }}>
            * Prices may vary by season & availability. Licious &amp; FreshToHome prices as of April 2026.
          </p>
        </div>
      </div>

      {/* ── Menu Items ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px" }}>

        {/* 1. Ocean & Sea Fish */}
        <div style={{ marginBottom: 60 }}>
          <SectionHeader emoji="🌊" title="Ocean & Sea Fish" count={seaFishItems.length} color="linear-gradient(135deg, #0369a1, #0c4a6e)" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))", gap: 20 }}>
            {seaFishItems.map((item) => <MenuCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* 2. River & Pond Fish */}
        <div style={{ marginBottom: 60 }}>
          <SectionHeader emoji="🏞️" title="River & Pond Fish" count={freshwaterFishItems.length} color="linear-gradient(135deg, #0891b2, #0e7490)" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))", gap: 20 }}>
            {freshwaterFishItems.map((item) => <MenuCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* 3. Chicken */}
        <div>
          <SectionHeader emoji="🍗" title="Fresh Chicken" count={chickenItems.length} color="linear-gradient(135deg, #b45309, #92400e)" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))", gap: 20 }}>
            {chickenItems.map((item) => <MenuCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* Note */}
        <div style={{
          marginTop: 48, background: "#fef3c7", border: "1px solid #fcd34d",
          borderRadius: 14, padding: "18px 24px", textAlign: "center",
        }}>
          <p style={{ color: "#92400e", fontWeight: 600, fontSize: 14, margin: 0 }}>
            📝 Prices may vary by season & market rates. Add to cart and WhatsApp us to confirm today's availability.
          </p>
        </div>
      </div>
    </div>
  );
}
