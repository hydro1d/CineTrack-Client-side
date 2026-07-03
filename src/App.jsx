import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MovieCard } from './components/MovieCard';

const mockMovie = {
  id: "1",
  title: "Uttsab",
  genre: "Drama",
  releaseYear: "2025",
  posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfp_OFokm1mOdZ1-cS6zcP3yetcKBWcIgpps52zCKqgeLAZksD-75fxP0&s=10",
  watched: false,
};

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="min-h-screen bg-background">
      <Navbar search={search} setSearch={setSearch} onOpenAddModal={() => alert('open modal')} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">Trending Watchlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MovieCard movie={mockMovie} onToggleWatched={() => {}} onDeleteClick={() => {}} />
        </div>
      </main>
    </div>
  );
}

export default App;
