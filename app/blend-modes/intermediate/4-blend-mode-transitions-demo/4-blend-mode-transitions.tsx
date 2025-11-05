"use client";

import { useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function BlendModeTransitionsDemo() {
  const [blendMode, setBlendMode] = useState<"multiply" | "screen" | "overlay">("multiply");

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Mode Transitions</h2>

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

      <DemoBlock
        title="Animated Transition"
        code={`const [blendMode, setBlendMode] = useState("multiply");

<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-500"
    style={{ mixBlendMode: blendMode }}
  />
</div>

/* Click buttons above to change blend mode */
/* Smooth transitions between modes */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-500"
              style={{ mixBlendMode: blendMode }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Smooth Transition"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-700 ease-in-out"
    style={{ mixBlendMode: blendMode }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-700 ease-in-out"
              style={{ mixBlendMode: blendMode }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multiple Shapes"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500 transition-all duration-500"
    style={{ mixBlendMode: blendMode }}
  />
  <div
    className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-500 transition-all duration-500"
    style={{ mixBlendMode: blendMode }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
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
      </DemoBlock>

      <DemoBlock
        title="Complex Transition"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80 transition-all duration-500"
    style={{ mixBlendMode: blendMode }}
  />
  <div
    className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80 transition-all duration-500"
    style={{ mixBlendMode: blendMode }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
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
      </DemoBlock>
    </div>
  );
}

