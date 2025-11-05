"use client";

import { DemoBlock } from "@/components/demo-block";

export function SimpleCircleClipDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Simple Circle Clip</h2>

      {/* Example 1: Image with circle clip */}
      <DemoBlock
        title="Circle Clip on Image"
        code={`<img
  src="..."
  style={{
    clipPath: "circle(50% at 50% 50%)"
  }}
/>

/* Syntax: circle(radius at x y) */
/* radius: percentage or length */
/* x, y: center position */`}
      >
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
            alt="Mountain"
            className="w-64 h-64 object-cover"
            style={{
              clipPath: "circle(50% at 50% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 2: Div with circle clip */}
      <DemoBlock
        title="Circle Clip on Div"
        code={`<div
  className="w-64 h-64 bg-gradient-to-br from-pink-500 to-violet-500"
  style={{
    clipPath: "circle(40% at center)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-pink-500 to-violet-500"
            style={{
              clipPath: "circle(40% at center)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 3: Different circle sizes */}
      <DemoBlock
        title="Small Circle (30%)"
        code={`<div
  className="w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500"
  style={{
    clipPath: "circle(30% at 50% 50%)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500"
            style={{
              clipPath: "circle(30% at 50% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 4: Off-center circle */}
      <DemoBlock
        title="Off-Center Circle"
        code={`<div
  className="w-64 h-64 bg-gradient-to-br from-green-400 to-emerald-500"
  style={{
    clipPath: "circle(35% at 70% 30%)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-green-400 to-emerald-500"
            style={{
              clipPath: "circle(35% at 70% 30%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

