"use client";

import PrimaryButton from "@/components/global/PrimaryButton";

export default function ArchitectCTA() {
  return (
    <div className="bg-[#FCFAF8] p-8 md:p-16 border-double border-4 border-[#B28544]/30 rounded-sm text-center max-w-4xl mx-auto relative overflow-hidden shadow-sm">
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#B28544]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="relative z-10 space-y-6">
        <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.2em] font-bold block">
          DESIGNERS & ARCHITECTS
        </span>
        <h2 className="text-lg md:text-xl font-serif text-[#592915]">
          Partner with Lekshmi Workshop
        </h2>
        <p className="text-[#2A1C14]/70 font-sans text-sm md:text-normal leading-relaxed max-w-xl mx-auto">
          We specialize in custom prototyping, scale manufacturing, and structural columns matching blueprints. Join forces with us to bring heritage quality to your clients.
        </p>
        <div className="pt-4">
          <PrimaryButton href="https://wa.me/919447101197" variant="dark">
            Submit Architect Enquiry
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
