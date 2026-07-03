"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface InnerPageHeroProps {
  title: string;
  subtitle?: string;
  kicker: string;
}

export default function InnerPageHero({ title, subtitle, kicker }: InnerPageHeroProps) {
  return (
    <section className="relative h-[45vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden bg-[#1A120E]">
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <Image
          src="/section-bg/about2.png"
          alt="Artisanal workshop background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-white/80 font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold block">
            {kicker}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#F4ECE1] leading-tight max-w-4xl mx-auto">
            {title} {subtitle && <><br /><span className="italic">{subtitle}</span></>}
          </h1>
          <div className="w-16 h-[2px] bg-white/50 mx-auto mt-6" />
        </motion.div>
      </div>
    </section>
  );
}
