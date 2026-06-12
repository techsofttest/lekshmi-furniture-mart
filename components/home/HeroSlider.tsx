"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton from "@/components/global/PrimaryButton";

/**
 * 4-Slide Content Data
 * These explain the custom products and craftsmanship core to the business.
 */
const slides = [
  {
    id: 1,
    title: "Crafting Your\nPerfect Living Space",
    description: "Bespoke wooden sofas and sectionals designed for ultimate comfort and timeless elegance, tailored to your home's unique character.",
    image: "/banner/banner-1.png",
    cta: "Custom Living",
    href: "/category/living",
  },
  {
    id: 2,
    title: "Heritage Grade\nBedroom Luxury",
    description: "Handcrafted solid teak and rosewood beds that bring warmth, history, and uncompromising quality to your personal sanctuary.",
    image: "/banner/banner-6.png",
    cta: "Explore Bedrooms",
    href: "/category/bedroom",
  },
  {
    id: 3,
    title: "Gather Around\nTrue Masterpieces",
    description: "Custom-built dining sets designed for memorable family moments and a lifetime of heritage-grade durability.",
    image: "/banner/banner-7.png",
    cta: "Dining Collections",
    href: "/category/dining",
  },
  {
    id: 4,
    title: "Precision In\nEvery Carving",
    description: "Experience the legacy of expert artisans dedicated to preserving traditional Indian wood culture through contemporary bespoke design.",
    image: "/banner/banner-4.png",
    cta: "Our Craft",
    href: "/about",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-[#1A120E]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          {/* Background Image */}
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />

          {/* Minimalist Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1A120E]/80 to-transparent" />

          {/* Content Layer */}
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24 w-full flex justify-end">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="max-w-xl text-right"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F4ECE1] mb-6 md:leading-[1.1] whitespace-pre-line tracking-wide font-normal">
                  {slides[current].title}
                </h1>
                {/* <p className="text-sm md:text-base font-sans text-white/70 mb-10 leading-relaxed font-light max-w-md ml-auto">
                  {slides[current].description}
                </p> */}
                <PrimaryButton href={slides[current].href} variant="light">
                  {slides[current].cta}
                </PrimaryButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Minimal Luxury Slider Indicators */}
      <div className="absolute bottom-10 left-6 lg:left-12 xl:left-24 flex items-center gap-8 z-20">
        <span className="text-[#F4ECE1]/60 text-xs font-light font-sans tracking-[0.2em]">0{current + 1}</span>
        <div className="flex gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-[1px] transition-all duration-700 ${current === idx ? "bg-[#F4ECE1] w-16" : "bg-[#F4ECE1]/30 w-8 hover:bg-[#F4ECE1]/60"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <span className="text-[#F4ECE1]/60 text-xs font-light font-sans tracking-[0.2em]">04</span>
      </div>
    </section>
  );
}