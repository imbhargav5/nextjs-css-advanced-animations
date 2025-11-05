"use client";

import { useState } from "react";

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

export function InteractiveBlendEditorDemo() {
  const [baseColor, setBaseColor] = useState("#3b82f6");
  const [blendColor, setBlendColor] = useState("#fbbf24");
  const [blendMode, setBlendMode] = useState<(typeof blendModes)[number]>("multiply");
  const [opacity, setOpacity] = useState(100);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Interactive Blend Editor</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Base Color</label>
              <input
                type="color"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="w-full h-10 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Blend Color</label>
              <input
                type="color"
                value={blendColor}
                onChange={(e) => setBlendColor(e.target.value)}
                className="w-full h-10 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Blend Mode</label>
              <select
                value={blendMode}
                onChange={(e) => setBlendMode(e.target.value as (typeof blendModes)[number])}
                className="w-full p-2 border rounded"
              >
                {blendModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Opacity: {opacity}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Preview */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Preview</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="relative w-full h-64 rounded"
                style={{ backgroundColor: baseColor }}
              >
                <div
                  className="absolute inset-0 rounded"
                  style={{
                    backgroundColor: blendColor,
                    mixBlendMode: blendMode,
                    opacity: opacity / 100,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Code output */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Code Output</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
                <code>{`.base {
  background-color: ${baseColor};
}

.blend {
  background-color: ${blendColor};
  mix-blend-mode: ${blendMode};
  opacity: ${opacity / 100};
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

