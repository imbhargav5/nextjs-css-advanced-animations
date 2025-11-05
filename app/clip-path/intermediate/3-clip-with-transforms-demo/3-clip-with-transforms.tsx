"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function ClipWithTransformsDemo() {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Clip-Path with Transforms</h2>

      <div className="flex gap-4 justify-center mb-8 flex-wrap">
        <Button onClick={() => setRotate((r) => r + 45)}>
          Rotate 45°
        </Button>
        <Button onClick={() => setScale((s) => s === 1 ? 1.2 : 1)}>
          Toggle Scale
        </Button>
        <Button
          onClick={() => {
            setRotate(0);
            setScale(1);
          }}
          variant="outline"
        >
          Reset
        </Button>
      </div>

      {/* Example 1: Rotated clip */}
      <DemoBlock
        title="Rotated Hexagon"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-500"
  style={{
    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
    transform: \`rotate(\${rotate}deg) scale(\${scale})\`
  }}
/>

/* Clip-path applies first, then transform */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-500"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
              transform: `rotate(${rotate}deg) scale(${scale})`,
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 2: Scaled clip */}
      <DemoBlock
        title="Scaled Diamond"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-500"
  style={{
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    transform: \`scale(\${scale}) rotate(\${rotate}deg)\`
  }}
/>

/* Scale and rotate combined */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-500"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              transform: `scale(${scale}) rotate(${rotate}deg)`,
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 3: Skewed clip */}
      <DemoBlock
        title="Skewed Rectangle"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-500"
  style={{
    clipPath: "inset(10% round 15px)",
    transform: \`skew(\${rotate / 10}deg, \${rotate / 20}deg)\`
  }}
/>

/* Inset clip-path with skew transform */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-500"
            style={{
              clipPath: "inset(10% round 15px)",
              transform: `skew(${rotate / 10}deg, ${rotate / 20}deg)`,
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 4: Combined transforms */}
      <DemoBlock
        title="Combined Transforms"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-500"
  style={{
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    transform: \`rotate(\${rotate}deg) scale(\${scale}) translate(\${rotate / 10}px, \${rotate / 10}px)\`
  }}
/>

/* Multiple transforms applied together */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-500"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              transform: `rotate(${rotate}deg) scale(${scale}) translate(${rotate / 10}px, ${rotate / 10}px)`,
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

