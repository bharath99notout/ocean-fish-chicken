"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/cartContext";
import type { MenuItem } from "@/lib/menuData";

export default function MenuCard({ item }: { item: MenuItem }) {
  const { addToCart, cart } = useCart();
  const [selectedIdx, setSelectedIdx] = useState(0);

  const selectedPack = item.packs[selectedIdx];
  const savings = Math.round(((selectedPack.mrp - selectedPack.price) / selectedPack.mrp) * 100);

  const cartEntry = cart.find(
    (c) => c.item.id === item.id && c.pack.grams === selectedPack.grams
  );

  const tagColor =
    item.tag === "Best Seller" ? "#f59e0b"
    : item.tag === "Premium"   ? "#8b5cf6"
    : item.tag === "Popular"   ? "#3b82f6"
    : "#22c55e";

  return (
    <div style={{
      background: "white",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
      border: "1px solid #f1f5f9",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}>
      {/* Tag */}
      {item.tag && (
        <div style={{
          position: "absolute", top: 10, left: 10, zIndex: 2,
          background: tagColor,
          color: "white", padding: "3px 10px", borderRadius: 20,
          fontSize: 11, fontWeight: 700,
        }}>
          ⭐ {item.tag}
        </div>
      )}

      {/* Savings Badge */}
      <div style={{
        position: "absolute", top: 10, right: 10, zIndex: 2,
        background: "#16a34a", color: "white",
        padding: "4px 10px", borderRadius: 20,
        fontSize: 11, fontWeight: 800,
      }}>
        {savings}% OFF
      </div>

      {/* Image */}
      <div style={{ position: "relative", height: 180, background: "#f8fafc", flexShrink: 0 }}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, 300px"
        />
      </div>

      {/* Content */}
      <div style={{ padding: "14px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Name */}
        <div>
          <h3 style={{ fontWeight: 800, fontSize: 15, color: "#1e293b", margin: 0, lineHeight: 1.3 }}>
            {item.name}
          </h3>
          <p style={{ fontSize: 11, color: "#94a3b8", margin: "3px 0 0", fontStyle: "italic" }}>
            {item.nameLocal}
          </p>
        </div>

        <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.5, margin: 0, flex: 1 }}>
          {item.desc}
        </p>

        {/* ── Pack Size Selector (Licious / FreshToHome style) ── */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#64748b", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 0.5 }}>
            Select Pack Size
          </p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {item.packs.map((pack, idx) => {
              const isSelected = idx === selectedIdx;
              const packSavings = Math.round(((pack.mrp - pack.price) / pack.mrp) * 100);
              return (
                <button
                  key={pack.grams}
                  onClick={() => setSelectedIdx(idx)}
                  style={{
                    border: isSelected ? "2px solid #0369a1" : "2px solid #e2e8f0",
                    background: isSelected ? "#eff6ff" : "white",
                    borderRadius: 10,
                    padding: "6px 10px",
                    cursor: "pointer",
                    textAlign: "left",
                    minWidth: 72,
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 700, color: isSelected ? "#0369a1" : "#334155" }}>
                    {pack.label}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: isSelected ? "#0369a1" : "#1e293b" }}>
                    ₹{pack.price}
                  </div>
                  <div style={{ fontSize: 10, color: "#94a3b8", textDecoration: "line-through" }}>
                    ₹{pack.mrp}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Pack Price */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 22, fontWeight: 900, color: "#0369a1" }}>₹{selectedPack.price}</span>
          <span style={{ fontSize: 13, color: "#94a3b8", textDecoration: "line-through" }}>₹{selectedPack.mrp}</span>
          <span style={{
            background: "#dcfce7", color: "#15803d",
            fontSize: 11, fontWeight: 700,
            padding: "2px 8px", borderRadius: 10,
          }}>
            Save ₹{selectedPack.mrp - selectedPack.price}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(item, selectedPack)}
          style={{
            width: "100%",
            background: cartEntry ? "#15803d" : "#0c4a6e",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: 12,
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {cartEntry ? (
            <><span>✓</span> Added ({cartEntry.count} × {selectedPack.label})</>
          ) : (
            <><span>🛒</span> Add to Cart</>
          )}
        </button>
      </div>
    </div>
  );
}
