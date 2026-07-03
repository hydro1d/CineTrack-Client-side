import React from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

export const Navbar = ({ search, setSearch, onOpenAddModal }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
        {/* Logo and App Name */}
        <div className="flex items-center gap-2.5 cursor-pointer">
         
          <span className="font-extrabold text-xl tracking-tight text-white sm:block">
            Cine<span className="text-accent">Track</span>
          </span>
        </div>

        {/* Search Bar - Center/Right */}
        <div className="relative flex-1 max-w-md mx-4 hidden sm:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FiSearch className="h-5 w-5 text-muted" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full rounded-full border border-white/10 bg-card py-2 pl-10 pr-4 text-sm text-white placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200"
            placeholder="Search movies by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Add Movie Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-1.5 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <IoMdAdd className="text-lg" />
            <span className="hidden xs:inline">Add Movie</span>
          </button>
        </div>
      </div>

      {/* Mobile Search - Visible only on mobile below header */}
      <div className="border-t border-white/5 px-4 py-3 sm:hidden">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FiSearch className="h-5 w-5 text-muted" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full rounded-full border border-white/10 bg-card py-2 pl-10 pr-4 text-sm text-white placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200"
            placeholder="Search movies by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};
