"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function AnimatedFilterSequencesDemo() {
  const [sequence, setSequence] = useState(0);

  const sequences = [
    { blur: 5, brightness: 1.0, saturate: 1.0 },
    { blur: 15, brightness: 0.8, saturate: 1.5 },
    { blur: 25, brightness: 1.2, saturate: 0.5 },
    { blur: 10, brightness: 0.9, saturate: 2.0 },
    { blur: 20, brightness: 1.1, saturate: 1.2 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSequence((prev) => (prev + 1) % sequences.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [sequences.length]);

  const current = sequences[sequence];
  const filterString = `blur(${current.blur}px) brightness(${current.brightness}) saturate(${current.saturate})`;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Animated Filter Sequences</h2>

      <DemoBlock
        title="Auto-Cycling Filter Animation"
        code={`const [sequence, setSequence] = useState(0);

const sequences = [
  { blur: 5, brightness: 1.0, saturate: 1.0 },
  { blur: 15, brightness: 0.8, saturate: 1.5 },
  { blur: 25, brightness: 1.2, saturate: 0.5 },
  { blur: 10, brightness: 0.9, saturate: 2.0 },
  { blur: 20, brightness: 1.1, saturate: 1.2 },
];

useEffect(() => {
  const interval = setInterval(() => {
    setSequence((prev) => (prev + 1) % sequences.length);
  }, 2000);
  return () => clearInterval(interval);
}, [sequences.length]);

const current = sequences[sequence];
const filterString = \`blur(\${current.blur}px) brightness(\${current.brightness}) saturate(\${current.saturate})\`;

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
/* Automated sequence cycling */`}
      >
        <div className="space-y-6">
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
                Sequence {sequence + 1} of {sequences.length}
              </p>
              <p className="text-sm text-gray-600">
                Automatically cycles through filter states
              </p>
              <div className="mt-4 text-xs text-gray-500">
                <p>blur: {current.blur}px</p>
                <p>brightness: {current.brightness}</p>
                <p>saturate: {current.saturate}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 justify-center">
            {sequences.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  sequence === index ? "bg-gray-900 scale-125" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

