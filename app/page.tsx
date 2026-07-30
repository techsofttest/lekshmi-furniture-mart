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
import WoodTypes from "@/components/home/WoodTypes";
import GoogleReviews from "@/components/home/GoogleReviews";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/*Hero Section */}
      <HeroSlider />

      {/*Bento Categories Section */}
      <BentoCategories />

      {/* Highlights Section */}
      <Highlights />

      {/*About Section */}
      <About />

      {/*Product List Section */}
      <ProductList />

      {/*New Wood Types Section */}
      <WoodTypes />

      {/*Customization Section */}
      <Customization />

      {/*Brand History Section */}
      <BrandHistory />

      {/*Heritage Projects Carousel */}
      <HeritageProjects />

      {/*Testimonials Section */}
      <Testimonials />

      {/*Google Reviews Section */}
      <GoogleReviews />

      {/*CTA Section */}
      <CTA />
    </div>
  );
}