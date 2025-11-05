"use client";

import { useState } from "react";

export function MaskRevealDemo() {
  const [revealProgress, setRevealProgress] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Mask Reveal Effect</h2>
        
        <div className="flex justify-center mb-8 gap-4">
          <input
            type="range"
            min="0"
            max="100"
            value={revealProgress}
            onChange={(e) => setRevealProgress(Number(e.target.value))}
            className="w-64"
          />
          <span className="text-lg font-semibold">{revealProgress}%</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Circle mask */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Circle Mask</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500" />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
                  style={{
                    clipPath: `circle(${revealProgress}% at 50% 50%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Polygon mask */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Polygon Mask</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
                  style={{
                    clipPath: `polygon(0% 0%, ${revealProgress}% 0%, ${revealProgress}% 100%, 0% 100%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Diagonal mask */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Diagonal Mask</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500" />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500 transition-all duration-300"
                  style={{
                    clipPath: `polygon(0% 0%, ${revealProgress}% ${revealProgress * 0.5}%, ${revealProgress * 0.5}% ${revealProgress}%, 0% 100%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Ellipse mask */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ellipse Mask</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500" />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 transition-all duration-300"
                  style={{
                    clipPath: `ellipse(${revealProgress}% ${revealProgress * 0.7}% at 50% 50%)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`/* Use clip-path as a mask */
.mask {
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.3s;
}
/* Progressively reveal content */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

