"use client";

import InnerPageHero from "@/components/global/InnerPageHero";
import AboutSection from "@/components/home/About";
import CustomisationSection from "@/components/home/Customization";
import CTA from "@/components/home/CTA";

export default function CustomDesignsPage() {
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
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const },
        },
    };

    return (
        <div className="bg-white text-[#2A1C14] min-h-screen">
            {/* Hero Banner */}
            <InnerPageHero
                kicker="Bespoke Creations"
                title="Your Vision, Our Craftsmanship"
                subtitle="Tailored furniture from premium Teak & Rosewood"
            />

            {/* Before & After Slider Section */}
            <AboutSection />

            {/* Custom Crafted Furniture Section */}
            <CustomisationSection />

            {/* Final CTA */}
            <CTA />
        </div>
    );
}