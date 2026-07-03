"use client";

import InnerPageHero from "@/components/global/InnerPageHero";
import ProjectsList from "@/components/projects/ProjectsList";
import Timeline from "@/components/projects/Timeline";
import ArchitectCTA from "@/components/projects/ArchitectCTA";
import CTA from "@/components/home/CTA";

export default function ClientsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <div className="bg-white text-[#2A1C14] min-h-screen">
      {/* Shared Hero Banner */}
      <InnerPageHero
        kicker="Our Clients & Partners"
        title="Bespoke Collaborations"
        subtitle="& Heritage Restorations"
      />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 py-16 md:py-24">
        {/* Project Showcases */}
        <ProjectsList />

        {/* Collaboration Process */}
        <Timeline
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        {/* Architectural Partnership CTA */}
        {/* <ArchitectCTA /> */}
      </div>

      {/* Footer CTA Section */}
      <CTA />
    </div>
  );
}
