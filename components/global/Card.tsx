"use client";

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  price?: string;
  image: string;
  href: string;
}

export default function Card({ title, price, image, href }: CardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-6 cursor-pointer w-full"
    >
      {/* Image Container
        1:1 Ratio (aspect-square), no shadows, overflow-hidden to crop the parallax image.
      */}
      <div
        className="relative w-full aspect-square overflow-hidden bg-[#F4ECE1] rounded-sm"
      >
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Below Image */}
      <div className="flex flex-col items-start px-1">
        <h3 className="text-[#592915] font-serif text-lg mb-2 transition-colors duration-500">
          {title}
        </h3>
        {price && (
          <p className="text-[#2A1C14]/70 font-sans text-xs tracking-[0.15em] uppercase font-bold">
            {price}
          </p>
        )}
      </div>
    </Link>
  );
}