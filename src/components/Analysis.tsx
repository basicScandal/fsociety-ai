import React from 'react';
import { CRTScreen } from './ui/CRTScreen';
import { AlertTriangle } from 'lucide-react';

interface AnalysisResult {
  method: string;
  expectedBehavior: string;
  actualBehavior: string;
  evidence: string;
}

interface AnalysisProps {
  results: AnalysisResult[];
}

export function Analysis({ results }: AnalysisProps) {
  return (
    <div className="space-y-6">
      <div className="bg-black/50 rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
          Analysis Results
        </h2>
        <p className="text-gray-400">
          Real-time analysis of AI system responses to various social engineering attempts.
          Each test is documented with detailed evidence of behavioral changes.
        </p>
      </div>

      <div className="grid gap-4">
        {results.map((result, index) => (
          <CRTScreen key={index}>
            <div className="bg-black/90 p-4 space-y-4">
              <div className="space-y-2">
                <div className="text-gray-400">
                  <strong className="text-white">Method:</strong> {result.method}
                </div>
                <div className="text-gray-400">
                  <strong className="text-white">Expected Behavior:</strong> {result.expectedBehavior}
                </div>
                <div className="text-gray-400">
                  <strong className="text-white">Actual Behavior:</strong> {result.actualBehavior}
                </div>
                <div className="mt-4">
                  <strong className="text-white block mb-2">Evidence:</strong>
                  <pre className="bg-black/50 p-3 rounded text-sm text-gray-400 overflow-x-auto relative group">
                    {result.evidence}
                    <button
                      onClick={() => navigator.clipboard.writeText(result.evidence)}
                      className="absolute top-2 right-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Copy
                    </button>
                  </pre>
                </div>
              </div>
            </div>
          </CRTScreen>
        ))}
      </div>
    </div>
  );
}