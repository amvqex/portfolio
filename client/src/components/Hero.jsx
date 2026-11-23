import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, Copy, Check } from 'lucide-react';
import { getSocialIcon } from './SocialIcons';

export default function Hero({ profile }) {
  const [copiedId, setCopiedId] = useState(null);
  const socials = profile?.socials || [];

  const handleCopy = (e, id, text) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[92vh] px-4 text-center select-none py-16">
      {/* Central Identity Header */}
      <div className="flex flex-col items-center space-y-3 mb-8 sm:mb-10 max-w-4xl mx-auto">
        {/* Registration Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{profile?.regNo || 'Reg. No. 52525'}</span>
        </div>

        {/* Full Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight">
          {profile?.name || 'Dr. Aashutosh Mattikoppa'}
        </h1>
      </div>

      {/* Direct Social Media Links Hub */}
      <div className="w-full max-w-2xl mx-auto px-4">
        {/* Subtle Section Divider */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="h-[1px] w-8 bg-zinc-200 dark:bg-zinc-800" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold">
            Social Profiles & Direct Links
          </span>
          <span className="h-[1px] w-8 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        {/* Direct Clickable Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-3.5 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md hover:bg-white dark:hover:bg-zinc-900 transition-all hover:scale-[1.02] hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 select-auto"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 flex items-center justify-center text-zinc-900 dark:text-zinc-100 group-hover:scale-110 transition-transform">
                  {getSocialIcon(social.id, 'w-5 h-5')}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white truncate">
                      {social.platform}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate font-mono">
                    {social.handle || 'Visit profile'}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-1 pl-2">
                {social.handle && (
                  <button
                    onClick={(e) => handleCopy(e, social.id, social.handle)}
                    title={`Copy handle ${social.handle}`}
                    className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    {copiedId === social.id ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
                <div className="p-1.5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
