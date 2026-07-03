"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface LegacyStoryProps {
  containerVariants: any;
  itemVariants: any;
}

export default function LegacyStory({ containerVariants, itemVariants }: LegacyStoryProps) {
  return (
    <section className="bg-[#592915] py-24 w-full relative overflow-hidden">
      {/* Premium Wood Ring Background Pattern (Low Opacity) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="woodGrainLegacy" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <circle cx="150" cy="150" r="140" stroke="#F4ECE1" strokeWidth="1" fill="none" />
              <circle cx="150" cy="150" r="110" stroke="#F4ECE1" strokeWidth="1" strokeDasharray="5 5" fill="none" />
              <circle cx="150" cy="150" r="80" stroke="#F4ECE1" strokeWidth="1.5" fill="none" />
              <circle cx="150" cy="150" r="50" stroke="#F4ECE1" strokeWidth="1" fill="none" />
              <circle cx="150" cy="150" r="20" stroke="#F4ECE1" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#woodGrainLegacy)" />
        </svg>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 lg:px-8 text-center flex flex-col items-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4 flex flex-col items-center">
            <span className="text-[#F4ECE1]/80 font-sans text-[10px] uppercase tracking-[0.2em] font-bold block">
              OUR HERITAGE
            </span>
            <h2 className="text-xl md:text-2xl font-serif text-[#F4ECE1] leading-tight">
              Two Brothers, One Vision of Perfect Woodcraft
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 max-w-3xl mx-auto">
            <p className="text-[#F4ECE1]/70 font-sans text-base md:text-lg leading-relaxed">
              Our journey began in 1990 under the name <strong className="text-white font-semibold">Vishnu Furniture Mart</strong>, started by two brothers with an enduring passion for premium carpentry. We quickly earned a reputation for reliability, executing high-profile resort projects like the Marari Beach Resort and Coconut Lagoon.
            </p>
            <p className="text-[#F4ECE1]/70 font-sans text-base md:text-lg leading-relaxed">
              In 2010, <strong className="text-white font-semibold">Lekshmi Furniture Mart</strong> was founded as our dedicated boutique branch to specialize in high-end, customized furniture for residential and corporate clients.
            </p>
            <p className="text-[#F4ECE1]/70 font-sans text-base md:text-lg leading-relaxed">
              Every piece that leaves our workshop carries over three decades of collaborative expertise, blending time-honored joinery methods with modern elegance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
