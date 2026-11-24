import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  {
    src: '/Doctor Beside Krishna Wisdom Poster-5.png',
    alt: 'Dr. Aashutosh - Medical Practice',
    tag: 'Doctor'
  },
  {
    src: '/Thoughtful Musician by the Yellow Wall-1.png',
    alt: 'Dr. Aashutosh - Music & Acoustic Arts',
    tag: 'Music'
  },
  {
    src: '/Underwater Swimmer in Turquoise Light-2.png',
    alt: 'Dr. Aashutosh - Swimming & Waters',
    tag: 'Swimming'
  },
  {
    src: '/Forest Camp Cooking with Steam.png',
    alt: 'Dr. Aashutosh - Culinary & Camp Cooking',
    tag: 'Culinary'
  },
  {
    src: '/Night Ride at Shanti Sagar-3.png',
    alt: 'Dr. Aashutosh - Night Bike Expedition',
    tag: 'Bike Expedition'
  },
  {
    src: '/Selfie on a Lush Forest Road.png',
    alt: 'Dr. Aashutosh - Forest Trekking',
    tag: 'Trekking'
  },
  {
    src: '/Lakeside Veshti Portrait with Helmet-6.png',
    alt: 'Dr. Aashutosh - Lakeside Portrait',
    tag: 'Explorer'
  },
  {
    src: '/Traditional Draped Mirror Selfie-4.png',
    alt: 'Dr. Aashutosh - Traditional Attire',
    tag: 'Tradition'
  },
  {
    src: '/Moody Overhead Mirror Selfie.png',
    alt: 'Dr. Aashutosh - Aesthetic Portrait',
    tag: 'Portrait'
  }
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative w-full max-w-xl mx-auto px-4 my-6 sm:my-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Outer Card with subtle glow & dark glass border */}
      <div className="relative overflow-hidden rounded-3xl bg-zinc-900/90 border border-zinc-800/90 shadow-2xl shadow-black/60 group">
        
        {/* Slides Container */}
        <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full overflow-hidden bg-black">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none scale-105'
              }`}
            >
              <img
                src={encodeURI(image.src)}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover object-center transition-transform duration-700"
              />
              {/* Subtle gradient vignette at bottom of image for tag legibility */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
              
              {/* Tag / Category Badge */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-zinc-200 border border-white/10">
                  {image.tag}
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  {index + 1} / {carouselImages.length}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-white border border-white/10 transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-white border border-white/10 transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer hover:scale-105"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-white shadow-sm'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
