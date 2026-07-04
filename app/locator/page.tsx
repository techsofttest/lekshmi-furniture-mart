"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InnerPageHero from "@/components/global/InnerPageHero";
import CTA from "@/components/home/CTA";
import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Navigation,
    MessageCircle,
    ChevronRight,
    Car,
    Train,
} from "lucide-react";

// ─── Store Data ───────────────────────────────────────────────────────────────
const stores = [
    {
        id: 1,
        name: "Lekshmi Furniture Mart",
        address: "NH 66, Bypass Road, Irinjalakuda, Thrissur, Kerala – 680 121",
        phone: "+91 90744 77358",
        whatsapp: "919074477358",
        email: "info@lekshmifurniture.com",
        hours: [
            { days: "Monday – Saturday", time: "9:30 AM – 6:00 PM" },
            { days: "Sunday", time: "By Appointment Only" },
        ],
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.847512838!2d76.20500!3d10.34200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0808f0a1234567%3A0xabcdef1234567890!2sIrinjalakuda%2C%20Kerala!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin",
        directions: "https://maps.google.com/?q=Lekshmi+Furniture+Mart+Irinjalakuda+Kerala",
        howToReach: [
            {
                icon: Car,
                label: "By Car",
                desc: "Located on NH 66 Bypass Road — 2 min from Irinjalakuda town centre. Ample parking available.",
            },
            {
                icon: Train,
                label: "By Train",
                desc: "Irinjalakuda Railway Station is 1.5 km away. Auto-rickshaws and taxis available at the station.",
            },
        ],
        highlight: true,
    },
];

// ─── Fade-in variant ──────────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" as const },
    }),
};

