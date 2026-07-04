"use client";

import { motion } from "framer-motion";
import InnerPageHero from "@/components/global/InnerPageHero";
import CTA from "@/components/home/CTA";
import {
    Truck,
    PackageCheck,
    ShieldCheck,
    Wrench,
    Map,
    Factory,
    Phone,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";

// Animation Variants
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" as const },
    }),
};

// Data for sections
const deliveryProcess = [
    {
        icon: PackageCheck,
        title: "Order Confirmation & Scheduling",
        description: "Once your custom piece is ready, our team will contact you to confirm the delivery address and schedule a convenient delivery time.",
    },
    {
        icon: ShieldCheck,
        title: "Expert Packaging",
        description: "Each item is meticulously wrapped in multiple layers of protective material to prevent scratches, dents, and moisture damage during transit.",
    },
    {
        icon: Truck,
        title: "Safe & Secure Transit",
        description: "Our dedicated logistics team handles your furniture with the utmost care, ensuring it travels safely from our workshop to your home.",
    },
    {
        icon: Wrench,
        title: "On-Site Assembly",
        description: "For items that require assembly, our skilled technicians will set up your furniture in your desired location, ensuring it's perfectly installed.",
    },
];

const deliveryOptions = [
    {
        icon: Map,
        title: "State-wide Delivery",
        description: "We deliver to all locations across Kerala. Delivery charges are calculated based on the distance from our workshop and the size of your order. A final quote will be provided upon order confirmation.",
    },
    {
        icon: Factory,
        title: "Factory Pick-up",
        description: "You are welcome to arrange your own transport and pick up your furniture directly from our workshop in Irinjalakuda. Please schedule a pick-up time with our team in advance.",
    },
];

export default function DeliveryOptionsPage() {
    return (
        <div className="bg-white text-[#2A1C14]">
            <InnerPageHero
                kicker="Seamless & Secure"
                title="Delivery & Installation"
                subtitle="Bringing craftsmanship to your doorstep."
            />

            {/* Delivery Process Section */}
            <section className="py-24 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeUp}
                >
                    <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                        Our Process
                    </span>
                    <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                        From Our Workshop to Your Home
                    </h2>
                    <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mt-5" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {deliveryProcess.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i + 1}
                                variants={fadeUp}
                                className="text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#FCFAF8] border border-gray-100 flex items-center justify-center mb-5">
                                    <Icon className="w-7 h-7 text-[#592915]" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif text-lg text-[#592915] mb-2">{item.title}</h3>
                                <p className="text-sm text-[#2A1C14]/70 leading-relaxed font-sans max-w-xs">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Options & Charges Section */}
            <section className="py-24 bg-[#FCFAF8] border-y border-gray-100">
                <div className="max-w-5xl mx-auto px-4 lg:px-8 xl:px-16">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        variants={fadeUp}
                    >
                        <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                            Coverage & Charges
                        </span>
                        <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                            Delivery Options
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {deliveryOptions.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={i + 1}
                                    variants={fadeUp}
                                    className="bg-white border border-gray-100 p-8 rounded-sm flex gap-6"
                                >
                                    <Icon className="w-8 h-8 text-[#592915] mt-1 shrink-0" strokeWidth={1.5} />
                                    <div>
                                        <h3 className="font-serif text-lg text-[#592915] mb-2">{item.title}</h3>
                                        <p className="text-sm text-[#2A1C14]/70 leading-relaxed font-sans">{item.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}