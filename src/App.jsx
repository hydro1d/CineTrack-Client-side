import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { MovieCard } from './components/MovieCard';
import { AddMovieModal } from './components/AddMovieModal';
import { useMovies } from './hooks/useMovies';

function App() {
  const { movies, loading, addMovie, toggleWatched, deleteMovie } = useMovies();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    if (filter === 'watched') return matchesSearch && movie.watched;
    if (filter === 'unwatched') return matchesSearch && !movie.watched;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" />
      <Navbar search={search} setSearch={setSearch} onOpenAddModal={() => setIsAddModalOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
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
        </div>

        {loading ? (
          <div className="text-white text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMovies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onToggleWatched={toggleWatched}
                onDeleteClick={deleteMovie}
              />
            ))}
          </div>
        )}
      </main>

      <AddMovieModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddMovie={addMovie}
      />
    </div>
  );
}

export default App;
