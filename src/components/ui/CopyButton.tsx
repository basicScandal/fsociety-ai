import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 bg-green-500/20 hover:bg-green-500/30 text-green-400
        rounded text-sm transition-all focus:outline-none focus:ring-1 
        focus:ring-green-500/50 relative z-50 ${className}`}
      aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          {className.includes('!p-1.5') ? null : <span>Copied!</span>}
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          {className.includes('!p-1.5') ? null : <span>Copy</span>}
        </>
      )}
    </button>
  );
}