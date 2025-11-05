"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function BlendModeRevealEffectsDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 0.01) % 1);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Mode Reveal Effects</h2>

      <DemoBlock
        title="Circle Reveal"
        code={`const [progress, setProgress] = useState(0);

<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{
      mixBlendMode: "multiply",
      clipPath: \`circle(\${progress * 100}% at 50% 50%)\`,
    }}
  />
</div>

/* Expanding circle reveal with blend mode */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{
                mixBlendMode: "multiply",
                clipPath: `circle(${progress * 100}% at 50% 50%)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Slide Reveal"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400 overflow-hidden">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{
      mixBlendMode: "screen",
      transform: \`translateX(\${(progress - 1) * 100}%)\`,
    }}
  />
</div>

/* Sliding reveal effect */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-indigo-400 to-purple-400 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{
                mixBlendMode: "screen",
                transform: `translateX(${(progress - 1) * 100}%)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Fade Reveal"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
    style={{
      mixBlendMode: "overlay",
      opacity: progress,
    }}
  />
</div>

/* Simple opacity fade reveal */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
              style={{
                mixBlendMode: "overlay",
                opacity: progress,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Reveal"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
    style={{
      mixBlendMode: "difference",
      clipPath: \`polygon(0% 0%, \${progress * 100}% 0%, \${progress * 100}% 100%, 0% 100%)\`,
      opacity: 0.5 + progress * 0.5,
    }}
  />
</div>

/* Combines clip-path and opacity */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
              style={{
                mixBlendMode: "difference",
                clipPath: `polygon(0% 0%, ${progress * 100}% 0%, ${progress * 100}% 100%, 0% 100%)`,
                opacity: 0.5 + progress * 0.5,
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
