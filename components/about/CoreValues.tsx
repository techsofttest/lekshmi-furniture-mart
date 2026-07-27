"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Compass, Heart, Award } from "lucide-react";

interface CoreValuesProps {
  containerVariants: any;
  itemVariants: any;
}

export default function CoreValues({ containerVariants, itemVariants }: CoreValuesProps) {
  const values = [
    {
      icon: Award,
      title: "Uncompromising Quality",
      description:
        "Every log of Teak, Wild Jack, and Jackwood is personally inspected. We utilize seasoned heartwood and traditional joinery for lifelong durability.",
    },
    {
      icon: Compass,
      title: "Artisanal Vision",
      description:
        "We blend traditional Indian woodcarving heritage with contemporary proportions, crafting unique statements for modern luxury homes.",
    },
    {
      icon: Heart,
      title: "Bespoke Collaboration",
      description:
        "We co-create alongside architects, interior designers, and homeowners, adjusting every dimension and detail to your specifications.",
    },
    {
      icon: ShieldCheck,
      title: "Legacy of Trust",
      description:
        "Building on our origins since 1990, we deliver transparency, reliable service, and furniture that gets passed down through generations.",
    },
  ];

  return (
    <section className="py-24 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.2em] font-bold block">
          OUR CORE VALUES
        </span>
        <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
          Crafting with Purpose & Precision
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {values.map((val, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-[#FCFAF8] p-8 border border-gray-100 rounded-sm hover:border-[#592915]/40 hover:shadow-md transition-all duration-500 flex flex-col justify-start text-center md:text-left items-center md:items-start group"
          >
            <div className="w-12 h-12 rounded-full bg-[#F4ECE1] flex items-center justify-center text-[#592915] mb-6 group-hover:bg-[#592915] group-hover:text-[#F4ECE1] transition-colors duration-500">
              <val.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif text-[#592915] mb-3 font-semibold">
              {val.title}
            </h3>
            <p className="text-[#2A1C14]/70 font-sans text-sm md:text-normal leading-relaxed">
              {val.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
