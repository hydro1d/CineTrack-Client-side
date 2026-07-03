import React from 'react';
import { BiCameraMovie } from 'react-icons/bi';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-background py-8 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2 cursor-pointer opacity-85 hover:opacity-100 transition-opacity">
          
          <span className="font-bold text-sm tracking-tight text-white">
            Cine<span className="text-accent">Track</span>
          </span>
        </div>

        {/* Muted Copy */}
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} CineTrack. All rights reserved. Made for assessment.
        </p>
      </div>
    </footer>
  );
};
