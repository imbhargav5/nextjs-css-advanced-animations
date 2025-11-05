"use client";

import { useEffect, useState } from "react";

export function Blend3DEffectsDemo() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">3D Blend Effects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: 3D rotate with blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3D Rotate Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 perspective-1000">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
                  style={{
                    mixBlendMode: "multiply",
                    transform: `rotateY(${rotation}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: 3D perspective */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3D Perspective</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400" style={{ perspective: "1000px" }}>
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
                  style={{
                    mixBlendMode: "screen",
                    transform: `rotateX(${rotation}deg) rotateY(${rotation * 0.5}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Multiple 3D layers */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple 3D Layers</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400" style={{ perspective: "1000px" }}>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
                  style={{
                    mixBlendMode: "overlay",
                    transform: `rotateY(${rotation}deg) translateZ(20px)`,
                    transformStyle: "preserve-3d",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400"
                  style={{
                    mixBlendMode: "difference",
                    transform: `rotateY(${rotation + 120}deg) translateZ(20px)`,
                    transformStyle: "preserve-3d",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400"
                  style={{
                    mixBlendMode: "hard-light",
                    transform: `rotateY(${rotation + 240}deg) translateZ(20px)`,
                    transformStyle: "preserve-3d",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex 3D */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex 3D</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400" style={{ perspective: "1000px" }}>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
                  style={{
                    mixBlendMode: "multiply",
                    transform: `rotateX(${rotation}deg) rotateY(${rotation}deg) rotateZ(${rotation * 0.5}deg) scale(${1 + Math.sin(rotation * Math.PI / 180) * 0.2})`,
                    transformStyle: "preserve-3d",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.container {
  perspective: 1000px;
}

.blend-layer {
  mix-blend-mode: multiply;
  transform: rotateY(45deg) translateZ(20px);
  transform-style: preserve-3d;
}

/* 3D transforms work with blend modes */
/* Creates depth and dimension */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

