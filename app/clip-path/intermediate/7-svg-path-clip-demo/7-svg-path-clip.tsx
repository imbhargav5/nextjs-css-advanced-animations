"use client";

import { DemoBlock } from "@/components/demo-block";

export function SvgPathClipDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">SVG Path Clip</h2>

      {/* Example 1: Custom SVG path */}
      <DemoBlock
        title="Custom SVG Path"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
  style={{
    clipPath: "path('M 0,100 Q 50,0 100,100 T 200,100')"
  }}
/>

/* SVG path syntax with quadratic curves */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
            style={{
              clipPath: "path('M 0,100 Q 50,0 100,100 T 200,100')",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 2: Wave pattern */}
      <DemoBlock
        title="Wave Pattern"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
  style={{
    clipPath: "path('M 0,50 Q 50,0 100,50 T 200,50 T 300,50 L 300,100 L 0,100 Z')"
  }}
/>

/* Wave pattern using smooth curves */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
            style={{
              clipPath: "path('M 0,50 Q 50,0 100,50 T 200,50 T 300,50 L 300,100 L 0,100 Z')",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 3: Heart shape */}
      <DemoBlock
        title="Heart Shape"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
  style={{
    clipPath: "path('M 50,20 C 30,10 10,20 10,40 C 10,55 25,65 50,85 C 75,65 90,55 90,40 C 90,20 70,10 50,20 Z')"
  }}
/>

/* Heart shape using cubic Bezier curves */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
            style={{
              clipPath: "path('M 50,20 C 30,10 10,20 10,40 C 10,55 25,65 50,85 C 75,65 90,55 90,40 C 90,20 70,10 50,20 Z')",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 4: Curved shape */}
      <DemoBlock
        title="Curved Shape"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
  style={{
    clipPath: "path('M 0,0 Q 50,50 100,0 T 200,0 T 300,0 L 300,100 L 0,100 Z')"
  }}
/>

/* Complex curved shape with multiple control points */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
            style={{
              clipPath: "path('M 0,0 Q 50,50 100,0 T 200,0 T 300,0 L 300,100 L 0,100 Z')",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

