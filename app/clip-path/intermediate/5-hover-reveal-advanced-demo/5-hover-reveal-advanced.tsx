"use client";

import { DemoBlock } from "@/components/demo-block";

export function HoverRevealAdvancedDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Advanced Hover Reveal</h2>

      {/* Example 1: Multi-stage reveal */}
      <DemoBlock
        title="Multi-Stage Reveal"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 transition-all duration-700 ease-out"
    style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.clipPath = "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)";
    }}
  />
</div>

/* Hover to reveal overlay layer */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 transition-all duration-700 ease-out"
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.clipPath = "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)";
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 2: Diagonal sweep */}
      <DemoBlock
        title="Diagonal Sweep"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 transition-all duration-500 ease-out"
    style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.clipPath = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
    }}
  />
</div>

/* Left to right sweep reveal */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 transition-all duration-500 ease-out"
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.clipPath = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 3: Curtain reveal */}
      <DemoBlock
        title="Curtain Reveal"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 transition-all duration-600 ease-out"
    style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.clipPath = "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)";
    }}
  />
</div>

/* Curtain opens from center */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 transition-all duration-600 ease-out"
              style={{
                clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.clipPath = "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)";
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 4: Explosion reveal */}
      <DemoBlock
        title="Explosion Reveal"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-pink-500 transition-all duration-800 ease-out"
    style={{ clipPath: "circle(0% at 50% 50%)" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.clipPath = "circle(150% at 50% 50%)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.clipPath = "circle(0% at 50% 50%)";
    }}
  />
</div>

/* Circle expands from center */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-pink-500 transition-all duration-800 ease-out"
              style={{
                clipPath: "circle(0% at 50% 50%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.clipPath = "circle(150% at 50% 50%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.clipPath = "circle(0% at 50% 50%)";
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

