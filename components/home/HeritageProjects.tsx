"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate, useAnimationFrame } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder data - using an existing image as fallback until real ones are uploaded
const projects = [
  { name: "Marari Beach", image: "/banner/banner-4.png" },
  { name: "Coconut Lagoon", image: "/banner/banner-6.png" },
  { name: "Flamingo Marari", image: "/banner/banner-7.png" },
  { name: "Philipooty Farm", image: "/banner/banner-1.png" },
  { name: "Chittoor Palace", image: "/banner/banner-4.png" },
  { name: "Kollengode Palace", image: "/banner/banner-6.png" },
];

const items = [...projects, ...projects]; // duplicate for seamless infinite loop

export default function HeritageProjects() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [carouselWidth, setCarouselWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [halfWidth, setHalfWidth] = useState(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const calculateWidths = () => {
      if (carouselRef.current && containerRef.current) {
        const fullWidth = carouselRef.current.scrollWidth;
        setCarouselWidth(fullWidth);
        setContainerWidth(containerRef.current.offsetWidth);
        setHalfWidth((fullWidth + 32) / 2); // 32px is the gap-8
      }
    };

    calculateWidths();
    window.addEventListener("resize", calculateWidths);
    return () => window.removeEventListener("resize", calculateWidths);
  }, []);

  useAnimationFrame((t, delta) => {
    if (isHovered || isDragging || isAnimating || x.isAnimating() || !halfWidth) return;

    let currentX = x.get();
    // Cap delta to prevent massive jumps if the tab was inactive
    currentX -= Math.min(delta, 50) * 0.05;

    // Seamless wrap
    if (currentX <= -halfWidth) {
      currentX += halfWidth;
    } else if (currentX > 0) {
      currentX -= halfWidth;
    }

    x.set(currentX);
  });

  const handleNav = (direction: "prev" | "next") => {
    if (!halfWidth) return;
    setIsAnimating(true);

    const scrollAmount = containerWidth * 0.8;
    let currentX = x.get();
    const maxScroll = Math.min(0, -(carouselWidth - containerWidth));

    // Pre-wrap to ensure we have room to animate seamlessly
    if (direction === "prev" && currentX + scrollAmount > 0) {
      currentX -= halfWidth;
      x.set(currentX);
    } else if (direction === "next" && currentX - scrollAmount < maxScroll) {
      currentX += halfWidth;
      x.set(currentX);
    }

    const targetX = direction === "prev" ? currentX + scrollAmount : currentX - scrollAmount;

    animate(x, targetX, { 
      type: "spring", stiffness: 400, damping: 50,
      onComplete: () => setIsAnimating(false)
    });
  };

  return (
    <section className="py-24 bg-[#FCFAF8] w-full border-t border-[#B28544]/20 relative">
      {/* Traditional Indian Mandala Background Motif */}
      <div className="absolute -top-40 -left-40 z-0 opacity-[0.03] pointer-events-none text-[#592915]">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
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

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
        <div className="flex flex-col gap-12 items-center">

          {/* Top: Content */}
          <div className="w-full flex flex-col items-center text-center z-20 max-w-3xl">
            <span className="text-[#B28544] font-sans text-xs uppercase tracking-[0.2em] font-bold mb-4 block">
              Our Prestige
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#592915] mb-6 leading-tight">
              Resort & Heritage Projects
            </h2>
            <p className="text-[#2A1C14]/70 font-sans text-sm md:text-base mb-2 leading-relaxed">
              A showcase of our bespoke craftsmanship tailored for the most exclusive heritage properties and premium resorts across Kerala. We bring traditional aesthetics into the modern hospitality space.
            </p>
          </div>

          {/* Bottom: Draggable Carousel */}
          <div 
            className="w-full relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Controls */}
            <button 
              onClick={() => handleNav("prev")}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-md flex items-center justify-center text-[#592915] hover:bg-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => handleNav("next")}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-md flex items-center justify-center text-[#592915] hover:bg-white transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Track */}
            <motion.div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
              <motion.div
                ref={carouselRef}
                className="flex gap-8 w-max"
                style={{ x }}
                drag="x"
                dragConstraints={{ right: 0, left: Math.min(0, -(carouselWidth - containerWidth)) }}
                dragElastic={0.1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                whileTap={{ cursor: "grabbing" }}
              >
                {items.map((project, idx) => (
                  <div
                    key={idx}
                    className="relative shrink-0 w-[280px] h-[340px] md:h-[400px] rounded-sm overflow-hidden group shadow-lg pointer-events-none"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />

                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A120E]/90 via-[#1A120E]/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start pointer-events-none">
                      <h3 className="text-[#F4ECE1] font-serif text-base tracking-[0.1em] leading-snug uppercase drop-shadow-lg">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
