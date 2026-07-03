import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MovieCard } from './components/MovieCard';
import { AddMovieModal } from './components/AddMovieModal';
import { ConfirmDeleteModal } from './components/ConfirmDeleteModal';
import { EmptyState } from './components/EmptyState';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { Footer } from './components/Footer';
import { useMovies } from './hooks/useMovies';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const { movies, loading, addMovie, toggleWatched, deleteMovie } = useMovies();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState(null);

  // Statistics calculation
  const totalMovies = movies.length;
  const watchedMovies = movies.filter(m => m.watched).length;
  const unwatchedMovies = totalMovies - watchedMovies;

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    if (filter === 'watched') return matchesSearch && movie.watched;
    if (filter === 'unwatched') return matchesSearch && !movie.watched;
    return matchesSearch;
  });

  const handleDeleteClick = (movie) => {
    setMovieToDelete(movie);
  };

  const handleConfirmDelete = () => {
    if (movieToDelete) {
      deleteMovie(movieToDelete.id);
      setMovieToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1A1A24',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '16px',
            fontSize: '14px',
            padding: '12px 18px',
          },
          success: {
            iconTheme: {
              primary: '#E50914',
              secondary: '#FFFFFF',
            },
          },
        }}
      />
      
      <div>
        <Navbar
          search={search}
          setSearch={setSearch}
          onOpenAddModal={() => setIsAddModalOpen(true)}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <HeroSection
            totalMovies={totalMovies}
            watchedMovies={watchedMovies}
            unwatchedMovies={unwatchedMovies}
          />

          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
            <div className="flex gap-2">
              {['all', 'watched', 'unwatched'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                    filter === f
                      ? 'bg-white text-background'
                      : 'bg-card text-muted hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            
            <div className="text-xs text-muted font-medium hidden sm:block">
              Showing {filteredMovies.length} of {totalMovies} movies
            </div>
          </div>

          {loading ? (
            <LoadingSkeleton />
          ) : filteredMovies.length === 0 ? (
            <EmptyState
              onOpenAddModal={() => setIsAddModalOpen(true)}
              hasMovies={totalMovies > 0}
            />
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredMovies.map(movie => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onToggleWatched={toggleWatched}
                    onDeleteClick={handleDeleteClick}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </main>
      </div>

      <Footer />

      <AddMovieModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddMovie={addMovie}
      />

      <ConfirmDeleteModal
        isOpen={!!movieToDelete}
        onClose={() => setMovieToDelete(null)}
        onConfirm={handleConfirmDelete}
        movieTitle={movieToDelete?.title || ''}
      />
    </div>
  );
}

export default App;
