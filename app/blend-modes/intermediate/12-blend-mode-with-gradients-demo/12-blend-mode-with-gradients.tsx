"use client";

import { DemoBlock } from "@/components/demo-block";

export function BlendModeWithGradientsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Mode with Gradients</h2>

      <DemoBlock
        title="Radial Gradient"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0"
    style={{
      mixBlendMode: "multiply",
      background: "radial-gradient(circle at center, yellow, transparent)"
    }}
  />
</div>

/* Radial gradients create circular blend effects */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0"
              style={{
                mixBlendMode: "multiply",
                background: "radial-gradient(circle at center, yellow, transparent)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Conic Gradient"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0"
    style={{
      mixBlendMode: "screen",
      background: "conic-gradient(from 0deg, pink, orange, yellow, pink)"
    }}
  />
</div>

/* Conic gradients blend in a circular pattern */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0"
              style={{
                mixBlendMode: "screen",
                background: "conic-gradient(from 0deg, pink, orange, yellow, pink)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multiple Gradients"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute inset-0"
    style={{
      mixBlendMode: "overlay",
      background: "linear-gradient(45deg, red, transparent), radial-gradient(circle, yellow, transparent)"
    }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute inset-0"
              style={{
                mixBlendMode: "overlay",
                background: "linear-gradient(45deg, red, transparent), radial-gradient(circle, yellow, transparent)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Gradient"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute inset-0"
    style={{
      mixBlendMode: "hard-light",
      background: "conic-gradient(from 45deg, pink, cyan, yellow, pink)"
    }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0"
              style={{
                mixBlendMode: "hard-light",
                background: "conic-gradient(from 45deg, pink, cyan, yellow, pink)",
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

