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
  items: { name: string; slug: string }[];
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
    description: "Immerse yourself in handcrafted luxury. From premium teak coffee tables to custom TV consoles, elevate your central living space with heirloom-grade wooden artistry.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      {
        name: "Tables",
        slug: "tables",
        items: [
          { name: "Coffee Tables", slug: "coffee-tables" },
          { name: "Side & End Tables", slug: "side-and-end-tables" },
          { name: "Console Tables", slug: "console-tables" },
          { name: "Nest of Tables", slug: "nest-of-tables" }
        ]
      },
      {
        name: "Units & Storage",
        slug: "units-and-storage",
        items: [
          { name: "TV Consoles", slug: "tv-consoles" },
          { name: "Bookshelves", slug: "bookshelves" },
          { name: "Display Units", slug: "display-units" },
          { name: "Shoe Racks", slug: "shoe-racks" }
        ]
      }
    ]
  },
  {
    name: "Bedroom",
    slug: "bedroom",
    description: "Sanctuaries of absolute rest. Discover our signature solid rosewood and teak beds, meticulously carved bedside tables, and bespoke master wardrobes designed for life.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      {
        name: "Beds",
        slug: "beds",
        items: [
          { name: "King Size Beds", slug: "king-size-beds" },
          { name: "Queen Size Beds", slug: "queen-size-beds" },
          { name: "Single & Poster Beds", slug: "single-and-poster-beds" },
          { name: "Beds with Storage", slug: "beds-with-storage" }
        ]
      },
      {
        name: "Bedroom Storage",
        slug: "bedroom-storage",
        items: [
          { name: "Wardrobes", slug: "wardrobes" },
          { name: "Bedside Tables", slug: "bedside-tables" },
          { name: "Dressers & Mirrors", slug: "dressers-and-mirrors" },
          { name: "Chest of Drawers", slug: "chest-of-drawers" }
        ]
      }
    ]
  },
  {
    name: "Dining",
    slug: "dining",
    description: "Feast in grandeur. Crafted from single-slab premium woods, our dining tables and chairs create a dramatic, unforgettable setting for gatherings that endure across generations.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      {
        name: "Dining Area",
        slug: "dining-area",
        items: [
          { name: "4 Seater Dining Sets", slug: "4-seater-dining-sets" },
          { name: "6 Seater Dining Sets", slug: "6-seater-dining-sets" },
          { name: "Dining Tables", slug: "dining-tables" },
          { name: "Dining Chairs & Benches", slug: "dining-chairs-and-benches" }
        ]
      }
    ]
  },
  {
    name: "Study",
    slug: "study",
    description: "Focus met with refined heritage. Elevate your creative or professional sanctuary with organic executive desks, ergonomic wooden chairs, and bespoke filing libraries.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      {
        name: "Desks",
        slug: "desks",
        items: [
          { name: "Study Tables", slug: "study-tables" },
          { name: "Computer Desks", slug: "computer-desks" },
          { name: "Executive Desks", slug: "executive-desks" },
          { name: "Standing Desks", slug: "standing-desks" }
        ]
      },
      {
        name: "Seating & Storage",
        slug: "seating-and-storage",
        items: [
          { name: "Ergonomic Chairs", slug: "ergonomic-chairs" },
          { name: "Study Chairs", slug: "study-chairs" },
          { name: "Bookshelves", slug: "bookshelves-study" },
          { name: "Filing Cabinets", slug: "filing-cabinets" }
        ]
      }
    ]
  },
  {
    name: "Storage Furniture",
    slug: "storage-furniture",
    description: "Elegant storage solutions that double as visual statements. Premium multi-door wardrobes, handcrafted shoe racks, and robust vintage trunks.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      {
        name: "Bedroom Storage",
        slug: "bedroom-storage",
        items: [
          { name: "2 Door Wardrobes", slug: "2-door-wardrobes" },
          { name: "3+ Door Wardrobes", slug: "3-plus-door-wardrobes" },
          { name: "Chest of Drawers", slug: "chest-of-drawers-storage" }
        ]
      },
      {
        name: "Living & Utility",
        slug: "living-and-utility",
        items: [
          { name: "Shoe Racks", slug: "shoe-racks-storage" },
          { name: "Display Cabinets", slug: "display-cabinets" },
          { name: "Trunks & Boxes", slug: "trunks-and-boxes" }
        ]
      }
    ]
  },
  {
    name: "Pillars",
    slug: "pillars",
    description: "Architectural monuments for your home. Carved in antique timber or polished sandstone, our pillars serve as majestic structural and decorative details.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      {
        name: "Wooden Pillars",
        slug: "wooden-pillars",
        items: [
          { name: "Teak Wood Pillars", slug: "teak-wood-pillars" },
          { name: "Rosewood Pillars", slug: "rosewood-pillars" },
          { name: "Sheesham Pillars", slug: "sheesham-pillars" },
          { name: "Sandstone Pillars", slug: "sandstone-pillars" }
        ]
      },
      {
        name: "Sculptured Pillars",
        slug: "sculptured-pillars",
        items: [
          { name: "Carved Pillars", slug: "carved-pillars" },
          { name: "Decorative Pillars", slug: "decorative-pillars" },
          { name: "Antique Style Pillars", slug: "antique-style-pillars" },
          { name: "Modern Pillars", slug: "modern-pillars" }
        ]
      }
    ]
  },
  {
    name: "Furnishing",
    slug: "furnishing",
    description: "Envelop your home in organic textures. Discover premium organic cotton sheets, heavy-drape window linen, and hand-tufted heirloom carpets.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      {
        name: "Bedding",
        slug: "bedding",
        items: [
          { name: "Bedsheets", slug: "bedsheets" },
          { name: "Blankets & Dohars", slug: "blankets-and-dohars" },
          { name: "Pillows & Cushions", slug: "pillows-and-cushions" },
          { name: "Mattress Protectors", slug: "mattress-protectors" }
        ]
      },
      {
        name: "Rugs & Curtains",
        slug: "rugs-and-curtains",
        items: [
          { name: "Carpets & Rugs", slug: "carpets-and-rugs" },
          { name: "Door Mats", slug: "door-mats" },
          { name: "Window Curtains", slug: "window-curtains" },
          { name: "Door Curtains", slug: "door-curtains" }
        ]
      }
    ]
  },
  {
    name: "Office Room",
    slug: "office-room",
    description: "Inspire vision and clarity. Ergonomic design merges with robust construction to offer outstanding conference systems, executive suites, and work desks.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      {
        name: "Desks & Workstations",
        slug: "desks-and-workstations",
        items: [
          { name: "Executive Desks", slug: "executive-desks-office" },
          { name: "Computer Tables", slug: "computer-tables" },
          { name: "Standing Desks", slug: "standing-desks-office" }
        ]
      },
      {
        name: "Office Seating",
        slug: "office-seating",
        items: [
          { name: "Ergonomic Chairs", slug: "ergonomic-chairs-office" },
          { name: "Visitor Seating", slug: "visitor-seating" },
          { name: "Storage Cabinets", slug: "storage-cabinets" }
        ]
      }
    ]
  }
];

