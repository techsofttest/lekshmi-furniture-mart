"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

interface Project {
  id: number;
  image: string;
  name: string;
  location: string;
  clientType: string;
  year: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/banner/banner-7.png",
    name: "Marari Beach Resort Cottages",
    location: "Mararikulam, Kerala",
    clientType: "Hospitality Resort",
    year: "1998 - 2000",
    description:
      "Bespoke solid Nilambur teakwood bedroom layouts, traditional open-air bathroom doors, and handcrafted veranda lounge chairs blending seamlessly with beachfront heritage.",
  },
  {
    id: 2,
    image: "/banner/banner-6.png",
    name: "Coconut Lagoon Heritage restoration",
    location: "Kumarakom, Kerala",
    clientType: "Hospitality Resort",
    year: "2003 - 2006",
    description:
      "Precision restoration of structural heritage columns, rosewood rafters, and bespoke wood paneling for lakeside heritage cottages.",
  },
  {
    id: 3,
    image: "/banner/banner-3.png",
    name: "Trivandrum Heritage Mansion",
    location: "Trivandrum, Kerala",
    clientType: "Private Residential",
    year: "2018 - 2019",
    description:
      "Bespoke bedroom suites, solid Rosewood main doors with handcarved details, and a 12-seater royal teak dining set matching custom ceiling rafters.",
  },
];

export default function ProjectsList() {
  return (
    <div className="space-y-24 mb-32">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
        >
          {/* Image Frame */}
          <div className="w-full lg:w-1/2 aspect-[16/10] relative overflow-hidden group">
            <div className="relative w-full h-full overflow-hidden bg-gray-100 rounded-sm">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-105 rounded-sm"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-sans font-bold tracking-wider text-[#592915]">
              <span className="flex items-center gap-1.5 uppercase">
                <Building className="w-3 h-3" /> {project.clientType}
              </span>
              <span className="text-[#592915]/30">•</span>
              <span className="flex items-center gap-1.5 uppercase">
                <MapPin className="w-3 h-3" /> {project.location}
              </span>
              <span className="text-[#592915]/30">•</span>
              <span className="flex items-center gap-1.5 uppercase">
                <Calendar className="w-3 h-3" /> {project.year}
              </span>
            </div>

            <h3 className="text-lg font-serif text-[#592915]">
              {project.name}
            </h3>
            <p className="text-[#2A1C14]/70 font-sans text-sm md:text-normal leading-relaxed">
              {project.description}
            </p>
            <div className="pt-2">
              <div className="w-12 h-[1px] bg-[#B28544]/40" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
