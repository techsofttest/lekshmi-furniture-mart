"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface CardProps {
  title: string;
  price?: string;
  image: string;
  href: string;
}

export default function Card({ title, price, image, href }: CardProps) {
  // Reference the container to track when it enters/exits the viewport
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress relative to this specific card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Triggers from bottom of screen to top of screen
  });

  // Map the scroll progress (0 to 1) to a Y-axis pixel/percentage shift.
  // The image will move from -10% to 10% on the Y axis as you scroll.
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Link 
      href={href} 
      className="group flex flex-col gap-6 cursor-pointer w-full"
    >
      {/* Image Container
        1:1 Ratio (aspect-square), no shadows, overflow-hidden to crop the parallax image.
      */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-square overflow-hidden bg-[#F4ECE1] rounded-sm"
      >
        {/* Parallax Wrapper
          We make the wrapper 120% taller than the container (-top-[10%] to stretch it).
          This gives the image extra room to move up and down without exposing empty edges.
        */}
        <motion.div 
          style={{ y }}
          className="absolute inset-x-0 -top-[10%] h-[120%] w-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
        >
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover" 
          />
        </motion.div>
      </div>

      {/* Content Below Image */}
      <div className="flex flex-col items-start px-1">
        <h3 className="text-[#592915] font-serif text-xl md:text-2xl mb-2 transition-colors duration-500 group-hover:text-[#B28544]">
          {title}
        </h3>
        {price && (
          <p className="text-[#2A1C14]/70 font-sans text-xs tracking-[0.15em] uppercase font-bold">
            {price}
          </p>
        )}
      </div>
    </Link>
  );
}