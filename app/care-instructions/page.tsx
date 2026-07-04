"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import InnerPageHero from "@/components/global/InnerPageHero";
import CTA from "@/components/home/CTA";
import Link from "next/link";
import {
    Droplets,
    Sun,
    Wind,
    ShieldCheck,
    AlertTriangle,
    Sparkles,
    Bug,
    Thermometer,
    CheckCircle2,
    XCircle,
    ChevronDown,
    HelpCircle,
} from "lucide-react";

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" as const },
    }),
};

// ─── Data ──────────────────────────────────────────────────────────────────────
const woodTypes = [
    {
        name: "Teak Wood",
        tagline: "The Gold Standard of Hardwoods",
        care: "Wipe with a lightly damp cloth. Oil with teak oil every 6–12 months to preserve its golden hue. Avoid prolonged exposure to direct sunlight.",
        color: "#8B5E3C",
    },
    {
        name: "Rosewood",
        tagline: "Rich Grain, Timeless Character",
        care: "Dust regularly with a soft dry cloth. Use a mild furniture polish occasionally. Keep away from heat sources and direct sunlight to prevent colour fading.",
        color: "#6B2D2D",
    },
    {
        name: "Sheesham",
        tagline: "Durable & Warm Toned",
        care: "Clean with a slightly damp cloth and dry immediately. Use linseed oil every 12 months. Avoid placing hot items directly on the surface.",
        color: "#7A4A2A",
    },
    {
        name: "Rubber Wood",
        tagline: "Eco-Friendly & Versatile",
        care: "Wipe with a dry or barely damp cloth. Use a mild wood cleaner for stains. Protect from moisture and keep indoors away from humidity.",
        color: "#9C7B5A",
    },
];

const dos = [
    "Dust regularly with a soft, lint-free cloth to prevent surface build-up.",
    "Use a mild, furniture-safe cleaner for spot cleaning spills.",
    "Place felt pads or coasters under objects to prevent scratches.",
    "Oil or condition wood surfaces every 6–12 months as recommended.",
    "Keep furniture in well-ventilated spaces with stable humidity.",
    "Rotate decorative objects periodically to ensure even sun exposure.",
];

const donts = [
    "Never place hot items (pots, irons) directly on wood surfaces.",
    "Avoid harsh chemical cleaners, bleach, or abrasive scrubbers.",
    "Do not soak wood with water — excessive moisture causes warping.",
    "Keep out of direct sunlight for prolonged periods to prevent fading.",
    "Avoid dragging furniture across hard floors — lift to move.",
    "Do not use silicone-based sprays which can build up and cloud the finish.",
];

const specialCare = [
    {
        icon: Droplets,
        title: "Moisture & Spills",
        desc: "Wipe spills immediately with a dry cloth. Never let liquids pool on any surface. For upholstered pieces, blot — do not rub.",
    },
    {
        icon: Sun,
        title: "Sunlight",
        desc: "UV rays fade and dry out wood over time. Use curtains or UV-blocking films on windows near furniture. Rotate placement seasonally.",
    },
    {
        icon: Thermometer,
        title: "Temperature",
        desc: "Wood expands and contracts with temperature changes. Avoid placing furniture next to radiators, AC vents, or fireplaces.",
    },
    {
        icon: Bug,
        title: "Pest Prevention",
        desc: "Inspect annually for signs of borer or termite activity. Use camphor balls in enclosed storage pieces. Report any concerns early.",
    },
    {
        icon: Wind,
        title: "Ventilation",
        desc: "Ensure adequate airflow around furniture, especially wardrobes and chests, to prevent mould in humid Kerala climates.",
    },
    {
        icon: Sparkles,
        title: "Polishing",
        desc: "Use only natural wax or oil-based polish suited to your wood type. Over-polishing can clog the grain — once or twice a year is sufficient.",
    },
];

