"use client";

import { DemoBlock } from "@/components/demo-block";

export function GradientBlendModesDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Gradient Blend Modes</h2>

      <DemoBlock
        title="Gradient Multiply"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-orange-500"
    style={{ mixBlendMode: "multiply" }}
  />
</div>

/* Gradients blend beautifully with multiply mode */
/* Creates rich, darker color combinations */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-orange-500"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Gradient Screen"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 via-orange-400 to-yellow-400"
    style={{ mixBlendMode: "screen" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 via-orange-400 to-yellow-400"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Gradient Overlay"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-400 via-teal-500 to-cyan-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-red-400 via-yellow-500 to-orange-500"
    style={{ mixBlendMode: "overlay" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 via-teal-500 to-cyan-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 via-yellow-500 to-orange-500"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Gradient"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
  <div
    className="absolute inset-0"
    style={{
      mixBlendMode: "hard-light",
      background: "radial-gradient(circle, rgba(236,72,153,0.8) 0%, transparent 50%, rgba(34,211,238,0.8) 100%)"
    }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
            <div
              className="absolute inset-0"
              style={{
                mixBlendMode: "hard-light",
                background: "radial-gradient(circle, rgba(236,72,153,0.8) 0%, transparent 50%, rgba(34,211,238,0.8) 100%)"
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

