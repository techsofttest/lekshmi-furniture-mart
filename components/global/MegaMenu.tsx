import Link from "next/link";
import Image from "next/image";

interface Category { name: string; href: string; }
interface CategoryGroup { title: string; items: Category[]; }

interface MegaMenuProps {
    groups: CategoryGroup[];
    // Updated highlight interface to include an image path
    highlight: {
        title: string;
        price: string;
        cta: string;
        href: string;
        image: string; // Add image path
    };
    isOpen: boolean;
}

export default function MegaMenu({ groups, highlight, isOpen }: MegaMenuProps) {
    if (!isOpen) return null;

    return (
        // Full width bar
        <div className="absolute left-0 top-full w-full bg-[#FCFAF8] border-b-4 border-double border-[#592915] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 z-50">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24 py-12 flex gap-16">

                {/* Dynamic Category Columns */}
                <div className="flex gap-20 flex-1">
                    {groups.map((group) => (
                        <div key={group.title} className="min-w-[200px]">
                            <h3 className="font-serif text-[#592915] text-xl mb-6 border-b border-[#B28544]/30 pb-2">
                                {group.title}
                            </h3>
                            <ul className="space-y-4">
                                {group.items.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-[#2A1C14]/70 hover:text-[#592915] font-sans font-medium transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Cultural-Style Highlight Section */}
                <div className="w-[550px] bg-[#F4ECE1] p-6 flex gap-8 items-center border border-[#B28544]/20 shadow-inner">

                    {/* Framed Image: Cultural Pattern Style */}
                    <div className="relative p-2 border-double border-4 border-[#B28544]">
                        <div className="w-[180px] h-[180px] bg-gray-200 relative overflow-hidden">
                            <Image
                                src={highlight.image}
                                alt={highlight.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Subtle corner accents to mimic carvings */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#592915]"></div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#592915]"></div>
                    </div>

                    {/* Content Outside the Image */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h4 className="font-serif text-2xl text-[#592915] mb-1">{highlight.title}</h4>
                        <p className="text-[#2A1C14]/60 font-sans text-sm mb-4">Starting from</p>
                        <p className="text-2xl font-bold text-[#592915] mb-6 tracking-tight">{highlight.price}</p>
                        <Link
                            href={highlight.href}
                            className="inline-flex items-center gap-2 text-[#592915] font-bold uppercase text-xs tracking-[0.2em] hover:text-[#B28544] transition-all"
                        >
                            {highlight.cta} <span>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}