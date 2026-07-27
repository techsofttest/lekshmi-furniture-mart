export interface Product {
  slug: string;
  name: string;
  description: string;
  images: string[];
  details: {
    Material?: string;
    Dimensions?: string;
    Finish?: string;
    Assembly?: string;
    Warranty?: string;
    Craftsmanship?: string;
    [key: string]: string | undefined;
  };
  categorySlug: string;
  subcategorySlug: string;
}

export interface Subcategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

export const categoriesData: Category[] = [
  {
    name: "Living",
    slug: "living",
    description: "Immerse yourself in handcrafted luxury. From premium Teak Wood coffee tables to custom TV consoles, elevate your central living space with heirloom-grade wooden artistry.",
    image: "/sub-cat/living1.jpg",
    subcategories: [
      { name: "Coffee Tables", slug: "coffee-tables" },
      { name: "Side & End Tables", slug: "side-and-end-tables" },
      { name: "Console Tables", slug: "console-tables" },
      { name: "Nest of Tables", slug: "nest-of-tables" },
      { name: "TV Consoles", slug: "tv-consoles" },
      { name: "Bookshelves", slug: "bookshelves" },
      { name: "Display Units", slug: "display-units" },
      { name: "Shoe Racks", slug: "shoe-racks" },
      { name: "Long Bench", slug: "long-bench" }
    ]
  },
  {
    name: "Bedroom",
    slug: "bedroom",
    description: "Sanctuaries of absolute rest. Discover our signature solid Plavu, Anjili Wood, and Teak Wood beds, meticulously carved bedside tables, and bespoke master wardrobes designed for life.",
    image: "/sub-cat/bed-room1.jpg",
    subcategories: [
      { name: "King Size Beds", slug: "king-size-beds" },
      { name: "Queen Size Beds", slug: "queen-size-beds" },
      { name: "Single & Poster Beds", slug: "single-and-poster-beds" },
      { name: "Beds with Storage", slug: "beds-with-storage" },
      { name: "Wardrobes", slug: "wardrobes" },
      { name: "Bedside Tables", slug: "bedside-tables" },
      { name: "Dressers & Mirrors", slug: "dressers-and-mirrors" },
      { name: "Kerala Box", slug: "chest-of-drawers" },
      { name: "Dressing Stand", slug: "dressing-stand" }
    ]
  },
  {
    name: "Dining",
    slug: "dining",
    description: "Feast in grandeur. Crafted from single-slab Teak Wood, Anjili Wood, and Plavu, our dining tables and chairs create a dramatic, unforgettable setting for gatherings that endure across generations.",
    image: "/sub-cat/dining1.jpg",
    subcategories: [
      { name: "4 Seater Dining Sets", slug: "4-seater-dining-sets" },
      { name: "6 Seater Dining Sets", slug: "6-seater-dining-sets" },
      { name: "Dining Tables", slug: "dining-tables" },
      { name: "Dining Chairs & Benches", slug: "dining-chairs-and-benches" }
    ]
  },
  {
    name: "Study",
    slug: "study",
    description: "Focus met with refined heritage. Elevate your creative or professional sanctuary with organic executive desks, ergonomic Teak Wood chairs, and bespoke filing libraries.",
    image: "/sub-cat/study1.jpg",
    subcategories: [
      { name: "Study Tables", slug: "study-tables" },
      { name: "Computer Desks", slug: "computer-desks" },
      { name: "Executive Desks", slug: "executive-desks" },
      { name: "Standing Desks", slug: "standing-desks" },
      { name: "Revolving Chair", slug: "ergonomic-chairs" },
      { name: "Study Chairs", slug: "study-chairs" },
      { name: "Bookshelves", slug: "bookshelves-study" },
      { name: "Filing Cabinets", slug: "filing-cabinets" }
    ]
  },
  {
    name: "Storage Furniture",
    slug: "storage-furniture",
    description: "Elegant storage solutions that double as visual statements. Premium wardrobes, handcrafted shoe racks, and robust vintage trunks.",
    image: "/sub-cat/storage-furniture1.jpg",
    subcategories: [
      { name: "2 Door Wardrobes", slug: "2-door-wardrobes" },
      { name: "3+ Door Wardrobes", slug: "3-plus-door-wardrobes" },
      { name: "Kerala Box", slug: "chest-of-drawers-storage" },
      { name: "Shoe Racks", slug: "shoe-racks-storage" }
    ]
  },
  {
    name: "Pillars",
    slug: "pillars",
    description: "Architectural monuments for your home. Carved in Teak Wood, Anjili Wood, or Plavu, our pillars serve as majestic structural and decorative details.",
    image: "/sub-cat/pillars1.jpg",
    subcategories: [
      { name: "Teak Wood Pillars", slug: "teak-wood-pillars" },
      { name: "Anjili Wood Pillars", slug: "anjili-wood-pillars" },
      { name: "Plavu Wood Pillars", slug: "plavu-wood-pillars" },
      { name: "Irumullu Wood Pillars", slug: "irumullu-wood-pillars" }
    ]
  },
  {
    name: "Office Room",
    slug: "office-room",
    description: "Inspire vision and clarity. Ergonomic design merges with robust construction to offer outstanding conference systems, executive suites, and work desks.",
    image: "/sub-cat/office-room04.jpg",
    subcategories: [
      { name: "Executive Desks", slug: "executive-desks-office" },
      { name: "Computer Tables", slug: "computer-tables" },
      { name: "Standing Desks", slug: "standing-desks-office" },
      { name: "Revolving Chair", slug: "ergonomic-chairs-office" }
    ]
  },
  {
    name: "Others",
    slug: "others",
    description: "Traditional Kerala home additions, artifacts, and structural elements that carry distinct historical craftsmanship.",
    image: "/sub-cat/others1.jpg",
    subcategories: [
      { name: "Ari Pathayam", slug: "ari-pathayam" },
      { name: "Charu Kasera", slug: "charu-kasera" },
      { name: "Pooja Box", slug: "pooja-box" },
      { name: "Hand Rail", slug: "hand-rail" },
      { name: "Wooden Pannel", slug: "wooden-pannel" },
      { name: "Wooden Stairs", slug: "wooden-stairs" },
      { name: "Amadapetti", slug: "amadapetti" }
    ]
  }
];

