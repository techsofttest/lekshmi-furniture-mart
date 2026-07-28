"use client";

import InnerPageHero from "@/components/global/InnerPageHero";
import LegacyStory from "@/components/about/LegacyStory";
import MaterialsHighlight from "@/components/about/MaterialsHighlight";
import CoreValues from "@/components/about/CoreValues";
import CTA from "@/components/home/CTA";
import WoodTypes from "@/components/home/WoodTypes";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <div className="bg-white text-[#2A1C14] min-h-screen">
      {/* Shared Hero Banner */}
      <InnerPageHero
        kicker="Our Story"
        title="Crafting Legacy &"
        subtitle="Bespoke Elegance"
      />

      {/* Legacy & Story Section */}
      <LegacyStory
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Materials & Woodcraft Highlight */}
      <MaterialsHighlight />

      {/*New Wood Types Section */}
      <WoodTypes />

      {/* Values Section */}
      <CoreValues
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Showroom CTA Section */}
      <CTA />
    </div>
  );
}
