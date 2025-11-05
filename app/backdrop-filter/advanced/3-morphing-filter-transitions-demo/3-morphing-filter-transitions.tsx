"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function MorphingFilterTransitionsDemo() {
  const [morphState, setMorphState] = useState(0);

  const states = [
    { blur: 5, brightness: 1.0, saturate: 1.0 },
    { blur: 15, brightness: 0.8, saturate: 1.5 },
    { blur: 25, brightness: 1.2, saturate: 0.5 },
    { blur: 10, brightness: 0.9, saturate: 2.0 },
  ];

  const currentState = states[morphState];
  const filterString = `blur(${currentState.blur}px) brightness(${currentState.brightness}) saturate(${currentState.saturate})`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Morphing Filter Transitions</h2>
        
        <div className="space-y-6">
          <div className="flex gap-2 justify-center">
            {states.map((_, index) => (
              <Button
                key={index}
                onClick={() => setMorphState(index)}
                variant={morphState === index ? "secondary" : "outline"}
              >
                State {index + 1}
              </Button>
            ))}
          </div>

          <div className="relative bg-white p-8 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-1000"
              style={{
                backdropFilter: filterString,
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold text-lg mb-2">
                Morphing Filter State {morphState + 1}
              </p>
              <p className="text-sm text-gray-600">
                Smoothly transitions between different filter combinations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {states.map((state, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-md p-4 rounded-lg border border-white/30">
                <h4 className="text-white font-semibold mb-2">State {index + 1}</h4>
                <p className="text-white/80 text-xs">
                  blur: {state.blur}px<br />
                  brightness: {state.brightness}<br />
                  saturate: {state.saturate}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`const states = [
  { blur: 5, brightness: 1.0 },
  { blur: 15, brightness: 0.8 },
];
backdrop-filter: blur(\${state.blur}px) brightness(\${state.brightness});
transition: backdrop-filter 1s;
/* Smooth morphing between states */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

