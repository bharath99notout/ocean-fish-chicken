export interface PackOption {
  grams: number;
  label: string;
  price: number;   // our price (30% off Licious)
  mrp: number;     // Licious MRP
}

export interface MenuItem {
  id: string;
  name: string;
  nameLocal: string;
  category: "fish" | "chicken";
  section: "sea" | "freshwater" | "chicken";
  image: string;
  desc: string;
  tag?: string;
  packs: PackOption[];
  freshToHomePer500g?: number;  // FreshToHome reference price per 500g
}

// ─── OCEAN & SEA FISH ────────────────────────────────────────────────────────
// Prices: Licious MRP → 30% off = Our Price
export const seaFishItems: MenuItem[] = [
  {
    id: "surmai",
    name: "Seer Fish (Surmai)",
    nameLocal: "King Fish / Vanjaram / Neymeen",
    category: "fish",
    section: "sea",
    image: "https://static.freshtohome.com/media/catalog/product/s/e/seer_fish_whole.jpg",
    desc: "Premium king fish — meaty, boneless-friendly steaks. Best for fry & curry",
    tag: "Best Seller",
    freshToHomePer500g: 1205,
    packs: [
      { grams: 500,  label: "500 g", mrp: 999,  price: 699  },
      { grams: 1000, label: "1 kg",  mrp: 1998, price: 1399 },
    ],
  },
  {
    id: "pomfret",
    name: "White Pomfret",
    nameLocal: "Paplet / Avoli / Halwa",
    category: "fish",
    section: "sea",
    image: "https://static.freshtohome.com/media/catalog/product/s/i/silver_pomfret_1.jpg",
    desc: "Delicate white flesh, mild taste. Perfect for tawa fry & coconut curry",
    tag: "Premium",
    freshToHomePer500g: 809,
    packs: [
      { grams: 500,  label: "500 g", mrp: 1249, price: 874 },
      { grams: 1000, label: "1 kg",  mrp: 2498, price: 1748 },
    ],
  },
  {
    id: "rawas",
    name: "Indian Salmon (Rawas)",
    nameLocal: "Raavas / Threadfin Salmon",
    category: "fish",
    section: "sea",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=350&fit=crop&auto=format",
    desc: "Rich, oily fish loaded with omega-3. Great for fry, curry & steaming",
    packs: [
      { grams: 500,  label: "500 g", mrp: 749,  price: 524 },
      { grams: 1000, label: "1 kg",  mrp: 1498, price: 1049 },
    ],
  },
  {
    id: "tiger-prawns",
    name: "Tiger Prawns (Large)",
    nameLocal: "Jhinga / Chemmeen / Kolambi",
    category: "fish",
    section: "sea",
    image: "https://static.freshtohome.com/media/catalog/product/t/i/tiger_prawn_30_1.jpg",
    desc: "Jumbo tiger prawns, cleaned & deveined on request. Great for masala & fry",
    tag: "Popular",
    freshToHomePer500g: 569,
    packs: [
      { grams: 250,  label: "250 g", mrp: 499,  price: 349 },
      { grams: 500,  label: "500 g", mrp: 999,  price: 699 },
      { grams: 1000, label: "1 kg",  mrp: 1998, price: 1399 },
    ],
  },
  {
    id: "crab",
    name: "Mud Crab (Whole)",
    nameLocal: "Kekda / Njandu / Nandu",
    category: "fish",
    section: "sea",
    image: "https://static.freshtohome.com/media/catalog/product/m/u/mud_crab_1.jpg",
    desc: "Fresh live crab, great for masala, pepper fry or butter crab",
    packs: [
      { grams: 500,  label: "500 g", mrp: 749,  price: 524 },
      { grams: 1000, label: "1 kg",  mrp: 1498, price: 1049 },
    ],
  },
  {
    id: "bangda",
    name: "Mackerel (Bangda)",
    nameLocal: "Bangda / Ayala / Bangude",
    category: "fish",
    section: "sea",
    image: "https://static.freshtohome.com/media/catalog/product/a/y/ayala_1.jpg",
    desc: "Rich in omega-3 & iron. Perfect for tawa fry, curry or rechad masala",
    freshToHomePer500g: 229,
    packs: [
      { grams: 500,  label: "500 g", mrp: 219,  price: 153 },
      { grams: 1000, label: "1 kg",  mrp: 438,  price: 306 },
    ],
  },
  {
    id: "small-prawns",
    name: "Small Prawns (Cleaned)",
    nameLocal: "Kolambi / Chemmeen / Sungtam",
    category: "fish",
    section: "sea",
    image: "https://static.freshtohome.com/media/catalog/product/v/e/venami_1.jpg",
    desc: "Small & sweet, ideal for prawn masala, pulao or bhajji",
    freshToHomePer500g: 329,
    packs: [
      { grams: 250,  label: "250 g", mrp: 249,  price: 174 },
      { grams: 500,  label: "500 g", mrp: 499,  price: 349 },
      { grams: 1000, label: "1 kg",  mrp: 998,  price: 699 },
    ],
  },
];

