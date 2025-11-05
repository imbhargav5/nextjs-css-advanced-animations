"use client";

import { DemoBlock } from "@/components/demo-block";

export function HoverBlendEffectsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Hover Blend Effects</h2>

      <DemoBlock
        title="Hover Multiply"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 group">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    style={{ mixBlendMode: "multiply" }}
  />
</div>

/* Hover to reveal blend effect */
/* Smooth opacity transition */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 group">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Hover Screen"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600 group">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    style={{ mixBlendMode: "screen" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600 group">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Hover Overlay"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400 group">
  <div
    className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    style={{ mixBlendMode: "overlay" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400 group">
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Hover Difference"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400 group">
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    style={{ mixBlendMode: "difference" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400 group">
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ mixBlendMode: "difference" }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

