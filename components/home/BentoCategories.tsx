"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionLink = motion.create(Link);

interface ParallaxImageProps {
  src: string;
  alt: string;
}

function ParallaxImage({ src, alt }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Maps the scroll progress to a y-axis shift (moving from -10% to 10%)
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-gray-200">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] h-[120%] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
        />
      </motion.div>
    </div>
  );
}

export default function BentoCategories() {
  return (
    <section className="py-24 bg-[#FCF8F3] w-full relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24 relative z-20">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#592915] mb-4 inline-block relative">
            Our Collections
          </h2>
        </motion.div>

        {/* The Grid: 3 columns on row 1, 2 columns on row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 xl:gap-8">
          
          {/* Item 1: THE LIVING EDIT (Row 1, Col 1-2) */}
          <MotionLink
            href="/category/living"
            className="relative overflow-hidden group col-span-1 md:col-span-2 h-[260px] sm:h-[300px] md:h-[320px] rounded-sm block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ParallaxImage src="/main-cagory/living-room.png" alt="Living" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <span className="text-white/80 font-sans text-xs uppercase tracking-[0.25em] mb-1.5 font-light">THE</span>
              <h3 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em] uppercase font-normal">LIVING</h3>
              <span className="text-white/80 font-sans text-xs uppercase tracking-[0.25em] mt-1.5 font-light">EDIT</span>
            </div>
          </MotionLink>

          {/* Item 2: THE DINING SPACE (Row 1, Col 3-4) */}
          <MotionLink
            href="/category/dining"
            className="relative overflow-hidden group col-span-1 md:col-span-2 h-[260px] sm:h-[300px] md:h-[320px] rounded-sm block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ParallaxImage src="/main-cagory/dinin-room.png" alt="Dining" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <span className="text-white/80 font-sans text-xs uppercase tracking-[0.25em] mb-1.5 font-light">THE</span>
              <h3 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em] uppercase font-normal">DINING</h3>
              <span className="text-white/80 font-sans text-xs uppercase tracking-[0.25em] mt-1.5 font-light">SPACE</span>
            </div>
          </MotionLink>

          {/* Item 3: THE BEDROOM SERIES (Row 1, Col 5-6) */}
          <MotionLink
            href="/category/bedroom"
            className="relative overflow-hidden group col-span-1 md:col-span-2 h-[260px] sm:h-[300px] md:h-[320px] rounded-sm block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ParallaxImage src="/main-cagory/bed-room.png" alt="Bedroom" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <span className="text-white/80 font-sans text-xs uppercase tracking-[0.25em] mb-1.5 font-light">THE</span>
              <h3 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em] uppercase font-normal">BEDROOM</h3>
              <span className="text-white/80 font-sans text-xs uppercase tracking-[0.25em] mt-1.5 font-light">SERIES</span>
            </div>
          </MotionLink>

          {/* Item 4: KITCHEN (Row 2, Col 1-3) */}
          <MotionLink
            href="/category/dining-kitchen"
            className="relative overflow-hidden group col-span-1 md:col-span-3 h-[260px] sm:h-[300px] md:h-[320px] rounded-sm block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ParallaxImage src="/main-cagory/kitchen.jpg" alt="Kitchen" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <span className="text-white/80 font-sans text-xs uppercase tracking-[0.25em] mb-1.5 font-light">THE</span>
              <h3 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em] uppercase font-normal">KITCHEN</h3>
              <span className="text-white/80 font-sans text-xs uppercase tracking-[0.25em] mt-1.5 font-light">SPACE</span>
            </div>
          </MotionLink>

          {/* Item 5: SOFAS & RECLINERS (Row 2, Col 4-6) */}
          <MotionLink
            href="/category/sofas-recliners"
            className="relative overflow-hidden group col-span-1 md:col-span-3 h-[260px] sm:h-[300px] md:h-[320px] rounded-sm block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ParallaxImage src="/main-cagory/brown-sofa.jpg" alt="Sofas & Recliners" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <span className="text-white/80 font-sans text-xs uppercase tracking-[0.25em] mb-1.5 font-light">SOFAS &</span>
              <h3 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em] uppercase font-normal">RECLINERS</h3>
              <span className="text-white/80 font-sans text-xs uppercase tracking-[0.25em] mt-1.5 font-light">COLLECTION</span>
            </div>
          </MotionLink>

        </div>
      </div>
    </section>
  );
}
