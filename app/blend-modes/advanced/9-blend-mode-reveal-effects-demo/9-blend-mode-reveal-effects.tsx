"use client";

import { useEffect, useState } from "react";

export function BlendModeRevealEffectsDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 0.01) % 1);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Mode Reveal Effects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Circle reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Circle Reveal</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
                  style={{
                    mixBlendMode: "multiply",
                    clipPath: `circle(${progress * 100}% at 50% 50%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Slide reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Slide Reveal</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
                  style={{
                    mixBlendMode: "screen",
                    transform: `translateX(${(progress - 1) * 100}%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Fade reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Fade Reveal</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
                  style={{
                    mixBlendMode: "overlay",
                    opacity: progress,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Reveal</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
                  style={{
                    mixBlendMode: "difference",
                    clipPath: `polygon(0% 0%, ${progress * 100}% 0%, ${progress * 100}% 100%, 0% 100%)`,
                    opacity: 0.5 + progress * 0.5,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`const [progress, setProgress] = useState(0);

<div style={{
  mixBlendMode: 'multiply',
  clipPath: \`circle(\${progress * 100}%)\`,
  opacity: progress
}} />

/* Reveal effects combine blend modes */
/* with transforms and clip-path */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

