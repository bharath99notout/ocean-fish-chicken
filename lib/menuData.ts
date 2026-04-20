export interface PackOption {
  grams: number;
  label: string;   // "250 g", "500 g", "1 kg"
  price: number;   // our price for this pack
  mrp: number;     // Licious/FreshToHome MRP for this pack
}

export interface MenuItem {
  id: string;
  name: string;
  nameLocal: string;
  category: "fish" | "chicken";
  image: string;
  desc: string;
  tag?: string;
  packs: PackOption[];
}

// Licious 500g pack prices → our price = 20% off
// FreshToHome prices cross-referenced for smaller packs

export const fishItems: MenuItem[] = [
  {
    id: "surmai",
    name: "Seer Fish (Surmai)",
    nameLocal: "King Fish / Vanjaram",
    category: "fish",
    image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=500&h=350&fit=crop&auto=format",
    desc: "Premium king fish — meaty, boneless-friendly steaks",
    tag: "Best Seller",
    packs: [
      { grams: 500,  label: "500 g", mrp: 999,  price: 799  },
      { grams: 1000, label: "1 kg",  mrp: 1998, price: 1598 },
    ],
  },
  {
    id: "pomfret",
    name: "White Pomfret",
    nameLocal: "Paplet / Avoli",
    category: "fish",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=350&fit=crop&auto=format",
    desc: "Delicate white flesh, perfect for shallow fry or curry",
    tag: "Premium",
    packs: [
      { grams: 500,  label: "500 g", mrp: 1249, price: 999  },
      { grams: 1000, label: "1 kg",  mrp: 2498, price: 1998 },
    ],
  },
  {
    id: "rawas",
    name: "Indian Salmon (Rawas)",
    nameLocal: "Raavas / Threadfin",
    category: "fish",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=350&fit=crop&auto=format",
    desc: "Rich, oily fish loaded with omega-3. Great for fry & curry",
    packs: [
      { grams: 500,  label: "500 g", mrp: 749,  price: 599  },
      { grams: 1000, label: "1 kg",  mrp: 1498, price: 1198 },
    ],
  },
  {
    id: "tiger-prawns",
    name: "Tiger Prawns (Large)",
    nameLocal: "Jhinga / Chemmeen",
    category: "fish",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&h=350&fit=crop&auto=format",
    desc: "Jumbo tiger prawns, cleaned & deveined on request",
    tag: "Popular",
    packs: [
      { grams: 250,  label: "250 g", mrp: 499,  price: 399  },
      { grams: 500,  label: "500 g", mrp: 999,  price: 799  },
      { grams: 1000, label: "1 kg",  mrp: 1998, price: 1598 },
    ],
  },
  {
    id: "crab",
    name: "Mud Crab (Whole)",
    nameLocal: "Kekda / Njandu",
    category: "fish",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&h=350&fit=crop&auto=format",
    desc: "Fresh live crab, great for masala or butter pepper fry",
    packs: [
      { grams: 500,  label: "500 g", mrp: 749,  price: 599  },
      { grams: 1000, label: "1 kg",  mrp: 1498, price: 1198 },
    ],
  },
  {
    id: "bangda",
    name: "Mackerel (Bangda)",
    nameLocal: "Bangda / Ayala",
    category: "fish",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=350&fit=crop&auto=format",
    desc: "Rich in omega-3, perfect for tawa fry or curry",
    packs: [
      { grams: 500,  label: "500 g", mrp: 219,  price: 175  },
      { grams: 1000, label: "1 kg",  mrp: 438,  price: 350  },
    ],
  },
  {
    id: "small-prawns",
    name: "Small Prawns",
    nameLocal: "Kolambi / Chemmeen",
    category: "fish",
    image: "https://images.unsplash.com/photo-1606731219412-1b2b7e15fddb?w=500&h=350&fit=crop&auto=format",
    desc: "Small & sweet, ideal for prawn masala or bhajji",
    packs: [
      { grams: 250,  label: "250 g", mrp: 249,  price: 199  },
      { grams: 500,  label: "500 g", mrp: 499,  price: 399  },
      { grams: 1000, label: "1 kg",  mrp: 998,  price: 798  },
    ],
  },
  {
    id: "catla",
    name: "Catla Fish",
    nameLocal: "Catla / Bengal Carp",
    category: "fish",
    image: "https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=500&h=350&fit=crop&auto=format",
    desc: "Popular freshwater fish, great for Bengali fish curry",
    packs: [
      { grams: 500,  label: "500 g", mrp: 209,  price: 167  },
      { grams: 1000, label: "1 kg",  mrp: 418,  price: 334  },
    ],
  },
  {
    id: "tilapia",
    name: "Tilapia (Whole Cleaned)",
    nameLocal: "Jalebi / Tilapia",
    category: "fish",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&h=350&fit=crop&auto=format",
    desc: "Mild white flesh. Excellent for fry or steaming",
    packs: [
      { grams: 500,  label: "500 g", mrp: 189,  price: 151  },
      { grams: 1000, label: "1 kg",  mrp: 378,  price: 302  },
    ],
  },
  {
    id: "basa",
    name: "Basa Fish Fillet",
    nameLocal: "Basa / River Cobbler",
    category: "fish",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=500&h=350&fit=crop&auto=format",
    desc: "Boneless fillet, soft & versatile. Kids love it",
    packs: [
      { grams: 500,  label: "500 g", mrp: 249,  price: 199  },
      { grams: 1000, label: "1 kg",  mrp: 498,  price: 398  },
    ],
  },
];

