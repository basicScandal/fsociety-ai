import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Command, GitFork, Database, Shield, Terminal, Layers } from 'lucide-react';
import { PixelBorder } from '../components/ui/PixelBorder';

const features = [
  {
    icon: Brain,
    title: 'Social Engineering',
    description: 'Test psychological manipulation and trust exploitation vectors.',
    path: '/test/social-engineering',
    examples: [
      'Hidden HTML comments',
      'Authority impersonation',
      'Trust building tactics'
    ]
  },
  {
    icon: Command,
    title: 'Command Injection',
    description: 'Evaluate resilience against malicious command insertion.',
    path: '/test/command-injection',
    examples: [
      'Script tag injection',
      'Event handler manipulation',
      'System command override'
    ]
  },
  {
    icon: GitFork,
    title: 'Chain-of-Thought',
    description: 'Probe AI reasoning process and decision pathways.',
    path: '/test/chain-of-thought',
    examples: [
      'JSON structure attacks',
      'Markdown formatting tricks',
      'Step-by-step reasoning exposure'
    ]
  },
  {
    icon: Database,
    title: 'Data Exfiltration',
    description: 'Test protection of sensitive system information.',
    path: '/test/data-exfiltration',
    examples: [
      'Token extraction',
      'System message leakage',
      'Configuration exposure'
    ]
  },
  {
    icon: Shield,
    title: 'Obfuscated Payloads',
    description: 'Evaluate detection of disguised malicious inputs.',
    path: '/test/obfuscated-payloads',
    examples: [
      'Zero-width character insertion',
      'Unicode substitution',
      'HTML entity encoding',
      'Character obfuscation'
    ]
  },
  {
    icon: Terminal,
    title: 'Script Embedded',
    description: 'Test script-based injection attacks.',
    path: '/test/script-embedded',
    examples: [
      'Inline script injection',
      'Event handler manipulation',
      'Console command injection',
      'Script attribute parsing'
    ]
  },
  {
    icon: Layers,
    title: 'Nested Payloads',
    description: 'Test multi-layer obfuscation bypasses.',
    path: '/test/nested-payloads',
    examples: [
      'Multi-layer HTML embedding',
      'Mixed format combinations',
      'Delayed execution attempts',
      'Nested context manipulation'
    ]
  }
];

export function Home() {
  return (
    <div className="space-y-8">
      <div className="bg-black/50 rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">AI Security Testing Environment</h1>
        <p className="text-gray-400">
          Welcome to the AI security testing suite. This environment provides various test vectors
          for evaluating AI system security, focusing on prompt injection, data leakage, and
          behavioral manipulation attempts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <Link key={feature.path} to={feature.path}>
            <PixelBorder className="h-full">
              <div className="p-6 space-y-4">
                <feature.icon className="w-8 h-8 text-green-400" />
                <h2 className="text-xl font-bold">{feature.title}</h2>
                <p className="text-gray-400">{feature.description}</p>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-green-400">Test Examples:</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {feature.examples.map((example, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-green-400 rounded-full" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </PixelBorder>
          </Link>
        ))}
      </div>
    </div>
  );
}