"use client";

import { useState } from "react";

export function BackdropFilterTransformsDemo() {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Backdrop Filter Transforms</h2>
        
        <div className="space-y-6">
          {/* Controls */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Transform Controls</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">
                  Rotate: {rotate}deg
                </label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={rotate}
                  onChange={(e) => setRotate(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-white mb-2">
                  Scale: {scale.toFixed(1)}
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Example 1: Rotated with blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Rotated Element</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg transition-all duration-300"
                style={{
                  backdropFilter: "blur(15px)",
                  transform: `rotate(${rotate}deg)`,
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Rotating Blur</p>
                <p className="text-sm text-gray-600">Transform with backdrop-filter</p>
              </div>
            </div>
          </div>

          {/* Example 2: Scaled with blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Scaled Element</h3>
            <div className="relative p-6 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl transition-all duration-300 origin-center"
                style={{
                  backdropFilter: "blur(20px)",
                  transform: `scale(${scale})`,
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Scaling Blur</p>
                <p className="text-sm text-gray-600">Scale transform with blur</p>
              </div>
            </div>
          </div>

          {/* Example 3: Combined transforms */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Combined Transforms</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg transition-all duration-300"
                style={{
                  backdropFilter: "blur(15px) saturate(1.3)",
                  transform: `rotate(${rotate}deg) scale(${scale})`,
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Complex Transform</p>
                <p className="text-sm text-gray-600">Rotation + scale + blur</p>
              </div>
            </div>
          </div>

          {/* Example 4: Skew transform */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Skew Transform</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl transition-all duration-300"
                style={{
                  backdropFilter: "blur(25px) brightness(0.9)",
                  transform: `skewX(${rotate / 10}deg)`,
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Skewed Blur</p>
                <p className="text-sm text-gray-600">Skew transform with blur</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(15px);
transform: rotate(45deg) scale(1.2);
transition: transform 0.3s;
/* Combining CSS transforms with backdrop-filter */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