export const chickenItems: MenuItem[] = [
  {
    id: "curry-cut",
    name: "Chicken Curry Cut",
    nameLocal: "Medium Pieces with bone",
    category: "chicken",
    image: "https://images.unsplash.com/photo-1612169998539-39a7f0eceef5?w=500&h=350&fit=crop&auto=format",
    desc: "Classic curry cut with bone. Perfect for all curries",
    tag: "Best Seller",
    packs: [
      { grams: 500,  label: "500 g", mrp: 185,  price: 148  },
      { grams: 1000, label: "1 kg",  mrp: 370,  price: 296  },
      { grams: 2000, label: "2 kg",  mrp: 740,  price: 592  },
    ],
  },
  {
    id: "boneless",
    name: "Boneless Chicken",
    nameLocal: "Skinless Boneless Cubes",
    category: "chicken",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=350&fit=crop&auto=format",
    desc: "Clean boneless chicken, ideal for biryani & kadai",
    tag: "Popular",
    packs: [
      { grams: 250,  label: "250 g", mrp: 188,  price: 150  },
      { grams: 500,  label: "500 g", mrp: 377,  price: 301  },
      { grams: 1000, label: "1 kg",  mrp: 753,  price: 602  },
    ],
  },
  {
    id: "whole-chicken",
    name: "Whole Chicken",
    nameLocal: "Dressed & Cleaned",
    category: "chicken",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&h=350&fit=crop&auto=format",
    desc: "Full bird, cleaned & dressed. Great value buy",
    packs: [
      { grams: 1000, label: "1 kg",   mrp: 299,  price: 239  },
      { grams: 1500, label: "1.5 kg", mrp: 449,  price: 359  },
    ],
  },
  {
    id: "keema",
    name: "Chicken Keema",
    nameLocal: "Freshly Minced Chicken",
    category: "chicken",
    image: "https://images.unsplash.com/photo-1544025162-d76538407f37?w=500&h=350&fit=crop&auto=format",
    desc: "Freshly minced, great for kebabs & keema curry",
    packs: [
      { grams: 250,  label: "250 g", mrp: 162,  price: 130  },
      { grams: 500,  label: "500 g", mrp: 325,  price: 260  },
    ],
  },
  {
    id: "tandoori-cut",
    name: "Tandoori Cut",
    nameLocal: "Large Pieces for BBQ",
    category: "chicken",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=500&h=350&fit=crop&auto=format",
    desc: "Large pieces perfect for tandoor, BBQ & roast",
    packs: [
      { grams: 500,  label: "500 g", mrp: 210,  price: 168  },
      { grams: 1000, label: "1 kg",  mrp: 420,  price: 336  },
    ],
  },
  {
    id: "wings",
    name: "Chicken Wings",
    nameLocal: "Party Wings",
    category: "chicken",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&h=350&fit=crop&auto=format",
    desc: "Crispy wings, ideal for fry or BBQ parties",
    packs: [
      { grams: 500,  label: "500 g", mrp: 200,  price: 160  },
      { grams: 1000, label: "1 kg",  mrp: 400,  price: 320  },
    ],
  },
  {
    id: "legs",
    name: "Chicken Legs",
    nameLocal: "Drumstick & Thigh",
    category: "chicken",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=500&h=350&fit=crop&auto=format",
    desc: "Juicy legs with drumstick, great for grilling",
    packs: [
      { grams: 500,  label: "500 g", mrp: 190,  price: 152  },
      { grams: 1000, label: "1 kg",  mrp: 380,  price: 304  },
    ],
  },
  {
    id: "liver",
    name: "Chicken Liver",
    nameLocal: "Fresh Chicken Organs",
    category: "chicken",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=350&fit=crop&auto=format",
    desc: "Fresh liver & gizzard, rich in iron & protein",
    packs: [
      { grams: 250,  label: "250 g", mrp: 50,   price: 40   },
      { grams: 500,  label: "500 g", mrp: 100,  price: 80   },
    ],
  },
];

export const allItems = [...fishItems, ...chickenItems];
