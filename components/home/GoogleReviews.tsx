'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Radhika Sivakumar",
    timeAgo: "7 months ago",
    rating: 5,
    text: "I happened to see a couple of pictures on Pinterest and wanted to recreate those for my place. It was very easy to interact with Dayanand. He understood my requirement very quickly. It felt as though he could read my mind. What he delivered was beyond expectations — truly stunning craftsmanship.",
    initials: "RS",
  },
  {
    id: 2,
    name: "Akash Aji",
    timeAgo: "3 years ago",
    rating: 5,
    text: "Good quality furniture, delivered on time and at an affordable price. Would recommend.",
    initials: "AA",
  },
  {
    id: 3,
    name: "Mallu kitchef",
    timeAgo: "6 years ago",
    rating: 4,
    text: "It is a nice shop. All types and different variety of furnitures are available here for viewing and purchase.",
    initials: "MK",
  },
  {
    id: 4,
    name: "Amal Baby",
    timeAgo: "8 years ago",
    rating: 5,
    text: "Good.",
    initials: "AB",
  },
  {
    id: 5,
    name: "Kumar Krishnan",
    timeAgo: "4 years ago",
    rating: 5,
    text: "Good nature and friendly staff. Very helpful in choosing the right furniture.",
    initials: "KK",
  },
  {
    id: 6,
    name: "Vishnudas",
    timeAgo: "2 weeks ago",
    rating: 5,
    text: "Excellent furniture store with a great collection. Very satisfied with the quality and service.",
    initials: "V",
  },
  {
    id: 7,
    name: "Tanush Raj",
    timeAgo: "2 years ago",
    rating: 5,
    text: "Great collection of traditional Kerala-style furniture. Highly recommended for quality wooden pieces.",
    initials: "TR",
  },
  {
    id: 8,
    name: "Salahudheen Ayyoobi",
    timeAgo: "4 years ago",
    rating: 5,
    text: "A wonderful furniture store with excellent craftsmanship and a friendly team. Very happy with my purchase.",
    initials: "SA",
  },
  {
    id: 9,
    name: "Devika suresh",
    timeAgo: "5 years ago",
    rating: 5,
    text: "Nice collection of furniture. Good service and quality products at reasonable prices.",
    initials: "DS",
  },
  {
    id: 10,
    name: "Bhavana Rahul",
    timeAgo: "5 years ago",
    rating: 5,
    text: "Beautiful furniture store. The quality and finish of the furniture is really impressive.",
    initials: "BR",
  },
  {
    id: 11,
    name: "sreelakshmi sree",
    timeAgo: "6 years ago",
    rating: 5,
    text: "Nice place with good quality furniture. Very helpful staff and beautiful designs.",
    initials: "SS",
  },
  {
    id: 12,
    name: "JISHNU VIJAY",
    timeAgo: "7 years ago",
    rating: 5,
    text: "Great furniture store. Excellent variety and very good quality craftsmanship.",
    initials: "JV",
  },
];

function GoogleLogo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? 'text-[#FBBC05] fill-[#FBBC05]' : 'text-gray-300 fill-gray-200'}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-xl p-5 border border-gray-100 flex flex-col gap-3 mx-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 bg-[#592915]/10 text-[#592915]">
            {review.initials}
          </div>
          <p className="font-semibold text-[#1a1a1a] text-sm leading-tight">{review.name}</p>
        </div>
        <div className="flex-shrink-0 mt-0.5">
          <GoogleLogo size={20} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <StarRating rating={review.rating} />
        <span className="text-[#5f6368] text-xs">{review.timeAgo}</span>
      </div>

      <p className="text-[#3c4043] text-sm leading-relaxed line-clamp-4 flex-1">
        {review.text}
      </p>
    </div>
  );
}

export default function GoogleReviews() {
  const allReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 md:py-24 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6"
        >
          <div>
            <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-3 block">
              Customer Feedback
            </span>
            <h2 className="text-xl md:text-2xl font-serif text-[#592915] relative pb-4 inline-block">
              What Customers Say on Google
              <span className="absolute bottom-0 left-0 w-16 h-[1px] bg-[#592915]/40" />
            </h2>
          </div>

          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Lekshmi+Furniture+Mart"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:border-gray-300 transition-colors duration-300"
          >
            <GoogleLogo size={28} />
            <div className="border-l border-gray-200 pl-3">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold text-[#1a1a1a]">4.3</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#FBBC05] fill-[#FBBC05]" />
                  ))}
                </div>
              </div>
              <p className="text-[#5f6368] text-xs mt-0.5">12 Google Reviews</p>
            </div>
          </motion.a>
        </motion.div>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-stretch py-3"
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'marquee-google 40s linear infinite',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running'; }}
        >
          {allReviews.map((review, idx) => (
            <ReviewCard key={`${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-10"
      >
        <a
          href="https://www.google.com/search?sca_esv=264d1bbe941da2eb&rlz=1CDGOYI_enGB1174GB1175&hl=en-GB&sxsrf=APpeQnsSmxkuZ7X5jiYJW9MCoonx3_tv3g:1785330986997&kgmid=/g/11z51y0t66&q=Lekshmi+furniture+mart&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/3&kgs=1a0a8077a300e281&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#592915]/30 text-[#592915] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#592915] hover:text-white transition-all duration-300"
        >
          <GoogleLogo size={16} />
          Write a Review on Google
        </a>
      </motion.div>

      <style jsx global>{`
        @keyframes marquee-google {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
