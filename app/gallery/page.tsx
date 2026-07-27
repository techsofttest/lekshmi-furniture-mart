"use client";

import InnerPageHero from "@/components/global/InnerPageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CTA from "@/components/home/CTA";

export default function GalleryPage() {
  return (
    <div className="bg-white text-[#2A1C14] min-h-screen">
      {/* Shared Hero Banner */}
      <InnerPageHero
        kicker="DESIGN PORTFOLIO"
        title="Our Curated Showcase"
        subtitle="of Teak, Wild Jack & Jackwood Masterworks"
      />

      {/* Gallery Grid Section */}
      <GalleryGrid />

      {/* Footer CTA Section */}
      <CTA />
    </div>
  );
}
