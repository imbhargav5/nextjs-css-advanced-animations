"use client";

import { DemoBlock } from "@/components/demo-block";

export function ScreenBlendDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Screen Blend</h2>

      <DemoBlock
        title="Basic Screen"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{ mixBlendMode: "screen" }}
  />
</div>

/* mix-blend-mode: screen */
/* Lightens the base color by inverting, multiplying, and inverting again */
/* Result is always lighter than original */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Screen Bright Colors"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{ mixBlendMode: "screen" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Screen Circles"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-600 to-teal-600">
  <div
    className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-400"
    style={{ mixBlendMode: "screen" }}
  />
  <div
    className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-400"
    style={{ mixBlendMode: "screen" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-600 to-teal-600">
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-400"
              style={{ mixBlendMode: "screen" }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-400"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Screen Rectangles"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-600 to-indigo-600">
  <div
    className="absolute top-4 left-4 w-40 h-32 bg-pink-400 opacity-80"
    style={{ mixBlendMode: "screen" }}
  />
  <div
    className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-400 opacity-80"
    style={{ mixBlendMode: "screen" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-600 to-indigo-600">
            <div
              className="absolute top-4 left-4 w-40 h-32 bg-pink-400 opacity-80"
              style={{ mixBlendMode: "screen" }}
            />
            <div
              className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-400 opacity-80"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