// ─── RIVER & POND (FRESHWATER) FISH ──────────────────────────────────────────
export const freshwaterFishItems: MenuItem[] = [
  {
    id: "rohu",
    name: "Rohu Fish",
    nameLocal: "Rohu / Rohit / Carpo Fish",
    category: "fish",
    section: "freshwater",
    image: "https://static.freshtohome.com/media/catalog/product/r/o/rohu_1.jpg",
    desc: "India's most loved freshwater fish. Ideal for Bengali fish curry & fry",
    tag: "Popular",
    freshToHomePer500g: 169,
    packs: [
      { grams: 500,  label: "500 g", mrp: 199,  price: 139 },
      { grams: 1000, label: "1 kg",  mrp: 398,  price: 279 },
    ],
  },
  {
    id: "catla",
    name: "Catla Fish",
    nameLocal: "Catla / Bengal Carp / Katla",
    category: "fish",
    section: "freshwater",
    image: "https://static.freshtohome.com/media/catalog/product/c/a/catla_1.jpg",
    desc: "Popular freshwater carp, firm flesh. Great for Bengali curry",
    freshToHomePer500g: 159,
    packs: [
      { grams: 500,  label: "500 g", mrp: 209,  price: 146 },
      { grams: 1000, label: "1 kg",  mrp: 418,  price: 292 },
    ],
  },
  {
    id: "tilapia",
    name: "Tilapia (Whole Cleaned)",
    nameLocal: "Jalebi Fish / Tilapia",
    category: "fish",
    section: "freshwater",
    image: "https://static.freshtohome.com/media/catalog/product/t/i/tilapia_1.jpg",
    desc: "Mild white flesh, low in fat. Excellent for fry or steaming",
    freshToHomePer500g: 89,
    packs: [
      { grams: 500,  label: "500 g", mrp: 189,  price: 132 },
      { grams: 1000, label: "1 kg",  mrp: 378,  price: 264 },
    ],
  },
  {
    id: "basa",
    name: "Basa Fish Fillet",
    nameLocal: "Basa / Pangasius / River Cobbler",
    category: "fish",
    section: "freshwater",
    image: "https://static.freshtohome.com/media/catalog/product/b/a/baasa_1.jpg",
    desc: "Boneless white fillet, soft & versatile. Kids favourite",
    freshToHomePer500g: 109,
    packs: [
      { grams: 500,  label: "500 g", mrp: 249,  price: 174 },
      { grams: 1000, label: "1 kg",  mrp: 498,  price: 349 },
    ],
  },
];

