"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

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
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Morphing Filter Transitions</h2>

      <DemoBlock
        title="State-Based Filter Morphing"
        code={`const [morphState, setMorphState] = useState(0);

const states = [
  { blur: 5, brightness: 1.0, saturate: 1.0 },
  { blur: 15, brightness: 0.8, saturate: 1.5 },
  { blur: 25, brightness: 1.2, saturate: 0.5 },
  { blur: 10, brightness: 0.9, saturate: 2.0 },
];

const currentState = states[morphState];
const filterString = \`blur(\${currentState.blur}px) brightness(\${currentState.brightness}) saturate(\${currentState.saturate})\`;

<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300" />
  <div
    className="absolute inset-0 bg-white/30 transition-all duration-1000"
    style={{ backdropFilter: filterString }}
  />
</div>

/* CSS */
backdrop-filter: blur(5px) brightness(1) saturate(1);
transition: backdrop-filter 1s;
/* Smooth morphing between states */`}
      >
        <div className="space-y-6">
          <div className="flex gap-2 justify-center flex-wrap">
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

          <div className="relative bg-white p-8 rounded-lg shadow-lg min-h-[200px]">
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
              <div key={index} className="bg-gradient-to-br from-purple-100 to-blue-100 p-4 rounded-lg shadow">
                <h4 className="text-gray-900 font-semibold mb-2">State {index + 1}</h4>
                <p className="text-gray-700 text-xs">
                  blur: {state.blur}px<br />
                  brightness: {state.brightness}<br />
                  saturate: {state.saturate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

