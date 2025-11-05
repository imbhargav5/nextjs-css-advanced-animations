"use client";

import { DemoBlock } from "@/components/demo-block";

export function OverlayBlendDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Overlay Blend</h2>

      <DemoBlock
        title="Basic Overlay"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{ mixBlendMode: "overlay" }}
  />
</div>

/* mix-blend-mode: overlay */
/* Combines multiply and screen modes */
/* Darkens if base color is dark, lightens if base color is light */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Contrasting Colors"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{ mixBlendMode: "overlay" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Overlay Circles"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-600 to-teal-600">
  <div
    className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-400"
    style={{ mixBlendMode: "overlay" }}
  />
  <div
    className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-400"
    style={{ mixBlendMode: "overlay" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-600 to-teal-600">
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-400"
              style={{ mixBlendMode: "overlay" }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-400"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Overlay Rectangles"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-600 to-indigo-600">
  <div
    className="absolute top-4 left-4 w-40 h-32 bg-pink-400 opacity-80"
    style={{ mixBlendMode: "overlay" }}
  />
  <div
    className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-400 opacity-80"
    style={{ mixBlendMode: "overlay" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-600 to-indigo-600">
            <div
              className="absolute top-4 left-4 w-40 h-32 bg-pink-400 opacity-80"
              style={{ mixBlendMode: "overlay" }}
            />
            <div
              className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-400 opacity-80"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

