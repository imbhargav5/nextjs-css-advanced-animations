"use client";

import { DemoBlock } from "@/components/demo-block";

export function HexagonPolygonDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Hexagon Polygon Clip</h2>

      <DemoBlock
        title="Regular Hexagon"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-500"
  style={{
    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
  }}
/>

/* 6 points create a hexagon */
/* Order matters - connect points sequentially */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-500"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Wide Hexagon"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
  style={{
    clipPath: "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)"
  }}
/>

/* Wider hexagon by adjusting horizontal points */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-pink-400 to-rose-500"
            style={{
              clipPath: "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Tall Hexagon"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
  style={{
    clipPath: "polygon(50% 10%, 90% 30%, 90% 70%, 50% 90%, 10% 70%, 10% 30%)"
  }}
/>

/* Taller hexagon by adjusting vertical points */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-green-400 to-emerald-500"
            style={{
              clipPath: "polygon(50% 10%, 90% 30%, 90% 70%, 50% 90%, 10% 70%, 10% 30%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Rotated Hexagon"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-amber-500"
  style={{
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
  }}
/>

/* Rotated orientation with vertical edges */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-orange-400 to-amber-500"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}
