"use client";

import { useEffect, useState } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Animated Filter Sequences</h2>
        
        <div className="space-y-6">
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
                Sequence {sequence + 1} of {sequences.length}
              </p>
              <p className="text-sm text-gray-600">
                Automatically cycles through filter states
              </p>
            </div>
          </div>

          <div className="flex gap-2 justify-center">
            {sequences.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  sequence === index ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`useEffect(() => {
  const interval = setInterval(() => {
    setSequence((prev) => (prev + 1) % sequences.length);
  }, 2000);
  return () => clearInterval(interval);
}, []);
backdrop-filter: blur(\${current.blur}px);
transition: backdrop-filter 1s;
/* Animated sequence cycling */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

