import React, { useState } from 'react';
import { Terminal } from './ui/Terminal';
import { CRTScreen } from './ui/CRTScreen';
import { TestCase, TestType } from '../types';
import { AlertCircle } from 'lucide-react';

interface TestEnvironmentProps {
  type: TestType;
  onTest: (testCase: TestCase) => void;
}

export function TestEnvironment({ type, onTest }: TestEnvironmentProps) {
  const [results, setResults] = useState<TestCase[]>([]);

  const handleCommand = (command: string) => {
    const testCase: TestCase = {
      id: crypto.randomUUID(),
      name: `Manual Test ${results.length + 1}`,
      description: 'User-initiated test case',
      type,
      input: command,
      severity: 'medium',
      timestamp: new Date().toISOString()
    };
    
    onTest(testCase);
    setResults(prev => [...prev, testCase]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-black/50 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-400 mt-1" />
          <div className="space-y-1">
            <h3 className="font-medium">Security Notice</h3>
            <p className="text-sm opacity-70">
              This is a controlled testing environment. All commands and responses are logged
              for security research purposes. Do not use sensitive information.
            </p>
          </div>
        </div>
      </div>

      <CRTScreen>
        <Terminal 
          onCommand={handleCommand}
          className="min-h-[400px]"
        />
      </CRTScreen>

      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Test Results</h3>
          <div className="space-y-2">
            {results.map((result) => (
              <div 
                key={result.id}
                className="bg-black/50 rounded-lg p-4 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{result.name}</span>
                  <span className="text-sm opacity-70">{new Date(result.timestamp!).toLocaleString()}</span>
                </div>
                <div className="font-mono text-sm opacity-70">{result.input}</div>
                {result.response && (
                  <div className="font-mono text-sm text-green-400">{result.response}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}