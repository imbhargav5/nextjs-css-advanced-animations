"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function BlendModeTransformsDemo() {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
      setScale(1 + Math.sin(Date.now() / 1000) * 0.3);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Mode Transforms</h2>

      <DemoBlock
        title="Rotate Transform"
        code={`const [rotation, setRotation] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setRotation((prev) => (prev + 1) % 360);
  }, 16);
  return () => clearInterval(interval);
}, []);

<div
  style={{
    mixBlendMode: "multiply",
    transform: \`rotate(\${rotation}deg)\`,
  }}
/>

/* Continuous rotation with blend mode */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
              style={{
                mixBlendMode: "multiply",
                transform: `rotate(${rotation}deg)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Scale Transform"
        code={`const [scale, setScale] = useState(1);

useEffect(() => {
  const interval = setInterval(() => {
    setScale(1 + Math.sin(Date.now() / 1000) * 0.3);
  }, 16);
  return () => clearInterval(interval);
}, []);

<div
  style={{
    mixBlendMode: "screen",
    transform: \`scale(\${scale})\`,
  }}
/>

/* Pulsing scale effect */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
              style={{
                mixBlendMode: "screen",
                transform: `scale(${scale})`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Skew Transform"
        code={`<div
  style={{
    mixBlendMode: "overlay",
    transform: \`skew(\${rotation % 45}deg, \${(rotation * 2) % 30}deg)\`,
  }}
/>

/* Skew creates perspective-like distortion */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
              style={{
                mixBlendMode: "overlay",
                transform: `skew(${rotation % 45}deg, ${(rotation * 2) % 30}deg)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Transforms"
        code={`<div
  style={{
    mixBlendMode: "difference",
    transform: \`rotate(\${rotation}deg)
                scale(\${scale})
                translate(\${Math.sin(rotation * Math.PI / 180) * 20}px,
                         \${Math.cos(rotation * Math.PI / 180) * 20}px)\`,
  }}
/>

/* Combines rotation, scale, and translation */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
              style={{
                mixBlendMode: "difference",
                transform: `rotate(${rotation}deg) scale(${scale}) translate(${Math.sin(rotation * Math.PI / 180) * 20}px, ${Math.cos(rotation * Math.PI / 180) * 20}px)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
