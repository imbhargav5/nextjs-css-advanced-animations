"use client";

import { DemoBlock } from "@/components/demo-block";

export function ResponsivePolygonDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Responsive Polygon</h2>

      {/* Example 1: Viewport-based */}
      <DemoBlock
        title="Viewport Units"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-blue-500"
  style={{
    clipPath: "polygon(calc(50vw - 100px) 0%, calc(50vw + 100px) 0%, 100% 100%, 0% 100%)"
  }}
/>

/* Using viewport width (vw) for responsive clip-path */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-purple-400 to-blue-500"
            style={{
              clipPath: "polygon(calc(50vw - 100px) 0%, calc(50vw + 100px) 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 2: Calc-based */}
      <DemoBlock
        title="Calc Function"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
  style={{
    clipPath: "polygon(calc(50% - 80px) 0%, calc(50% + 80px) 0%, calc(50% + 120px) 100%, calc(50% - 120px) 100%)"
  }}
/>

/* Using calc() to combine percentages with pixels */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
            style={{
              clipPath: "polygon(calc(50% - 80px) 0%, calc(50% + 80px) 0%, calc(50% + 120px) 100%, calc(50% - 120px) 100%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 3: Percentage with calc */}
      <DemoBlock
        title="Percentage + Calc"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
  style={{
    clipPath: "polygon(0% 0%, calc(30% + 20px) 0%, calc(70% - 20px) 100%, 0% 100%)"
  }}
/>

/* Mixing percentages and pixel offsets */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
            style={{
              clipPath: "polygon(0% 0%, calc(30% + 20px) 0%, calc(70% - 20px) 100%, 0% 100%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 4: Responsive circle */}
      <DemoBlock
        title="Responsive Circle"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-amber-500"
  style={{
    clipPath: "circle(calc(30% + 10vw) at 50% 50%)"
  }}
/>

/* Circle radius adapts to viewport width */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-orange-400 to-amber-500"
            style={{
              clipPath: "circle(calc(30% + 10vw) at 50% 50%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

