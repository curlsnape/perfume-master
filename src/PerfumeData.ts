export interface perfume_Data {
  id: number;
  name: string;
  inspired_by: string;
  size_ml: number;
  type: string;
  top_notes: string;
  middle_notes: string;
  base_notes: string;
  sillage: string;
  description: string;
  price_inr: number;
  image: string;
  multi_images?: string[];
  tags?: string[];
}

export const perfumeData: perfume_Data[] = [
  {
    id: 1,
    name: "Timeless",
    inspired_by: "Dior Sauvage",
    size_ml: 20,
    type: "EDP",
    top_notes: "Bergamot, Pepper",
    middle_notes: "Lavender, Sichuan Pepper, Star Anise",
    base_notes: "Ambroxan, Cedarwood",
    sillage: "Strong",
    description:
      "Discover Timeless a bold, aromatic fragnance with fresh bergamot and a masculine woody base. Perfect for confident men seeking a refined, long-lasting everyday fragrance.",
    price_inr: 350,
    image: "/assets/images/perfume bg2.png",
    multi_images: [
      "/assets/images/pmf3-r.png",
      "/assets/images/perfumebg.png",
      "/assets/images/pmf2-r.png",
      "/assets/images/pmf1-r.png",
    ],
  },
  {
    id: 2,
    name: "Timeless Intense",
    inspired_by: "Dior Sauvage Elixir",
    size_ml: 20,
    type: "EDP",
    top_notes: "Cinnamon, Nutmeg, Cardamom",
    middle_notes: "Lavender",
    base_notes: "Amber, Liquorice, Sandalwood",
    sillage: "Very Strong",
    description:
      "Timeless Intense is a spicy, powerful scent with deep amber and warm spices. Ideal for evening wear and special occasions, it makes a commanding impression.",
    price_inr: 350,
    image: "/assets/images/perfumebg.png",
    multi_images: [
      "/assets/images/pmf3-r.png",
      "/assets/images/perfumebg.png",
      "/assets/images/pmf2-r.png",
      "/assets/images/pmf1-r.png",
    ],
    tags: ["new"],
  },
  {
    id: 3,
    name: "Azure",
    inspired_by: "Acqua di Gio",
    size_ml: 20,
    type: "EDP",
    top_notes: "Bergamot, Neroli",
    middle_notes: "Marine Notes, Jasmine",
    base_notes: "Cedarwood, Amber",
    sillage: "Moderate",
    description:
      "Azure brings oceanic freshness with citrus and aquatic notes a refreshing scent that captures the spirit of the Mediterranean. Light yet lingering.",
    price_inr: 350,
    image: "/assets/images/pmf1-r.png",
    multi_images: [
      "/assets/images/pmf3-r.png",
      "/assets/images/perfumebg.png",
      "/assets/images/pmf2-r.png",
      "/assets/images/pmf1-r.png",
    ],
    tags: ["popular"],
  },
  {
    id: 4,
    name: "Onyx",
    inspired_by: "Creed Aventus",
    size_ml: 20,
    type: "EDP",
    top_notes: "Pineapple, Blackcurrant, Bergamot",
    middle_notes: "Birch, Patchouli, Rose",
    base_notes: "Musk, Oakmoss, Vanilla",
    sillage: "Strong",
    description:
      "Onyx exudes strength and ambition with a blend of pineapple, birch, and musk. A modern, versatile scent for leaders and visionaries.",
    price_inr: 350,
    image: "/assets/images/pmf2-r.png",
    multi_images: [
      "/assets/images/pmf3-r.png",
      "/assets/images/perfumebg.png",
      "/assets/images/pmf2-r.png",
      "/assets/images/pmf1-r.png",
    ],
  },
  {
    id: 5,
    name: "Caramel",
    inspired_by: "Calyx Original (Caramel Scent)",
    size_ml: 20,
    type: "EDP",
    top_notes: "Toffee, Brown Sugar",
    middle_notes: "Caramel, Vanilla",
    base_notes: "Amber, Musk",
    sillage: "Moderate",
    description:
      "Indulge in Caramel, a rich, gourmand fragrance with creamy vanilla and sweet sugar notes. A deliciously warm and comforting scent for her.",
    price_inr: 350,
    image: "/assets/images/pmf3-r.png",
    multi_images: [
      "/assets/images/pmf3-r.png",
      "/assets/images/perfumebg.png",
      "/assets/images/pmf2-r.png",
      "/assets/images/pmf1-r.png",
    ],
    tags: ["limited_edition", "exclusive"],
  },
  {
    id: 6,
    name: "Nova",
    inspired_by: "Escada Moon Sparkle",
    size_ml: 20,
    type: "EDP",
    top_notes: "Strawberry, Blackcurrant, Red Apple",
    middle_notes: "Sweet Pea, Jasmine, Freesia",
    base_notes: "Raspberry, Musk, Sandalwood",
    sillage: "Soft",
    description:
      "Nova is a fruity-floral explosion with vibrant berries and soft florals, perfect for the playful and radiant woman. Youthful, bright, and charming.",
    price_inr: 350,
    image: "/assets/images/perfume bg2.png",
    multi_images: [
      "/assets/images/pmf3-r.png",
      "/assets/images/perfumebg.png",
      "/assets/images/pmf2-r.png",
      "/assets/images/pmf1-r.png",
    ],
    tags: ["new"],
  },
  {
    id: 7,
    name: "Scarlet",
    inspired_by: "Hugo Boss Deep Red",
    size_ml: 20,
    type: "EDP",
    top_notes: "Blood Orange, Blackcurrant, Clementine",
    middle_notes: "Ginger Flower, Tuberose, Freesia",
    base_notes: "Vanilla, Sandalwood, Musk",
    sillage: "Moderate",
    description:
      "Scarlet blends blood orange and vanilla with spicy florals for a sensual and bold feminine fragrance. Designed for the fearless woman.",
    price_inr: 350,
    image: "/assets/images/pmf2-r.png",
    multi_images: [
      "/assets/images/pmf3-r.png",
      "/assets/images/perfumebg.png",
      "/assets/images/pmf2-r.png",
      "/assets/images/pmf1-r.png",
    ],
  },
  {
    id: 8,
    name: "Pulse",
    inspired_by: "YSL Y",
    size_ml: 20,
    type: "EDP",
    top_notes: "Apple, Ginger, Bergamot",
    middle_notes: "Sage, Juniper Berries, Geranium",
    base_notes: "Amberwood, Tonka Bean, Cedar",
    sillage: "Strong",
    description:
      "Pulse energises with fresh apple and ginger, layered over smooth tonka bean. A clean, modern scent for the driven and dynamic man.",
    price_inr: 350,
    image: "/assets/images/pmf3-r.png",
    multi_images: [
      "/assets/images/pmf3-r.png",
      "/assets/images/perfumebg.png",
      "/assets/images/pmf2-r.png",
      "/assets/images/pmf1-r.png",
    ],
  },
  {
    id: 9,
    name: "Villain",
    inspired_by: "Rasasi Hawas",
    size_ml: 20,
    type: "EDP",
    top_notes: "Cinnamon, Bergamot, Apple",
    middle_notes: "Orange Blossom, Cardamom",
    base_notes: "Ambergris, Musk, Driftwood",
    sillage: "Strong",
    description:
      "Villain is fresh, aquatic, and daring. With notes of cinnamon, bergamot, and amber, its for the man who plays by his own rules.",
    price_inr: 350,
    image: "/assets/images/perfumebg.png",
    multi_images: [
      "/assets/images/pmf3-r.png",
      "/assets/images/perfumebg.png",
      "/assets/images/pmf2-r.png",
      "/assets/images/pmf1-r.png",
    ],
    tags: ["best_seller"],
  },
  {
    id: 10,
    name: "Deception",
    inspired_by: "Ex Nihilo Fleur Narcotique",
    size_ml: 20,
    type: "EDP",
    top_notes: "Lychee, Bergamot, Peach",
    middle_notes: "Peony, Orange Blossom, Jasmine",
    base_notes: "Musk, Moss, Wood",
    sillage: "Moderate",
    description:
      "Deception is a seductive floral-fruity fragrance with lush lychee, peony, and soft musk. For the elegant soul with a mysterious allure.",
    price_inr: 350,
    image: "/assets/images/pmf1-r.png",
    multi_images: [
      "/assets/images/pmf3-r.png",
      "/assets/images/pmf3-r.png",
      "/assets/images/pmf3-r.png",
      "/assets/images/pmf3-r.png",
    ],
    tags: ["top_seller"],
  },
  {
    id: 11,
    name: "Crimson Oud",
    inspired_by: "Ahmed Al Maghribi Oud & Roses",
    size_ml: 20,
    type: "EDP",
    top_notes: "Rose, Saffron",
    middle_notes: "Oud, Patchouli",
    base_notes: "Amber, Musk",
    sillage: "Very Strong",
    description:
      "Crimson Oud combines the richness of oud with blooming rose, creating a luxurious, oriental scent that leaves a lasting impression.",
    price_inr: 350,
    image: "/assets/images/pmf3-r.png",
    multi_images: [
      "/assets/images/pmf3-r.png",
      "/assets/images/perfumebg.png",
      "/assets/images/pmf2-r.png",
      "/assets/images/pmf1-r.png",
    ],
    tags: ["new", "top_seller"],
  },
];
