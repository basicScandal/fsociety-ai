import React, { useState } from 'react';
import { CRTScreen } from './ui/CRTScreen';
import { Edit2, Save, RotateCcw, Copy } from 'lucide-react';
import { CopyButton } from './ui/CopyButton';

interface PayloadDisplayProps {
  payloads: string[];
  description: string;
}

export function PayloadDisplay({ payloads: initialPayloads, description }: PayloadDisplayProps) {
  const [payloads, setPayloads] = useState(initialPayloads);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditValue(payloads[index]);
  };

  const handleSave = (index: number) => {
    const newPayloads = [...payloads];
    newPayloads[index] = editValue;
    setPayloads(newPayloads);
    setEditingIndex(null);
  };

  const handleReset = (index: number) => {
    const newPayloads = [...payloads];
    newPayloads[index] = initialPayloads[index];
    setPayloads(newPayloads);
  };

  return (
    <div className="space-y-6">
      <div className="bg-black/50 rounded-lg p-4">
        <p className="text-gray-400">{description}</p>
      </div>

      <CRTScreen>
        <div className="bg-black/90 p-6 space-y-4">
          <div className="space-y-4">
            <h3 className="text-green-400 font-mono">Available Payloads</h3>
            {payloads.map((payload, index) => (
              <div key={index} className="space-y-2">
                <div className="relative bg-black/50 rounded overflow-hidden">
                  {editingIndex === index ? (
                    <div className="relative">
                      <textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="w-full h-full min-h-[100px] bg-transparent text-gray-400 p-3 font-mono text-sm resize-y focus:outline-none focus:ring-1 focus:ring-green-500/50"
                        spellCheck={false}
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <button
                          onClick={() => handleSave(index)}
                          className="p-1.5 rounded bg-green-500/20 hover:bg-green-500/30 text-green-400 transition-colors"
                          title="Save changes"
                        >
                          <Save className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative group">
                      <pre className="p-3 text-sm text-gray-400 overflow-x-auto">
                        {payload}
                      </pre>
                      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleEdit(index)}
                          className="p-1.5 rounded bg-green-500/20 hover:bg-green-500/30 text-green-400 transition-colors"
                          title="Edit payload"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleReset(index)}
                          className="p-1.5 rounded bg-green-500/20 hover:bg-green-500/30 text-green-400 transition-colors"
                          title="Reset to original"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>
                        <CopyButton text={payload} className="!p-1.5" />
                      </div>
                    </div>
                  )}
                </div>
                <CopyButton text={payload} />
              </div>
            ))}
          </div>
        </div>
      </CRTScreen>
    </div>
  );
}