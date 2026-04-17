const PHONE = "6366007222";

const fishItems = [
  { name: "Rohu (Rohu Fish)", price: "₹180/kg", emoji: "🐟", desc: "Popular freshwater fish, great for curry" },
  { name: "Katla Fish", price: "₹160/kg", emoji: "🐟", desc: "Freshwater carp, soft and tasty" },
  { name: "Pomfret (Paplet)", price: "₹450/kg", emoji: "🐠", desc: "Delicious sea fish, perfect for fry" },
  { name: "King Fish (Surmai)", price: "₹550/kg", emoji: "🐡", desc: "Premium quality, boneless & tasty" },
  { name: "Prawns (Jhinga)", price: "₹400/kg", emoji: "🦐", desc: "Fresh prawns, cleaned on request" },
  { name: "Bangda (Mackerel)", price: "₹220/kg", emoji: "🐟", desc: "Rich in omega-3, great for grill/fry" },
  { name: "Tilapia", price: "₹150/kg", emoji: "🐠", desc: "Mild flavored, good for all recipes" },
  { name: "Squid / Calamari", price: "₹350/kg", emoji: "🦑", desc: "Cleaned and ready to cook" },
];

const chickenItems = [
  { name: "Whole Chicken", price: "₹180/kg", emoji: "🐔", desc: "Full bird, cleaned and dressed" },
  { name: "Curry Cut", price: "₹200/kg", emoji: "🍗", desc: "Cut into pieces for curry" },
  { name: "Boneless Chicken", price: "₹280/kg", emoji: "🍖", desc: "Clean boneless pieces, great for biryani" },
  { name: "Chicken Keema", price: "₹260/kg", emoji: "🥩", desc: "Freshly minced chicken" },
  { name: "Tandoori Cut", price: "₹210/kg", emoji: "🍗", desc: "Special cut for tandoori/BBQ" },
  { name: "Liver & Gizzard", price: "₹120/kg", emoji: "🫀", desc: "Fresh chicken organs" },
  { name: "Chicken Wings", price: "₹200/kg", emoji: "🍗", desc: "Perfect for fry or BBQ" },
  { name: "Chicken Legs", price: "₹220/kg", emoji: "🦵", desc: "Full leg pieces, tender & juicy" },
];

function MenuItem({ item }: { item: { name: string; price: string; emoji: string; desc: string } }) {
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
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <span style={{ fontSize: 36, flexShrink: 0 }}>{item.emoji}</span>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#1e293b" }}>{item.name}</div>
          <div style={{ color: "#64748b", fontSize: 13, marginTop: 3, lineHeight: 1.5 }}>{item.desc}</div>
          <div style={{ color: "#0369a1", fontWeight: 800, fontSize: 17, marginTop: 4 }}>{item.price}</div>
        </div>
      </div>
      <a
        href={`https://wa.me/91${PHONE}?text=Hi! I want to order ${item.name}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#22c55e",
          color: "white",
          padding: "8px 16px",
          borderRadius: 20,
          fontSize: 13,
          fontWeight: 700,
          textDecoration: "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        💬 Order
      </a>
    </div>
  );
}

export default function MenuPage() {
  return (
    <div>
      {/* Banner */}
      <div style={{
        background: "linear-gradient(135deg, #0c4a6e, #0369a1)",
        color: "white",
        padding: "48px 20px",
        textAlign: "center",
      }}>
        <h1 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 900, marginBottom: 10 }}>Our Menu</h1>
        <p style={{ color: "#bae6fd", fontSize: 16 }}>Fresh stock available daily. Prices may vary by season.</p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 20px" }}>
        {/* Fish Section */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{
            fontSize: 26, fontWeight: 800, color: "white", marginBottom: 24,
            background: "linear-gradient(135deg, #0369a1, #0c4a6e)",
            padding: "14px 24px", borderRadius: 14, display: "inline-flex", alignItems: "center", gap: 10
          }}>
            🐟 Fresh Fish
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {fishItems.map((item) => <MenuItem key={item.name} item={item} />)}
          </div>
        </div>

        {/* Chicken Section */}
        <div>
          <h2 style={{
            fontSize: 26, fontWeight: 800, color: "white", marginBottom: 24,
            background: "linear-gradient(135deg, #b45309, #92400e)",
            padding: "14px 24px", borderRadius: 14, display: "inline-flex", alignItems: "center", gap: 10
          }}>
            🍗 Fresh Chicken
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {chickenItems.map((item) => <MenuItem key={item.name} item={item} />)}
          </div>
        </div>

        {/* Note */}
        <div style={{
          marginTop: 48,
          background: "#fef3c7",
          border: "1px solid #fcd34d",
          borderRadius: 14,
          padding: "20px 24px",
          textAlign: "center",
        }}>
          <p style={{ color: "#92400e", fontWeight: 600, fontSize: 15 }}>
            📝 Note: Prices may vary based on market rates. Call or WhatsApp us for today's price.
          </p>
          <a
            href={`https://wa.me/91${PHONE}?text=Hi! What is today's price list?`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: 12,
              background: "#0369a1",
              color: "white",
              padding: "10px 24px",
              borderRadius: 24,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Get Today's Price →
          </a>
        </div>
      </div>
    </div>
  );
}
