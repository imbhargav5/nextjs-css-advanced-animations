"use client";

import { DemoBlock } from "@/components/demo-block";

export function InsetRectangleDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Inset Rectangle Clip</h2>

      <DemoBlock
        title="Basic Inset"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-blue-500"
  style={{
    clipPath: "inset(20%)"
  }}
/>

/* Shorthand: all sides */
/* Creates an inner rectangle by clipping from all edges */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-500"
            style={{
              clipPath: "inset(20%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Top/Bottom Inset"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
  style={{
    clipPath: "inset(10% 0% 10% 0%)"
  }}
/>

/* Syntax: inset(top right bottom left) */
/* Clips only from top and bottom */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-pink-400 to-rose-500"
            style={{
              clipPath: "inset(10% 0% 10% 0%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Left/Right Inset"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
  style={{
    clipPath: "inset(0% 15% 0% 15%)"
  }}
/>

/* Clips only from left and right sides */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-green-400 to-emerald-500"
            style={{
              clipPath: "inset(0% 15% 0% 15%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Asymmetric Inset"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-amber-500"
  style={{
    clipPath: "inset(5% 20% 15% 10%)"
  }}
/>

/* All sides different: top=5%, right=20%, bottom=15%, left=10% */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-orange-400 to-amber-500"
            style={{
              clipPath: "inset(5% 20% 15% 10%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}
