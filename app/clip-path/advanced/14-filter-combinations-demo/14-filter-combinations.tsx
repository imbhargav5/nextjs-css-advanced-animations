"use client";

import { DemoBlock } from "@/components/demo-block";

export function FilterCombinationsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Filter Combinations</h2>

      <DemoBlock
        title="Blur + Clip"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
  style={{
    clipPath: "circle(50% at 50% 50%)",
    filter: "blur(4px)"
  }}
/>

/* Blur filter applied to clipped element */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-300"
          style={{
            clipPath: "circle(50% at 50% 50%)",
            filter: "blur(4px)",
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Brightness + Clip"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
  style={{
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    filter: "brightness(1.5)"
  }}
/>

/* Brightness enhances clipped element */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            filter: "brightness(1.5)",
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Contrast + Clip"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500"
  style={{
    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
    filter: "contrast(1.5)"
  }}
/>

/* Contrast filter on hexagon */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-300"
          style={{
            clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            filter: "contrast(1.5)",
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Multiple Filters"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500"
  style={{
    clipPath: "inset(10% round 20px)",
    filter: "blur(2px) brightness(1.2) contrast(1.3) saturate(1.5)"
  }}
/>

/* Multiple filters combined */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
          style={{
            clipPath: "inset(10% round 20px)",
            filter: "blur(2px) brightness(1.2) contrast(1.3) saturate(1.5)",
          }}
        />
      </DemoBlock>
    </div>
  );
}

