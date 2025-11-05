"use client";

import { useState } from "react";

export function ComplexTransitionsDemo() {
  const [step, setStep] = useState(0);

  const transitions = [
    "polygon(50% 0%, 0% 100%, 100% 100%)",
    "polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)",
    "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    "circle(50% at 50% 50%)",
    "polygon(50% 0%, 0% 100%, 100% 100%)",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Complex Transition Sequences</h2>
        
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setStep((s) => (s + 1) % transitions.length)}
            className="px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            Next Step ({step + 1}/{transitions.length})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Sequential transitions */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Sequential Transition</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-1000 ease-in-out"
                style={{
                  clipPath: transitions[step],
                }}
              />
            </div>
          </div>

          {/* Example 2: With delay */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Delayed Transition</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-1000 ease-in-out"
                style={{
                  clipPath: transitions[(step + 1) % transitions.length],
                  transitionDelay: "200ms",
                }}
              />
            </div>
          </div>

          {/* Example 3: Staggered */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Staggered Transition</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-1000 ease-in-out"
                style={{
                  clipPath: transitions[(step + 2) % transitions.length],
                  transitionDelay: "400ms",
                }}
              />
            </div>
          </div>

          {/* Example 4: Reverse */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Reverse Transition</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-1000 ease-in-out"
                style={{
                  clipPath: transitions[transitions.length - 1 - step],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

