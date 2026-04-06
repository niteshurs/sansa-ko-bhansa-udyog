import type { Product } from "../components/ProductCard";

// Product catalog for Sansa Ko Bhansa Udyog
// SEO: Edit product names, descriptions, and categories here
export const PRODUCTS: Product[] = [
  // ---- ACHAR PRODUCTS ----
  {
    id: "chicken-achar-packet",
    name: "Chicken Achar Packet",
    description:
      "Traditional spicy chicken pickle in a travel-friendly, resealable packet. Perfect for on-the-go flavour.",
    image: "/assets/generated/chicken-achar-jar.dim_600x600.jpg",
    category: "achar",
    badge: "Bestseller",
  },
  {
    id: "chicken-achar-jar",
    name: "Chicken Achar Jar",
    description:
      "Our signature spicy chicken pickle in a premium glass jar. Rich, authentic taste with every bite.",
    image: "/assets/generated/chicken-achar-jar.dim_600x600.jpg",
    category: "achar",
  },
  {
    id: "buff-achar-packet",
    name: "Buff Achar Packet",
    description:
      "Rich and tender buffalo meat pickle in a convenient travel-friendly packet. Bold, hearty flavours.",
    image: "/assets/generated/buff-achar-packet.dim_600x600.jpg",
    category: "achar",
  },
  {
    id: "buff-achar-jar",
    name: "Buff Achar Jar",
    description:
      "Premium buffalo meat pickle sealed in a glass jar. Perfect for gifting or your own kitchen.",
    image: "/assets/generated/buff-achar-packet.dim_600x600.jpg",
    category: "achar",
    badge: "Premium",
  },
  {
    id: "lasun-achar-packet",
    name: "Lasun Achar Packet",
    description:
      "Aromatic roasted garlic pickle in a portable packet. Adds bold garlic punch to every meal.",
    image: "/assets/generated/lasun-achar-jar.dim_600x600.jpg",
    category: "achar",
  },
  {
    id: "lasun-achar-jar",
    name: "Lasun Achar Jar",
    description:
      "Aromatic garlic pickle preserved in a premium glass jar. A must-have condiment for Nepali cuisine lovers.",
    image: "/assets/generated/lasun-achar-jar.dim_600x600.jpg",
    category: "achar",
  },
  // ---- MOMO PRODUCTS ----
  {
    id: "frozen-chicken-momo",
    name: "Frozen Chicken Momo",
    description:
      "Handcrafted chicken dumplings filled with seasoned minced chicken. Ready to steam in minutes.",
    image: "/assets/generated/frozen-momo-packet.dim_600x600.jpg",
    category: "momo",
    badge: "Popular",
  },
  {
    id: "frozen-buff-momo",
    name: "Frozen Buff Momo",
    description:
      "Juicy buffalo meat dumplings wrapped in soft dough. Authentic Nepali taste at home.",
    image: "/assets/generated/frozen-momo-packet.dim_600x600.jpg",
    category: "momo",
  },
  {
    id: "frozen-veg-momo",
    name: "Frozen Veg Momo",
    description:
      "Wholesome vegetable dumplings stuffed with fresh mixed veggies. Perfect for vegetarians.",
    image: "/assets/generated/frozen-momo-packet.dim_600x600.jpg",
    category: "momo",
  },
];

export const ACHAR_PRODUCTS = PRODUCTS.filter((p) => p.category === "achar");
export const MOMO_PRODUCTS = PRODUCTS.filter((p) => p.category === "momo");
