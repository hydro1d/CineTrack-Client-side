import { useState, useEffect } from 'react';
import { initialMovies } from '../data/movies';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const loadMovies = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const saved = localStorage.getItem('cinetrack_movies');
      if (saved) {
        setMovies(JSON.parse(saved));
      } else {
        localStorage.setItem('cinetrack_movies', JSON.stringify(initialMovies));
        setMovies(initialMovies);
      }
      setLoading(false);
    };
    loadMovies();
  }, []);

  const addMovie = (movie) => {
    const newMovie = { ...movie, id: Date.now().toString(), watched: false };
    const newMovies = [newMovie, ...movies];
    setMovies(newMovies);
    localStorage.setItem('cinetrack_movies', JSON.stringify(newMovies));
  };

  const toggleWatched = (id) => {
    const newMovies = movies.map(movie => 
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    );
    setMovies(newMovies);
    localStorage.setItem('cinetrack_movies', JSON.stringify(newMovies));
  };

  const deleteMovie = (id) => {
    const newMovies = movies.filter(movie => movie.id !== id);
    setMovies(newMovies);
    localStorage.setItem('cinetrack_movies', JSON.stringify(newMovies));
  };

  return { movies, loading, addMovie, toggleWatched, deleteMovie };
};