export default function LocatorPage() {
    const [activeStore, setActiveStore] = useState(stores[0]);

    return (
        <div className="bg-white text-[#2A1C14]">
            <InnerPageHero
                kicker="Visit Us In Person"
                title="Find Our Showroom"
                subtitle="Experience the craft, up close."
            />

            {/* ── Store Selector + Map ── */}
            <section className="py-20 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">

                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    custom={0}
                    variants={fadeUp}
                >
                    <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-4">
                        Our Location
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif text-[#592915]">
                        Come, Experience the Craft
                    </h2>
                    <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mt-5" />
                    <p className="text-[#2A1C14]/60 font-sans text-sm md:text-base leading-relaxed mt-5 max-w-xl mx-auto">
                        Walk through our showroom and discover decades of artisanal furniture
                        making — from solid teak beds to hand-carved dining sets.
                    </p>
                </motion.div>

                {/* Store cards row */}
                <div className="flex flex-wrap gap-4 justify-center mb-10">
                    {stores.map((store, i) => (
                        <motion.h2
                            key={store.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i + 1}
                            variants={fadeUp}
                            className="font-serif text-2xl md:text-3xl text-[#592915] leading-snug"
                        >
                            {store.name.split("—")[1]?.trim() ?? store.name}
                        </motion.h2>
                    ))}
                </div>

                {/* Map + Details grid */}
                <motion.div
                    key={activeStore.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-gray-100 shadow-md rounded-sm overflow-hidden"
                >
                    {/* ── Map ── */}
                    <div className="lg:col-span-3 relative min-h-[380px] md:min-h-[480px] bg-[#F4ECE1]">
                        <iframe
                            id="store-map"
                            src={activeStore.mapSrc}
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Map to ${activeStore.name}`}
                        />

                        {/* Get Directions badge */}
                        <a
                            href={activeStore.directions}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="get-directions-btn"
                            className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#592915] text-white px-5 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#2A1C14] transition-all shadow-lg z-10"
                        >
                            <Navigation className="w-3.5 h-3.5" />
                            Get Directions
                        </a>
                    </div>

                    {/* ── Store Details ── */}
                    <div className="lg:col-span-2 bg-[#FCFAF8] p-8 md:p-10 flex flex-col gap-8 border-l border-gray-100">

                        {/* Name & tag */}
                        <div>
                            <h3 className="font-serif text-xl text-[#592915] leading-snug">
                                {activeStore.name}
                            </h3>
                        </div>

                        {/* Address */}
                        <div className="flex gap-3 items-start">
                            <MapPin className="w-4 h-4 text-[#592915] mt-1 flex-shrink-0" />
                            <p className="text-sm text-[#2A1C14]/75 leading-relaxed">
                                {activeStore.address}
                            </p>
                        </div>

                        {/* Hours */}
                        <div className="flex gap-3 items-start">
                            <Clock className="w-4 h-4 text-[#592915] mt-1 flex-shrink-0" />
                            <div className="space-y-1.5">
                                {activeStore.hours.map((h) => (
                                    <div key={h.days} className="text-sm text-[#2A1C14]/75">
                                        <span className="font-semibold text-[#2A1C14]">{h.days}:</span>{" "}
                                        {h.time}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200" />

                        {/* Contact */}
                        <div className="flex flex-col gap-4">
                            <a
                                href={`tel:${activeStore.phone}`}
                                id="store-phone-link"
                                className="flex items-center gap-3 group"
                            >
                                <Phone className="w-4 h-4 text-[#592915] flex-shrink-0" />
                                <span className="text-sm font-medium group-hover:text-[#592915] transition-colors">
                                    {activeStore.phone}
                                </span>
                            </a>
                            <a
                                href={`mailto:${activeStore.email}`}
                                id="store-email-link"
                                className="flex items-center gap-3 group"
                            >
                                <Mail className="w-4 h-4 text-[#592915] flex-shrink-0" />
                                <span className="text-sm font-medium group-hover:text-[#592915] transition-colors break-all">
                                    {activeStore.email}
                                </span>
                            </a>
                            <a
                                href={`https://wa.me/${activeStore.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="store-whatsapp-link"
                                className="flex items-center gap-3 group"
                            >
                                <MessageCircle className="w-4 h-4 text-[#592915] flex-shrink-0" />
                                <span className="text-sm font-medium group-hover:text-[#592915] transition-colors">
                                    WhatsApp Us
                                </span>
                            </a>
                        </div>

                        {/* Directions CTA */}
                        <a
                            href={activeStore.directions}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto inline-flex items-center justify-between w-full bg-[#592915] text-white px-6 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-[#2A1C14] transition-all group/dir"
                        >
                            Open in Google Maps
                            <ChevronRight className="w-4 h-4 group-hover/dir:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* ── How to Reach ── */}
            <section className="bg-[#FCFAF8] border-y border-gray-100 py-20">
                <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">

                    <motion.div
                        className="text-center mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        custom={0}
                        variants={fadeUp}
                    >
                        <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-4">
                            Getting Here
                        </span>
                        <h2 className="text-2xl md:text-3xl font-serif text-[#592915]">
                            How to Reach Us
                        </h2>
                        <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mt-5" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {activeStore.howToReach.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i + 1}
                                variants={fadeUp}
                                className="bg-white border border-gray-100 p-8 rounded-sm flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 flex items-center justify-center bg-[#F4ECE1] rounded-full flex-shrink-0">
                                    <item.icon className="w-5 h-5 text-[#592915]" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg text-[#592915] mb-2">{item.label}</h3>
                                    <p className="text-sm text-[#2A1C14]/65 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Visit Prompt Strip ── */}
            <section className="py-16 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#FCFAF8] border border-gray-100 px-10 py-10 rounded-sm"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    custom={0}
                    variants={fadeUp}
                >
                    <div className="max-w-xl">
                        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70 block mb-3">
                            Plan Your Visit
                        </span>
                        <h3 className="font-serif text-xl md:text-2xl text-[#592915] leading-snug mb-3">
                            Can't visit right now?
                        </h3>
                        <p className="text-sm text-[#2A1C14]/65 leading-relaxed">
                            Message us on WhatsApp and our team will schedule a consultation at
                            your convenience — or walk you through our catalogue virtually.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                        <Link
                            href="https://wa.me/919074477358"
                            target="_blank"
                            id="visit-whatsapp-cta"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#592915] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#2A1C14] transition-all"
                        >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp Us
                        </Link>
                        <Link
                            href="/custom-designs"
                            id="visit-custom-cta"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-[#592915] text-[#592915] text-[10px] uppercase tracking-widest font-bold hover:bg-[#592915]/5 transition-all"
                        >
                            Custom Orders
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            <CTA />
        </div>
    );
}
