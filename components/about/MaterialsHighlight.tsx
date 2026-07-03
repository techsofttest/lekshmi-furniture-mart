"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const materials = [
  {
    label: "Nilambur & Konni Teak",
    title: "Grandeur & Resilience",
    description:
      "Known for its high oil content, tensile strength, and tight grain, our solid Teakwood offers exceptional resistance to weather and pests. Perfect for signature dining tables, exterior fixtures, and heavy structures.",

    number: "01",
  },
  {
    label: "Kerala Rosewood (Eetti)",
    title: "Lustrous Deep Crimson",
    description:
      "A highly prized exotic wood featuring rich dark streaks and dark brown-to-purple tones. Our Rosewood is meticulously hand-polished to elevate its natural luster, making it the ultimate selection for royal-grade beds and cabinets.",

    number: "02",
  },
];

const stats = [
  { value: "35+", label: "Years of Craft" },
  { value: "2", label: "Premium Wood Species" },
  { value: "100%", label: "Solid Heartwood" },
  { value: "Kerala", label: "Indigenous Sourcing" },
];

export default function MaterialsHighlight() {
  return (
    <section className="bg-white overflow-hidden">

      {/* Top: Full-bleed split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left: Full-bleed Craftsman Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative min-h-[400px] lg:min-h-full overflow-hidden"
        >
          <Image
            src="/craft/carp.png"
            alt="Master craftsman at work"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale"
            priority
          />
          {/* Top + bottom gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />

          {/* Top-left: Section header overlay */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-8 left-8 lg:top-12 lg:left-12"
          >
            <span className="text-white/60 font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-2">
              Premium Material Selection
            </span>
            <h2 className="text-xl md:text-2xl font-serif text-white leading-tight">
              The Soul of Lekshmi:<br />
              <span className="italic">Teak &amp; Rosewood</span>
            </h2>
          </motion.div>

          {/* Bottom caption */}
          <div className="absolute bottom-8 left-8">
            <span className="text-white/60 font-sans text-[10px] uppercase tracking-[0.3em] font-bold block mb-1">
              Master Workshop
            </span>
            <span className="text-white font-serif text-base italic">
              Precision by Hand, Perfection by Legacy
            </span>
          </div>
        </motion.div>

        {/* Right: Stacked Material Panels */}
        <div className="flex flex-col bg-[#FCFAF8]">

          {/* Material Panels */}
          {materials.map((mat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group px-10 lg:px-16 py-10 border-b border-[#592915]/10 flex gap-8 items-start hover:bg-white transition-colors duration-500"
            >
              {/* Large ordinal number */}
              <span className="text-[#592915]/15 font-serif text-5xl font-light select-none leading-none mt-1 shrink-0 group-hover:text-[#592915]/25 transition-colors duration-500">
                {mat.number}
              </span>

              <div className="space-y-3 flex-1">
                <span className="text-[#592915] font-serif text-sm italic block">
                  {mat.label}
                </span>
                <h3 className="text-lg font-serif text-[#2A1C14] group-hover:text-[#592915] transition-colors duration-500">
                  {mat.title}
                </h3>
                <p className="text-[#2A1C14]/65 font-sans text-sm leading-relaxed">
                  {mat.description}
                </p>
                {/* <div className="pt-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#592915]/60 font-bold border border-[#592915]/20 px-3 py-1 inline-block">
                    {mat.warranty}
                  </span>
                </div> */}
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* Bottom: Stat Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#592915] grid grid-cols-2 md:grid-cols-4"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`px-8 py-8 text-center border-r border-white/10 last:border-r-0 ${idx === 2 ? "md:border-r border-white/10" : ""}`}
          >
            <span className="text-white font-serif text-3xl md:text-4xl font-light block mb-1">
              {stat.value}
            </span>
            <span className="text-white/50 font-sans text-[10px] uppercase tracking-[0.2em] font-bold">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

    </section>
  );
}
