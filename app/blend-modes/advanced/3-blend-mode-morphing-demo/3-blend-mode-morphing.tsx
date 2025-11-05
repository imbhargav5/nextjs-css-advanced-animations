"use client";

import { useEffect, useState } from "react";

export function BlendModeMorphingDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 0.005) % 1);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const blendModes: Array<"multiply" | "screen" | "overlay" | "hard-light" | "difference"> = [
    "multiply",
    "screen",
    "overlay",
    "hard-light",
    "difference",
  ];

  const blendIndex = Math.floor(progress * blendModes.length);
  const nextBlendIndex = (blendIndex + 1) % blendModes.length;
  const localProgress = (progress * blendModes.length) % 1;

  // Interpolate between blend modes visually using opacity
  const currentMode = blendModes[blendIndex];
  const nextMode = blendModes[nextBlendIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Mode Morphing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Morphing blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Morphing Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
                  style={{
                    mixBlendMode: currentMode,
                    opacity: 1 - localProgress * 0.3,
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
                  style={{
                    mixBlendMode: nextMode,
                    opacity: localProgress * 0.7,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Smooth transition */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Smooth Transition</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
                  style={{
                    mixBlendMode: currentMode,
                    opacity: 1 - localProgress,
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
                  style={{
                    mixBlendMode: nextMode,
                    opacity: localProgress,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Complex morph */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Morph</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
                  style={{
                    mixBlendMode: currentMode,
                    transform: `scale(${1 - localProgress * 0.2})`,
                    opacity: 1 - localProgress * 0.5,
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
                  style={{
                    mixBlendMode: nextMode,
                    transform: `scale(${0.8 + localProgress * 0.2})`,
                    opacity: localProgress * 0.5,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Multi-layer morph */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multi-Layer Morph</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
                  style={{
                    mixBlendMode: currentMode,
                    opacity: 1 - localProgress,
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
                  style={{
                    mixBlendMode: nextMode,
                    opacity: localProgress,
                  }}
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500 rounded-full transition-all duration-100"
                  style={{
                    mixBlendMode: currentMode,
                    opacity: 1 - localProgress * 0.5,
                  }}
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500 rounded-full transition-all duration-100"
                  style={{
                    mixBlendMode: nextMode,
                    opacity: localProgress * 0.5,
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
const blendModes = ['multiply', 'screen', 'overlay'];

const currentMode = blendModes[Math.floor(progress * blendModes.length)];
const nextMode = blendModes[(currentIndex + 1) % blendModes.length];
const localProgress = (progress * blendModes.length) % 1;

<div style={{ mixBlendMode: currentMode, opacity: 1 - localProgress }} />
<div style={{ mixBlendMode: nextMode, opacity: localProgress }} />`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