// ─── CHICKEN ─────────────────────────────────────────────────────────────────
export const chickenItems: MenuItem[] = [
  {
    id: "curry-cut",
    name: "Chicken Curry Cut",
    nameLocal: "Medium Pieces with bone",
    category: "chicken",
    section: "chicken",
    image: "https://static.freshtohome.com/media/catalog/product/c/h/chicken_curry_cut_1.jpg",
    desc: "Classic curry cut with bone. Perfect for all chicken curries & gravies",
    tag: "Best Seller",
    packs: [
      { grams: 500,  label: "500 g", mrp: 185,  price: 130 },
      { grams: 1000, label: "1 kg",  mrp: 370,  price: 259 },
      { grams: 2000, label: "2 kg",  mrp: 740,  price: 518 },
    ],
  },
  {
    id: "boneless",
    name: "Boneless Chicken",
    nameLocal: "Skinless Boneless Cubes",
    category: "chicken",
    section: "chicken",
    image: "https://static.freshtohome.com/media/catalog/product/b/o/boneless_1.jpg",
    desc: "Clean boneless chicken, ideal for biryani, kadai & butter chicken",
    tag: "Popular",
    packs: [
      { grams: 250,  label: "250 g", mrp: 188,  price: 132 },
      { grams: 500,  label: "500 g", mrp: 377,  price: 264 },
      { grams: 1000, label: "1 kg",  mrp: 753,  price: 527 },
    ],
  },
  {
    id: "whole-chicken",
    name: "Whole Chicken",
    nameLocal: "Dressed & Cleaned",
    category: "chicken",
    section: "chicken",
    image: "https://static.freshtohome.com/media/catalog/product/c/h/chicken_whole_1.jpg",
    desc: "Full bird, cleaned & dressed. Great value — choose your cut",
    packs: [
      { grams: 1000, label: "1 kg",   mrp: 299,  price: 209 },
      { grams: 1500, label: "1.5 kg", mrp: 449,  price: 314 },
    ],
  },
  {
    id: "keema",
    name: "Chicken Keema",
    nameLocal: "Freshly Minced Chicken",
    category: "chicken",
    section: "chicken",
    image: "https://static.freshtohome.com/media/catalog/product/c/h/chicken_mince_1.jpg",
    desc: "Freshly minced chicken, great for kebabs, kofta & keema curry",
    packs: [
      { grams: 250,  label: "250 g", mrp: 162,  price: 113 },
      { grams: 500,  label: "500 g", mrp: 325,  price: 228 },
    ],
  },
  {
    id: "tandoori-cut",
    name: "Tandoori Cut",
    nameLocal: "Large Pieces for BBQ & Grill",
    category: "chicken",
    section: "chicken",
    image: "https://static.freshtohome.com/media/catalog/product/t/a/tandoori_chicken_1.jpg",
    desc: "Large pieces perfect for tandoor, BBQ, oven roast & biryani",
    packs: [
      { grams: 500,  label: "500 g", mrp: 210,  price: 147 },
      { grams: 1000, label: "1 kg",  mrp: 420,  price: 294 },
    ],
  },
  {
    id: "wings",
    name: "Chicken Wings",
    nameLocal: "Party Wings",
    category: "chicken",
    section: "chicken",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&h=350&fit=crop&auto=format",
    desc: "Crispy wings, ideal for deep fry or BBQ party platters",
    packs: [
      { grams: 500,  label: "500 g", mrp: 200,  price: 140 },
      { grams: 1000, label: "1 kg",  mrp: 400,  price: 280 },
    ],
  },
  {
    id: "legs",
    name: "Chicken Legs",
    nameLocal: "Drumstick & Thigh",
    category: "chicken",
    section: "chicken",
    image: "https://static.freshtohome.com/media/catalog/product/c/h/chicken_drumstick_1.jpg",
    desc: "Juicy drumstick & thigh pieces, great for grilling & roast",
    packs: [
      { grams: 500,  label: "500 g", mrp: 190,  price: 133 },
      { grams: 1000, label: "1 kg",  mrp: 380,  price: 266 },
    ],
  },
  {
    id: "liver",
    name: "Chicken Liver",
    nameLocal: "Fresh Chicken Organs",
    category: "chicken",
    section: "chicken",
    image: "https://static.freshtohome.com/media/catalog/product/c/h/chicken_liver_1.jpg",
    desc: "Fresh liver & gizzard, rich in iron & protein",
    packs: [
      { grams: 250,  label: "250 g", mrp: 50,   price: 35 },
      { grams: 500,  label: "500 g", mrp: 100,  price: 70 },
    ],
  },
];

export const allFishItems = [...seaFishItems, ...freshwaterFishItems];
export const allItems = [...seaFishItems, ...freshwaterFishItems, ...chickenItems];
