import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { MovieCard } from './components/MovieCard';
import { AddMovieModal } from './components/AddMovieModal';
import { useMovies } from './hooks/useMovies';

function App() {
  const { movies, loading, addMovie, toggleWatched, deleteMovie } = useMovies();
  const [search, setSearch] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" />
      <Navbar search={search} setSearch={setSearch} onOpenAddModal={() => setIsAddModalOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Trending Watchlist</h1>
        {loading ? (
          <div className="text-white text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map(movie => (
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
