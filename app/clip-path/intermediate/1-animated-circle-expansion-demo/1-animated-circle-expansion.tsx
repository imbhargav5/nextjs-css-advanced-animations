"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function AnimatedCircleExpansionDemo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Animated Circle Expansion</h2>

      <div className="flex justify-center mb-8">
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Collapse" : "Expand"}
        </Button>
      </div>

      {/* Example 1: Center expansion */}
      <DemoBlock
        title="Center Expansion"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-500 ease-out"
  style={{
    clipPath: isExpanded ? "circle(150% at 50% 50%)" : "circle(30% at 50% 50%)"
  }}
/>

/* Smooth transition from small circle to large */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-500 ease-out"
            style={{
              clipPath: isExpanded ? "circle(150% at 50% 50%)" : "circle(30% at 50% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 2: Corner expansion */}
      <DemoBlock
        title="Corner Expansion"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-500 ease-out"
  style={{
    clipPath: isExpanded ? "circle(200% at 0% 0%)" : "circle(20% at 0% 0%)"
  }}
/>

/* Expansion from top-left corner */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-500 ease-out"
            style={{
              clipPath: isExpanded ? "circle(200% at 0% 0%)" : "circle(20% at 0% 0%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 3: Bottom expansion */}
      <DemoBlock
        title="Bottom Expansion"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-500 ease-out"
  style={{
    clipPath: isExpanded ? "circle(200% at 50% 100%)" : "circle(25% at 50% 100%)"
  }}
/>

/* Expansion from bottom center */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-500 ease-out"
            style={{
              clipPath: isExpanded ? "circle(200% at 50% 100%)" : "circle(25% at 50% 100%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 4: Side expansion */}
      <DemoBlock
        title="Side Expansion"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-500 ease-out"
  style={{
    clipPath: isExpanded ? "circle(200% at 100% 50%)" : "circle(20% at 100% 50%)"
  }}
/>

/* Expansion from right side */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-500 ease-out"
            style={{
              clipPath: isExpanded ? "circle(200% at 100% 50%)" : "circle(20% at 100% 50%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