export const productsData: Product[] = [
  // Bedroom
  {
    slug: "royal-teak-king-bed",
    name: "Royal Teak King Size Bed",
    description: "Premium handcrafted solid Teak Wood king size bed. Crafted with traditional joinery, this bed features elegant headboard carving and robust structure built to last generations.",
    images: ["/products/bed-room/bed.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "78\"W x 82\"L x 48\"H",
      Finish: "Hand-burnished Natural Oil & Wax",
      Assembly: "Professional assembly included",
      Warranty: "10-Year Structural Guarantee",
      Craftsmanship: "Mortise and tenon joinery with hand-carving detailing"
    },
    categorySlug: "bedroom",
    subcategorySlug: "king-size-beds"
  },
  {
    slug: "heritage-jackwood-queen-bed",
    name: "Heritage Jackwood Queen Size Bed",
    description: "Elegant solid Plavu queen size bed. Offers a warm golden-brown hue that deepens beautifully over time. Built with maximum comfort and stability in mind.",
    images: ["/products/bed-room/bed.png"],
    details: {
      Material: "Plavu",
      Dimensions: "64\"W x 82\"L x 44\"H",
      Finish: "Silk Polyurethane Matte",
      Assembly: "Professional assembly included",
      Warranty: "10-Year Structural Guarantee",
      Craftsmanship: "Hand-assembled by master carpenters"
    },
    categorySlug: "bedroom",
    subcategorySlug: "queen-size-beds"
  },
  {
    slug: "classic-bedside-dresser-console",
    name: "Classic Bedside Dresser Console",
    description: "A versatile dresser console and bedside companion crafted from high-quality Teak Wood and Plavu. Features ample drawer storage and a polished top surface.",
    images: ["/products/bed-room/console2.jpg"],
    details: {
      Material: "Teak Wood & Plavu",
      Dimensions: "42\"W x 18\"D x 32\"H",
      Finish: "Warm Teak Stain Matte",
      Assembly: "Pre-assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Hand-fitted drawers with traditional wooden runners"
    },
    categorySlug: "bedroom",
    subcategorySlug: "bedside-tables"
  },

  // Living
  {
    slug: "traditional-easy-chair-charu-kasera",
    name: "Traditional Easy Chair (Charu Kasera)",
    description: "The classic Kerala Charu Kasera. Designed with extended reclining armrests for supreme relaxation. Handcrafted in premium Teak Wood with high-quality cane weaving.",
    images: ["/products/living/charu-kasera1.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "30\"W x 54\"D x 38\"H",
      Finish: "Hand-rubbed French Polish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Intricately hand-woven cane backing and seat"
    },
    categorySlug: "living",
    subcategorySlug: "side-and-end-tables"
  },
  {
    slug: "premium-wooden-corner-stand",
    name: "Premium Wooden Corner Stand",
    description: "Stunning multi-tier corner display unit. Designed to optimize space while displaying your prized books, heirlooms, or decorative pieces.",
    images: ["/products/living/corner-stand1.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "24\"W x 24\"D x 60\"H",
      Finish: "Polished Rosewood Finish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Classic turnery legs and smooth edge profiles"
    },
    categorySlug: "living",
    subcategorySlug: "shoe-racks"
  },
  {
    slug: "royal-heritage-dining-bench",
    name: "Royal Heritage Bench & Chair",
    description: "Bespoke solid Teak Wood long chair and bench designed for living areas. Provides comfortable seating with elegant classic back spindles.",
    images: ["/products/chair/long wooden chair.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "60\"W x 20\"D x 36\"H",
      Finish: "Satin Walnut Polish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Hand-shaped spindle backrests and contoured seating"
    },
    categorySlug: "living",
    subcategorySlug: "long-bench"
  },

  // Dining
  {
    slug: "single-slab-teak-dining-table",
    name: "Single-Slab Teak Dining Table",
    description: "A spectacular dining table made from a curated single slab of premium aged Teak Wood. Showcases gorgeous live edges and dramatic wood grains.",
    images: ["/products/dining/dining-table.jpg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "72\"W x 36\"D x 30\"H",
      Finish: "Water-resistant Polyurethane Matte",
      Assembly: "Legs require attachment (hardware included)",
      Warranty: "10-Year Structural Guarantee",
      Craftsmanship: "Book-matched grain flow and heavy-duty timber base"
    },
    categorySlug: "dining",
    subcategorySlug: "dining-tables"
  },
  {
    slug: "classic-dining-display-shelves",
    name: "Classic Dining Room Display Shelves",
    description: "Premium Anjili Wood display rack with open shelving, ideal for displaying fine chinaware, glassware, or decorative plates in the dining area.",
    images: ["/products/dining/display-shelves.jpeg", "/products/dining/display-shelves2.jpeg"],
    details: {
      Material: "Anjili Wood",
      Dimensions: "48\"W x 16\"D x 72\"H",
      Finish: "Natural Teak Polish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Guarantee",
      Craftsmanship: "Interlocking mortise shelf joints"
    },
    categorySlug: "dining",
    subcategorySlug: "dining-chairs-and-benches"
  },

  // Study
  {
    slug: "study-wooden-chair",
    name: "Traditional Teak Study Chair",
    description: "Ergonomically contoured Teak Wood study chair built for study tables and writing desk companion setups.",
    images: ["/products/chair/long wooden chair.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "18\"W x 20\"D x 36\"H",
      Finish: "Satin Polyurethane",
      Assembly: "Fully assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Hand-turned spindle rails"
    },
    categorySlug: "study",
    subcategorySlug: "study-chairs"
  },

  // Storage Furniture
  {
    slug: "traditional-kerala-storage-pathayam",
    name: "Traditional Kerala Storage Pathayam",
    description: "Large solid Plavu storage chest inspired by traditional grain pathayams. Excellent storage potential for bedrooms or hallways.",
    images: ["/products/others/ari-pathayam1.jpeg"],
    details: {
      Material: "Plavu",
      Dimensions: "48\"W x 30\"D x 36\"H",
      Finish: "Natural Beeswax",
      Assembly: "Fully assembled",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Traditional wooden sliding channels"
    },
    categorySlug: "storage-furniture",
    subcategorySlug: "chest-of-drawers-storage"
  },

  // Pillars
  {
    slug: "hand-carved-teak-wood-pillar",
    name: "Hand-Carved Teak Wood Pillar",
    description: "Architectural masterpiece pillar carved from a single log of premium Teak Wood. Features South Indian temple design details.",
    images: ["/products/pillar/pillar1.jpeg", "/products/pillar/pillar2.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "12\" Diameter x 96\"H",
      Finish: "Natural Antique Polish",
      Assembly: "Structural installation required",
      Warranty: "25-Year Guarantee",
      Craftsmanship: "Meticulously hand-carving"
    },
    categorySlug: "pillars",
    subcategorySlug: "teak-wood-pillars"
  },

  // Office Room
  {
    slug: "office-revolving-wooden-chair",
    name: "Executive Revolving Wooden Chair",
    description: "Ergonomically contoured Teak Wood chair built for office room setups.",
    images: ["/products/chair/long wooden chair.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "60\"W x 20\"D x 36\"H",
      Finish: "Satin Walnut Polish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Traditional hand shaping and spindle backs"
    },
    categorySlug: "office-room",
    subcategorySlug: "ergonomic-chairs-office"
  },

  // Others
  {
    slug: "traditional-kerala-amadapetti-box",
    name: "Traditional Kerala Amadapetti Box",
    description: "A classic heritage jewelry box (Amadapetti) handcrafted with brass accents from Teak Wood. Features secret drawers.",
    images: ["/products/others/amadapetti.png"],
    details: {
      Material: "Teak Wood & Brass",
      Dimensions: "18\"W x 12\"D x 10\"H",
      Finish: "Natural Oil Polish",
      Assembly: "Pre-assembled",
      Warranty: "Lifetime Guarantee",
      Craftsmanship: "100% hand-fitted ornamental brass work"
    },
    categorySlug: "others",
    subcategorySlug: "amadapetti"
  },
  {
    slug: "antique-wooden-ari-pathayam",
    name: "Antique Wooden Rice Chest (Ari Pathayam)",
    description: "A massive, authentic Plavu chest traditionally used for storing grain. Handcrafted from heavy wood slabs.",
    images: ["/products/others/ari-pathayam1.jpeg"],
    details: {
      Material: "Plavu",
      Dimensions: "48\"W x 30\"D x 36\"H",
      Finish: "Wax Polish",
      Assembly: "Fully assembled",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Thick slab construction with heavy-duty joinery"
    },
    categorySlug: "others",
    subcategorySlug: "ari-pathayam"
  },
  {
    slug: "hand-rail-others",
    name: "Architectural Hand Rail component",
    description: "Intricately carved Teak Wood hand rail architectural component for premium homes.",
    images: ["/products/others/hand-rail1.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "72\"W x 4\"D x 18\"H",
      Finish: "Antique Wax Finish",
      Assembly: "Mounting hardware not included",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Traditional relief carving"
    },
    categorySlug: "others",
    subcategorySlug: "hand-rail"
  },
  {
    slug: "wooden-pannel-others",
    name: "Ornamental Wooden Wall Panel",
    description: "Intricately carved Teak Wood wall panel to serve as decorative architectural details.",
    images: ["/products/others/wooden-pannel1.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "72\"W x 4\"D x 18\"H",
      Finish: "Antique Wax Finish",
      Assembly: "Mounting hardware not included",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Deep Relief hand-carving techniques"
    },
    categorySlug: "others",
    subcategorySlug: "wooden-pannel"
  },
  {
    slug: "traditional-easy-chair-charu-kasera-others",
    name: "Traditional Easy Chair (Charu Kasera)",
    description: "The classic Kerala Charu Kasera. Designed with extended reclining armrests for supreme relaxation. Handcrafted in premium Teak Wood with natural cane backing.",
    images: ["/products/living/charu-kasera1.jpeg"],
    details: {
      Material: "Teak Wood",
      Dimensions: "30\"W x 54\"D x 38\"H",
      Finish: "Hand-rubbed French Polish",
      Assembly: "Fully assembled",
      Warranty: "5-Year Warranty",
      Craftsmanship: "Intricately hand-woven cane backing and seat"
    },
    categorySlug: "others",
    subcategorySlug: "charu-kasera"
  },
  {
    slug: "handcrafted-pooja-cabinet-others",
    name: "Handcrafted Pooja Cabinet",
    description: "Sacred prayer altar built with beautiful temple arch styling from Teak Wood and intricate lattice cabinet doors.",
    images: ["/products/others/pooja-cabinet1.jpeg"],
    details: {
      Material: "Teak Wood & Brass Fittings",
      Dimensions: "36\"W x 20\"D x 54\"H",
      Finish: "Traditional Temple Brown Finish",
      Assembly: "Fully assembled",
      Warranty: "10-Year Guarantee",
      Craftsmanship: "Hand-carving and temple pillars detailing"
    },
    categorySlug: "others",
    subcategorySlug: "pooja-box"
  }
];
