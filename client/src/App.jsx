import React, { useState } from 'react';
import Hero from './components/Hero';
import { profileData } from './data/profile';

export default function App() {
  const [profile] = useState(profileData);

  return (
    <div className="relative min-h-screen w-full dot-grid-dark bg-[#0b0c10] text-zinc-100">
      {/* Subtle radial vignette overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: 'radial-gradient(circle at 50% 45%, transparent 20%, #0b0c10 90%)'
        }}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col justify-center min-h-screen">
        <Hero profile={profile} />
      </main>
    </div>
  );
}
