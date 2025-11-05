"use client";

import { DemoBlock } from "@/components/demo-block";

export function InsetRoundedDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Inset with Rounded Corners</h2>

      <DemoBlock
        title="Equal Rounded Corners"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
  style={{
    clipPath: "inset(10% round 20px)"
  }}
/>

/* Shorthand: all corners same radius */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
            style={{
              clipPath: "inset(10% round 20px)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Different Corner Radii"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
  style={{
    clipPath: "inset(15% round 30px 10px 40px 5px)"
  }}
/>

/* Syntax: inset(top right bottom left round top-left top-right bottom-right bottom-left) */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-500"
            style={{
              clipPath: "inset(15% round 30px 10px 40px 5px)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Percentage Rounding"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
  style={{
    clipPath: "inset(8% round 15% 25% 15% 25%)"
  }}
/>

/* Use percentages for responsive corner radii */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-green-400 to-emerald-500"
            style={{
              clipPath: "inset(8% round 15% 25% 15% 25%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Asymmetric + Rounded"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500"
  style={{
    clipPath: "inset(5% 20% 15% 10% round 25px 10px 35px 15px)"
  }}
/>

/* Combine asymmetric inset with different corner radii */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-orange-400 to-red-500"
            style={{
              clipPath: "inset(5% 20% 15% 10% round 25px 10px 35px 15px)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}
