"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ClipWithTransformsDemo() {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Clip-Path with Transforms</h2>
        
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          <Button onClick={() => setRotate((r) => r + 45)}>
            Rotate 45°
          </Button>
          <Button onClick={() => setScale((s) => s === 1 ? 1.2 : 1)}>
            Toggle Scale
          </Button>
          <Button
            onClick={() => {
              setRotate(0);
              setScale(1);
            }}
            variant="outline"
          >
            Reset
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Rotated clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Rotated Hexagon</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-500"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                  transform: `rotate(${rotate}deg) scale(${scale})`,
                }}
              />
            </div>
          </div>

          {/* Example 2: Scaled clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Scaled Diamond</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-500"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  transform: `scale(${scale}) rotate(${rotate}deg)`,
                }}
              />
            </div>
          </div>

          {/* Example 3: Skewed clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Skewed Rectangle</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-500"
                style={{
                  clipPath: "inset(10% round 15px)",
                  transform: `skew(${rotate / 10}deg, ${rotate / 20}deg)`,
                }}
              />
            </div>
          </div>

          {/* Example 4: Combined transforms */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Combined Transforms</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-500"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  transform: `rotate(${rotate}deg) scale(${scale}) translate(${rotate / 10}px, ${rotate / 10}px)`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
transform: rotate(45deg) scale(1.2);
/* Clip-path applies first, then transform */
/* Transform affects the clipped element */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

