"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function PolygonMorphingDemo() {
  const [isMorphed, setIsMorphed] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Polygon Shape Morphing</h2>

      <div className="flex justify-center mb-8">
        <Button onClick={() => setIsMorphed(!isMorphed)}>
          {isMorphed ? "Morph to Triangle" : "Morph to Star"}
        </Button>
      </div>

      {/* Example 1: Triangle to Square */}
      <DemoBlock
        title="Triangle → Square"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-500 transition-all duration-700 ease-in-out"
  style={{
    clipPath: isMorphed
      ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      : "polygon(50% 0%, 0% 100%, 100% 100%)"
  }}
/>

/* Triangle morphs into a square */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: isMorphed
                ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                : "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 2: Square to Pentagon */}
      <DemoBlock
        title="Square → Pentagon"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500 transition-all duration-700 ease-in-out"
  style={{
    clipPath: isMorphed
      ? "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
      : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  }}
/>

/* Square morphs into a pentagon */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: isMorphed
                ? "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
                : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 3: Star to Hexagon */}
      <DemoBlock
        title="Star → Hexagon"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-700 ease-in-out"
  style={{
    clipPath: isMorphed
      ? "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
      : "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
  }}
/>

/* 10-point star morphs into a hexagon */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: isMorphed
                ? "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
                : "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 4: Arrow to Diamond */}
      <DemoBlock
        title="Arrow → Diamond"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-amber-500 transition-all duration-700 ease-in-out"
  style={{
    clipPath: isMorphed
      ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
      : "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)"
  }}
/>

/* Arrow morphs into a diamond */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-orange-400 to-amber-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: isMorphed
                ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                : "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

