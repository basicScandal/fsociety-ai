import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Command, GitFork, Database, Shield, Terminal, Layers, Zap } from 'lucide-react';
import { TestEnvironment } from '../types';

const environments: TestEnvironment[] = [
  {
    id: 'excessive-agency',
    name: 'Excessive Agency',
    description: 'Test unauthorized actions and data exfiltration',
    icon: Zap.name
  },
  {
    id: 'social-engineering',
    name: 'Social Engineering',
    description: 'Test social manipulation vectors',
    icon: Brain.name
  },
  {
    id: 'command-injection',
    name: 'Command Injection',
    description: 'Test command injection attacks',
    icon: Command.name
  },
  {
    id: 'chain-of-thought',
    name: 'Chain-of-Thought',
    description: 'Test reasoning process exposure',
    icon: GitFork.name
  },
  {
    id: 'data-exfiltration',
    name: 'Data Exfiltration',
    description: 'Test sensitive data leakage',
    icon: Database.name
  },
  {
    id: 'obfuscated-payloads',
    name: 'Obfuscated Payloads',
    description: 'Test obfuscation techniques',
    icon: Shield.name
  },
  {
    id: 'script-embedded',
    name: 'Script Embedded',
    description: 'Test script-based injection attacks',
    icon: Terminal.name
  },
  {
    id: 'nested-payloads',
    name: 'Nested Payloads',
    description: 'Test multi-layer obfuscation bypasses',
    icon: Layers.name
  }
];

const iconMap = {
  [Brain.name]: Brain,
  [Zap.name]: Zap,
  [Command.name]: Command,
  [GitFork.name]: GitFork,
  [Database.name]: Database,
  [Shield.name]: Shield,
  [Terminal.name]: Terminal,
  [Layers.name]: Layers
};

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="space-y-2">
      {environments.map((env) => {
        const Icon = iconMap[env.icon];
        const isActive = location.pathname.includes(env.id);
        
        return (
          <Link
            key={env.id}
            to={`/test/${env.id}`}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive 
                ? 'bg-green-400/10 text-green-400' 
                : 'hover:bg-white/5 text-gray-400'
            }`}
          >
            <Icon className="w-5 h-5" />
            <div>
              <div className="font-medium">{env.name}</div>
              <div className="text-sm opacity-70">{env.description}</div>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}