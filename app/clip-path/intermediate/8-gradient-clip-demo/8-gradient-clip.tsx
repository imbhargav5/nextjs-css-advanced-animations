"use client";

import { DemoBlock } from "@/components/demo-block";

export function GradientClipDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Gradient with Clip-Path</h2>

      {/* Example 1: Circle gradient */}
      <DemoBlock
        title="Circle Gradient"
        code={`<div
  className="w-full h-64"
  style={{
    clipPath: "circle(50% at 50% 50%)",
    background: "radial-gradient(circle, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 50%, transparent 100%)"
  }}
/>

/* Radial gradient clipped to circle shape */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64"
            style={{
              clipPath: "circle(50% at 50% 50%)",
              background: "radial-gradient(circle, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 50%, transparent 100%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 2: Polygon gradient */}
      <DemoBlock
        title="Polygon Gradient"
        code={`<div
  className="w-full h-64"
  style={{
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    background: "linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(147, 51, 234) 100%)"
  }}
/>

/* Linear gradient within triangle shape */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              background: "linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(147, 51, 234) 100%)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 3: Multiple gradients */}
      <DemoBlock
        title="Multiple Gradients"
        code={`<div className="relative w-full h-64">
  <div
    className="absolute inset-0"
    style={{
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      background: "linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(20, 184, 166) 100%)",
      opacity: 0.7
    }}
  />
  <div
    className="absolute inset-0"
    style={{
      clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
      background: "linear-gradient(225deg, rgb(59, 130, 246) 0%, rgb(147, 51, 234) 100%)",
      opacity: 0.7
    }}
  />
</div>

/* Overlapping gradient shapes */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64">
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                background: "linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(20, 184, 166) 100%)",
                opacity: 0.7,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                background: "linear-gradient(225deg, rgb(59, 130, 246) 0%, rgb(147, 51, 234) 100%)",
                opacity: 0.7,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 4: Gradient inset */}
      <DemoBlock
        title="Gradient Inset"
        code={`<div
  className="w-full h-64"
  style={{
    clipPath: "inset(10% round 20px)",
    background: "linear-gradient(45deg, rgb(251, 146, 60) 0%, rgb(239, 68, 68) 50%, rgb(168, 85, 247) 100%)"
  }}
/>

/* Multi-color gradient with rounded inset */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64"
            style={{
              clipPath: "inset(10% round 20px)",
              background: "linear-gradient(45deg, rgb(251, 146, 60) 0%, rgb(239, 68, 68) 50%, rgb(168, 85, 247) 100%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

