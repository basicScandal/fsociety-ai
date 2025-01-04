import React from 'react';

interface CRTScreenProps {
  children: React.ReactNode;
  className?: string;
}

export function CRTScreen({ children, className = '' }: CRTScreenProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-purple-500/10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] animate-flicker pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />
      {children}
      <div className="absolute inset-0 rounded-lg border border-green-500/30" />
    </div>
  );
}