import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import { profileData } from './data/profile';

export default function App() {
  const [profile] = useState(profileData);
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`relative min-h-screen w-full transition-colors duration-300 ${darkMode ? 'dot-grid-dark bg-[#0b0c10] text-zinc-100' : 'dot-grid-light bg-white text-zinc-900'}`}>
      {/* Subtle radial vignette overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: darkMode
            ? 'radial-gradient(circle at 50% 45%, transparent 20%, #0b0c10 90%)'
            : 'radial-gradient(circle at 50% 45%, transparent 30%, #ffffff 95%)'
        }}
      />

      {/* Floating Theme Switcher Button at top-right corner */}
      <div className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="p-2.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800 shadow-md text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-zinc-700" />
          )}
        </button>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col justify-center min-h-screen">
        <Hero profile={profile} />
      </main>
    </div>
  );
}
