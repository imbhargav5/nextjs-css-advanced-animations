"use client";

import { useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function InteractiveFilterControlDemo() {
  const [blur, setBlur] = useState(10);
  const [brightness, setBrightness] = useState(1.0);
  const [saturate, setSaturate] = useState(1.0);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Interactive Filter Control</h2>

      <DemoBlock
        title="Real-Time Filter Controls"
        code={`const [blur, setBlur] = useState(10);
const [brightness, setBrightness] = useState(1.0);
const [saturate, setSaturate] = useState(1.0);

<div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
  <h3 className="text-xl font-semibold mb-4 text-gray-900">Adjust Filters</h3>

  <div className="space-y-4">
    <div>
      <label className="block text-white mb-2">
        Blur: {blur}px
      </label>
      <input
        type="range"
        min="0"
        max="30"
        value={blur}
        onChange={(e) => setBlur(Number(e.target.value))}
        className="w-full"
      />
    </div>

    <div>
      <label className="block text-white mb-2">
        Brightness: {brightness.toFixed(1)}
      </label>
      <input
        type="range"
        min="0"
        max="2"
        step="0.1"
        value={brightness}
        onChange={(e) => setBrightness(Number(e.target.value))}
        className="w-full"
      />
    </div>

    <div>
      <label className="block text-white mb-2">
        Saturate: {saturate.toFixed(1)}
      </label>
      <input
        type="range"
        min="0"
        max="3"
        step="0.1"
        value={saturate}
        onChange={(e) => setSaturate(Number(e.target.value))}
        className="w-full"
      />
    </div>
  </div>
</div>

<div
  className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
  style={{
    backdropFilter: \`blur(\${blur}px) brightness(\${brightness}) saturate(\${saturate})\`
  }}
/>

/* Interactive filter controls with React state */`}
      >
        <div className="space-y-6">
          {/* Controls */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Adjust Filters</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">
                  Blur: {blur}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={blur}
                  onChange={(e) => setBlur(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-white mb-2">
                  Brightness: {brightness.toFixed(1)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-white mb-2">
                  Saturate: {saturate.toFixed(1)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="0.1"
                  value={saturate}
                  onChange={(e) => setSaturate(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
              style={{
                backdropFilter: `blur(${blur}px) brightness(${brightness}) saturate(${saturate})`,
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold text-lg mb-2">Live Preview</p>
              <p className="text-sm text-gray-600">
                Adjust the sliders above to see the effect in real-time
              </p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
