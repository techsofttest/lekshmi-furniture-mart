"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InnerPageHero from "@/components/global/InnerPageHero";
import CTA from "@/components/home/CTA";
import Link from "next/link";
import Image from "next/image";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageCircle,
    Send,
    CheckCircle2,
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

// ─── Contact Details ───────────────────────────────────────────────────────────
const contactDetails = [
    {
        icon: MapPin,
        label: "Visit Us",
        lines: [
            "NH 66, Bypass Road, Irinjalakuda",
            "Thrissur, Kerala – 680 121",
        ],
        href: "https://maps.google.com/?q=Lekshmi+Furniture+Mart+Irinjalakuda+Kerala",
        linkLabel: "Get Directions →",
    },
    {
        icon: Phone,
        label: "Call Us",
        lines: ["+91 90744 77358"],
        href: "tel:+919447101197",
        linkLabel: "Call Now →",
    },
    {
        icon: Mail,
        label: "Email Us",
        lines: ["info@lekshmifurniture.com"],
        href: "mailto:info@lekshmifurniture.com",
        linkLabel: "Send Email →",
    },
    {
        icon: Clock,
        label: "Opening Hours",
        lines: ["Mon – Sat: 9:30 AM – 6:00 PM", "Sunday: By Appointment Only"],
        href: null,
        linkLabel: null,
    },
];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate network delay
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="bg-white text-[#2A1C14]">
            <InnerPageHero
                kicker="We'd Love to Hear From You"
                title="Contact Us"
                subtitle="Questions, orders, or just a hello."
            />

            {/* ── Contact Details ── */}
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
                        Reach Out
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif text-[#592915]">
                        Get in Touch
                    </h2>
                    <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mt-5" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {contactDetails.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.label}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i + 1}
                                variants={fadeUp}
                                className="bg-[#FCFAF8] border border-gray-100 rounded-sm p-8"
                            >
                                <Icon
                                    className="w-5 h-5 text-[#592915] mb-5"
                                    strokeWidth={1.5}
                                />
                                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/60 mb-3">
                                    {item.label}
                                </p>
                                {item.lines.map((line) => (
                                    <p
                                        key={line}
                                        className="text-sm text-[#2A1C14]/80 font-sans leading-relaxed"
                                    >
                                        {line}
                                    </p>
                                ))}
                                {item.href && item.linkLabel && (
                                    <Link
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        className="inline-block mt-4 text-[10px] uppercase tracking-widest font-bold text-[#592915] hover:underline underline-offset-4 transition-all"
                                    >
                                        {item.linkLabel}
                                    </Link>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* WhatsApp banner */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={5}
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#592915] text-white rounded-sm px-8 py-7"
                >
                    <div className="flex items-center gap-4">
                        <MessageCircle className="w-6 h-6 shrink-0" strokeWidth={1.5} />
                        <div>
                            <p className="font-serif text-lg leading-snug">
                                Prefer WhatsApp?
                            </p>
                            <p className="text-white/70 text-sm font-sans">
                                Chat with our team directly — fastest response guaranteed.
                            </p>
                        </div>
                    </div>
                    <Link
                        href="https://wa.me/919447101197"
                        target="_blank"
                        id="contact-whatsapp-cta"
                        className="shrink-0 inline-flex items-center gap-2 px-8 py-3 bg-white text-[#592915] text-[10px] uppercase tracking-widest font-bold hover:bg-[#F4ECE1] transition-all"
                    >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Us
                    </Link>
                </motion.div>
            </section>

            {/* ── Google Map ── */}
            <section className="w-full bg-[#FCFAF8] border-t border-gray-100">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 py-16"
                >
                    <div className="mb-8">
                        <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                            Find Us
                        </span>
                        <h2 className="text-xl md:text-2xl font-serif text-[#592915] relative pb-4 inline-block">
                            Our Location
                            <span className="absolute bottom-0 left-0 w-14 h-[1.5px] bg-[#592915]/30" />
                        </h2>
                    </div>
                    <div className="w-full overflow-hidden rounded-sm border border-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.713773420974!2d76.3538708!3d9.7902685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087b0053d1a15d%3A0x1883754d4e279376!2sLekshmi%20furniture%20mart!5e0!3m2!1sen!2sin!4v1785412227009!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Lekshmi Furniture Mart Location"
                        />
                    </div>
                </motion.div>
            </section>

            {/* ── Contact Form ── */}
            <section className="py-20 relative overflow-hidden bg-[#1A120E]">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                    <Image
                        src="/banner/banner-7b.png"
                        alt="Contact form background wood texture"
                        fill
                        sizes="100vw"
                        className="object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/60" />
                </div>

                <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 relative z-10">
                    <motion.div
                        className="text-center mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        variants={fadeUp}
                    >
                        <span className="text-[#F4ECE1]/80 font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                            Drop Us a Message
                        </span>
                        <h2 className="text-2xl md:text-3xl font-serif text-[#F4ECE1]">
                            Send an Enquiry
                        </h2>
                        <div className="w-14 h-[1.5px] bg-[#F4ECE1]/30 mx-auto mt-5" />
                        {/* <p className="text-sm text-[#F4ECE1]/70 font-sans mt-5 max-w-xl mx-auto leading-relaxed">
                            Fill in the form below and our team will get back to you within
                            one business day. */}
                        {/* </p> */}
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        variants={fadeUp}
                        className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-sm p-8 md:p-12"
                    >
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                                <CheckCircle2
                                    className="w-12 h-12 text-[#592915]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-2xl text-[#592915]">
                                    Message Received
                                </h3>
                                <p className="text-sm text-[#2A1C14]/65 font-sans max-w-sm leading-relaxed">
                                    Thank you for reaching out. We'll be in touch with you
                                    shortly.
                                </p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({
                                            name: "",
                                            email: "",
                                            phone: "",
                                            subject: "",
                                            message: "",
                                        });
                                    }}
                                    className="mt-2 text-[10px] uppercase tracking-widest font-bold text-[#592915] hover:underline underline-offset-4"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-name"
                                            className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70"
                                        >
                                            Full Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="border border-gray-300 rounded-sm px-4 py-3 text-sm font-sans text-[#2A1C14] bg-[#FCFAF8] focus:outline-none focus:border-[#592915] transition-colors placeholder:text-[#2A1C14]/50"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-email"
                                            className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70"
                                        >
                                            Email Address <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            className="border border-gray-300 rounded-sm px-4 py-3 text-sm font-sans text-[#2A1C14] bg-[#FCFAF8] focus:outline-none focus:border-[#592915] transition-colors placeholder:text-[#2A1C14]/50"
                                        />
                                    </div>
                                </div>

                                {/* Phone + Subject */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-phone"
                                            className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            id="contact-phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 00000 00000"
                                            className="border border-gray-300 rounded-sm px-4 py-3 text-sm font-sans text-[#2A1C14] bg-[#FCFAF8] focus:outline-none focus:border-[#592915] transition-colors placeholder:text-[#2A1C14]/50"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-subject"
                                            className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70"
                                        >
                                            Subject <span className="text-red-400">*</span>
                                        </label>
                                        <select
                                            id="contact-subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-sm px-4 py-3 text-sm font-sans text-[#2A1C14] bg-[#FCFAF8] focus:outline-none focus:border-[#592915] transition-colors appearance-none"
                                        >
                                            <option value="" disabled>
                                                Select a subject…
                                            </option>
                                            <option value="product-enquiry">Product Enquiry</option>
                                            <option value="custom-order">Custom Order</option>
                                            <option value="delivery">Delivery &amp; Logistics</option>
                                            <option value="after-sales">After-Sales Support</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="contact-message"
                                        className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70"
                                    >
                                        Message <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us how we can help…"
                                        className="border border-gray-300 rounded-sm px-4 py-3 text-sm font-sans text-[#2A1C14] bg-[#FCFAF8] focus:outline-none focus:border-[#592915] transition-colors placeholder:text-[#2A1C14]/50 resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <div className="flex items-center justify-between gap-4 pt-2">
                                    <p className="text-[10px] text-[#2A1C14]/40 font-sans">
                                        Fields marked <span className="text-red-400">*</span> are required.
                                    </p>
                                    <button
                                        id="contact-submit"
                                        type="submit"
                                        disabled={loading}
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#592915] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#2A1C14] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <span className="animate-pulse">Sending…</span>
                                        ) : (
                                            <>
                                                <Send className="w-3.5 h-3.5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
