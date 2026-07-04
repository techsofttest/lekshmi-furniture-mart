"use client";

import { motion } from "framer-motion";
import InnerPageHero from "@/components/global/InnerPageHero";
import Link from "next/link";
import {
    Home,
    Info,
    ShoppingBag,
    Brush,
    Image as ImageIcon,
    Users,
    MapPin,
    CreditCard,
    HeartHandshake,
    BookOpen,
    Map,
    ChevronRight,
} from "lucide-react";

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
    }),
};

// ─── Sitemap Data ──────────────────────────────────────────────────────────────
const sections = [
    {
        icon: Home,
        title: "Home",
        links: [
            { label: "Homepage", href: "/" },
        ],
    },
    {
        icon: Info,
        title: "About",
        links: [
            { label: "Our Story", href: "/about" },
            { label: "Gallery", href: "/gallery" },
            { label: "Client Projects", href: "/projects" },
        ],
    },
    {
        icon: ShoppingBag,
        title: "Living Room",
        links: [
            { label: "Coffee Tables", href: "/products/living/coffee-tables" },
            { label: "Side & End Tables", href: "/products/living/side-and-end-tables" },
            { label: "Console Tables", href: "/products/living/console-tables" },
            { label: "Nest of Tables", href: "/products/living/nest-of-tables" },
            { label: "TV Consoles", href: "/products/living/tv-consoles" },
            { label: "Bookshelves", href: "/products/living/bookshelves" },
            { label: "Display Units", href: "/products/living/display-units" },
            { label: "Shoe Racks", href: "/products/living/shoe-racks" },
        ],
    },
    {
        icon: ShoppingBag,
        title: "Bedroom",
        links: [
            { label: "King Size Beds", href: "/products/bedroom/king-size-beds" },
            { label: "Queen Size Beds", href: "/products/bedroom/queen-size-beds" },
            { label: "Single & Poster Beds", href: "/products/bedroom/single-and-poster-beds" },
            { label: "Beds with Storage", href: "/products/bedroom/beds-with-storage" },
            { label: "Wardrobes", href: "/products/bedroom/wardrobes" },
            { label: "Bedside Tables", href: "/products/bedroom/bedside-tables" },
            { label: "Dressers & Mirrors", href: "/products/bedroom/dressers-and-mirrors" },
            { label: "Chest of Drawers", href: "/products/bedroom/chest-of-drawers" },
        ],
    },
    {
        icon: ShoppingBag,
        title: "Dining",
        links: [
            { label: "4 Seater Dining Sets", href: "/products/dining/4-seater-dining-sets" },
            { label: "6 Seater Dining Sets", href: "/products/dining/6-seater-dining-sets" },
            { label: "Dining Tables", href: "/products/dining/dining-tables" },
            { label: "Dining Chairs & Benches", href: "/products/dining/dining-chairs-and-benches" },
        ],
    },
    {
        icon: BookOpen,
        title: "Study & Office",
        links: [
            { label: "Study Tables", href: "/products/study/study-tables" },
            { label: "Computer Desks", href: "/products/study/computer-desks" },
            { label: "Executive Desks", href: "/products/study/executive-desks" },
            { label: "Standing Desks", href: "/products/study/standing-desks" },
            { label: "Ergonomic Chairs", href: "/products/study/ergonomic-chairs" },
            { label: "Study Chairs", href: "/products/study/study-chairs" },
            { label: "Office Ergonomic Chairs", href: "/products/office-room/ergonomic-chairs-office" },
            { label: "Office Computer Tables", href: "/products/office-room/computer-tables" },
        ],
    },
    {
        icon: ShoppingBag,
        title: "Storage Furniture",
        links: [
            { label: "2 Door Wardrobes", href: "/products/storage-furniture/2-door-wardrobes" },
            { label: "3+ Door Wardrobes", href: "/products/storage-furniture/3-plus-door-wardrobes" },
            { label: "Chest of Drawers", href: "/products/storage-furniture/chest-of-drawers-storage" },
            { label: "Shoe Racks", href: "/products/storage-furniture/shoe-racks-storage" },
        ],
    },
    {
        icon: ShoppingBag,
        title: "Pillars",
        links: [
            { label: "Teak Wood Pillars", href: "/products/pillars/teak-wood-pillars" },
            { label: "Rosewood Pillars", href: "/products/pillars/rosewood-pillars" },
            { label: "Sheesham Pillars", href: "/products/pillars/sheesham-pillars" },
            { label: "Sandstone Pillars", href: "/products/pillars/sandstone-pillars" },
            { label: "Carved Pillars", href: "/products/pillars/carved-pillars" },
            { label: "Decorative Pillars", href: "/products/pillars/decorative-pillars" },
        ],
    },
    {
        icon: ShoppingBag,
        title: "Furnishing",
        links: [
            { label: "Bedsheets", href: "/products/furnishing/bedsheets" },
            { label: "Blankets & Dohars", href: "/products/furnishing/blankets-and-dohars" },
            { label: "Pillows & Cushions", href: "/products/furnishing/pillows-and-cushions" },
            { label: "Carpets & Rugs", href: "/products/furnishing/carpets-and-rugs" },
            { label: "Window Curtains", href: "/products/furnishing/window-curtains" },
            { label: "Door Curtains", href: "/products/furnishing/door-curtains" },
        ],
    },
    {
        icon: Brush,
        title: "Services",
        links: [
            { label: "Custom Designs", href: "/custom-designs" },
            { label: "Shop Locator", href: "/locator" },
            { label: "Payment Options", href: "/payment-options" },
        ],
    },
    {
        icon: HeartHandshake,
        title: "Help & Support",
        links: [
            { label: "Care Instructions", href: "/care-instructions" },
            { label: "Sitemap", href: "/sitemap" },
        ],
    },
];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function SitemapPage() {
    return (
        <div className="bg-white text-[#2A1C14]">
            <InnerPageHero
                kicker="Navigate with Ease"
                title="Sitemap"
                subtitle="Every page, at a glance."
            />

            <section className="py-20 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sections.map((section, i) => {
                        const Icon = section.icon;
                        return (
                            <motion.div
                                key={section.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i + 1}
                                variants={fadeUp}
                                className="bg-[#FCFAF8] border border-gray-100 rounded-sm p-7"
                            >
                                <div className="flex items-center gap-2 mb-5">
                                    <Icon className="w-4 h-4 text-[#592915]" strokeWidth={1.5} />
                                    <h3 className="font-serif text-base text-[#592915]">
                                        {section.title}
                                    </h3>
                                </div>
                                <ul className="space-y-2.5">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center gap-1.5 text-sm text-[#2A1C14]/70 hover:text-[#592915] font-sans transition-colors group"
                                            >
                                                <ChevronRight className="w-3 h-3 shrink-0 text-[#592915]/40 group-hover:text-[#592915] transition-colors" />
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
