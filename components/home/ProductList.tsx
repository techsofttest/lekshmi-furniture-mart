'use client';

import Card from "@/components/global/Card";
import { motion } from "framer-motion";

/**
 * Replace these placeholder images with actual high-res photos 
 * in your /public/products folder.
 */
const topSellers = [
  {
    title: "The Royal Teak Bed",
    price: "Starting from ₹45,000",
    image: "/products/bed.jpg",
    href: "/product/royal-teak-bed"
  },
  {
    title: "Classic Rosewood Sofa",
    price: "Starting from ₹68,000",
    image: "/products/vintage-sofa.jpg",
    href: "/product/classic-rosewood-sofa"
  },
  {
    title: "Artisan Dining Set",
    price: "Starting from ₹85,000",
    image: "/products/dining-table.jpg",
    href: "/product/artisan-dining"
  },
  {
    title: "Minimalist Console",
    price: "Starting from ₹18,500",
    image: "/products/console2.jpg",
    href: "/product/minimalist-console"
  },
];

export default function ProductList() {
  return (
    <section className="py-24 bg-white w-full border-t border-[#F4ECE1]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24">

        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="text-[#592915] font-sans text-xs uppercase tracking-[0.2em] font-bold mb-4 block">
            Most Loved
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#592915] mb-4 inline-block relative">
            Signature Masterpieces
          </h2>
        </motion.div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {topSellers.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              <Card
                title={product.title}
                price={product.price}
                image={product.image}
                href={product.href}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}