"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const PHONE = "6366007222";

  return (
    <nav style={{ background: "#0c4a6e", color: "white", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28 }}>🐟</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: "white", lineHeight: 1.2 }}>Ocean Fish & Chicken</div>
            <div style={{ fontSize: 11, color: "#7dd3fc", letterSpacing: 1 }}>ON WHEELS</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="hidden-mobile">
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 500, fontSize: 15 }}>Home</Link>
          <Link href="/menu" style={{ color: "white", textDecoration: "none", fontWeight: 500, fontSize: 15 }}>Menu</Link>
          <Link href="/contact" style={{ color: "white", textDecoration: "none", fontWeight: 500, fontSize: 15 }}>Contact</Link>
          <a
            href={`https://wa.me/91${PHONE}?text=Hi! I'd like to place an order.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#22c55e", color: "white", padding: "8px 18px", borderRadius: 24, fontWeight: 700, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
          >
            <span>💬</span> Order Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "white", fontSize: 26, cursor: "pointer" }}
          className="show-mobile"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
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
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
