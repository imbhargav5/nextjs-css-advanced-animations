"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function InsetAnimationDemo() {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Animated Inset Transitions</h2>

      <div className="flex justify-center mb-8">
        <Button onClick={() => setIsAnimated(!isAnimated)}>
          {isAnimated ? "Expand" : "Contract"}
        </Button>
      </div>

      {/* Example 1: Uniform inset */}
      <DemoBlock
        title="Uniform Inset"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-700 ease-in-out"
  style={{
    clipPath: isAnimated ? "inset(30%)" : "inset(5%)"
  }}
/>

/* Uniform inset from all sides */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: isAnimated ? "inset(30%)" : "inset(5%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 2: Asymmetric inset */}
      <DemoBlock
        title="Asymmetric Inset"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-700 ease-in-out"
  style={{
    clipPath: isAnimated ? "inset(20% 10% 5% 15%)" : "inset(5% 20% 20% 5%)"
  }}
/>

/* Different inset values for each side */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: isAnimated ? "inset(20% 10% 5% 15%)" : "inset(5% 20% 20% 5%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 3: Inset with rounding */}
      <DemoBlock
        title="Rounded Inset"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-700 ease-in-out"
  style={{
    clipPath: isAnimated ? "inset(10% round 40px)" : "inset(10% round 5px)"
  }}
/>

/* Animated border radius with inset */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: isAnimated ? "inset(10% round 40px)" : "inset(10% round 5px)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 4: Complex inset */}
      <DemoBlock
        title="Complex Inset"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-700 ease-in-out"
  style={{
    clipPath: isAnimated
      ? "inset(5% 20% 15% 10% round 25px 10px 35px 15px)"
      : "inset(15% 5% 5% 20% round 5px 25px 5px 25px)"
  }}
/>

/* Asymmetric inset with individual corner radii */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: isAnimated
                ? "inset(5% 20% 15% 10% round 25px 10px 35px 15px)"
                : "inset(15% 5% 5% 20% round 5px 25px 5px 25px)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

