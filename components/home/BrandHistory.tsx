"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BrandHistory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#1A120E] w-full overflow-hidden border-t border-[#B28544]/20 relative">
      {/* Background Image with Low Opacity & Parallax */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-x-0 -top-[15%] h-[130%] w-full">
          <Image
            src="/banner/banner-1.png"
            alt="Brand History Background"
            fill
            className="object-cover"
          />
        </motion.div>
        {/* Dark Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A120E]/60 via-transparent to-[#1A120E]/60" />
      </div>

      {/* Traditional Indian Mandala Background Motif - Top Right */}
      <div className="absolute -top-20 -right-20 z-0 opacity-[0.04] pointer-events-none text-[#F4ECE1]">
        <svg width="350" height="350" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" />
          <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 15 15 L 85 85 M 15 85 L 85 15" />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <path key={i} d="M 50 50 Q 46 25 50 15 Q 54 25 50 50" transform={`rotate(${angle} 50 50)`} />
            );
          })}
        </svg>
      </div>

      {/* Traditional Indian Mandala Background Motif - Bottom Left */}
      <div className="absolute -bottom-20 -left-20 z-0 opacity-[0.04] pointer-events-none text-[#F4ECE1]">
        <svg width="350" height="350" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" />
          <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 15 15 L 85 85 M 15 85 L 85 15" />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <path key={i} d="M 50 50 Q 46 25 50 15 Q 54 25 50 50" transform={`rotate(${angle} 50 50)`} />
            );
          })}
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Kicker */}
          <span className="text-[#B28544] font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-6 block">
            Our Story
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F4ECE1] mb-6 leading-tight">
            Our Collaborative <br className="hidden sm:block" />
            <span className="italic text-[#B28544]">Legacy</span>
          </h2>

          <div className="w-16 h-[1px] bg-[#B28544]/40 mb-10" />

          <div className="space-y-6 text-[#F4ECE1]/80 font-sans text-lg md:text-xl leading-relaxed font-light">
            <p>
              Our roots were established in 1990 with <span className="font-semibold text-white tracking-wide">"Vishnu Furniture Mart"</span>, started by two brothers. Under this legacy, we successfully executed major resort projects including Marari Beach and Coconut Lagoon.
            </p>
            <p>
              In 2010, <span className="font-semibold text-white tracking-wide">"Lakshmi Furniture Mart"</span> was established as the next branch, building upon the collaborative legacy and artisanal excellence cultivated over three decades. 
            </p>
            <p>
              From the selection of premium woods to the final meticulous finish, we specialize in bespoke furniture, allowing you to bring your unique vision to life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
