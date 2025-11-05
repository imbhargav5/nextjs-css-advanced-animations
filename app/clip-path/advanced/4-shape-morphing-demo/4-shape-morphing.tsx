"use client";

import { useState } from "react";

export function ShapeMorphingDemo() {
  const [morphState, setMorphState] = useState(0);

  const shapes = [
    "polygon(50% 0%, 0% 100%, 100% 100%)",
    "polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)",
    "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    "circle(50% at 50% 50%)",
  ];

  const currentShape = shapes[morphState];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Shape Morphing</h2>
        
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {shapes.map((_, index) => (
            <button
              key={index}
              onClick={() => setMorphState(index)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                morphState === index
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Shape {index + 1}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Morphing Shape</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-1000 ease-in-out"
                style={{
                  clipPath: currentShape,
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">With Rotation</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-1000 ease-in-out"
                style={{
                  clipPath: currentShape,
                  transform: `rotate(${morphState * 45}deg)`,
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">With Scale</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-1000 ease-in-out"
                style={{
                  clipPath: currentShape,
                  transform: `scale(${0.7 + morphState * 0.1})`,
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Combined</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-1000 ease-in-out"
                style={{
                  clipPath: currentShape,
                  transform: `rotate(${morphState * 30}deg) scale(${0.8 + morphState * 0.05})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

