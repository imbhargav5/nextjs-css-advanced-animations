"use client";

import { DemoBlock } from "@/components/demo-block";

export function BlendModesClipDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Modes with Clip-Path</h2>

      <DemoBlock
        title="Multiply Blend"
        code={`<div className="relative h-64">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 mix-blend-multiply"
    style={{ clipPath: "circle(50% at 50% 50%)" }}
  />
</div>

/* Multiply blend mode creates darker colors */`}
      >
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500" />
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 mix-blend-multiply"
            style={{
              clipPath: "circle(50% at 50% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Screen Blend"
        code={`<div className="relative h-64">
  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 mix-blend-screen"
    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
  />
</div>

/* Screen blend mode creates lighter colors */`}
      >
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
          <div
            className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 mix-blend-screen"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Overlay Blend"
        code={`<div className="relative h-64">
  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500 mix-blend-overlay"
    style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)" }}
  />
</div>

/* Overlay combines multiply and screen */`}
      >
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500" />
          <div
            className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500 mix-blend-overlay"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Difference Blend"
        code={`<div className="relative h-64">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 mix-blend-difference"
    style={{ clipPath: "inset(10% round 20px)" }}
  />
</div>

/* Difference creates inverted colors */`}
      >
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500" />
          <div
            className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 mix-blend-difference"
            style={{
              clipPath: "inset(10% round 20px)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

