"use client";

import { useState } from "react";

export function Perspective3dDemo() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">3D Perspective with Clip-Path</h2>
        
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <div>
            <label className="block text-sm font-semibold mb-2">Rotate X: {rotateX}°</label>
            <input
              type="range"
              min="-45"
              max="45"
              value={rotateX}
              onChange={(e) => setRotateX(Number(e.target.value))}
              className="w-32"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Rotate Y: {rotateY}°</label>
            <input
              type="range"
              min="-45"
              max="45"
              value={rotateY}
              onChange={(e) => setRotateY(Number(e.target.value))}
              className="w-32"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: 3D cube face */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3D Cube Face</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ perspective: "1000px" }}>
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-300"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transformStyle: "preserve-3d",
                }}
              />
            </div>
          </div>

          {/* Example 2: 3D hexagon */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3D Hexagon</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ perspective: "1000px" }}>
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transformStyle: "preserve-3d",
                }}
              />
            </div>
          </div>

          {/* Example 3: 3D diamond */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3D Diamond</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ perspective: "1000px" }}>
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-300"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transformStyle: "preserve-3d",
                }}
              />
            </div>
          </div>

          {/* Example 4: Multiple 3D layers */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3D Layers</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative" style={{ perspective: "1000px" }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
                  style={{
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${i * 20}px)`,
                    transformStyle: "preserve-3d",
                    opacity: 0.7 - i * 0.2,
                  }}
                />
              ))}
              <div className="h-64" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

