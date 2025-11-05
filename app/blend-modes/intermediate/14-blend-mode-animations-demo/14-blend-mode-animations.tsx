"use client";

import { useEffect, useState } from "react";

export function BlendModeAnimationsDemo() {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationProgress((prev) => (prev + 0.01) % 1);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const blendModes: Array<"multiply" | "screen" | "overlay" | "difference"> = ["multiply", "screen", "overlay", "difference"];
  const currentBlendMode = blendModes[Math.floor(animationProgress * blendModes.length)] || blendModes[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Mode Animations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Animated blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Animated Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
                  style={{
                    mixBlendMode: currentBlendMode,
                    transform: `scale(${0.8 + animationProgress * 0.4})`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Rotating blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Rotating Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
                  style={{
                    mixBlendMode: currentBlendMode,
                    transform: `rotate(${animationProgress * 360}deg)`,
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
                    mixBlendMode: currentBlendMode,
                    opacity: 0.5 + Math.sin(animationProgress * Math.PI * 2) * 0.5,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex animation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Animation</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
                  style={{
                    mixBlendMode: currentBlendMode,
                    transform: `scale(${0.9 + Math.sin(animationProgress * Math.PI * 2) * 0.2}) rotate(${animationProgress * 180}deg)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`useEffect(() => {
  const interval = setInterval(() => {
    setProgress((prev) => (prev + 0.01) % 1);
  }, 16);
  return () => clearInterval(interval);
}, []);

<div style={{
  mixBlendMode: blendModes[progress],
  transform: \`scale(\${scale})\`
}} />`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

