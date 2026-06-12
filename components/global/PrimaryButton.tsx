import React from "react";
import Link from "next/link";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: "light" | "dark";
    className?: string;
    children: React.ReactNode;
}

export default function PrimaryButton({
    href,
    variant = "light",
    className = "",
    children,
    ...props
}: PrimaryButtonProps) {
    const baseStyles = "inline-block px-10 py-4 border uppercase tracking-[0.25em] text-xs transition-all duration-700 text-center";

    const variantStyles = {
        light: "border-white/30 text-white hover:border-[#F4ECE1] hover:bg-[#F4ECE1] hover:text-[#1A120E]",
        dark: "border-[#592915]/30 text-[#592915] hover:border-[#592915] hover:bg-[#592915] hover:text-[#F4ECE1]",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}