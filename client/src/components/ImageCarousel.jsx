import React from 'react';

const galleryPhotos = [
  {
    filename: 'Doctor Beside Krishna Wisdom Poster-5.png',
    alt: 'Dr. Aashutosh - Medical Practice'
  },
  {
    filename: 'Thoughtful Musician by the Yellow Wall-1.png',
    alt: 'Dr. Aashutosh - Music & Acoustic Arts'
  },
  {
    filename: 'Underwater Swimmer in Turquoise Light-2.png',
    alt: 'Dr. Aashutosh - Swimming & Waters'
  },
  {
    filename: 'Forest Camp Cooking with Steam.png',
    alt: 'Dr. Aashutosh - Culinary & Camp Cooking'
  },
  {
    filename: 'Night Ride at Shanti Sagar-3.png',
    alt: 'Dr. Aashutosh - Night Bike Expedition'
  },
  {
    filename: 'Selfie on a Lush Forest Road.png',
    alt: 'Dr. Aashutosh - Forest Trekking'
  },
  {
    filename: 'Lakeside Veshti Portrait with Helmet-6.png',
    alt: 'Dr. Aashutosh - Lakeside Portrait'
  },
  {
    filename: 'Traditional Draped Mirror Selfie-4.png',
    alt: 'Dr. Aashutosh - Traditional Attire'
  },
  {
    filename: 'Moody Overhead Mirror Selfie.png',
    alt: 'Dr. Aashutosh - Aesthetic Portrait'
  }
];

export default function ImageCarousel() {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-6 sm:my-8 overflow-hidden motion-reduce:overflow-x-auto select-none">
      {/* Left gradient edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/80 to-transparent z-20" />

      {/* Right gradient edge fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#0b0c10] via-[#0b0c10]/80 to-transparent z-20" />

      <div className="animate-marquee-rtl py-2">
        {[false, true].map((isDuplicate) => (
          <div
            key={String(isDuplicate)}
            aria-hidden={isDuplicate || undefined}
            className={`flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6 ${isDuplicate ? 'motion-reduce:hidden' : ''}`}
          >
            {galleryPhotos.map((item) => (
              <div
                key={item.filename}
                className="group relative w-32 sm:w-36 md:w-44 shrink-0 aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800/90 shadow-xl shadow-black/50 transition-all duration-300 hover:scale-[1.03] hover:border-zinc-700"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${encodeURIComponent(item.filename)}`}
                  alt={isDuplicate ? '' : item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
