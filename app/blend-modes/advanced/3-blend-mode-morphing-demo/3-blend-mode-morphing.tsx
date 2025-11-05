"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function BlendModeMorphingDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 0.005) % 1);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const blendModes: Array<"multiply" | "screen" | "overlay" | "hard-light" | "difference"> = [
    "multiply",
    "screen",
    "overlay",
    "hard-light",
    "difference",
  ];

  const blendIndex = Math.floor(progress * blendModes.length);
  const nextBlendIndex = (blendIndex + 1) % blendModes.length;
  const localProgress = (progress * blendModes.length) % 1;

  // Interpolate between blend modes visually using opacity
  const currentMode = blendModes[blendIndex];
  const nextMode = blendModes[nextBlendIndex];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Mode Morphing</h2>

      <DemoBlock
        title="Morphing Blend"
        code={`const [progress, setProgress] = useState(0);
const blendModes = ['multiply', 'screen', 'overlay'];

const currentMode = blendModes[Math.floor(progress * blendModes.length)];
const nextMode = blendModes[(currentIndex + 1) % blendModes.length];
const localProgress = (progress * blendModes.length) % 1;

// Layer with current mode fades out
<div style={{ mixBlendMode: currentMode, opacity: 1 - localProgress * 0.3 }} />
// Layer with next mode fades in
<div style={{ mixBlendMode: nextMode, opacity: localProgress * 0.7 }} />

/* Smooth morphing between blend modes */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
              style={{
                mixBlendMode: currentMode,
                opacity: 1 - localProgress * 0.3,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
              style={{
                mixBlendMode: nextMode,
                opacity: localProgress * 0.7,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Smooth Transition"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{
      mixBlendMode: currentMode,
      opacity: 1 - localProgress,
    }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{
      mixBlendMode: nextMode,
      opacity: localProgress,
    }}
  />
</div>

/* Cross-fade between blend modes */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
              style={{
                mixBlendMode: currentMode,
                opacity: 1 - localProgress,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
              style={{
                mixBlendMode: nextMode,
                opacity: localProgress,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Morph"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
    style={{
      mixBlendMode: currentMode,
      transform: \`scale(\${1 - localProgress * 0.2})\`,
      opacity: 1 - localProgress * 0.5,
    }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
    style={{
      mixBlendMode: nextMode,
      transform: \`scale(\${0.8 + localProgress * 0.2})\`,
      opacity: localProgress * 0.5,
    }}
  />
</div>

/* Morph with scale animation */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
              style={{
                mixBlendMode: currentMode,
                transform: `scale(${1 - localProgress * 0.2})`,
                opacity: 1 - localProgress * 0.5,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
              style={{
                mixBlendMode: nextMode,
                transform: `scale(${0.8 + localProgress * 0.2})`,
                opacity: localProgress * 0.5,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multi-Layer Morph"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  {/* Background layers */}
  <div style={{ mixBlendMode: currentMode, opacity: 1 - localProgress }} />
  <div style={{ mixBlendMode: nextMode, opacity: localProgress }} />

  {/* Foreground circle with same morph */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-32 h-32 bg-yellow-500 rounded-full"
       style={{ mixBlendMode: currentMode, opacity: 1 - localProgress * 0.5 }} />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-32 h-32 bg-yellow-500 rounded-full"
       style={{ mixBlendMode: nextMode, opacity: localProgress * 0.5 }} />
</div>

/* Multiple elements morphing together */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
              style={{
                mixBlendMode: currentMode,
                opacity: 1 - localProgress,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
              style={{
                mixBlendMode: nextMode,
                opacity: localProgress,
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500 rounded-full transition-all duration-100"
              style={{
                mixBlendMode: currentMode,
                opacity: 1 - localProgress * 0.5,
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500 rounded-full transition-all duration-100"
              style={{
                mixBlendMode: nextMode,
                opacity: localProgress * 0.5,
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
