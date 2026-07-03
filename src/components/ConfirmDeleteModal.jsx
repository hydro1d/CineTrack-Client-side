import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAlertTriangle } from 'react-icons/fi';

export const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, movieTitle }) => {
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
            transition={{ type: 'spring', duration: 0.3 }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-card p-6 shadow-2xl z-10 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent mx-auto mb-4">
              <FiAlertTriangle className="text-xl" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">Delete Movie</h3>
            <p className="text-sm text-muted mb-6">
              Are you sure you want to delete <span className="text-white font-semibold">"{movieTitle}"</span>? This action cannot be undone.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onConfirm}
                className="rounded-full px-6 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent/90 transition-colors"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
