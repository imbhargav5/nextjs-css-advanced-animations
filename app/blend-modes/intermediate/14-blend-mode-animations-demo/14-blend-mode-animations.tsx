"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function BlendModeAnimationsDemo() {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationProgress((prev) => (prev + 0.01) % 1);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const blendModes: Array<"multiply" | "screen" | "overlay" | "difference"> = ["multiply", "screen", "overlay", "difference"];
  const currentBlendMode = blendModes[Math.floor(animationProgress * blendModes.length)] || blendModes[0];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Mode Animations</h2>

      <DemoBlock
        title="Animated Blend"
        code={`const [progress, setProgress] = useState(0);
const blendModes = ["multiply", "screen", "overlay", "difference"];
const currentMode = blendModes[Math.floor(progress * blendModes.length)];

useEffect(() => {
  const interval = setInterval(() => {
    setProgress((prev) => (prev + 0.01) % 1);
  }, 16);
  return () => clearInterval(interval);
}, []);

<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
    style={{
      mixBlendMode: currentMode,
      transform: \`scale(\${0.8 + progress * 0.4})\`
    }}
  />
</div>

/* Animated blend with scaling */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
              style={{
                mixBlendMode: currentBlendMode,
                transform: `scale(${0.8 + animationProgress * 0.4})`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Rotating Blend"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
    style={{
      mixBlendMode: currentMode,
      transform: \`rotate(\${progress * 360}deg)\`
    }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
              style={{
                mixBlendMode: currentBlendMode,
                transform: `rotate(${animationProgress * 360}deg)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Pulsing Blend"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
    style={{
      mixBlendMode: currentMode,
      opacity: 0.5 + Math.sin(progress * Math.PI * 2) * 0.5
    }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
              style={{
                mixBlendMode: currentBlendMode,
                opacity: 0.5 + Math.sin(animationProgress * Math.PI * 2) * 0.5,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Animation"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
    style={{
      mixBlendMode: currentMode,
      transform: \`scale(\${0.9 + Math.sin(progress * Math.PI * 2) * 0.2}) rotate(\${progress * 180}deg)\`
    }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
              style={{
                mixBlendMode: currentBlendMode,
                transform: `scale(${0.9 + Math.sin(animationProgress * Math.PI * 2) * 0.2}) rotate(${animationProgress * 180}deg)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

