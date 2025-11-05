"use client";

import { DemoBlock } from "@/components/demo-block";

export function EllipseClipDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Ellipse Clip</h2>

      <DemoBlock
        title="Basic Ellipse"
        code={`<div
  className="w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-500"
  style={{
    clipPath: "ellipse(50% 40% at 50% 50%)"
  }}
/>

/* Syntax: ellipse(rx ry at x y) */
/* rx: horizontal radius */
/* ry: vertical radius */
/* x, y: center position */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-500"
            style={{
              clipPath: "ellipse(50% 40% at 50% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Wide Ellipse"
        code={`<div
  className="w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-500"
  style={{
    clipPath: "ellipse(60% 30% at 50% 50%)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-500"
            style={{
              clipPath: "ellipse(60% 30% at 50% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Tall Ellipse"
        code={`<div
  className="w-64 h-64 bg-gradient-to-b from-green-400 to-teal-500"
  style={{
    clipPath: "ellipse(30% 60% at 50% 50%)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-b from-green-400 to-teal-500"
            style={{
              clipPath: "ellipse(30% 60% at 50% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Off-Center Ellipse"
        code={`<div
  className="w-64 h-64 bg-gradient-to-br from-orange-400 to-red-500"
  style={{
    clipPath: "ellipse(45% 35% at 25% 75%)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-orange-400 to-red-500"
            style={{
              clipPath: "ellipse(45% 35% at 25% 75%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

