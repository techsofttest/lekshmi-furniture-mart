'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Anjali Menon",
    location: "Kochi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "The custom teak dining table we ordered transformed our home. The craftsmanship is exceptional, and the delivery was seamless! Lekshmi Furniture Mart truly understands Kerala's aesthetic.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Trivandrum",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "I've been buying furniture here for 15 years. Quality has never disappointed. The team is knowledgeable and helped us design the perfect bedroom set.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Joseph",
    location: "Kottayam",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "From the first consultation to installation, everything was perfect. The rosewood sofa is not just furniture, it's an heirloom we'll pass down to our children.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#FCFAF8] w-full relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="text-[#592915] font-sans text-xs uppercase tracking-[0.2em] font-bold mb-4 block">
            What Our Clients Say
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#592915] mb-4 inline-block relative pb-4">
            Trusted Since 1990
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-[#B28544]/40" />
          </h2>
        </motion.div>

        {/* Testimonial Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Left Control */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 text-[#592915]/30 hover:text-[#B28544] transition-colors duration-300 z-20 p-2"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          {/* Right Control */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 text-[#592915]/30 hover:text-[#B28544] transition-colors duration-300 z-20 p-2"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Testimonial Card */}
          <motion.div
            className="bg-[#FCFAF8] border border-[#FCF8F3] px-10 md:px-16 py-8 md:py-12 rounded-sm min-h-[380px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[380px] flex flex-col justify-center overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center w-full"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-8">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[#B28544] fill-[#B28544]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#2A1C14]/90 font-serif text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed italic text-center">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#B28544]">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-serif text-[#592915] text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#2A1C14]/60 text-sm font-sans">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Separator Line */}
        {/* <div className="w-full max-w-xs mx-auto h-[1px] bg-[#B28544]/20 mt-12" /> */}

        {/* Indicators */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[1px] transition-all duration-500 ${index === currentIndex
                ? "bg-[#B28544] w-8"
                : "bg-[#592915]/30 w-4 hover:bg-[#592915]/50"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
