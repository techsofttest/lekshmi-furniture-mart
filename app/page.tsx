import HeroSlider from "@/components/home/HeroSlider";
import BentoCategories from "@/components/home/BentoCategories";
import Highlights from "@/components/home/Highlights";
import About from "@/components/home/About";
import HeritageProjects from "@/components/home/HeritageProjects";
import ProductList from "@/components/home/ProductList";
import Customization from "@/components/home/Customization";
import BrandHistory from "@/components/home/BrandHistory";
import CTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* 1. Hero Section */}
      <HeroSlider />

      {/* 2. Bento Categories Section */}
      <BentoCategories />

      {/* Heritage Projects Carousel */}
      <HeritageProjects />

      {/* Highlights Section */}
      <Highlights />

      {/* 3. About Section */}
      <About />

      {/* 4. Product List Section */}
      <ProductList />

      {/* 5. Customization Section */}
      <Customization />

      {/* 6. Brand History Section */}
      <BrandHistory />

      {/* 7. Testimonials Section */}
      <Testimonials />
      
      {/* 8. CTA Section */}
      <CTA />

      {/* Future Homepage Sections will stack below here.
        Examples:
        <FeaturedCategories />
        <BespokeProcess />
        <Testimonials />
        <Footer />
      */}
    </div>
  );
}