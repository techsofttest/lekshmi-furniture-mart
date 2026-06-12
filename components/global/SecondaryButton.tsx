import React from "react";
import Link from "next/link";

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: "light" | "dark";
    className?: string;
    children: React.ReactNode;
}

export default function SecondaryButton({
    href,
    variant = "light",
    className = "",
    children,
    ...props
}: SecondaryButtonProps) {
    const baseStyles =
        "inline-flex items-center gap-3 uppercase tracking-[0.25em] text-[11px] font-bold transition-all duration-500 group relative pb-1.5";

    const variantStyles = {
        light: "text-white/80 hover:text-white",
        dark: "text-[#592915]/80 hover:text-[#592915]",
    };

    const underlineStyles = {
        light: "bg-white/30 group-hover:bg-white",
        dark: "bg-[#592915]/30 group-hover:bg-[#592915]",
    };

    const content = (
        <>
            {children}
            <span className="group-hover:translate-x-1 transition-transform duration-500 text-base leading-none">→</span>
            <span className={`absolute left-0 bottom-0 w-full h-[1px] transition-colors duration-500 ${underlineStyles[variant]}`} />
        </>
    );

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {content}
        </button>
    );
}