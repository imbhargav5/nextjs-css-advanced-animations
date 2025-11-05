"use client";

import { useEffect, useState } from "react";

export function BlendModeTransformsDemo() {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
      setScale(1 + Math.sin(Date.now() / 1000) * 0.3);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Mode Transforms</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Rotate transform */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Rotate Transform</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
                  style={{
                    mixBlendMode: "multiply",
                    transform: `rotate(${rotation}deg)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Scale transform */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Scale Transform</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
                  style={{
                    mixBlendMode: "screen",
                    transform: `scale(${scale})`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Skew transform */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Skew Transform</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
                  style={{
                    mixBlendMode: "overlay",
                    transform: `skew(${rotation % 45}deg, ${(rotation * 2) % 30}deg)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex transforms */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Transforms</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
                  style={{
                    mixBlendMode: "difference",
                    transform: `rotate(${rotation}deg) scale(${scale}) translate(${Math.sin(rotation * Math.PI / 180) * 20}px, ${Math.cos(rotation * Math.PI / 180) * 20}px)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`const [rotation, setRotation] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setRotation((prev) => (prev + 1) % 360);
  }, 16);
  return () => clearInterval(interval);
}, []);

<div style={{
  mixBlendMode: 'multiply',
  transform: \`rotate(\${rotation}deg) scale(\${scale})\`
}} />

/* Transforms create dynamic blend effects */
/* Rotation, scale, skew all work beautifully */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

