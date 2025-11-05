"use client";

import { DemoBlock } from "@/components/demo-block";

export function TrianglePolygonDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Triangle Polygon Clip</h2>

      <DemoBlock
        title="Basic Triangle"
        code={`<div
  className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500"
  style={{
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
  }}
/>

/* Syntax: polygon(x1 y1, x2 y2, x3 y3, ...) */
/* Each point is defined as x% y% */
/* Creates a triangle pointing up */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Inverted Triangle"
        code={`<div
  className="w-64 h-64 bg-gradient-to-br from-pink-400 to-red-500"
  style={{
    clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-pink-400 to-red-500"
            style={{
              clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Right Triangle"
        code={`<div
  className="w-64 h-64 bg-gradient-to-br from-green-400 to-teal-500"
  style={{
    clipPath: "polygon(0% 0%, 0% 100%, 100% 100%)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-green-400 to-teal-500"
            style={{
              clipPath: "polygon(0% 0%, 0% 100%, 100% 100%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Left Triangle"
        code={`<div
  className="w-64 h-64 bg-gradient-to-br from-orange-400 to-yellow-500"
  style={{
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-orange-400 to-yellow-500"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

