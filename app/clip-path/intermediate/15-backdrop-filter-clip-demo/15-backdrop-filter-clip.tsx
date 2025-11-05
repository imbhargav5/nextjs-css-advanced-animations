"use client";

import { DemoBlock } from "@/components/demo-block";

export function BackdropFilterClipDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Backdrop Filter with Clip-Path</h2>

      {/* Example 1: Blur backdrop */}
      <DemoBlock
        title="Blur Backdrop"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
  <div
    className="absolute inset-0 backdrop-blur-md bg-white/20"
    style={{
      clipPath: "circle(40% at 50% 50%)"
    }}
  />
</div>

/* Frosted glass effect with blur */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
            <div
              className="absolute inset-0 backdrop-blur-md bg-white/20 transition-all duration-300"
              style={{
                clipPath: "circle(40% at 50% 50%)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 2: Brightness backdrop */}
      <DemoBlock
        title="Brightness Backdrop"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500" />
  <div
    className="absolute inset-0 backdrop-brightness-150 backdrop-contrast-125 bg-white/30"
    style={{
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
    }}
  />
</div>

/* Brightness and contrast filters */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500" />
            <div
              className="absolute inset-0 backdrop-brightness-150 backdrop-contrast-125 bg-white/30 transition-all duration-300"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 3: Saturation backdrop */}
      <DemoBlock
        title="Saturation Backdrop"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
  <div
    className="absolute inset-0 backdrop-saturate-200 bg-white/25"
    style={{
      clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
    }}
  />
</div>

/* Saturation filter with hexagon clip */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
            <div
              className="absolute inset-0 backdrop-saturate-200 bg-white/25 transition-all duration-300"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 4: Multiple filters */}
      <DemoBlock
        title="Multiple Filters"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500" />
  <div
    className="absolute inset-0 backdrop-blur-sm backdrop-brightness-125 backdrop-contrast-110 bg-white/20"
    style={{
      clipPath: "inset(10% round 20px)"
    }}
  />
</div>

/* Multiple backdrop filters combined */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500" />
            <div
              className="absolute inset-0 backdrop-blur-sm backdrop-brightness-125 backdrop-contrast-110 bg-white/20 transition-all duration-300"
              style={{
                clipPath: "inset(10% round 20px)",
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

