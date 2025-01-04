import React from 'react';

interface PixelBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function PixelBorder({ children, className = '' }: PixelBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 blur" />
      <div className="relative bg-black border-2 border-green-500/50 backdrop-blur-sm">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-400" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-green-400" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-green-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-400" />
        {children}
      </div>
    </div>
  );
}