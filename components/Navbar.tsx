"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const PHONE = "6366007222";

  return (
    <nav style={{ background: "#0c4a6e", color: "white", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28 }}>🐟</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: "white", lineHeight: 1.2 }}>Costal Fresh Fish &amp; Chicken</div>
            <div style={{ fontSize: 11, color: "#7dd3fc", letterSpacing: 1 }}>FRESH DAILY</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: 24, alignItems: "center" }} className="hidden-mobile">
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 500, fontSize: 15 }}>Home</Link>
          <Link href="/menu" style={{ color: "white", textDecoration: "none", fontWeight: 500, fontSize: 15 }}>Menu</Link>
          <Link href="/contact" style={{ color: "white", textDecoration: "none", fontWeight: 500, fontSize: 15 }}>Contact</Link>

          {/* Cart Button */}
          <button
            onClick={() => setIsOpen(true)}
            style={{
              background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)",
              color: "white", padding: "8px 16px", borderRadius: 24,
              fontWeight: 700, fontSize: 14, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 6, position: "relative",
            }}
          >
            🛒 Cart
            {totalItems > 0 && (
              <span style={{
                background: "#f59e0b", color: "white",
                borderRadius: "50%", width: 20, height: 20,
                fontSize: 11, fontWeight: 800,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {totalItems}
              </span>
            )}
          </button>

          <a
            href={`https://wa.me/91${PHONE}?text=Hi! I'd like to place an order.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#22c55e", color: "white", padding: "8px 18px", borderRadius: 24, fontWeight: 700, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
          >
            💬 Order Now
          </a>
        </div>

        {/* Mobile: Cart + Hamburger */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }} className="show-mobile">
          <button
            onClick={() => setIsOpen(true)}
            style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "white", padding: "8px 12px", borderRadius: 20, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, position: "relative" }}
          >
            🛒
            {totalItems > 0 && (
              <span style={{ background: "#f59e0b", color: "white", borderRadius: "50%", width: 18, height: 18, fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "white", fontSize: 26, cursor: "pointer" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "#075985", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ color: "white", textDecoration: "none", fontSize: 16, fontWeight: 500 }}>Home</Link>
          <Link href="/menu" onClick={() => setMenuOpen(false)} style={{ color: "white", textDecoration: "none", fontSize: 16, fontWeight: 500 }}>Menu</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ color: "white", textDecoration: "none", fontSize: 16, fontWeight: 500 }}>Contact</Link>
          <a
            href={`https://wa.me/91${PHONE}?text=Hi! I'd like to place an order.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#22c55e", color: "white", padding: "10px 18px", borderRadius: 24, fontWeight: 700, fontSize: 15, textDecoration: "none", textAlign: "center" }}
          >
            💬 Order on WhatsApp
          </a>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
