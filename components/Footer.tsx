import Link from "next/link";

const PHONE = "6366007222";

export default function Footer() {
  return (
    <footer style={{ background: "#0a2a3d", color: "#94a3b8", padding: "40px 20px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginBottom: 32 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 28 }}>🐟</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, color: "white" }}>Costal Fresh Fish &amp; Chicken</div>
                <div style={{ fontSize: 11, color: "#7dd3fc", letterSpacing: 2 }}>FRESH DAILY</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#94a3b8" }}>
              Fresh fish and chicken delivered fresh daily to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, marginBottom: 14, fontSize: 15 }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Home</Link>
              <Link href="/menu" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Menu</Link>
              <Link href="/contact" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, marginBottom: 14, fontSize: 15 }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href={`tel:${PHONE}`} style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, display: "flex", gap: 8 }}>
                📞 {PHONE}
              </a>
              <a
                href={`https://wa.me/91${PHONE}?text=Hi! I'd like to place an order.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, display: "flex", gap: 8 }}
              >
                💬 WhatsApp Order
              </a>
              <div style={{ fontSize: 14, display: "flex", gap: 8 }}>🕐 7 AM – 8 PM Daily</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e3a4e", paddingTop: 20, textAlign: "center", fontSize: 13, color: "#475569" }}>
          © 2026 Costal Fresh Fish &amp; Chicken. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
