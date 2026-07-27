"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "living" | "bedroom" | "dining" | "custom";
  wood: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/main-cagory/living-room.png",
    title: "Signature Living Lounge",
    category: "living",
    wood: "Nilambur Teak",
    description: "Tailored sofa frames and minimalist side table setups.",
  },
  {
    id: 2,
    src: "/products/vintage-sofa.jpg",
    title: "Imperial Vintage Sofa",
    category: "living",
    wood: "Solid Wild Jack & Jackwood",
    description: "Intricately hand-carved floral motifs with royal crimson fabric.",
  },
  {
    id: 3,
    src: "/main-cagory/bed-room.png",
    title: "Royal Canopy Bedstead",
    category: "bedroom",
    wood: "Kerala Wild Jack & Jackwood",
    description: "Classic high-poster frame with structural cross-beams.",
  },
  {
    id: 4,
    src: "/products/bed.jpg",
    title: "Heritage Master Bed",
    category: "bedroom",
    wood: "Seasoned Teakwood",
    description: "Low-slung minimalist bed with integrated solid teak side tables.",
  },
  {
    id: 5,
    src: "/main-cagory/dinin-room.png",
    title: "Imperial 8-Seater Dining",
    category: "dining",
    wood: "Nilambur Teak",
    description: "Continuous grain matching tabletop with ergonomic seats.",
  },
  {
    id: 6,
    src: "/products/dining-table.jpg",
    title: "Artisanal Live-Edge Set",
    category: "dining",
    wood: "Solid Wild Jack & Jackwood",
    description: "Natural organic contours paired with brushed iron legs.",
  },
  {
    id: 7,
    src: "/custom-product/c-chair.png",
    title: "Sculpted Lounge Chair",
    category: "custom",
    wood: "Premium Wild Jack & Jackwood",
    description: "Bespoke fluid curves showcasing premium hardwood joinery.",
  },
  {
    id: 8,
    src: "/custom-product/cupbord-mirror.png",
    title: "Classic Mirror Wardrobe",
    category: "custom",
    wood: "Nilambur Teak",
    description: "Carved details with integrated beveled dressing mirror.",
  },
  {
    id: 9,
    src: "/custom-product/cupbord.png",
    title: "Heritage Arch Cabinet",
    category: "custom",
    wood: "Kerala Wild Jack & Jackwood",
    description: "Traditional Kerala arch motif door paneling.",
  },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<"all" | "living" | "bedroom" | "dining" | "custom">("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const queryFilter = params.get("filter");
      const validCategories = ["living", "bedroom", "dining", "custom"];
      if (queryFilter && validCategories.includes(queryFilter)) {
        setFilter(queryFilter as any);
      }
    }
  }, []);

  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; wood: string; description: string } | null>(null);

  const categories = [
    { value: "all" as const, label: "All Masterpieces" },
    { value: "living" as const, label: "Living" },
    { value: "bedroom" as const, label: "Bedroom" },
    { value: "dining" as const, label: "Dining" },
    { value: "custom" as const, label: "Custom Bespoke" },
  ];

  const filteredItems = galleryItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24 py-16 md:py-24">
      <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-3 md:gap-6 mb-16 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-6 py-2.5 rounded-none text-[10px] uppercase tracking-[0.2em] transition-all duration-300 font-bold border shrink-0 ${filter === cat.value
              ? "bg-[#592915] text-[#FCFAF8] border-[#592915]"
              : "bg-transparent text-[#2A1C14]/60 border-gray-200 hover:border-[#592915] hover:text-[#592915]"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedImage({ src: item.src, title: item.title, wood: item.wood, description: item.description })}
              className="group relative flex flex-col bg-[#FCFAF8] border border-gray-100 rounded-sm overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
              </div>

              {/* Metadata Below Image (always visible on mobile/desktop without hover) */}
              <div className="p-6 flex flex-col justify-between border-t border-gray-100 flex-1 bg-white">
                <div>
                  <span className="text-[#592915] font-sans text-[10px] uppercase tracking-widest font-bold block mb-1">
                    {item.category} • {item.wood}
                  </span>
                  <h4 className="font-serif text-lg text-[#592915] group-hover:text-[#B28544] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-[#2A1C14]/70 font-sans text-sm leading-relaxed mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <div
              className="relative max-w-4xl w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex flex-col justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#B28544] transition-colors p-2 text-xs uppercase tracking-widest font-bold font-sans flex items-center gap-1"
                aria-label="Close Lightbox"
              >
                ✕ Close
              </button>

              {/* Lightbox Image */}
              <div className="relative w-full h-full bg-black/40 rounded-sm overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Lightbox Metadata */}
              <div className="text-center mt-6 text-[#FCFAF8] max-w-xl px-4 cursor-default">
                <span className="text-[#B28544] font-sans text-[10px] uppercase tracking-widest font-bold block mb-1">
                  {selectedImage.wood}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/70 font-sans text-xs sm:text-sm leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
