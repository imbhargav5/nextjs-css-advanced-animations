"use client";

import { DemoBlock } from "@/components/demo-block";

export function MultipleBlendLayersDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Multiple Blend Layers</h2>

      <DemoBlock
        title="Three Layers"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{ mixBlendMode: "multiply" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{ mixBlendMode: "screen" }}
  />
</div>

/* Multiple layers stack and blend together */
/* Each layer can have a different blend mode */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{ mixBlendMode: "multiply" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Mixed Blend Modes"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{ mixBlendMode: "overlay" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400"
    style={{ mixBlendMode: "difference" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{ mixBlendMode: "overlay" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400"
              style={{ mixBlendMode: "difference" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Layered Circles"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500"
    style={{ mixBlendMode: "multiply" }}
  />
  <div
    className="absolute top-0 right-0 w-32 h-32 rounded-full bg-yellow-500"
    style={{ mixBlendMode: "screen" }}
  />
  <div
    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-blue-500"
    style={{ mixBlendMode: "overlay" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500"
              style={{ mixBlendMode: "multiply" }}
            />
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full bg-yellow-500"
              style={{ mixBlendMode: "screen" }}
            />
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-blue-500"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Layers"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80"
    style={{ mixBlendMode: "hard-light" }}
  />
  <div
    className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80"
    style={{ mixBlendMode: "color-dodge" }}
  />
  <div
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500 rounded-full"
    style={{ mixBlendMode: "difference" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80"
              style={{ mixBlendMode: "hard-light" }}
            />
            <div
              className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80"
              style={{ mixBlendMode: "color-dodge" }}
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500 rounded-full"
              style={{ mixBlendMode: "difference" }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

