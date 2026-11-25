import React from 'react';
import { ShieldCheck } from 'lucide-react';
import PhotoGrid from './PhotoGrid';
import CompactSocialGrid from './CompactSocialGrid';

export default function Hero({ profile }) {
  const socials = profile?.socials || [];

  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-3 py-3 text-center select-none max-w-sm sm:max-w-md mx-auto w-full">
      {/* 1. Header: Reg No Badge & Name */}
      <div className="flex flex-col items-center space-y-1 mb-2">
        {/* Registration Badge */}
        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-800/80 shadow-xs">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>{profile?.regNo || 'Reg. No. 52525'}</span>
        </div>

        {/* Full Name */}
        <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
          {profile?.name || 'Dr. Aashutosh Mattikoppa'}
        </h1>
      </div>

      {/* 2. Photo Gallery: 5 cols × 2 rows static grid (All photos visible directly) */}
      <div className="w-full my-1">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="h-[1px] w-5 bg-zinc-800" />
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
            Photo Highlights
          </span>
          <span className="h-[1px] w-5 bg-zinc-800" />
        </div>
        <PhotoGrid />
      </div>

      {/* 3. Social & Quick Links: 5 cols × 2 rows compact icon grid */}
      <div className="w-full my-1">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="h-[1px] w-5 bg-zinc-800" />
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
            Social Profiles & Direct Links
          </span>
          <span className="h-[1px] w-5 bg-zinc-800" />
        </div>
        <CompactSocialGrid socials={socials} />
      </div>

      {/* 4. Minimal Footer */}
      <div className="mt-2 text-[9px] font-mono text-zinc-400">
        <span>© {new Date().getFullYear()} Dr. Aashutosh Mattikoppa</span>
      </div>
    </section>
  );
}
