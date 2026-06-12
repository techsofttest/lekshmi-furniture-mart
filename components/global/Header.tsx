"use client";

import Link from "next/link";
import Image from "next/image";
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
    Columns
} from "lucide-react";

// 1. Navigation Data Structure: Added all 11 requested categories with populated sub-categories and items.
const navigationData = [
    {
        label: "Sofas & Recliners",
        icon: Armchair,
        href: "/category/sofas-recliners",
        dropdown: {
            columns: [
                {
                    title: "Sofas",
                    items: [
                        { name: "Wooden Sofas", href: "/category/sofas/wooden" },
                        { name: "Fabric Sofas", href: "/category/sofas/fabric" },
                        { name: "L-Shape Sectionals", href: "/category/sofas/l-shape" },
                        { name: "Sofa Cum Beds", href: "/category/sofas/sofa-beds" },
                    ],
                },
                {
                    title: "Recliners & More",
                    items: [
                        { name: "Manual Recliners", href: "/category/recliners/manual" },
                        { name: "Motorized Recliners", href: "/category/recliners/motorized" },
                        { name: "Lounge Chairs", href: "/category/recliners/lounge" },
                        { name: "Pouffes & Ottomans", href: "/category/recliners/ottomans" },
                    ],
                },
            ],
            promo: {
                title: "Ultimate Comfort",
                subtitle: "Premium seating solutions",
                price: "Starting from ₹15,000",
                image: "/custom-product/boat.png",
                href: "/category/sofas-recliners/premium",
            },
        },
    },
    {
        label: "Living",
        icon: Tv,
        href: "/category/living",
        dropdown: {
            columns: [
                {
                    title: "Tables",
                    items: [
                        { name: "Coffee Tables", href: "/category/living/coffee-tables" },
                        { name: "Side & End Tables", href: "/category/living/side-tables" },
                        { name: "Console Tables", href: "/category/living/console-tables" },
                        { name: "Nest of Tables", href: "/category/living/nest-tables" },
                    ],
                },
                {
                    title: "Units & Storage",
                    items: [
                        { name: "TV Consoles", href: "/category/living/tv-consoles" },
                        { name: "Bookshelves", href: "/category/living/bookshelves" },
                        { name: "Display Units", href: "/category/living/display-units" },
                        { name: "Shoe Racks", href: "/category/living/shoe-racks" },
                    ],
                },
            ],
            promo: {
                title: "Signature Living",
                subtitle: "Custom Teak Consoles",
                price: "Starting from ₹18,500",
                image: "/custom-product/c-chair.png",
                href: "/category/living/custom",
            },
        },
    },
    {
        label: "Bedroom",
        icon: BedDouble,
        href: "/category/bedroom",
        dropdown: {
            columns: [
                {
                    title: "Beds",
                    items: [
                        { name: "King Size Beds", href: "/category/bedroom/king-beds" },
                        { name: "Queen Size Beds", href: "/category/bedroom/queen-beds" },
                        { name: "Single & Poster Beds", href: "/category/bedroom/single-beds" },
                        { name: "Beds with Storage", href: "/category/bedroom/storage-beds" },
                    ],
                },
                {
                    title: "Bedroom Storage",
                    items: [
                        { name: "Wardrobes", href: "/category/bedroom/wardrobes" },
                        { name: "Bedside Tables", href: "/category/bedroom/bedside-tables" },
                        { name: "Dressers & Mirrors", href: "/category/bedroom/dressers" },
                        { name: "Chest of Drawers", href: "/category/bedroom/drawers" },
                    ],
                },
            ],
            promo: {
                title: "Handcrafted Sleep",
                subtitle: "Solid Rosewood Beds",
                price: "Explore the Collection",
                image: "/custom-product/cupbord-mirror.png",
                href: "/category/bedroom/collections",
            },
        },
    },
    {
        label: "Dining & Kitchen",
        icon: Utensils,
        href: "/category/dining-kitchen",
        dropdown: {
            columns: [
                {
                    title: "Dining Area",
                    items: [
                        { name: "4 Seater Dining Sets", href: "/category/dining/4-seater" },
                        { name: "6 Seater Dining Sets", href: "/category/dining/6-seater" },
                        { name: "Dining Tables", href: "/category/dining/tables" },
                        { name: "Dining Chairs & Benches", href: "/category/dining/chairs" },
                    ],
                },
                {
                    title: "Kitchen & Storage",
                    items: [
                        { name: "Crockery Units", href: "/category/dining/crockery" },
                        { name: "Kitchen Cabinets", href: "/category/kitchen/cabinets" },
                        { name: "Bar Cabinets", href: "/category/dining/bar" },
                        { name: "Kitchen Islands", href: "/category/kitchen/islands" },
                    ],
                },
            ],
            promo: {
                title: "Elegant Dining",
                subtitle: "Premium Teak Sets",
                price: "View Offers",
                image: "/custom-product/cupbord-tp.png",
                href: "/category/dining/collections",
            },
        },
    },
    {
        label: "Study",
        icon: BookOpen,
        href: "/category/study",
        dropdown: {
            columns: [
                {
                    title: "Desks",
                    items: [
                        { name: "Study Tables", href: "/category/study/tables" },
                        { name: "Computer Desks", href: "/category/study/computer" },
                        { name: "Executive Desks", href: "/category/study/executive" },
                        { name: "Standing Desks", href: "/category/study/standing" },
                    ],
                },
                {
                    title: "Seating & Storage",
                    items: [
                        { name: "Ergonomic Chairs", href: "/category/study/ergonomic-chairs" },
                        { name: "Study Chairs", href: "/category/study/study-chairs" },
                        { name: "Bookshelves", href: "/category/study/bookshelves" },
                        { name: "Filing Cabinets", href: "/category/study/cabinets" },
                    ],
                },
            ],
            promo: {
                title: "Modern Workspace",
                subtitle: "Ergonomic Designs",
                price: "Discover More",
                image: "/custom-product/cupbord.png",
                href: "/category/study/collections",
            },
        },
    },
    {
        label: "Storage Furniture",
        icon: Archive,
        href: "/category/storage",
        dropdown: {
            columns: [
                {
                    title: "Bedroom Storage",
                    items: [
                        { name: "2 Door Wardrobes", href: "/category/storage/wardrobes-2-door" },
                        { name: "3+ Door Wardrobes", href: "/category/storage/wardrobes-multi" },
                        { name: "Chest of Drawers", href: "/category/storage/drawers" },
                    ],
                },
                {
                    title: "Living & Utility",
                    items: [
                        { name: "Shoe Racks", href: "/category/storage/shoe-racks" },
                        { name: "Display Cabinets", href: "/category/storage/display" },
                        { name: "Trunks & Boxes", href: "/category/storage/trunks" },
                    ],
                },
            ],
            promo: {
                title: "Smart Storage",
                subtitle: "Maximize your space",
                price: "View Solutions",
                image: "/custom-product/cupbord.png", // Using a fallback promo image
                href: "/category/storage/solutions",
            },
        },
    },
    {
        label: "Pillars",
        icon: Columns,
        href: "/category/pillars",
        dropdown: {
            columns: [
                {
                    title: "Wooden Pillars",
                    items: [
                        { name: "Teak Wood Pillars", href: "/category/pillars/teak" },
                        { name: "Rosewood Pillars", href: "/category/pillars/rosewood" },
                        { name: "Sheesham Pillars", href: "/category/pillars/sheesham" },
                        { name: "Sandstone Pillars", href: "/category/pillars/sandstone" },
                    ],
                },
                {
                    title: "Sculptured Pillars",
                    items: [
                        { name: "Carved Pillars", href: "/category/pillars/carved" },
                        { name: "Decorative Pillars", href: "/category/pillars/decorative" },
                        { name: "Antique Style Pillars", href: "/category/pillars/antique" },
                        { name: "Modern Pillars", href: "/category/pillars/modern" },
                    ],
                },
            ],
            promo: {
                title: "Timeless Pillars",
                subtitle: "Handcrafted Wood Pillars",
                price: "Starting from ₹25,000",
                image: "/custom-product/cupbord.png", // Using a fallback promo image
                href: "/category/pillars/collection",
            },
        },
    },
    {
        label: "Furnishing",
        icon: Palette,
        href: "/category/furnishing",
        dropdown: {
            columns: [
                {
                    title: "Bedding",
                    items: [
                        { name: "Bedsheets", href: "/category/furnishing/bedsheets" },
                        { name: "Blankets & Dohars", href: "/category/furnishing/blankets" },
                        { name: "Pillows & Cushions", href: "/category/furnishing/pillows" },
                        { name: "Mattress Protectors", href: "/category/furnishing/protectors" },
                    ],
                },
                {
                    title: "Rugs & Curtains",
                    items: [
                        { name: "Carpets & Rugs", href: "/category/furnishing/rugs" },
                        { name: "Door Mats", href: "/category/furnishing/mats" },
                        { name: "Window Curtains", href: "/category/furnishing/window-curtains" },
                        { name: "Door Curtains", href: "/category/furnishing/door-curtains" },
                    ],
                },
            ],
            promo: {
                title: "Cozy Layers",
                subtitle: "Premium Fabrics",
                price: "Refresh Your Space",
                image: "/promo/bedroom-promo.jpg", // Using a fallback promo image
                href: "/category/furnishing/collections",
            },
        },
    },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#FCF8F3] backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            {/* Animated Circular Wood Pattern SVG */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <svg
                    viewBox="0 0 300 300"
                    className="absolute top-0 right-0 h-[200%] w-auto"
                    style={{
                        opacity: 0.15,
                        transform: 'translateX(10%)',
                    }}
                >
                    <defs>
                        <radialGradient id="woodRadial" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#b28444bb" />
                            <stop offset="100%" stopColor="#592915a6" />
                        </radialGradient>
                        <radialGradient id="woodRing" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="80%" stopColor="transparent" />
                            <stop offset="90%" stopColor="#b284449f" />
                            <stop offset="100%" stopColor="transparent" />
                        </radialGradient>
                    </defs>

                    {/* Concentric wood rings */}
                    <circle cx="150" cy="150" r="140" fill="none" stroke="url(#woodRadial)" strokeWidth="2" style={{ animation: 'pulseIn 4s ease-in-out infinite' }} />
                    <circle cx="150" cy="150" r="110" fill="none" stroke="url(#woodRadial)" strokeWidth="3" style={{ animation: 'pulseIn 4s ease-in-out infinite 0.3s' }} />
                    <circle cx="150" cy="150" r="80" fill="none" stroke="url(#woodRadial)" strokeWidth="4" style={{ animation: 'pulseIn 4s ease-in-out infinite 0.6s' }} />
                    <circle cx="150" cy="150" r="50" fill="none" stroke="url(#woodRadial)" strokeWidth="5" style={{ animation: 'pulseIn 4s ease-in-out infinite 0.9s' }} />
                    <circle cx="150" cy="150" r="25" fill="url(#woodRadial)" style={{ animation: 'pulseIn 4s ease-in-out infinite 1.2s' }} />

                    {/* Decorative wood knots */}
                    <circle cx="220" cy="80" r="15" fill="url(#woodRing)" style={{ animation: 'pulseIn 3s ease-in-out infinite 0.5s' }} />
                    <circle cx="80" cy="220" r="12" fill="url(#woodRing)" style={{ animation: 'pulseIn 3s ease-in-out infinite 1s' }} />
                </svg>

                {/* CSS Animations */}
                <style jsx>{`
                    @keyframes pulseIn {
                        0%, 100% { 
                            opacity: 0.2; 
                            transform: scale(1); 
                        }
                        50% { 
                            opacity: 0.6; 
                            transform: scale(1.05); 
                        }
                    }
                `}</style>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24">
                <div className="flex items-stretch justify-between py-4 relative">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center pr-8 lg:pr-16 relative z-10">
                        <Link href="/" className="hover:opacity-90 transition-opacity">
                            <Image src="/logo/logo2.png" alt="Lekshmi Furniture Mart" width={160} height={180} className="h-28 w-auto object-contain" priority />
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center flex-1 py-1">
                        {/* Utility Bar */}
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
                            <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest text-[#2A1C14]/70 font-sans font-semibold">
                                <Link href="/about" className="hover:text-[#B28544] transition-colors">About Us</Link>
                                <Link href="/gallery" className="hover:text-[#B28544] transition-colors">Gallery</Link>
                                <Link href="/projects" className="hover:text-[#B28544] transition-colors">Clients</Link>
                            </nav>
                            <div className="hidden lg:flex items-center gap-6 text-sm text-[#2A1C14] mr-6">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-[#B28544]" />
                                    <span>+91 90744 77358</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-[#B28544]" />
                                    <span>info@lekshmifurniture.com</span>
                                </div>
                            </div>
                            <Link href="https://wa.me/919074477358" target="_blank" className="px-8 py-2.5 bg-[#592915] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#B28544] transition-all relative z-10">
                                WhatsApp Us
                            </Link>
                        </div>

                        {/* Navigation - Adjusted for 11 categories */}
                        <nav className="hidden xl:flex justify-end items-center gap-4 2xl:gap-6 text-[13px] font-bold text-[#2A1C14] tracking-wide">
                            {navigationData.map((item) => (
                                <div key={item.label} className="group pb-4 -mb-4">
                                    <Link href={item.href} className="hover:text-[#B28544] transition-colors py-2 whitespace-nowrap flex items-center gap-1.5">
                                        {item.icon && <item.icon className="w-[14px] h-[14px]" />}
                                        {item.label}
                                    </Link>

                                    {/* Mega Menu Dropdown */}
                                    <div className="absolute left-0 right-0 top-full mt-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50 rounded-sm overflow-hidden">
                                        <div className="flex">
                                            <Link
                                                href={item.dropdown.promo.href}
                                                className="w-1/3 bg-[#FCFAF8] p-8 flex flex-col justify-between hover:bg-[#FCF8F3]/30 transition-colors group/promo"
                                            >
                                                <div className="relative">
                                                    <div className="relative aspect-[4/3] mb-4">
                                                        <div className="absolute inset-0 bg-[#B28544]/10 rounded-full scale-105 blur-sm"></div>
                                                        <div className="relative h-full w-full overflow-hidden">
                                                            <div className="absolute inset-0 bg-[#592915]/5 rounded-xl" style={{
                                                                clipPath: "polygon(0% 0%, 5% 2%, 10% 0%, 15% 2%, 20% 0%, 25% 2%, 30% 0%, 35% 2%, 40% 0%, 45% 2%, 50% 0%, 55% 2%, 60% 0%, 65% 2%, 70% 0%, 75% 2%, 80% 0%, 85% 2%, 90% 0%, 95% 2%, 100% 0%, 100% 5%, 98% 10%, 100% 15%, 98% 20%, 100% 25%, 98% 30%, 100% 35%, 98% 40%, 100% 45%, 98% 50%, 100% 55%, 98% 60%, 100% 65%, 98% 70%, 100% 75%, 98% 80%, 100% 85%, 98% 90%, 100% 95%, 98% 100%, 95% 98%, 90% 100%, 85% 98%, 80% 100%, 75% 98%, 70% 100%, 65% 98%, 60% 100%, 55% 98%, 50% 100%, 45% 98%, 40% 100%, 35% 98%, 30% 100%, 25% 98%, 20% 100%, 15% 98%, 10% 100%, 5% 98%, 0% 100%, 2% 95%, 0% 90%, 2% 85%, 0% 80%, 2% 75%, 0% 70%, 2% 65%, 0% 60%, 2% 55%, 0% 50%, 2% 45%, 0% 40%, 2% 35%, 0% 30%, 2% 25%, 0% 20%, 2% 15%, 0% 10%, 2% 5%)"
                                                            }}>
                                                                <Image src={item.dropdown.promo.image} alt={item.dropdown.promo.subtitle} fill className="object-cover group-hover/promo:scale-105 transition-transform duration-700" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="relative z-10">
                                                        <h3 className="font-serif text-2xl text-[#592915] mb-1">{item.dropdown.promo.title}</h3>
                                                        <p className="text-sm text-[#2A1C14]/60 mb-2">{item.dropdown.promo.subtitle}</p>
                                                        <p className="text-[#B28544] font-bold text-xl mb-4">{item.dropdown.promo.price}</p>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div className="w-2/3 p-8 grid grid-cols-3 gap-8">
                                                {item.dropdown.columns.map((col) => (
                                                    <div key={col.title} className="border-r border-gray-100 last:border-r-0 pr-8 last:pr-0">
                                                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#B28544] mb-4 font-bold">{col.title}</h4>
                                                        <ul className="space-y-3">
                                                            {col.items.map((sub) => (
                                                                <li key={sub.name}>
                                                                    <Link href={sub.href} className="text-sm text-[#2A1C14]/80 hover:text-[#592915] transition-colors">{sub.name}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}