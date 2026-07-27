"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
    Sparkles,
    Tag,
    Armchair,
    Tv,
    BedDouble,
    Utensils,
    Moon,
    BookOpen,
    Archive,
    Palette,
    Phone,
    Mail,
    Columns,
    Menu,
    X,
    ChevronDown,
    ChevronRight,
} from "lucide-react";
import { productsData } from "@/lib/productsData";

// 1. Navigation Data Structure
const navigationData = [
    {
        label: "Living",
        icon: Tv,
        href: "/products/living/all",
        dropdown: {
            items: [
                { name: "Coffee Tables", href: "/products/living/coffee-tables", image: "/sub-cat/living1.jpg" },
                { name: "Side & End Tables", href: "/products/living/side-and-end-tables", image: "/sub-cat/living2.jpg" },
                { name: "Console Tables", href: "/products/living/console-tables", image: "/sub-cat/living3.jpg" },
                { name: "Nest of Tables", href: "/products/living/nest-of-tables", image: "/sub-cat/living4.jpg" },
                { name: "TV Consoles", href: "/products/living/tv-consoles", image: "/sub-cat/living5.jpg" },
                { name: "Bookshelves", href: "/products/living/bookshelves", image: "/sub-cat/living6.jpg" },
                { name: "Display Units", href: "/products/living/display-units", image: "/sub-cat/living7.jpg" },
                { name: "Shoe Racks", href: "/products/living/shoe-racks", image: "/sub-cat/living8.jpg" },
                { name: "Long Bench", href: "/products/living/bookshelves", image: "/sub-cat/living6.jpg" },
                { name: "Diwan", href: "/products/living/display-units", image: "/sub-cat/living7.jpg" },
                { name: "Corner Stand", href: "/products/living/shoe-racks", image: "/sub-cat/living8.jpg" },
                { name: "Charu Kasera", href: "/products/living/display-units", image: "/sub-cat/living7.jpg" },
            ],
            promo: {
                title: "Signature Living",
                subtitle: "Custom Teak Consoles",
                price: "Custom Crafted",
                image: "/sub-cat/living1.jpg",
                href: "/products/living/all",
            },
        },
    },
    {
        label: "Bedroom",
        icon: BedDouble,
        href: "/products/bedroom/all",
        dropdown: {
            items: [
                { name: "King Size Beds", href: "/products/bedroom/king-size-beds", image: "/sub-cat/bed-room1.jpg" },
                { name: "Queen Size Beds", href: "/products/bedroom/queen-size-beds", image: "/sub-cat/bed-room2.jpg" },
                { name: "Single & Poster Beds", href: "/products/bedroom/single-and-poster-beds", image: "/sub-cat/bed-room3.jpg" },
                { name: "Beds with Storage", href: "/products/bedroom/beds-with-storage", image: "/sub-cat/bed-room4.jpg" },
                { name: "Wardrobes", href: "/products/bedroom/wardrobes", image: "/sub-cat/bed-room5.jpg" },
                { name: "Bedside Tables", href: "/products/bedroom/bedside-tables", image: "/sub-cat/bed-room6.jpg" },
                { name: "Dressers & Mirrors", href: "/products/bedroom/dressers-and-mirrors", image: "/sub-cat/bed-room7.jpg" },
                { name: "Kerala Box", href: "/products/bedroom/chest-of-drawers", image: "/sub-cat/bed-room8.jpg" },
                { name: "Dressing Stand", href: "/products/bedroom/dressing-stand", image: "/sub-cat/bed-room9.jpg" },
                { name: "Dressing Screen", href: "/products/bedroom/dressing-stand", image: "/sub-cat/bed-room9.jpg" },
            ],
            promo: {
                title: "Handcrafted Sleep",
                subtitle: "Solid Wild Jack & Jackwood Beds",
                price: "Explore the Collection",
                image: "/sub-cat/bed-room1.jpg",
                href: "/products/bedroom/all",
            },
        },
    },
    {
        label: "Dining",
        icon: Utensils,
        href: "/products/dining/all",
        dropdown: {
            items: [
                { name: "4 Seater Dining Sets", href: "/products/dining/4-seater-dining-sets", image: "/sub-cat/dining1.jpg" },
                { name: "6 Seater Dining Sets", href: "/products/dining/6-seater-dining-sets", image: "/sub-cat/dining2.jpg" },
                { name: "Dining Tables", href: "/products/dining/dining-tables", image: "/sub-cat/dining3.jpg" },
                { name: "Dining Chairs & Benches", href: "/products/dining/dining-chairs-and-benches", image: "/sub-cat/dining4.jpg" },
                { name: "Display Shelves", href: "/products/dining/dining-chairs-and-benches", image: "/sub-cat/dining4.jpg" },
            ],
            promo: {
                title: "Elegant Dining",
                subtitle: "Premium Teak Sets",
                price: "View Offers",
                image: "/sub-cat/dining1.jpg",
                href: "/products/dining/all",
            },
        },
    },
    {
        label: "Study",
        icon: BookOpen,
        href: "/products/study/all",
        dropdown: {
            items: [
                { name: "Study Tables", href: "/products/study/study-tables", image: "/sub-cat/study1.jpg" },
                { name: "Computer Desks", href: "/products/study/computer-desks", image: "/sub-cat/study2.jpg" },
                { name: "Executive Desks", href: "/products/study/executive-desks", image: "/sub-cat/study3.jpg" },
                { name: "Standing Desks", href: "/products/study/standing-desks", image: "/sub-cat/study4.jpg" },
                { name: "Revolving Chair", href: "/products/study/ergonomic-chairs", image: "/sub-cat/study5.jpg" },
                { name: "Study Chairs", href: "/products/study/study-chairs", image: "/sub-cat/study6.jpg" },
                { name: "Bookshelves", href: "/products/study/bookshelves-study", image: "/sub-cat/study7.jpg" },
                { name: "Filing Cabinets", href: "/products/study/filing-cabinets", image: "/sub-cat/study8.jpg" },
            ],
            promo: {
                title: "Modern Workspace",
                subtitle: "Ergonomic Designs",
                price: "Discover More",
                image: "/sub-cat/study1.jpg",
                href: "/products/study/all",
            },
        },
    },
    {
        label: "Storage Furniture",
        icon: Archive,
        href: "/products/storage-furniture/all",
        dropdown: {
            items: [
                { name: "2 Door Wardrobes", href: "/products/storage-furniture/2-door-wardrobes", image: "/sub-cat/storage-furniture1.jpg" },
                { name: "3+ Door Wardrobes", href: "/products/storage-furniture/3-plus-door-wardrobes", image: "/sub-cat/storage-furniture2.jpg" },
                { name: "Kerala Box", href: "/products/storage-furniture/chest-of-drawers-storage", image: "/sub-cat/storage-furniture3.jpg" },
                { name: "Shoe Racks", href: "/products/storage-furniture/shoe-racks-storage", image: "/sub-cat/storage-furniture4.jpg" },
            ],
            promo: {
                title: "Smart Storage",
                subtitle: "Maximize your space",
                price: "View Solutions",
                image: "/sub-cat/storage-furniture1.jpg",
                href: "/products/storage-furniture/all",
            },
        },
    },
    {
        label: "Pillars",
        icon: Columns,
        href: "/products/pillars/all",
        dropdown: {
            items: [
                { name: "Teak Wood Pillars", href: "/products/pillars/teak-wood-pillars", image: "/sub-cat/pillars1.jpg" },
                { name: "Anjili Wood Pillars", href: "/products/pillars/anjili-wood-pillars", image: "/sub-cat/pillars_anjili.jpg" },
                { name: "Plavu Wood Pillars", href: "/products/pillars/plavu-wood-pillars", image: "/sub-cat/pillars_plavu.jpg" },
                { name: "Irumullu Wood Pillars", href: "/products/pillars/irumullu-wood-pillars", image: "/sub-cat/pillars_irumullu.jpg" },
            ],
            promo: {
                title: "Timeless Pillars",
                subtitle: "Handcrafted Wood Pillars",
                price: "Discover Options",
                image: "/products/pillar/pillar2.jpeg",
                href: "/products/pillars/all",
            },
        },
    },
    {
        label: "Office Room",
        icon: BookOpen,
        href: "/products/office-room/all",
        dropdown: {
            items: [
                { name: "Executive Desks", href: "/products/office-room/executive-desks-office", image: "/sub-cat/office-room04.jpg" },
                { name: "Computer Tables", href: "/products/office-room/computer-tables", image: "/sub-cat/office-room01.jpg" },
                { name: "Standing Desks", href: "/products/office-room/standing-desks-office", image: "/sub-cat/office-room03.jpg" },
                { name: "Revolving Chair", href: "/products/office-room/ergonomic-chairs-office", image: "/sub-cat/office-room02.jpg" },
            ],
            promo: {
                title: "Professional Spaces",
                subtitle: "Premium Work Environments",
                price: "View Collection",
                image: "/sub-cat/office-room04.jpg",
                href: "/products/office-room/all",
            },
        },
    },
    {
        label: "Others",
        icon: Palette,
        href: "/products/others/all",
        dropdown: {
            items: [
                { name: "Ari Pathayam", href: "/products/others/ari-pathayam", image: "/sub-cat/others1.jpg" },
                { name: "Charu Kasera", href: "/products/others/charu-kasera", image: "/sub-cat/others2.jpg" },
                { name: "Pooja Box", href: "/products/others/pooja-box", image: "/sub-cat/others3.jpg" },
                { name: "Hand Rail", href: "/products/others/hand-rail", image: "/sub-cat/others4.jpg" },
                { name: "Wooden Pannel", href: "/products/others/wooden-pannel", image: "/sub-cat/others5.jpg" },
                { name: "Wooden Stairs", href: "/products/others/wooden-stairs", image: "/sub-cat/others6.jpg" },
                { name: "Amadapetti", href: "/products/others/amadapetti", image: "/sub-cat/others7.jpg" },
            ],
            promo: {
                title: "Amadapetti",
                subtitle: "Unique Wooden Items",
                price: "Explore Now",
                image: "/products/others/amadapetti.png",
                href: "/products/others/all",
            },
        },
    },
];

