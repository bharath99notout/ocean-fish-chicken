import { fishItems, chickenItems } from "@/lib/menuData";
import MenuCard from "@/components/MenuCard";

export default function MenuPage() {
  return (
    <div>
      {/* Banner */}
      <div style={{
        background: "linear-gradient(135deg, #0c4a6e, #0369a1)",
        color: "white", padding: "48px 20px", textAlign: "center",
      }}>
        <h1 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 900, marginBottom: 10 }}>Our Menu</h1>
        <p style={{ color: "#bae6fd", fontSize: 16, marginBottom: 6 }}>
          Fresh stock daily • Prices 20% less than Licious & FreshToHome
        </p>
        <div style={{ display: "inline-flex", gap: 10, background: "rgba(255,255,255,0.12)", borderRadius: 24, padding: "8px 20px", fontSize: 14, color: "#e0f2fe" }}>
          🏷️ All prices shown are already 20% below market app prices
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px" }}>
        {/* Fish Section */}
        <div style={{ marginBottom: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <h2 style={{
              fontSize: 26, fontWeight: 800, color: "white", margin: 0,
              background: "linear-gradient(135deg, #0369a1, #0c4a6e)",
              padding: "12px 24px", borderRadius: 14,
            }}>
              🐟 Fresh Fish
            </h2>
            <span style={{ fontSize: 14, color: "#64748b", background: "#f0f9ff", padding: "6px 14px", borderRadius: 20, border: "1px solid #bae6fd" }}>
              {fishItems.length} varieties available
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {fishItems.map((item) => <MenuCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* Chicken Section */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <h2 style={{
              fontSize: 26, fontWeight: 800, color: "white", margin: 0,
              background: "linear-gradient(135deg, #b45309, #92400e)",
              padding: "12px 24px", borderRadius: 14,
            }}>
              🍗 Fresh Chicken
            </h2>
            <span style={{ fontSize: 14, color: "#64748b", background: "#fffbeb", padding: "6px 14px", borderRadius: 20, border: "1px solid #fcd34d" }}>
              {chickenItems.length} varieties available
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {chickenItems.map((item) => <MenuCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* Note */}
        <div style={{
          marginTop: 48, background: "#fef3c7", border: "1px solid #fcd34d",
          borderRadius: 14, padding: "20px 24px", textAlign: "center",
        }}>
          <p style={{ color: "#92400e", fontWeight: 600, fontSize: 15, margin: 0 }}>
            📝 Prices may vary based on season & market rates. Add items to cart and WhatsApp us to confirm availability.
          </p>
        </div>
      </div>
    </div>
  );
}
