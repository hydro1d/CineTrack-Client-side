import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { toast } from 'react-hot-toast';

export const AddMovieModal = ({ isOpen, onClose, onAddMovie }) => {
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    releaseYear: '',
    posterURL: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.genre.trim()) newErrors.genre = 'Genre is required';
    
    // Year validation: 
    const currentYear = new Date().getFullYear();
    const year = parseInt(formData.releaseYear, 10);
    if (!formData.releaseYear) {
      newErrors.releaseYear = 'Release year is required';
    } else if (isNaN(year) || year < 1888 || year > currentYear + 10) {
      newErrors.releaseYear = `Year must be between 1888 and ${currentYear + 10}`;
    }

    // URL validation
    if (!formData.posterURL.trim()) {
      newErrors.posterURL = 'Poster URL is required';
    } else {
      try {
        new URL(formData.posterURL);
      } catch (_) {
        newErrors.posterURL = 'Must be a valid URL (e.g. http://...)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddMovie(formData);
      toast.success(`"${formData.title}" added to watchlist!`);
      setFormData({ title: '', genre: '', releaseYear: '', posterURL: '' });
      setErrors({});
      onClose();
    } else {
      toast.error('Please correct the errors in the form.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for field when editing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-card p-6 shadow-2xl z-10"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <h3 className="text-xl font-bold text-white">Add New Movie</h3>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-muted hover:bg-white/5 hover:text-white transition-colors"
              >
                <IoMdClose className="text-xl" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title Field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                  Movie Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Inception"
                  className={`w-full rounded-xl border ${
                    errors.title ? 'border-accent' : 'border-white/10'
                  } bg-black/30 px-4 py-2.5 text-sm text-white placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all`}
                />
                {errors.title && <p className="text-xs text-accent mt-1">{errors.title}</p>}
              </div>

              {/* Genre & Year Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                    Genre
                  </label>
                  <input
                    type="text"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    placeholder="e.g. Sci-Fi, Drama"
                    className={`w-full rounded-xl border ${
                      errors.genre ? 'border-accent' : 'border-white/10'
                    } bg-black/30 px-4 py-2.5 text-sm text-white placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all`}
                  />
                  {errors.genre && <p className="text-xs text-accent mt-1">{errors.genre}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                    Release Year
                  </label>
                  <input
                    type="text"
                    name="releaseYear"
                    value={formData.releaseYear}
                    onChange={handleChange}
                    placeholder="e.g. 2010"
                    maxLength={4}
                    className={`w-full rounded-xl border ${
                      errors.releaseYear ? 'border-accent' : 'border-white/10'
                    } bg-black/30 px-4 py-2.5 text-sm text-white placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all`}
                  />
                  {errors.releaseYear && <p className="text-xs text-accent mt-1">{errors.releaseYear}</p>}
                </div>
              </div>

              {/* Poster URL */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                  Poster Image URL
                </label>
                <input
                  type="text"
                  name="posterURL"
                  value={formData.posterURL}
                  onChange={handleChange}
                  placeholder="e.g. https://image.tmdb.org/..."
                  className={`w-full rounded-xl border ${
                    errors.posterURL ? 'border-accent' : 'border-white/10'
                  } bg-black/30 px-4 py-2.5 text-sm text-white placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all`}
                />
                {errors.posterURL && <p className="text-xs text-accent mt-1">{errors.posterURL}</p>}
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/5 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full px-6 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent/90 hover:scale-[1.02] transition-all"
                >
                  Add Movie
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
