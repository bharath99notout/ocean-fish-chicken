import Link from "next/link";

const fishItems = [
  { name: "Rohu (Rohu Fish)", price: "₹180/kg", emoji: "🐟" },
  { name: "Pomfret (Paplet)", price: "₹450/kg", emoji: "🐠" },
  { name: "King Fish (Surmai)", price: "₹550/kg", emoji: "🐡" },
  { name: "Prawns (Jhinga)", price: "₹400/kg", emoji: "🦐" },
];

const chickenItems = [
  { name: "Whole Chicken", price: "₹180/kg", emoji: "🐔" },
  { name: "Curry Cut", price: "₹200/kg", emoji: "🍗" },
  { name: "Boneless Chicken", price: "₹280/kg", emoji: "🍖" },
  { name: "Chicken Keema", price: "₹260/kg", emoji: "🥩" },
];

function ItemCard({ item }: { item: { name: string; price: string; emoji: string } }) {
  const PHONE = "6366007222";
  return (
    <div style={{
      background: "white",
      borderRadius: 14,
      padding: "20px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      border: "1px solid #f1f5f9",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 32 }}>{item.emoji}</span>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#1e293b" }}>{item.name}</div>
          <div style={{ color: "#0369a1", fontWeight: 700, fontSize: 16, marginTop: 2 }}>{item.price}</div>
        </div>
      </div>
      <a
        href={`https://wa.me/916366007222?text=Hi! I want to order ${item.name}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#0369a1",
          color: "white",
          padding: "7px 14px",
          borderRadius: 20,
          fontSize: 13,
          fontWeight: 700,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        Order
      </a>
    </div>
  );
}

export default function MenuPreview() {
  return (
    <section style={{ padding: "60px 20px", background: "white" }} id="menu">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 800, color: "#0c4a6e", marginBottom: 8 }}>
          Our Menu
        </h2>
        <p style={{ textAlign: "center", color: "#64748b", marginBottom: 48, fontSize: 16 }}>
          Fresh items available daily — prices may vary by season
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40 }}>
          {/* Fish Section */}
          <div>
            <h3 style={{
              fontSize: 22, fontWeight: 800, color: "white", marginBottom: 20,
              background: "linear-gradient(135deg, #0369a1, #0c4a6e)",
              padding: "12px 20px", borderRadius: 12, display: "flex", alignItems: "center", gap: 10
            }}>
              🐟 Fresh Fish
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {fishItems.map((item) => <ItemCard key={item.name} item={item} />)}
            </div>
          </div>

          {/* Chicken Section */}
          <div>
            <h3 style={{
              fontSize: 22, fontWeight: 800, color: "white", marginBottom: 20,
              background: "linear-gradient(135deg, #b45309, #92400e)",
              padding: "12px 20px", borderRadius: 12, display: "flex", alignItems: "center", gap: 10
            }}>
              🍗 Fresh Chicken
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {chickenItems.map((item) => <ItemCard key={item.name} item={item} />)}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link
            href="/menu"
            style={{
              background: "#0369a1",
              color: "white",
              padding: "14px 36px",
              borderRadius: 32,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
