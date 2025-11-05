"use client";

import { useState } from "react";
import { DemoBlock } from "@/components/demo-block";

const blendModes = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
] as const;

export function DynamicBlendSwitchingDemo() {
  const [selectedMode, setSelectedMode] = useState<(typeof blendModes)[number]>("multiply");

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Dynamic Blend Switching</h2>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {blendModes.map((mode) => (
          <button
            key={mode}
            onClick={() => setSelectedMode(mode)}
            className={`px-3 py-1 rounded text-sm ${
              selectedMode === mode ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {mode}
          </button>
        ))}
      </div>

      <DemoBlock
        title="Dynamic Blend"
        code={`const [blendMode, setBlendMode] = useState('multiply');

<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-300"
    style={{ mixBlendMode: blendMode }}
  />
</div>

<button onClick={() => setBlendMode('screen')}>
  Switch to Screen
</button>

/* Click buttons above to switch blend modes */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-300"
              style={{ mixBlendMode: selectedMode }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Switching Blend"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-300"
    style={{ mixBlendMode: blendMode }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-300"
              style={{ mixBlendMode: selectedMode }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multiple Shapes"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500 transition-all duration-300"
    style={{ mixBlendMode: blendMode }}
  />
  <div
    className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-500 transition-all duration-300"
    style={{ mixBlendMode: blendMode }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500 transition-all duration-300"
              style={{ mixBlendMode: selectedMode }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-500 transition-all duration-300"
              style={{ mixBlendMode: selectedMode }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Composition"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80 transition-all duration-300"
    style={{ mixBlendMode: blendMode }}
  />
  <div
    className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80 transition-all duration-300"
    style={{ mixBlendMode: blendMode }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80 transition-all duration-300"
              style={{ mixBlendMode: selectedMode }}
            />
            <div
              className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80 transition-all duration-300"
              style={{ mixBlendMode: selectedMode }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

