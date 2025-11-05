"use client";

import { useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function BackdropFilterTransformsDemo() {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Backdrop Filter Transforms</h2>

      <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-xl shadow-lg mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Transform Controls</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
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
            <label className="block text-gray-700 mb-2 font-medium">
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

      <DemoBlock
        title="Rotated Element"
        code={`const [rotate, setRotate] = useState(0);

<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
    style={{
      backdropFilter: "blur(15px)",
      transform: \`rotate(\${rotate}deg)\`
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px);
transform: rotate(45deg);
transition: transform 0.3s;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
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
      </DemoBlock>

      <DemoBlock
        title="Scaled Element"
        code={`const [scale, setScale] = useState(1);

<div className="relative p-6 rounded-lg shadow-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300 origin-center"
    style={{
      backdropFilter: "blur(20px)",
      transform: \`scale(\${scale})\`
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(20px);
transform: scale(1.2);
transform-origin: center;
transition: transform 0.3s;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg overflow-hidden w-full max-w-md h-48">
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
      </DemoBlock>

      <DemoBlock
        title="Combined Transforms"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
    style={{
      backdropFilter: "blur(15px) saturate(1.3)",
      transform: \`rotate(\${rotate}deg) scale(\${scale})\`
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px) saturate(1.3);
transform: rotate(45deg) scale(1.2);
transition: transform 0.3s;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
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
      </DemoBlock>

      <DemoBlock
        title="Skew Transform"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
    style={{
      backdropFilter: "blur(25px) brightness(0.9)",
      transform: \`skewX(\${rotate / 10}deg)\`
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(25px) brightness(0.9);
transform: skewX(10deg);
transition: transform 0.3s;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
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
      </DemoBlock>
    </div>
  );
}
