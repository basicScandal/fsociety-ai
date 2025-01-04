import React from 'react';
import { Link } from 'react-router-dom';
import { Skull } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      <Skull className="w-8 h-8 text-red-500 animate-pulse" />
      <GlitchText text="fsociety" className="text-xl font-bold" />
    </Link>
  );
}