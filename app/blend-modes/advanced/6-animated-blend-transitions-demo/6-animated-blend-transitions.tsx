"use client";

import { useEffect, useState } from "react";

export function AnimatedBlendTransitionsDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 0.01) % 1);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const blendModes: Array<"multiply" | "screen" | "overlay" | "difference" | "hard-light"> = [
    "multiply",
    "screen",
    "overlay",
    "difference",
    "hard-light",
  ];

  const currentMode = blendModes[Math.floor(progress * blendModes.length)] || blendModes[0];
  const nextMode = blendModes[(Math.floor(progress * blendModes.length) + 1) % blendModes.length];
  const localProgress = (progress * blendModes.length) % 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Animated Blend Transitions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Complex transition */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Transition</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
                  style={{
                    mixBlendMode: currentMode,
                    opacity: 1 - localProgress,
                    transform: `scale(${1 - localProgress * 0.2}) rotate(${localProgress * 10}deg)`,
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
                  style={{
                    mixBlendMode: nextMode,
                    opacity: localProgress,
                    transform: `scale(${0.8 + localProgress * 0.2}) rotate(${localProgress * 10 - 10}deg)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Multi-property animation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multi-Property Animation</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
                  style={{
                    mixBlendMode: currentMode,
                    opacity: 1 - localProgress,
                    transform: `translateX(${localProgress * 50}px) scale(${1 - localProgress * 0.3})`,
                    filter: `blur(${localProgress * 5}px)`,
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
                  style={{
                    mixBlendMode: nextMode,
                    opacity: localProgress,
                    transform: `translateX(${(localProgress - 1) * 50}px) scale(${0.7 + localProgress * 0.3})`,
                    filter: `blur(${(1 - localProgress) * 5}px)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Pulsing blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Pulsing Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
                  style={{
                    mixBlendMode: currentMode,
                    opacity: 0.5 + Math.sin(progress * Math.PI * 4) * 0.5,
                    transform: `scale(${0.9 + Math.sin(progress * Math.PI * 4) * 0.2})`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Rotating blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Rotating Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
                  style={{
                    mixBlendMode: currentMode,
                    transform: `rotate(${progress * 360}deg) scale(${1 + Math.sin(progress * Math.PI * 2) * 0.3})`,
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

useEffect(() => {
  const interval = setInterval(() => {
    setProgress((prev) => (prev + 0.01) % 1);
  }, 16);
  return () => clearInterval(interval);
}, []);

<div style={{
  mixBlendMode: currentMode,
  opacity: 1 - localProgress,
  transform: \`scale(\${scale}) rotate(\${angle}deg)\`,
  filter: \`blur(\${blur}px)\`
}} />`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

