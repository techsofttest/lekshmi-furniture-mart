'use client';

import { useRef } from "react";
import PrimaryButton from "@/components/global/PrimaryButton";
import SecondaryButton from "@/components/global/SecondaryButton";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#2A1C14] w-full relative overflow-hidden">

      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-x-0 -top-[15%] h-[130%] w-full">
          <Image
            src="/banner/cta-bg.jpg"
            alt="Call to action background"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* CTA Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
          Ready to Create Your Dream Furniture?
        </h2>

        {/* CTA Description */}
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
          Let’s collaborate to design bespoke furniture that perfectly complements your home.
          Free consultation available.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <PrimaryButton href="/quote" variant="light">
            Get a Free Quote
          </PrimaryButton>
          <SecondaryButton href="/gallery" variant="light">
            Browse Our Work
          </SecondaryButton>
        </div>
      </motion.div>
    </section>
  );
}
