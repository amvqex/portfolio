import React, { useState } from 'react';

// The 9 photos directly from the public/ folder
const unevenGallery = [
  {
    id: 1,
    src: '/Doctor Beside Krishna Wisdom Poster-5.png',
    alt: 'Dr. Aashutosh - Medical Practice & Wisdom',
    tag: 'Surgeon & Healer',
    badgeClass: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/80',
    hoverGlow: 'hover:shadow-emerald-500/20',
    // Asymmetric corners, upward shift, gentle counter-clockwise tilt
    className: 'w-64 sm:w-72 md:w-80 aspect-[3/4] -translate-y-6 -rotate-2 rounded-[32px] rounded-tl-sm',
  },
  {
    id: 2,
    src: '/Underwater Swimmer in Turquoise Light-2.png',
    alt: 'Dr. Aashutosh - Underwater Swimmer',
    tag: 'Turquoise Depths',
    badgeClass: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/80',
    hoverGlow: 'hover:shadow-cyan-500/25',
    // Wide cinematic horizontal frame, downward shift, clockwise tilt
    className: 'w-80 sm:w-96 md:w-[420px] aspect-[16/9] translate-y-8 rotate-3 rounded-[36px]',
  },
  {
    id: 3,
    src: '/Thoughtful Musician by the Yellow Wall-1.png',
    alt: 'Dr. Aashutosh - Acoustic Musician',
    tag: 'Acoustic Soul',
    badgeClass: 'border-amber-500/40 text-amber-300 bg-amber-950/80',
    hoverGlow: 'hover:shadow-amber-500/20',
    // Elevated card, asymmetric bottom corner
    className: 'w-60 sm:w-68 md:w-72 aspect-[3/4] -translate-y-10 rotate-2 rounded-[34px] rounded-br-sm',
  },
  {
    id: 4,
    src: '/Night Ride at Shanti Sagar-3.png',
    alt: 'Dr. Aashutosh - Night Ride at Shanti Sagar',
    tag: 'Midnight Expedition',
    badgeClass: 'border-purple-500/40 text-purple-300 bg-purple-950/80',
    hoverGlow: 'hover:shadow-purple-500/20',
    // Ultra tall story aspect, sunken shift, counter tilt
    className: 'w-52 sm:w-60 md:w-64 aspect-[9/16] translate-y-6 -rotate-3 rounded-[28px]',
  },
  {
    id: 5,
    src: '/Forest Camp Cooking with Steam.png',
    alt: 'Dr. Aashutosh - Campfire Culinary',
    tag: 'Camp Culinary',
    badgeClass: 'border-orange-500/40 text-orange-300 bg-orange-950/80',
    hoverGlow: 'hover:shadow-orange-500/20',
    // Offset card with upward shift and clockwise slant
    className: 'w-64 sm:w-72 md:w-76 aspect-[4/5] -translate-y-7 rotate-3 rounded-[34px] rounded-tr-md',
  },
  {
    id: 6,
    src: '/Lakeside Veshti Portrait with Helmet-6.png',
    alt: 'Dr. Aashutosh - Lakeside Veshti Portrait with Helmet',
    tag: 'Veshti & Biker',
    badgeClass: 'border-teal-500/40 text-teal-300 bg-teal-950/80',
    hoverGlow: 'hover:shadow-teal-500/20',
    // Landscape frame, downward sunken position
    className: 'w-76 sm:w-88 md:w-96 aspect-[4/3] translate-y-9 -rotate-2 rounded-[32px]',
  },
  {
    id: 7,
    src: '/Traditional Draped Mirror Selfie-4.png',
    alt: 'Dr. Aashutosh - Traditional Attire',
    tag: 'Cultural Heritage',
    badgeClass: 'border-rose-500/40 text-rose-300 bg-rose-950/80',
    hoverGlow: 'hover:shadow-rose-500/20',
    // Tall dramatic phone portrait with high upward shift
    className: 'w-52 sm:w-56 md:w-60 aspect-[9/16] -translate-y-11 rotate-3 rounded-[28px] rounded-bl-sm',
  },
  {
    id: 8,
    src: '/Selfie on a Lush Forest Road.png',
    alt: 'Dr. Aashutosh - Lush Forest Road Trek',
    tag: 'Wilderness Trek',
    badgeClass: 'border-lime-500/40 text-lime-300 bg-lime-950/80',
    hoverGlow: 'hover:shadow-lime-500/20',
    // Chunky editorial card, downward offset
    className: 'w-64 sm:w-72 md:w-80 aspect-[3/4] translate-y-7 -rotate-3 rounded-[36px]',
  },
  {
    id: 9,
    src: '/Moody Overhead Mirror Selfie.png',
    alt: 'Dr. Aashutosh - Moody Overhead Mirror Selfie',
    tag: 'Moody Aesthetics',
    badgeClass: 'border-indigo-500/40 text-indigo-300 bg-indigo-950/80',
    hoverGlow: 'hover:shadow-indigo-500/20',
    // Slim vertical card, upward float
    className: 'w-52 sm:w-60 md:w-64 aspect-[9/16] -translate-y-5 rotate-2 rounded-[30px]',
  },
];

// Duplicated for seamless, jitter-free infinite loop from left to right
const duplicatedSlides = [...unevenGallery, ...unevenGallery];

export default function ImageCarousel() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="relative w-full overflow-hidden select-none my-4 sm:my-6 py-12 sm:py-16">
      {/* Left gradient edge fade for seamless entry */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/95 to-transparent z-20" />

      {/* Right gradient edge fade for seamless exit */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#0b0c10] via-[#0b0c10]/95 to-transparent z-20" />

      {/* Marquee Track continuously gliding from LEFT TO RIGHT */}
      <div className="animate-marquee-ltr flex items-center gap-6 sm:gap-8 md:gap-10 py-8 will-change-transform">
        {duplicatedSlides.map((item, index) => {
          const encodedSrc = encodeURI(item.src);
          return (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setActivePhoto(item)}
              className={`group relative shrink-0 overflow-hidden cursor-pointer bg-zinc-950 border border-zinc-800/80 shadow-2xl shadow-black/80 transition-all duration-500 ease-out hover:scale-105 hover:rotate-0 hover:z-30 hover:border-zinc-500/80 ${item.hoverGlow} ${item.className}`}
            >
              {/* Actual Image with eager decoding */}
              <img
                src={encodedSrc}
                alt={item.alt}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Ambient dark gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

              {/* Badges / Labels */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider backdrop-blur-md border shadow-lg ${item.badgeClass}`}
                >
                  {item.tag}
                </span>

                <span className="text-[10px] font-mono text-zinc-400 bg-black/70 px-2 py-0.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  VIEW FULL
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal on Card Click */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] flex flex-col items-center bg-zinc-950 border border-zinc-800 rounded-3xl p-3.5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -top-3.5 -right-3.5 w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-sm font-bold border border-zinc-600 shadow-xl cursor-pointer z-10"
            >
              ✕
            </button>
            <img
              src={encodeURI(activePhoto.src)}
              alt={activePhoto.alt}
              className="max-h-[75vh] w-auto object-contain rounded-2xl"
            />
            <div className="mt-3.5 flex items-center gap-3">
              <span
                className={`px-3.5 py-1 rounded-full text-xs font-mono border ${activePhoto.badgeClass}`}
              >
                {activePhoto.tag}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                {activePhoto.alt}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
