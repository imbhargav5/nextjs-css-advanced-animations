"use client";

import { useState } from "react";

export function BlendModeTransitionsDemo() {
  const [blendMode, setBlendMode] = useState<"multiply" | "screen" | "overlay">("multiply");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Mode Transitions</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setBlendMode("multiply")}
            className={`px-4 py-2 rounded ${blendMode === "multiply" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Multiply
          </button>
          <button
            onClick={() => setBlendMode("screen")}
            className={`px-4 py-2 rounded ${blendMode === "screen" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Screen
          </button>
          <button
            onClick={() => setBlendMode("overlay")}
            className={`px-4 py-2 rounded ${blendMode === "overlay" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Overlay
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Transitioning blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Animated Transition</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-500"
                  style={{ mixBlendMode: blendMode }}
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
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-700 ease-in-out"
                  style={{ mixBlendMode: blendMode }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Multiple shapes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple Shapes</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500 transition-all duration-500"
                  style={{ mixBlendMode: blendMode }}
                />
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-500 transition-all duration-500"
                  style={{ mixBlendMode: blendMode }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex transition */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Transition</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80 transition-all duration-500"
                  style={{ mixBlendMode: blendMode }}
                />
                <div
                  className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80 transition-all duration-500"
                  style={{ mixBlendMode: blendMode }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.layer {
  mix-blend-mode: multiply;
  transition: mix-blend-mode 0.5s ease;
}

.layer:hover {
  mix-blend-mode: screen;
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

