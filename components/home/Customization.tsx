'use client';

import { useRef } from "react";
import Image from "next/image";
import SecondaryButton from "@/components/global/SecondaryButton";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CustomisationSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: leftScroll } = useScroll({
    target: leftRef,
    offset: ["start end", "end start"],
  });
  const leftY = useTransform(leftScroll, [0, 1], ["-10%", "10%"]);

  const rightRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: rightScroll } = useScroll({
    target: rightRef,
    offset: ["start end", "end start"],
  });
  const rightY = useTransform(rightScroll, [0, 1], ["-10%", "10%"]);

  return (
    <section className="w-full bg-[#F5E6D3] border-y border-[#B28544]/20 overflow-hidden">
      {/* Strict 3-column grid that stretches edge-to-edge */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full min-h-[600px] lg:min-h-[700px]">

        {/* Left Image Pane */}
        <div ref={leftRef} className="relative w-full h-[400px] lg:h-full overflow-hidden group">
          <motion.div
            style={{ y: leftY }}
            className="absolute inset-x-0 -top-[10%] h-[120%] w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/custom-banner/custom-2.png"
              alt="Close up of custom joinery and wood finish"
              fill
              className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Center Content Pane */}
        <motion.div
          className="flex flex-col items-center justify-center text-center p-10 lg:p-16 bg-[#F5E6D3] z-10 shadow-[0_0_50px_rgba(0,0,0,0.03)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Placement */}
          <div className="mb-10">
            <Image
              src="/logo/logo2.png"
              alt="Lekshmi Furniture Mart"
              width={100}
              height={120}
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Heading mimicking the cursive "Home of the Hostess" emphasis */}
          <h2 className="text-3xl md:text-4xl font-serif text-[#592915] mb-6 leading-tight italic">
            Custom Crafted Furniture
          </h2>

          {/* Body Text */}
          <p className="text-[#2A1C14]/70 font-sans text-sm lg:text-base leading-relaxed mb-10 max-w-sm mx-auto">
            The newest generation of homeowners are designing spaces differently. In collaboration with our master craftsmen, discover how to bring your unique vision to life with precision and heritage quality.
          </p>

          {/* Secondary CTA */}
          <SecondaryButton href="/custom" variant="dark">
            Start Your Project
          </SecondaryButton>
        </motion.div>

        {/* Right Image Pane */}
        <div ref={rightRef} className="relative w-full h-[400px] lg:h-full overflow-hidden group">
          <motion.div
            style={{ y: rightY }}
            className="absolute inset-x-0 -top-[10%] h-[120%] w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/custom-banner/custom-1.png"
              alt="Wide view of a fully customized room setting"
              fill
              className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}