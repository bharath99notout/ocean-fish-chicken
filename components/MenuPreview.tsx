import Link from "next/link";
import { seaFishItems, freshwaterFishItems, chickenItems } from "@/lib/menuData";
import MenuCard from "./MenuCard";

export default function MenuPreview() {
  const previewSea   = seaFishItems.slice(0, 4);
  const previewFresh = freshwaterFishItems.slice(0, 2);
  const previewChicken = chickenItems.slice(0, 2);
  const totalItems = seaFishItems.length + freshwaterFishItems.length + chickenItems.length;

  return (
    <section style={{ padding: "60px 20px", background: "white" }} id="menu">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800, color: "#0c4a6e", marginBottom: 8 }}>
          Popular Items
        </h2>
        <p style={{ textAlign: "center", color: "#64748b", marginBottom: 12, fontSize: 15 }}>
          Select pack size → Add to Cart → Send order on WhatsApp automatically!
        </p>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ display: "inline-flex", gap: 8, background: "#dcfce7", borderRadius: 24, padding: "8px 20px", fontSize: 14, color: "#15803d", fontWeight: 700 }}>
            🏷️ 30% cheaper than Licious
          </span>
        </div>

        {/* Sea Fish */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0c4a6e", marginBottom: 18, display: "flex", alignItems: "center", gap: 8 }}>
            🌊 Ocean & Sea Fish
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 18 }}>
            {previewSea.map((item) => <MenuCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* Freshwater + Chicken preview row */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0e7490", marginBottom: 18, display: "flex", alignItems: "center", gap: 8 }}>
            🏞️ River Fish &nbsp;&nbsp; 🍗 Chicken
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 18 }}>
            {[...previewFresh, ...previewChicken].map((item) => <MenuCard key={item.id} item={item} />)}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/menu" style={{
            background: "#0369a1", color: "white",
            padding: "14px 36px", borderRadius: 32,
            fontWeight: 700, fontSize: 16, textDecoration: "none",
            display: "inline-block",
          }}>
            View All {totalItems} Items →
          </Link>
        </div>
      </div>
    </section>
  );
}
