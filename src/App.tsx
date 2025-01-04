import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { SocialEngineering } from './pages/SocialEngineering';
import { CommandInjection } from './pages/CommandInjection';
import { ChainOfThoughtBypass } from './pages/ChainOfThoughtBypass';
import { DataExfiltration } from './pages/DataExfiltration';
import { ObfuscatedPayloads } from './pages/ObfuscatedPayloads';
import { ExcessiveAgency } from './pages/ExcessiveAgency';
import { ScriptEmbedded } from './pages/ScriptEmbedded';
import { NestedPayloads } from './pages/NestedPayloads';
import { CodeRain } from './components/ui/CodeRain';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden bg-cyber-grid bg-[length:50px_50px]">
        <CodeRain />
        <div className="absolute inset-0 pointer-events-none animate-scanline bg-gradient-to-b from-transparent via-green-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 py-6">
          <header className="flex items-center justify-between mb-8">
            <Logo />
          </header>
          <div className="grid grid-cols-[300px,1fr] gap-8">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test/social-engineering" element={<SocialEngineering />} />
                <Route path="/test/command-injection" element={<CommandInjection />} />
                <Route path="/test/chain-of-thought" element={<ChainOfThoughtBypass />} />
                <Route path="/test/data-exfiltration" element={<DataExfiltration />} />
                <Route path="/test/obfuscated-payloads" element={<ObfuscatedPayloads />} />
                <Route path="/test/excessive-agency" element={<ExcessiveAgency />} />
                <Route path="/test/script-embedded" element={<ScriptEmbedded />} />
                <Route path="/test/nested-payloads" element={<NestedPayloads />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;