const faqs = [
    {
        question: "How often should I polish my solid wood furniture?",
        answer: "For most hardwoods like teak and rosewood, polishing once every 6–12 months is sufficient. Over-polishing can clog the wood's pores. Always use a natural wax or oil-based polish recommended for your specific wood type."
    },
    {
        question: "What should I do if I spill water on my furniture?",
        answer: "Act immediately. Blot the spill with a soft, dry cloth. Do not wipe, as this can spread the liquid. For sticky spills, use a slightly damp cloth with a mild, pH-neutral soap, and dry the surface completely afterwards."
    },
    {
        question: "Is it okay to place my furniture near a window?",
        answer: "It's best to avoid placing solid wood furniture in direct, prolonged sunlight. UV rays can cause the wood's color to fade and may lead to drying or cracking over time. Use curtains or blinds to diffuse harsh light."
    },
    {
        question: "Can I place a hot cup of tea on my wooden table?",
        answer: "No, never place hot items directly on a wood surface. The heat can damage the finish and leave permanent white rings or marks. Always use coasters, placemats, or trivets to protect the wood."
    },
    {
        question: "My furniture has a small scratch. How can I fix it?",
        answer: "For minor surface scratches, you can often use a touch-up marker or a wax repair stick that matches your furniture's finish. For deeper scratches, it's best to consult a professional. You can also contact our team for advice on your specific piece."
    }
];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function CareInstructionsPage() {
    return (
        <div className="bg-white text-[#2A1C14]">
            <InnerPageHero
                kicker="Preserve the Craft"
                title="Care Instructions"
                subtitle="Keep your furniture beautiful, for generations."
            />

            {/* Intro */}
            <section className="py-20 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeUp}
                >
                    <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-4">
                        The Lekshmi Guide
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif text-[#592915] mb-6">
                        Built to Last — With the Right Care
                    </h2>
                    <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mb-6" />
                    <p className="text-[#2A1C14]/65 font-sans text-sm md:text-base leading-relaxed">
                        Every piece from Lekshmi Furniture Mart is crafted from premium solid hardwoods
                        — teak, rosewood, sheesham, and more. With the right care, these natural materials
                        reward you with decades of beauty. Follow this guide to protect your investment
                        and honour the craft within each piece.
                    </p>
                </motion.div>
            </section>

            {/* By Wood Type */}
            <section className="py-16 bg-[#FCFAF8]">
                <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                    <motion.div
                        className="text-center mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        variants={fadeUp}
                    >
                        <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                            Material-Specific Guidance
                        </span>
                        <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                            Care by Wood Type
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {woodTypes.map((wood, i) => (
                            <motion.div
                                key={wood.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i + 1}
                                variants={fadeUp}
                                className="bg-white border border-gray-100 p-7 rounded-sm"
                            >
                                <div
                                    className="w-10 h-[3px] rounded-full mb-5"
                                    style={{ backgroundColor: wood.color }}
                                />
                                <h3 className="font-serif text-lg text-[#592915] mb-1">{wood.name}</h3>
                                <p className="text-[9px] uppercase tracking-widest font-bold text-[#592915]/70 mb-4">
                                    {wood.tagline}
                                </p>
                                <p className="text-sm text-[#2A1C14]/70 leading-relaxed font-sans">
                                    {wood.care}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOs and DON'Ts */}
            <section className="py-20 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                <motion.div
                    className="text-center mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeUp}
                >
                    <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                        Essential Rules
                    </span>
                    <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                        The DOs &amp; DON'Ts
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* DOs */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        variants={fadeUp}
                        className="bg-[#FCFAF8] border border-gray-100 p-8 rounded-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="w-5 h-5 text-[#592915]" />
                            <h3 className="font-serif text-xl text-[#592915]">Do This</h3>
                        </div>
                        <ul className="space-y-4">
                            {dos.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-[#2A1C14]/75 font-sans leading-relaxed">
                                    <span className="text-[#592915] mt-0.5 shrink-0">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* DON'Ts */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2}
                        variants={fadeUp}
                        className="bg-white border border-gray-100 p-8 rounded-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="w-5 h-5 text-[#8B3A3A]" />
                            <h3 className="font-serif text-xl text-[#2A1C14]">Avoid This</h3>
                        </div>
                        <ul className="space-y-4">
                            {donts.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-[#2A1C14]/75 font-sans leading-relaxed">
                                    <span className="text-[#8B3A3A] mt-0.5 shrink-0">✗</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Special Care Topics */}
            <section className="py-16 bg-[#FCFAF8]">
                <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                    <motion.div
                        className="text-center mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        variants={fadeUp}
                    >
                        <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                            Situational Guidance
                        </span>
                        <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                            Special Care Scenarios
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specialCare.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={i + 1}
                                    variants={fadeUp}
                                    className="bg-white border border-gray-100 p-7 rounded-sm"
                                >
                                    <Icon className="w-5 h-5 text-[#592915] mb-4" strokeWidth={1.5} />
                                    <h3 className="font-serif text-base text-[#592915] mb-2">{item.title}</h3>
                                    <p className="text-sm text-[#2A1C14]/65 leading-relaxed font-sans">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                <motion.div
                    className="text-center mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeUp}
                >
                    <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                        Quick Answers
                    </span>
                    <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mt-5" />
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} custom={i + 1} />
                    ))}
                </div>
            </section>

            <CTA />
        </div>
    );
}

function FAQItem({ question, answer, custom }: { question: string, answer: string, custom: number }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={custom}
            variants={fadeUp}
            className="border-b border-gray-100 last:border-b-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-5"
            >
                <h3 className="text-base md:text-lg font-serif text-[#592915]">{question}</h3>
                <ChevronDown className={`w-5 h-5 text-[#592915]/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                        <p className="pb-6 text-sm text-[#2A1C14]/70 font-sans leading-relaxed pr-8">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