// Generate dynamic products for all subcategory items
export const productsData: Product[] = [];

// Helper to fill mock products dynamically for all subcategories
const mockDescriptions = [
  "Bespoke creation crafted from selected old-growth heartwood. Featuring seamless joinery and a luxurious hand-burnished matte oil finish.",
  "Architectural silhouette meets traditional craftsmanship. Each piece is individually carved by master craftsmen and finished to highlight organic wood grains.",
  "Designed to offer timeless structural poise and unmatched durability. A heritage item built to stay in your family for generations."
];

const mockSpecs = {
  Material: "Premium Selected Teak / Rosewood",
  Dimensions: "Standard Crafted Size (Customizable upon request)",
  Finish: "Low-VOC Silk Polyurethane Matte or Hand-rubbed Natural Oil",
  Assembly: "Pre-assembled / Delivered fully structured",
  Warranty: "10-Year Structural Guarantee",
  Craftsmanship: "Hand-turned and jointed by master carpenter"
};

const subcategoryImages: { [key: string]: string[] } = {
  "coffee-tables": [
    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80"
  ],
  "side-and-end-tables": [
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
  ],
  "console-tables": [
    "/products/console2.jpg",
    "/products/console.jpg"
  ],
  "beds": [
    "/products/bed.jpg",
    "/products/bed.png"
  ],
  "king-size-beds": [
    "/products/bed.jpg",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
  ],
  "queen-size-beds": [
    "/products/bed.png",
    "https://images.unsplash.com/photo-1582582624425-4a72722099f5?auto=format&fit=crop&w=800&q=80"
  ],
  "dining-tables": [
    "/products/dining-table.jpg",
    "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80"
  ]
};

const defaultImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
];

// Populate productsData
categoriesData.forEach(cat => {
  cat.subcategories.forEach(sub => {
    sub.items.forEach(item => {
      // Create 4 products per item to give a luxury catalogue feel
      const titles = [
        `Imperial Handcrafted ${item.name}`,
        `Royal Heritage ${item.name}`,
        `Classic Bespoke ${item.name}`,
        `Grand Colonial ${item.name}`
      ];

      titles.forEach((title, index) => {
        const suffixes = ['imperial', 'heritage', 'classic', 'colonial'];
        const slug = `${item.slug}-${suffixes[index % suffixes.length]}`;
        const subSlug = item.slug;
        const imgKey = subcategoryImages[subSlug] || subcategoryImages[cat.slug] || defaultImages;

        productsData.push({
          slug,
          name: title,
          description: `${title}. ${mockDescriptions[index % mockDescriptions.length]} This piece integrates premium structural design elements with a focus on highlighting the natural grain patterns of hand-selected solid wood.`,
          images: imgKey.length > index ? [imgKey[index], imgKey[(index + 1) % imgKey.length]] : [imgKey[0] || defaultImages[0]],
          details: {
            ...mockSpecs,
            Material: cat.slug === "pillars" ? "Aged Burma Teak Wood / Carved Sandstone" : "Old-Growth Burma Teak or Indian Rosewood",
            Dimensions: index === 0 ? "80\"W x 36\"D x 30\"H" : "72\"W x 34\"D x 28\"H",
            Craftsmanship: "Hand-assembled using ancient mortise & tenon joinery"
          },
          categorySlug: cat.slug,
          subcategorySlug: subSlug
        });
      });
    });
  });
});
