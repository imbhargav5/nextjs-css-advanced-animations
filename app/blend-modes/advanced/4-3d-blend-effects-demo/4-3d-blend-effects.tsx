"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function Blend3DEffectsDemo() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">3D Blend Effects</h2>

      <DemoBlock
        title="3D Rotate Blend"
        code={`const [rotation, setRotation] = useState(0);

<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{
      mixBlendMode: "multiply",
      transform: \`rotateY(\${rotation}deg)\`,
      transformStyle: "preserve-3d",
    }}
  />
</div>

/* 3D rotation with blend modes */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-purple-500 perspective-1000">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{
                mixBlendMode: "multiply",
                transform: `rotateY(${rotation}deg)`,
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="3D Perspective"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400"
     style={{ perspective: "1000px" }}>
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{
      mixBlendMode: "screen",
      transform: \`rotateX(\${rotation}deg) rotateY(\${rotation * 0.5}deg)\`,
      transformStyle: "preserve-3d",
    }}
  />
</div>

/* Dual-axis rotation with perspective */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-indigo-400 to-purple-400" style={{ perspective: "1000px" }}>
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{
                mixBlendMode: "screen",
                transform: `rotateX(${rotation}deg) rotateY(${rotation * 0.5}deg)`,
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multiple 3D Layers"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400"
     style={{ perspective: "1000px" }}>
  <div
    style={{
      mixBlendMode: "overlay",
      transform: \`rotateY(\${rotation}deg) translateZ(20px)\`,
      transformStyle: "preserve-3d",
    }}
  />
  <div
    style={{
      mixBlendMode: "difference",
      transform: \`rotateY(\${rotation + 120}deg) translateZ(20px)\`,
      transformStyle: "preserve-3d",
    }}
  />
  <div
    style={{
      mixBlendMode: "hard-light",
      transform: \`rotateY(\${rotation + 240}deg) translateZ(20px)\`,
      transformStyle: "preserve-3d",
    }}
  />
</div>

/* Three layers rotating at different angles */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-green-400 to-teal-400" style={{ perspective: "1000px" }}>
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
              style={{
                mixBlendMode: "overlay",
                transform: `rotateY(${rotation}deg) translateZ(20px)`,
                transformStyle: "preserve-3d",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400"
              style={{
                mixBlendMode: "difference",
                transform: `rotateY(${rotation + 120}deg) translateZ(20px)`,
                transformStyle: "preserve-3d",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400"
              style={{
                mixBlendMode: "hard-light",
                transform: `rotateY(${rotation + 240}deg) translateZ(20px)`,
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex 3D"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400"
     style={{ perspective: "1000px" }}>
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
    style={{
      mixBlendMode: "multiply",
      transform: \`rotateX(\${rotation}deg)
                  rotateY(\${rotation}deg)
                  rotateZ(\${rotation * 0.5}deg)
                  scale(\${1 + Math.sin(rotation * Math.PI / 180) * 0.2})\`,
      transformStyle: "preserve-3d",
    }}
  />
</div>

/* Complex multi-axis rotation with scaling */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-indigo-400" style={{ perspective: "1000px" }}>
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
              style={{
                mixBlendMode: "multiply",
                transform: `rotateX(${rotation}deg) rotateY(${rotation}deg) rotateZ(${rotation * 0.5}deg) scale(${1 + Math.sin(rotation * Math.PI / 180) * 0.2})`,
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
