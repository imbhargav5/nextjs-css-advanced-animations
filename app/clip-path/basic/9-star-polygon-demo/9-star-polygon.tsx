"use client";

import { DemoBlock } from "@/components/demo-block";

export function StarPolygonDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Star Polygon Clip</h2>

      <DemoBlock
        title="5-Pointed Star"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-yellow-400 to-orange-500"
  style={{
    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
  }}
/>

/* 5-pointed star requires 10 points */
/* Alternates between outer and inner points */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500"
            style={{
              clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="6-Pointed Star"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-500"
  style={{
    clipPath: "polygon(50% 0%, 65% 20%, 98% 35%, 80% 50%, 98% 65%, 65% 80%, 50% 100%, 35% 80%, 2% 65%, 20% 50%, 2% 35%, 35% 20%)"
  }}
/>

/* 6-pointed star with 12 points */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-500"
            style={{
              clipPath: "polygon(50% 0%, 65% 20%, 98% 35%, 80% 50%, 98% 65%, 65% 80%, 50% 100%, 35% 80%, 2% 65%, 20% 50%, 2% 35%, 35% 20%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="8-Pointed Star"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
  style={{
    clipPath: "polygon(50% 0%, 60% 25%, 100% 25%, 75% 50%, 100% 75%, 60% 75%, 50% 100%, 40% 75%, 0% 75%, 25% 50%, 0% 25%, 40% 25%)"
  }}
/>

/* 8-pointed star pattern */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-pink-400 to-rose-500"
            style={{
              clipPath: "polygon(50% 0%, 60% 25%, 100% 25%, 75% 50%, 100% 75%, 60% 75%, 50% 100%, 40% 75%, 0% 75%, 25% 50%, 0% 25%, 40% 25%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Compact Star"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-violet-500"
  style={{
    clipPath: "polygon(50% 5%, 58% 28%, 82% 28%, 63% 45%, 72% 68%, 50% 55%, 28% 68%, 37% 45%, 18% 28%, 42% 28%)"
  }}
/>

/* Compact 5-pointed star with tighter inner points */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64 bg-gradient-to-br from-purple-400 to-violet-500"
            style={{
              clipPath: "polygon(50% 5%, 58% 28%, 82% 28%, 63% 45%, 72% 68%, 50% 55%, 28% 68%, 37% 45%, 18% 28%, 42% 28%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}
