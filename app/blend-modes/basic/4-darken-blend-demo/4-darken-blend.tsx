"use client";

import { DemoBlock } from "@/components/demo-block";

export function DarkenBlendDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Darken Blend</h2>

      <DemoBlock
        title="Basic Darken"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{ mixBlendMode: "darken" }}
  />
</div>

/* mix-blend-mode: darken */
/* Selects the darker of the base and blend colors */
/* Takes the minimum value for each RGB channel */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{ mixBlendMode: "darken" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Darken Light Colors"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-300 to-orange-300"
    style={{ mixBlendMode: "darken" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-300 to-orange-300"
              style={{ mixBlendMode: "darken" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Darken Circles"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500"
    style={{ mixBlendMode: "darken" }}
  />
  <div
    className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-500"
    style={{ mixBlendMode: "darken" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500"
              style={{ mixBlendMode: "darken" }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-500"
              style={{ mixBlendMode: "darken" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Darken Rectangles"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80"
    style={{ mixBlendMode: "darken" }}
  />
  <div
    className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80"
    style={{ mixBlendMode: "darken" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80"
              style={{ mixBlendMode: "darken" }}
            />
            <div
              className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80"
              style={{ mixBlendMode: "darken" }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

