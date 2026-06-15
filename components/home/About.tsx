'use client';

import { useState } from "react";
import Image from "next/image";
import { CreditCard, ShieldCheck, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import SecondaryButton from "@/components/global/SecondaryButton";
import { motion } from "framer-motion";

const keyValues = [
  {
    icon: CreditCard,
    title: "Payment Options",
    description: "50% Advance Payment / 50% Payment upon Delivery."
  },
  {
    icon: ShieldCheck,
    title: "Customised Designs",
    description: "Manufactured exactly to your designs and specific measurements."
  },
  {
    icon: Truck,
    title: "Delivery & Installation",
    description: "Factory pick-up, or delivery & on-site installation available (charges apply)."
  },
];

export default function AboutSection() {
  // State to track the slider position (0 to 100 percentage)
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-24 bg-[#FCFAF8] w-full relative">

      {/* items-start is crucial here so the sticky child can track the height of the grid */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24 grid grid-cols-1 xl:grid-cols-2 gap-16 relative z-10 items-start">

        {/* Left Column: Sticky Before & After Slider */}
        <motion.div
          className="sticky top-28 w-full h-[70vh] min-h-[500px] rounded-sm overflow-hidden group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >

          {/* Base Layer: "Before" Image */}
          <div className="absolute inset-0 w-full h-full">
            {/* Replace with your actual 'Before' image */}
            <Image
              src="/room-change/before.jpg"
              alt="Space before customisation"
              fill
              className="object-cover"
              priority
            />
            {/* Optional subtle label */}
            <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#1A120E]/70 backdrop-blur-sm text-[#F4ECE1] text-[10px] uppercase tracking-widest font-bold rounded-sm">
              Before
            </div>
          </div>

          {/* Top Layer: "After" Image wrapped in a clipped div */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            {/* Replace with your actual 'After' image */}
            <Image
              src="/room-change/after.png"
              alt="Space after customisation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-6 right-6 px-4 py-1.5 bg-[#B28544]/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-bold rounded-sm">
              After
            </div>
          </div>

          {/* Custom Slider Handle/Thumb */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#FFFF] pointer-events-none z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFFF] rounded-full flex items-center justify-center text-[#592915] shadow-xl">
              <ChevronLeft size={18} strokeWidth={2.5} className="-mr-1" />
              <ChevronRight size={18} strokeWidth={2.5} className="-ml-1" />
            </div>
          </div>

          {/* Invisible Native Input for perfectly smooth drag & touch access */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
            aria-label="Image comparison slider"
          />
        </motion.div>

        {/* Right Column: Brand Story and Value Grid (Scrolls naturally) */}
        <div className="flex flex-col justify-center">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#592915] font-sans text-xs uppercase tracking-[0.2em] font-bold mb-4 block">The Lekshmi Experience</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#592915] mb-4 leading-tight inline-block relative">
              Bespoke Craftsmanship, Tailored for You
            </h2>
            <p className="text-[#2A1C14]/70 font-sans text-lg mb-8 leading-relaxed max-w-2xl mt-6">
              We are dedicated to crafting heirloom-quality furniture that transforms your living spaces. Our commitment to excellence ensures every piece is built to your exact specifications using premium materials, seamless service, and uncompromising attention to detail. Experience the art of truly bespoke design.
            </p>
            <SecondaryButton href="/customization" variant="dark">
              Explore Services
            </SecondaryButton>
          </motion.div>

          {/* Shadowless, 3-Column Grid with Lucide Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[#B28544]/20">
            {keyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-start group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#F4ECE1] flex items-center justify-center text-[#592915] mb-5 group-hover:bg-[#592915] group-hover:text-[#F4ECE1] transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#592915] mb-2 font-sans">{value.title}</h4>
                    <p className="text-sm text-[#2A1C14]/70 font-sans leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}