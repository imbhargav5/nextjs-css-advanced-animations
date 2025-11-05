"use client";

import { useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function MaskRevealDemo() {
  const [revealProgress, setRevealProgress] = useState(0);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Mask Reveal Effect</h2>

      <div className="flex justify-center mb-8 gap-4">
        <input
          type="range"
          min="0"
          max="100"
          value={revealProgress}
          onChange={(e) => setRevealProgress(Number(e.target.value))}
          className="w-64"
        />
        <span className="text-lg font-semibold">{revealProgress}%</span>
      </div>

      {/* Example 1: Circle mask */}
      <DemoBlock
        title="Circle Mask"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
    style={{
      clipPath: \`circle(\${revealProgress}% at 50% 50%)\`
    }}
  />
</div>

/* Use slider to control reveal progress */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
              style={{
                clipPath: `circle(${revealProgress}% at 50% 50%)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 2: Polygon mask */}
      <DemoBlock
        title="Polygon Mask"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
    style={{
      clipPath: \`polygon(0% 0%, \${revealProgress}% 0%, \${revealProgress}% 100%, 0% 100%)\`
    }}
  />
</div>

/* Left-to-right wipe reveal */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
              style={{
                clipPath: `polygon(0% 0%, ${revealProgress}% 0%, ${revealProgress}% 100%, 0% 100%)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 3: Diagonal mask */}
      <DemoBlock
        title="Diagonal Mask"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500 transition-all duration-300"
    style={{
      clipPath: \`polygon(0% 0%, \${revealProgress}% \${revealProgress * 0.5}%, \${revealProgress * 0.5}% \${revealProgress}%, 0% 100%)\`
    }}
  />
</div>

/* Diagonal wipe reveal */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500 transition-all duration-300"
              style={{
                clipPath: `polygon(0% 0%, ${revealProgress}% ${revealProgress * 0.5}%, ${revealProgress * 0.5}% ${revealProgress}%, 0% 100%)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 4: Ellipse mask */}
      <DemoBlock
        title="Ellipse Mask"
        code={`<div className="relative w-full h-64 overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500" />
  <div
    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 transition-all duration-300"
    style={{
      clipPath: \`ellipse(\${revealProgress}% \${revealProgress * 0.7}% at 50% 50%)\`
    }}
  />
</div>

/* Elliptical reveal mask */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 transition-all duration-300"
              style={{
                clipPath: `ellipse(${revealProgress}% ${revealProgress * 0.7}% at 50% 50%)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