// Utility links shown in the mobile drawer
const utilityLinks = [
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Clients", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
    { label: "Custom Designs", href: "/custom-designs" },
    { label: "Shop Locator", href: "/locator" },
];

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY <= 50) {
                setShowHeader(true);
            } else if (currentScrollY > lastScrollY.current) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const closeDrawer = () => {
        setMobileOpen(false);
        setExpandedCategory(null);
    };

    return (
        <>
            <header className={`fixed top-0 z-50 w-full bg-[#FCF8F3] backdrop-blur-md border-b border-gray-100 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
                {/* Animated Circular Wood Pattern SVG */}
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                    <svg
                        viewBox="0 0 300 300"
                        className="absolute top-0 right-0 h-[200%] w-auto"
                        style={{ opacity: 0.15, transform: 'translateX(10%)' }}
                    >
                        <defs>
                            <radialGradient id="woodRadial" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#D1B797bb" />
                                <stop offset="100%" stopColor="#592915a6" />
                            </radialGradient>
                            <radialGradient id="woodRing" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="80%" stopColor="transparent" />
                                <stop offset="90%" stopColor="#b284449f" />
                                <stop offset="100%" stopColor="transparent" />
                            </radialGradient>
                        </defs>
                        <circle cx="150" cy="150" r="140" fill="none" stroke="url(#woodRadial)" strokeWidth="2" style={{ animation: 'pulseIn 4s ease-in-out infinite' }} />
                        <circle cx="150" cy="150" r="110" fill="none" stroke="url(#woodRadial)" strokeWidth="3" style={{ animation: 'pulseIn 4s ease-in-out infinite 0.3s' }} />
                        <circle cx="150" cy="150" r="80" fill="none" stroke="url(#woodRadial)" strokeWidth="4" style={{ animation: 'pulseIn 4s ease-in-out infinite 0.6s' }} />
                        <circle cx="150" cy="150" r="50" fill="none" stroke="url(#woodRadial)" strokeWidth="5" style={{ animation: 'pulseIn 4s ease-in-out infinite 0.9s' }} />
                        <circle cx="150" cy="150" r="25" fill="url(#woodRadial)" style={{ animation: 'pulseIn 4s ease-in-out infinite 1.2s' }} />
                        <circle cx="220" cy="80" r="15" fill="url(#woodRing)" style={{ animation: 'pulseIn 3s ease-in-out infinite 0.5s' }} />
                        <circle cx="80" cy="220" r="12" fill="url(#woodRing)" style={{ animation: 'pulseIn 3s ease-in-out infinite 1s' }} />
                    </svg>
                    <style jsx>{`
                        @keyframes pulseIn {
                            0%, 100% { opacity: 0.2; transform: scale(1); }
                            50% { opacity: 0.6; transform: scale(1.05); }
                        }
                    `}</style>
                </div>

                <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                    <div className="flex items-stretch justify-between py-2 relative">

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center pr-4 lg:pr-8 xl:pr-16 relative z-10">
                            <Link href="/" className="hover:opacity-90 transition-opacity">
                                <Image src="/logo/logo2.png" alt="Lekshmi Furniture Mart" width={160} height={180} className="h-16 sm:h-20 w-auto object-contain" priority />
                            </Link>
                        </div>

                        {/* Desktop layout */}
                        <div className="hidden xl:flex flex-col justify-center flex-1 py-1">
                            {/* Utility Bar */}
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                                <nav className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-[#2A1C14] font-sans font-semibold">
                                    <Link href="/about" className="hover:text-[#592915] transition-colors">About Us</Link>
                                    <Link href="/gallery" className="hover:text-[#592915] transition-colors">Gallery</Link>
                                    <Link href="/projects" className="hover:text-[#592915] transition-colors">Clients</Link>
                                </nav>
                                <div className="flex items-center gap-4 text-sm text-[#2A1C14]">
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-[#592915]" />
                                        <span>+91 90744 77358</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-[#592915]" />
                                        <span>info@lekshmifurniture.com</span>
                                    </div>
                                </div>
                                <Link href="https://wa.me/919074477358" target="_blank" className="px-6 py-2 bg-[#592915] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#2A1C14] transition-all relative z-10">
                                    WhatsApp Us
                                </Link>
                            </div>

                            {/* Navigation */}
                            <nav className="flex justify-end items-center gap-3 2xl:gap-5 text-[13px] font-bold text-[#2A1C14] tracking-wide">
                                {navigationData.map((item) => (
                                    <div key={item.label} className="group pb-4 -mb-4">
                                        <Link href={item.href} className="hover:text-[#592915] transition-colors py-2 whitespace-nowrap flex items-center gap-1.5">
                                            {item.icon && <item.icon className="w-[14px] h-[14px]" />}
                                            {item.label}
                                        </Link>

                                        {/* Mega Menu Dropdown */}
                                        <div className="absolute left-0 right-0 top-full mt-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50 rounded-sm overflow-hidden">
                                            <div className="flex">
                                                <Link
                                                    href={item.dropdown.promo.href}
                                                    className="w-1/3 bg-[#FCFAF8] p-4 flex flex-col justify-between hover:bg-[#FCF8F3]/30 transition-colors group/promo"
                                                >
                                                    <div className="relative">
                                                        <div className="relative aspect-[2/1] mb-2">
                                                            <div className="absolute inset-0 bg-[#592915]/10 rounded-full scale-105 blur-sm"></div>
                                                            <div className="relative h-full w-full overflow-hidden">
                                                                <div className="absolute inset-0 bg-[#592915]/5 rounded-xl" style={{
                                                                    clipPath: "polygon(0% 0%, 5% 2%, 10% 0%, 15% 2%, 20% 0%, 25% 2%, 30% 0%, 35% 2%, 40% 0%, 45% 2%, 50% 0%, 55% 2%, 60% 0%, 65% 2%, 70% 0%, 75% 2%, 80% 0%, 85% 2%, 90% 0%, 95% 2%, 100% 0%, 100% 5%, 98% 10%, 100% 15%, 98% 20%, 100% 25%, 98% 30%, 100% 35%, 98% 40%, 100% 45%, 98% 50%, 100% 55%, 98% 60%, 100% 65%, 98% 70%, 100% 75%, 98% 80%, 100% 85%, 98% 90%, 100% 95%, 98% 100%, 95% 98%, 90% 100%, 85% 98%, 80% 100%, 75% 98%, 70% 100%, 65% 98%, 60% 100%, 55% 98%, 50% 100%, 45% 98%, 40% 100%, 35% 98%, 30% 100%, 25% 98%, 20% 100%, 15% 98%, 10% 100%, 5% 98%, 0% 100%, 2% 95%, 0% 90%, 2% 85%, 0% 80%, 2% 75%, 0% 70%, 2% 65%, 0% 60%, 2% 55%, 0% 50%, 2% 45%, 0% 40%, 2% 35%, 0% 30%, 2% 25%, 0% 20%, 2% 15%, 0% 10%, 2% 5%)"
                                                                }}>
                                                                    <Image src={item.dropdown.promo.image} alt={item.dropdown.promo.subtitle} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover group-hover/promo:scale-105 transition-transform duration-700" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="relative z-10">
                                                            <h3 className="font-serif text-lg text-[#592915] mb-0.5 leading-snug">{item.dropdown.promo.title}</h3>
                                                            <p className="text-xs text-[#2A1C14]/60 mb-1">{item.dropdown.promo.subtitle}</p>
                                                            <p className="text-[#592915] font-bold text-sm">{item.dropdown.promo.price}</p>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div className="w-2/3 p-6 grid grid-cols-3 gap-x-4 gap-y-3 items-start content-start overflow-y-auto max-h-[450px]">
                                                    {item.dropdown.items.map((sub) => {
                                                        return (
                                                            <Link
                                                                key={sub.name}
                                                                href={sub.href}
                                                                className="text-xs uppercase tracking-wider text-[#2A1C14]/85 hover:text-[#592915] font-bold transition-colors font-sans block leading-snug"
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Mobile: right side — WhatsApp + hamburger */}
                        <div className="xl:hidden flex items-center gap-2 sm:gap-3">
                            <Link
                                href="https://wa.me/919074477358"
                                target="_blank"
                                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#592915] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#2A1C14] transition-all"
                            >
                                WhatsApp
                            </Link>
                            <button
                                id="mobile-menu-toggle"
                                onClick={() => setMobileOpen(true)}
                                aria-label="Open navigation menu"
                                className="flex items-center justify-center w-10 h-10 text-[#592915] hover:bg-[#F4ECE1] rounded-sm transition-colors"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            {/* ── Mobile Drawer ── */}
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 xl:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={closeDrawer}
                aria-hidden="true"
            />

            {/* Drawer panel */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-sm z-[70] bg-[#FCF8F3] shadow-2xl flex flex-col transition-transform duration-300 ease-out xl:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
                    <Link href="/" onClick={closeDrawer}>
                        <Image src="/logo/logo2.png" alt="Lekshmi Furniture Mart" width={120} height={140} className="h-14 w-auto object-contain" />
                    </Link>
                    <button
                        id="mobile-menu-close"
                        onClick={closeDrawer}
                        aria-label="Close navigation menu"
                        className="flex items-center justify-center w-9 h-9 text-[#592915] hover:bg-[#F4ECE1] rounded-sm transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">

                    {/* Utility links */}
                    <div className="mb-4 pb-4 border-b border-gray-100">
                        <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#592915]/60 mb-3">Quick Links</p>
                        <div className="grid grid-cols-2 gap-2">
                            {utilityLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeDrawer}
                                    className="text-sm font-sans font-semibold text-[#2A1C14] hover:text-[#592915] transition-colors py-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#592915]/60 mb-3">Shop by Category</p>
                    {navigationData.map((item) => {
                        const Icon = item.icon;
                        const isExpanded = expandedCategory === item.label;
                        const allItems = item.dropdown.items;
                        return (
                            <div key={item.label} className="border-b border-gray-100 last:border-0">
                                <button
                                    onClick={() => setExpandedCategory(isExpanded ? null : item.label)}
                                    className="flex items-center justify-between w-full py-3 text-left"
                                    aria-expanded={isExpanded}
                                >
                                    <span className="flex items-center gap-2.5 text-sm font-bold text-[#2A1C14] font-sans tracking-wide">
                                        <Icon className="w-4 h-4 text-[#592915]" strokeWidth={1.5} />
                                        {item.label}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#592915]/60 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                                </button>

                                {isExpanded && (
                                    <div className="pb-3 pl-6 grid grid-cols-1 gap-1">
                                        {allItems.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                onClick={closeDrawer}
                                                className="flex items-center gap-1.5 text-sm text-[#2A1C14]/75 hover:text-[#592915] font-sans py-1.5 transition-colors"
                                            >
                                                <ChevronRight className="w-3 h-3 text-[#592915]/40 shrink-0" />
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Drawer footer */}
                <div className="shrink-0 px-6 py-4 border-t border-gray-100 bg-white space-y-3">
                    <a href="tel:+919074477358" className="flex items-center gap-2.5 text-sm text-[#2A1C14] font-sans">
                        <Phone className="w-4 h-4 text-[#592915]" />
                        +91 90744 77358
                    </a>
                    <Link
                        href="https://wa.me/919074477358"
                        target="_blank"
                        onClick={closeDrawer}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-[#592915] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#2A1C14] transition-all"
                    >
                        WhatsApp Us
                    </Link>
                </div>
            </div>
        </>
    );
}