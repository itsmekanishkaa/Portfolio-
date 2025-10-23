'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1200);

    // Remove loader completely
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 transition-all duration-700 ${
      isFadingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      <div className="relative">
        {/* Animated Circle with Leaf Pattern */}
        <div className="relative w-32 h-32">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>

          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="60"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-primary"
              strokeDasharray={`${2 * Math.PI * 60}`}
              strokeDashoffset={`${2 * Math.PI * 60 * (1 - progress / 100)}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.3s ease' }}
            />
          </svg>

          {/* Center animated element - Nutrition Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Leaf icon with pulse animation */}
              <svg
                className="w-16 h-16 text-primary animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.5 3C14.5 3 12 5.5 12 8.5c0 1.9.9 3.6 2.4 4.6-.3.6-.6 1.3-1 2-.7 1.3-1.4 2.6-2.4 3.6-1.3 1.3-2.8 2.1-4.5 2.3-.3 0-.5.3-.5.6 0 .3.2.6.5.6h.2c2 0 3.8-.9 5.3-2.4 1.1-1.1 1.9-2.5 2.6-3.9.4-.8.8-1.5 1.1-2.2 1.5-.9 2.5-2.6 2.5-4.5C20.5 5.5 18 3 15 3h2.5zm-5 8.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5z"/>
              </svg>

              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress percentage */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-primary">
          {Math.round(progress)}%
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent"></div>
    </div>
  );
}
