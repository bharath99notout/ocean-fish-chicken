import Link from "next/link";
import { fishItems, chickenItems } from "@/lib/menuData";
import MenuCard from "./MenuCard";

const previewFish = fishItems.slice(0, 4);
const previewChicken = chickenItems.slice(0, 4);

export default function MenuPreview() {
  return (
    <section style={{ padding: "60px 20px", background: "white" }} id="menu">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 800, color: "#0c4a6e", marginBottom: 8 }}>
          Popular Items
        </h2>
        <p style={{ textAlign: "center", color: "#64748b", marginBottom: 12, fontSize: 16 }}>
          Add items to cart — order gets sent to WhatsApp automatically!
        </p>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ display: "inline-flex", gap: 8, background: "#dcfce7", borderRadius: 24, padding: "8px 20px", fontSize: 14, color: "#15803d", fontWeight: 600 }}>
            🏷️ 20% cheaper than Licious &amp; FreshToHome
          </span>
        </div>

        {/* Fish */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0c4a6e", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            🐟 Fresh Fish
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
            {previewFish.map((item) => <MenuCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* Chicken */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: "#92400e", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            🍗 Fresh Chicken
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
            {previewChicken.map((item) => <MenuCard key={item.id} item={item} />)}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/menu"
            style={{
              background: "#0369a1", color: "white",
              padding: "14px 36px", borderRadius: 32,
              fontWeight: 700, fontSize: 16, textDecoration: "none",
              display: "inline-block",
            }}
          >
            View All {fishItems.length + chickenItems.length} Items →
          </Link>
        </div>
      </div>
    </section>
  );
}
