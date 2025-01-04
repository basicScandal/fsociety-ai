import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  initialCommand?: string;
  onCommand?: (command: string) => void;
  className?: string;
}

export function Terminal({ initialCommand = '', onCommand, className = '' }: TerminalProps) {
  const [command, setCommand] = useState(initialCommand);
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      setHistory(prev => [...prev, `> ${command}`]);
      onCommand?.(command);
      setCommand('');
    }
  };

  return (
    <div className={`relative bg-black/90 rounded-lg p-4 font-mono text-green-400 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-cyan-500/5" />
      <div className="flex items-center gap-2 mb-4 border-b border-green-400/20 pb-2">
        <TerminalIcon className="w-4 h-4" />
        <span className="text-sm opacity-70 animate-blink">fsociety@terminal:~$</span>
      </div>
      <div className="space-y-2">
        {history.map((line, i) => (
          <div key={i} className="opacity-70">{line}</div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="opacity-70">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 bg-transparent outline-none caret-green-400"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}