"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function AnimatedBlendTransitionsDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 0.01) % 1);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const blendModes: Array<"multiply" | "screen" | "overlay" | "difference" | "hard-light"> = [
    "multiply",
    "screen",
    "overlay",
    "difference",
    "hard-light",
  ];

  const currentMode = blendModes[Math.floor(progress * blendModes.length)] || blendModes[0];
  const nextMode = blendModes[(Math.floor(progress * blendModes.length) + 1) % blendModes.length];
  const localProgress = (progress * blendModes.length) % 1;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Animated Blend Transitions</h2>

      <DemoBlock
        title="Complex Transition"
        code={`const [progress, setProgress] = useState(0);
const currentMode = blendModes[Math.floor(progress * blendModes.length)];
const nextMode = blendModes[(index + 1) % blendModes.length];
const localProgress = (progress * blendModes.length) % 1;

<div
  style={{
    mixBlendMode: currentMode,
    opacity: 1 - localProgress,
    transform: \`scale(\${1 - localProgress * 0.2}) rotate(\${localProgress * 10}deg)\`,
  }}
/>
<div
  style={{
    mixBlendMode: nextMode,
    opacity: localProgress,
    transform: \`scale(\${0.8 + localProgress * 0.2}) rotate(\${localProgress * 10 - 10}deg)\`,
  }}
/>

/* Cross-fade with scale and rotation */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
              style={{
                mixBlendMode: currentMode,
                opacity: 1 - localProgress,
                transform: `scale(${1 - localProgress * 0.2}) rotate(${localProgress * 10}deg)`,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
              style={{
                mixBlendMode: nextMode,
                opacity: localProgress,
                transform: `scale(${0.8 + localProgress * 0.2}) rotate(${localProgress * 10 - 10}deg)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multi-Property Animation"
        code={`<div
  style={{
    mixBlendMode: currentMode,
    opacity: 1 - localProgress,
    transform: \`translateX(\${localProgress * 50}px) scale(\${1 - localProgress * 0.3})\`,
    filter: \`blur(\${localProgress * 5}px)\`,
  }}
/>
<div
  style={{
    mixBlendMode: nextMode,
    opacity: localProgress,
    transform: \`translateX(\${(localProgress - 1) * 50}px) scale(\${0.7 + localProgress * 0.3})\`,
    filter: \`blur(\${(1 - localProgress) * 5}px)\`,
  }}
/>

/* Animates position, scale, blur, and blend mode */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
              style={{
                mixBlendMode: currentMode,
                opacity: 1 - localProgress,
                transform: `translateX(${localProgress * 50}px) scale(${1 - localProgress * 0.3})`,
                filter: `blur(${localProgress * 5}px)`,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
              style={{
                mixBlendMode: nextMode,
                opacity: localProgress,
                transform: `translateX(${(localProgress - 1) * 50}px) scale(${0.7 + localProgress * 0.3})`,
                filter: `blur(${(1 - localProgress) * 5}px)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Pulsing Blend"
        code={`<div
  className="absolute inset-0"
  style={{
    mixBlendMode: currentMode,
    opacity: 0.5 + Math.sin(progress * Math.PI * 4) * 0.5,
    transform: \`scale(\${0.9 + Math.sin(progress * Math.PI * 4) * 0.2})\`,
  }}
/>

/* Pulsing opacity and scale with sine wave */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
              style={{
                mixBlendMode: currentMode,
                opacity: 0.5 + Math.sin(progress * Math.PI * 4) * 0.5,
                transform: `scale(${0.9 + Math.sin(progress * Math.PI * 4) * 0.2})`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Rotating Blend"
        code={`<div
  className="absolute inset-0"
  style={{
    mixBlendMode: currentMode,
    transform: \`rotate(\${progress * 360}deg) scale(\${1 + Math.sin(progress * Math.PI * 2) * 0.3})\`,
  }}
/>

/* Continuous rotation with pulsing scale */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
              style={{
                mixBlendMode: currentMode,
                transform: `rotate(${progress * 360}deg) scale(${1 + Math.sin(progress * Math.PI * 2) * 0.3})`,
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
