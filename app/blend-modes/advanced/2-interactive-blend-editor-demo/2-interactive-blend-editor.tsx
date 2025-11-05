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

export function InteractiveBlendEditorDemo() {
  const [baseColor, setBaseColor] = useState("#3b82f6");
  const [blendColor, setBlendColor] = useState("#fbbf24");
  const [blendMode, setBlendMode] = useState<(typeof blendModes)[number]>("multiply");
  const [opacity, setOpacity] = useState(100);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Interactive Blend Editor</h2>

      <DemoBlock
        title="Interactive Controls"
        code={`const [baseColor, setBaseColor] = useState("#3b82f6");
const [blendColor, setBlendColor] = useState("#fbbf24");
const [blendMode, setBlendMode] = useState("multiply");
const [opacity, setOpacity] = useState(100);

// Color pickers, blend mode selector, and opacity slider
// Adjust all parameters in real-time`}
      >
        <div className="space-y-4">
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
      </DemoBlock>

      <DemoBlock
        title="Live Preview"
        code={`<div className="relative w-full h-64 rounded"
     style={{ backgroundColor: baseColor }}>
  <div
    className="absolute inset-0 rounded"
    style={{
      backgroundColor: blendColor,
      mixBlendMode: blendMode,
      opacity: opacity / 100,
    }}
  />
</div>

/* Real-time visual feedback */
/* Adjust controls above to see changes */`}
      >
        <div className="flex justify-center">
          <div
            className="relative w-full max-w-md h-64 rounded"
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
      </DemoBlock>

      <DemoBlock
        title="Generated CSS Code"
        code={`.base {
  background-color: ${baseColor};
}

.blend {
  background-color: ${blendColor};
  mix-blend-mode: ${blendMode};
  opacity: ${opacity / 100};
}

/* Copy this code for your project */`}
      >
        <div className="flex justify-center">
          <pre className="bg-muted p-4 rounded overflow-x-auto text-sm w-full max-w-md">
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
      </DemoBlock>
    </div>
  );
}

