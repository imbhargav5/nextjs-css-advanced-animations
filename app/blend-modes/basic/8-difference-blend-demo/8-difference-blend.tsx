"use client";

import { DemoBlock } from "@/components/demo-block";

export function DifferenceBlendDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Difference Blend</h2>

      <DemoBlock
        title="Basic Difference"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{ mixBlendMode: "difference" }}
  />
</div>

/* mix-blend-mode: difference */
/* Subtracts the darker color from the lighter color */
/* Creates inversion effects - black becomes white */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{ mixBlendMode: "difference" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complementary Colors"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{ mixBlendMode: "difference" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{ mixBlendMode: "difference" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Difference Circles"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500"
    style={{ mixBlendMode: "difference" }}
  />
  <div
    className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-500"
    style={{ mixBlendMode: "difference" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500"
              style={{ mixBlendMode: "difference" }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-500"
              style={{ mixBlendMode: "difference" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Difference Rectangles"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80"
    style={{ mixBlendMode: "difference" }}
  />
  <div
    className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80"
    style={{ mixBlendMode: "difference" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80"
              style={{ mixBlendMode: "difference" }}
            />
            <div
              className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80"
              style={{ mixBlendMode: "difference" }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

