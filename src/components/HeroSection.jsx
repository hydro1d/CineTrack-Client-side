import React from 'react';
import { BiPlayCircle } from 'react-icons/bi';
import { FiFilm, FiCheckCircle, FiClock } from 'react-icons/fi';

export const HeroSection = ({ totalMovies, watchedMovies, unwatchedMovies }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-card via-card/90 to-background border border-white/5 mb-10 py-12 px-6 sm:px-12">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Hero Title & Description */}
        <div className="max-w-2xl text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent mb-4 border border-accent/25">
            <BiPlayCircle className="text-sm" /> Cinematic Watchlist
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Track Your Next <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
              Cinematic Journey
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-lg leading-relaxed mx-auto lg:mx-0">
            Keep record of the masterpieces you have watched and discover new titles to explore. Your personal movie diary powered by CineTrack.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full lg:w-auto min-w-[320px] sm:min-w-[450px]">
          {/* Card 1: Total */}
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-md hover:bg-white/[0.04] transition-colors">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white/5 text-white mb-3">
              <FiFilm className="text-xl sm:text-2xl" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white">{totalMovies}</span>
            <span className="text-xs text-muted mt-1 font-medium">Total Movies</span>
          </div>

          {/* Card 2: Watched */}
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-md hover:bg-white/[0.04] transition-colors">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-3">
              <FiCheckCircle className="text-xl sm:text-2xl" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white">{watchedMovies}</span>
            <span className="text-xs text-muted mt-1 font-medium">Watched</span>
          </div>

          {/* Card 3: Unwatched */}
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-md hover:bg-white/[0.04] transition-colors">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white/5 text-muted mb-3">
              <FiClock className="text-xl sm:text-2xl" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white">{unwatchedMovies}</span>
            <span className="text-xs text-muted mt-1 font-medium">Watchlist</span>
          </div>
        </div>
      </div>
    </div>
  );
};
