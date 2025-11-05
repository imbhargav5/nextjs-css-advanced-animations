"use client";

import { DemoBlock } from "@/components/demo-block";

export function LightenBlendDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Lighten Blend</h2>

      <DemoBlock
        title="Basic Lighten"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{ mixBlendMode: "lighten" }}
  />
</div>

/* mix-blend-mode: lighten */
/* Selects the lighter of the base and blend colors */
/* Takes the maximum value for each RGB channel */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{ mixBlendMode: "lighten" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Lighten Dark Colors"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-orange-500"
    style={{ mixBlendMode: "lighten" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-orange-500"
              style={{ mixBlendMode: "lighten" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Lighten Circles"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-600 to-teal-600">
  <div
    className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-300"
    style={{ mixBlendMode: "lighten" }}
  />
  <div
    className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-300"
    style={{ mixBlendMode: "lighten" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-600 to-teal-600">
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-300"
              style={{ mixBlendMode: "lighten" }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-300"
              style={{ mixBlendMode: "lighten" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Lighten Rectangles"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-600 to-indigo-600">
  <div
    className="absolute top-4 left-4 w-40 h-32 bg-pink-300 opacity-80"
    style={{ mixBlendMode: "lighten" }}
  />
  <div
    className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-300 opacity-80"
    style={{ mixBlendMode: "lighten" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-600 to-indigo-600">
            <div
              className="absolute top-4 left-4 w-40 h-32 bg-pink-300 opacity-80"
              style={{ mixBlendMode: "lighten" }}
            />
            <div
              className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-300 opacity-80"
              style={{ mixBlendMode: "lighten" }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

