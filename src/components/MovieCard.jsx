import { motion } from 'framer-motion';
import { FaCheck, FaPlus, FaTrash } from 'react-icons/fa';

export const MovieCard = ({ movie, onToggleWatched, onDeleteClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group rounded-2xl overflow-hidden bg-card border border-white/5 shadow-lg hover:shadow-2xl hover:shadow-accent/15 transition-all duration-300"
    >
      {/* Poster Image Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-black/40">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40 opacity-100" />

        {/* Watched Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border shadow-sm transition-all duration-300 ${
              movie.watched
                ? 'bg-accent/90 border-accent/20 text-white'
                : 'bg-black/60 border-white/10 text-muted'
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${movie.watched ? 'bg-white' : 'bg-muted'}`} />
            {movie.watched ? 'Watched' : 'Watchlist'}
          </span>
        </div>

        {/* Hover Quick Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <button
            onClick={() => onToggleWatched(movie.id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white backdrop-blur-md shadow-lg transition-all duration-200 border ${
              movie.watched
                ? 'bg-accent border-accent/25 hover:bg-accent/80'
                : 'bg-black/60 border-white/10 hover:bg-accent hover:border-accent'
            }`}
            title={movie.watched ? 'Mark as unwatched' : 'Mark as watched'}
          >
            {movie.watched ? <FaCheck className="text-sm" /> : <FaPlus className="text-sm" />}
          </button>
          <button
            onClick={() => onDeleteClick(movie)}
            className="w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 border border-white/10 hover:border-red-600 text-white backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-200"
            title="Delete movie"
          >
            <FaTrash className="text-xs" />
          </button>
        </div>

        {/* Text Details overlaying the poster bottom */}
        <div className="absolute bottom-0 inset-x-0 p-5 space-y-2">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded border border-accent/15">
            {movie.genre}
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight leading-tight line-clamp-2">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between text-xs text-muted pt-1">
            <span>{movie.releaseYear}</span>
            <button
              onClick={() => onToggleWatched(movie.id)}
              className="text-white hover:text-accent font-semibold transition-colors duration-200 text-left xs:text-right"
            >
              {movie.watched ? 'Mark Unwatched' : 'Mark Watched'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
