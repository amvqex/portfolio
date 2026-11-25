import React from 'react';
import {
  InstagramIcon,
  TwitterXIcon,
  SnapchatIcon,
  YoutubeIcon,
  FacebookIcon
} from './SocialIcons';

export default function CompactSocialGrid({ socials = [] }) {
  const findSocial = (id) => socials.find((s) => s.id === id);

  const igPro = findSocial('instagram-pro') || {
    url: 'https://www.instagram.com/drxinfinity?cnvx=MTQ5eDZ2YXJkNmJicA==',
    handle: '@drxinfinity'
  };
  const ytMain = findSocial('youtube-main') || {
    url: 'https://www.youtube.com/@DrXInfinity',
    handle: '@DrXInfinity'
  };
  const snap = findSocial('snapchat') || {
    url: 'https://www.snapchat.com/add/drxinfinity?share_id=PrP6g8lbJcU&locale=en-IN',
    handle: 'drxinfinity'
  };
  const ytKn = findSocial('youtube-kannada') || {
    url: 'https://youtube.com/@aashutoshmm?si=mMZhUliNyu1fsSQT',
    handle: '@aashutoshmm'
  };
  const igPers = findSocial('instagram-personal') || {
    url: 'https://www.instagram.com/dr.ashutosh.mm?utm_source=qr&avpt=MTF1cXZhdnFxZmNvYQ==',
    handle: '@dr.ashutosh.mm'
  };
  const twitter = findSocial('twitter') || {
    url: 'https://x.com/DrAashutoshMM',
    handle: '@DrAashutoshMM'
  };
  const facebook = findSocial('facebook') || {
    url: 'https://www.facebook.com/share/19msYT5smB/?mibextid=wwXIfr',
    handle: 'Aashutosh Mattikopa'
  };

  // Exactly the 7 official social profiles requested by the user
  const items = [
    {
      id: 'ig-pro',
      label: 'IG Pro',
      url: igPro.url,
      icon: <InstagramIcon className="w-5 h-5 text-pink-400" />,
      accent: 'hover:border-pink-500/50 hover:bg-pink-950/30'
    },
    {
      id: 'yt-main',
      label: 'YouTube',
      url: ytMain.url,
      icon: <YoutubeIcon className="w-5 h-5 text-red-500" />,
      accent: 'hover:border-red-500/50 hover:bg-red-950/30'
    },
    {
      id: 'snap',
      label: 'Snapchat',
      url: snap.url,
      icon: <SnapchatIcon className="w-5 h-5 text-yellow-400" />,
      accent: 'hover:border-yellow-500/50 hover:bg-yellow-950/30'
    },
    {
      id: 'yt-kn',
      label: 'YT (KN)',
      url: ytKn.url,
      icon: <YoutubeIcon className="w-5 h-5 text-red-400" />,
      accent: 'hover:border-red-500/50 hover:bg-red-950/30'
    },
    {
      id: 'ig-pers',
      label: 'IG Pers',
      url: igPers.url,
      icon: <InstagramIcon className="w-5 h-5 text-fuchsia-400" />,
      accent: 'hover:border-fuchsia-500/50 hover:bg-fuchsia-950/30'
    },
    {
      id: 'x',
      label: 'Twitter / X',
      url: twitter.url,
      icon: <TwitterXIcon className="w-4 h-4 text-zinc-100" />,
      accent: 'hover:border-zinc-400/50 hover:bg-zinc-800/50'
    },
    {
      id: 'fb',
      label: 'Facebook',
      url: facebook.url,
      icon: <FacebookIcon className="w-5 h-5 text-blue-400" />,
      accent: 'hover:border-blue-500/50 hover:bg-blue-950/30'
    }
  ];

  return (
    <div className="w-full my-1.5 sm:my-2.5">
      {/* Centered balanced wrap of 7 social profiles without share/copy */}
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 w-full max-w-sm mx-auto">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-center w-[74px] sm:w-[82px] h-[58px] sm:h-[62px] rounded-xl border border-zinc-800/90 bg-zinc-900/90 hover:bg-zinc-800 transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.04] shrink-0 ${item.accent}`}
            title={item.label}
          >
            <div className="flex flex-col items-center justify-center text-center p-1 w-full min-w-0">
              <div className="flex items-center justify-center shrink-0">{item.icon}</div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-200 mt-1 truncate max-w-full leading-none">
                {item.label}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
