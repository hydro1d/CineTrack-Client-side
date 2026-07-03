import React from 'react';

export const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="relative rounded-xl overflow-hidden bg-card border border-white/5 shadow-lg aspect-[2/3] p-4 flex flex-col justify-end"
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite] pointer-events-none" />
          
          {/* Skeleton elements */}
          <div className="space-y-3 relative z-10 w-full">
            <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
            <div className="flex justify-between w-full">
              <div className="h-3 bg-white/5 rounded w-1/3 animate-pulse" />
              <div className="h-3 bg-white/5 rounded w-1/4 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
