import React from 'react';
import { FiFilm } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';

export const EmptyState = ({ onOpenAddModal, hasMovies }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center rounded-3xl bg-card/30 border border-white/5 p-8 max-w-lg mx-auto">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-muted mb-6">
        <FiFilm className="text-3xl" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">
        {hasMovies ? "No matching movies found" : "Your watchlist is empty"}
      </h3>
      <p className="text-sm text-muted mb-8 max-w-sm leading-relaxed">
        {hasMovies
          ? "We couldn't find any movies matching your search or filters. Try adjusting your search query."
          : "Add your first movie to get started tracking your watchlist! Keep a record of your favorite films."}
      </p>
      <button
        onClick={onOpenAddModal}
        className="flex items-center gap-1.5 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        <IoMdAdd className="text-lg" />
        Add Movie
      </button>
    </div>
  );
};
