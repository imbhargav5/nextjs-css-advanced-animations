"use client";

import { DemoBlock } from "@/components/demo-block";

export function MultipleCirclesDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Multiple Circles Clip</h2>

      <DemoBlock
        title="Two Circles"
        code={`<div className="relative w-full h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500"
    style={{ clipPath: "circle(30% at 30% 50%)" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500"
    style={{ clipPath: "circle(30% at 70% 50%)" }}
  />
</div>

/* Layer multiple divs with different clip-paths */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500"
              style={{
                clipPath: "circle(30% at 30% 50%)",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500"
              style={{
                clipPath: "circle(30% at 70% 50%)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Three Circles"
        code={`<div className="relative w-full h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500"
    style={{ clipPath: "circle(25% at 25% 50%)" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500"
    style={{ clipPath: "circle(25% at 50% 50%)" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500"
    style={{ clipPath: "circle(25% at 75% 50%)" }}
  />
</div>

/* Three equally spaced circles */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500"
              style={{
                clipPath: "circle(25% at 25% 50%)",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500"
              style={{
                clipPath: "circle(25% at 50% 50%)",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500"
              style={{
                clipPath: "circle(25% at 75% 50%)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Overlapping Circles"
        code={`<div className="relative w-full h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
    style={{ clipPath: "circle(40% at 40% 50%)" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
    style={{ clipPath: "circle(40% at 60% 50%)" }}
  />
</div>

/* Larger circles that overlap in the middle */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <div
              className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
              style={{
                clipPath: "circle(40% at 40% 50%)",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
              style={{
                clipPath: "circle(40% at 60% 50%)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Circle Grid"
        code={`<div className="relative w-full h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
    style={{ clipPath: "circle(20% at 25% 25%)" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
    style={{ clipPath: "circle(20% at 75% 25%)" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
    style={{ clipPath: "circle(20% at 25% 75%)" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
    style={{ clipPath: "circle(20% at 75% 75%)" }}
  />
</div>

/* Four circles in grid pattern */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <div
              className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
              style={{
                clipPath: "circle(20% at 25% 25%)",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
              style={{
                clipPath: "circle(20% at 75% 25%)",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
              style={{
                clipPath: "circle(20% at 25% 75%)",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
              style={{
                clipPath: "circle(20% at 75% 75%)",
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
