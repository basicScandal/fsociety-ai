import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative inline-block text-green-400 before:content-[attr(data-text)] before:absolute before:left-[2px] before:text-green-400 before:top-0 before:animate-glitch-1 after:content-[attr(data-text)] after:absolute after:left-[-2px] after:text-green-400 after:top-0 after:animate-glitch-2" data-text={text}>
        {text}
      </span>
    </div>
  );
}