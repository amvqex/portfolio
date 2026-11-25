import React, { useState } from 'react';
import { X } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: '/WhatsApp Image 2026-11-24 at 11.09.18 PM.jpeg',
    alt: 'Dr. Aashutosh Mattikoppa - Medical Practice & Wisdom',
    // 2-column portrait, subtle counter-tilt, slight upward offset
    colSpan: 'col-span-2 aspect-[3/4] -rotate-1 -translate-y-1 rounded-2xl rounded-tl-sm',
    borderClass: 'border-[2.5px] border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.35)]',
  },
  {
    id: 2,
    src: '/WhatsApp Image 2026-11-25 at 10.35.24 PM.jpeg',
    alt: 'Dr. Aashutosh Mattikoppa - Underwater Swimmer',
    // 4-column wide panoramic hero, subtle clockwise tilt, downward offset
    colSpan: 'col-span-4 aspect-[16/9] rotate-1 translate-y-1 rounded-2xl rounded-tr-sm',
    borderClass: 'border-[3px] border-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.4)]',
  },
  {
    id: 3,
    src: '/WhatsApp Image 2026-11-24 at 11.09.17 PM.jpeg',
    alt: 'Dr. Aashutosh Mattikoppa - Acoustic Musician',
    // 2-column card, clockwise tilt
    colSpan: 'col-span-2 aspect-[4/5] rotate-1.5 translate-y-0.5 rounded-2xl rounded-bl-sm',
    borderClass: 'border-[2px] border-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.35)]',
  },
  {
    id: 4,
    src: '/WhatsApp Image 2026-11-24 at 11.09.18 PM (2).jpeg',
    alt: 'Dr. Aashutosh Mattikoppa - Night Expedition at Shanti Sagar',
    // 2-column card, upward shift, counter-tilt
    colSpan: 'col-span-2 aspect-[3/4] -translate-y-1.5 -rotate-1 rounded-2xl',
    borderClass: 'border-[3px] border-purple-500 shadow-[0_0_16px_rgba(168,85,247,0.35)]',
  },
  {
    id: 5,
    src: '/WhatsApp Image 2026-11-24 at 11.09.19 PM (2).jpeg',
    alt: 'Dr. Aashutosh Mattikoppa - Campfire Culinary',
    // 2-column card, downward shift, clockwise tilt
    colSpan: 'col-span-2 aspect-[4/5] translate-y-1.5 rotate-1 rounded-2xl rounded-tr-sm',
    borderClass: 'border-[2.5px] border-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.35)]',
  },
  {
    id: 6,
    src: '/Lakeside Veshti Portrait with Helmet-6.png',
    alt: 'Dr. Aashutosh Mattikoppa - Lakeside Veshti Portrait with Helmet',
    // 3-column landscape card, counter-tilt, slight upward shift
    colSpan: 'col-span-3 aspect-[4/3] -rotate-1 -translate-y-1 rounded-2xl rounded-tl-sm',
    borderClass: 'border-[3px] border-teal-400 shadow-[0_0_16px_rgba(45,212,191,0.35)]',
  },
  {
    id: 7,
    src: '/WhatsApp Image 2026-11-24 at 11.09.18 PM (3).jpeg',
    alt: 'Dr. Aashutosh Mattikoppa - Traditional Attire',
    // 3-column landscape/story card, clockwise tilt, downward shift
    colSpan: 'col-span-3 aspect-[4/3] rotate-1 translate-y-1 rounded-2xl rounded-br-sm',
    borderClass: 'border-[3px] border-rose-500 shadow-[0_0_16px_rgba(244,63,94,0.35)]',
  },
  {
    id: 8,
    src: '/Selfie on a Lush Forest Road.png',
    alt: 'Dr. Aashutosh Mattikoppa - Lush Forest Road Trek',
    // 3-column card, clockwise slant
    colSpan: 'col-span-3 aspect-[4/3] rotate-1.5 translate-y-0.5 rounded-2xl',
    borderClass: 'border-[2.5px] border-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.35)]',
  },
  {
    id: 9,
    src: '/WhatsApp Image 2026-11-24 at 11.09.19 PM.jpeg',
    alt: 'Dr. Aashutosh Mattikoppa - Moody Overhead Mirror Selfie',
    // 3-column card, counter-tilt, slight upward shift
    colSpan: 'col-span-3 aspect-[4/3] -rotate-1 -translate-y-1 rounded-2xl rounded-bl-sm',
    borderClass: 'border-[3px] border-indigo-400 shadow-[0_0_18px_rgba(129,140,248,0.35)]',
  },
];

export default function PhotoGrid() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="w-full my-2 sm:my-3">
      {/* 
        Artistic Uneven Bento Collage Grid:
        - 6 columns with uneven spans (2-col, 3-col, 4-col)
        - Varied aspect ratios (panoramic, portrait, landscape)
        - Staggered vertical offsets (-translate-y, +translate-y)
        - Organic tilts (-rotate-1, +rotate-1.5)
        - Distinct glowing colored borders
        - ZERO names/text badges on photos for pure visual impact
      */}
      <div className="grid grid-cols-6 gap-2 sm:gap-3 items-center w-full">
        {photos.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActivePhoto(item)}
            className={`group relative overflow-hidden bg-zinc-950 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:rotate-0 hover:z-20 p-0 focus:outline-none min-w-0 ${item.colSpan} ${item.borderClass}`}
            title="Tap to view photo"
          >
            <img
              src={encodeURI(item.src)}
              alt={item.alt}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
            />

            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </button>
        ))}
      </div>

      {/* Lightbox Modal when tapped */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 animate-in fade-in duration-150"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-sm sm:max-w-md max-h-[88vh] flex flex-col items-center bg-zinc-950 border border-zinc-800 rounded-2xl p-2.5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs font-bold border border-zinc-600 shadow-xl cursor-pointer z-10"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={encodeURI(activePhoto.src)}
              alt={activePhoto.alt}
              className="max-h-[78vh] w-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
