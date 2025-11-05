"use client";

import { useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function Perspective3dDemo() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">3D Perspective with Clip-Path</h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <div>
          <label className="block text-sm font-semibold mb-2">Rotate X: {rotateX}°</label>
          <input
            type="range"
            min="-45"
            max="45"
            value={rotateX}
            onChange={(e) => setRotateX(Number(e.target.value))}
            className="w-32"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Rotate Y: {rotateY}°</label>
          <input
            type="range"
            min="-45"
            max="45"
            value={rotateY}
            onChange={(e) => setRotateY(Number(e.target.value))}
            className="w-32"
          />
        </div>
      </div>

      <DemoBlock
        title="3D Cube Face"
        code={`<div style={{ perspective: "1000px" }}>
  <div
    className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
    style={{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transform: \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`,
      transformStyle: "preserve-3d"
    }}
  />
</div>`}
      >
        <div style={{ perspective: "1000px" }}>
          <div
            className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-300"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="3D Hexagon"
        code={`<div style={{ perspective: "1000px" }}>
  <div
    className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
    style={{
      clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
      transform: \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`,
      transformStyle: "preserve-3d"
    }}
  />
</div>`}
      >
        <div style={{ perspective: "1000px" }}>
          <div
            className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="3D Diamond"
        code={`<div style={{ perspective: "1000px" }}>
  <div
    className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
    style={{
      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      transform: \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`,
      transformStyle: "preserve-3d"
    }}
  />
</div>`}
      >
        <div style={{ perspective: "1000px" }}>
          <div
            className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-300"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="3D Layers"
        code={`<div className="relative h-64" style={{ perspective: "1000px" }}>
  {[0, 1, 2].map((i) => (
    <div
      key={i}
      className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
      style={{
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        transform: \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) translateZ(\${i * 20}px)\`,
        transformStyle: "preserve-3d",
        opacity: 0.7 - i * 0.2
      }}
    />
  ))}
</div>

/* Multiple layers with different Z positions */`}
      >
        <div className="relative h-64" style={{ perspective: "1000px" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${i * 20}px)`,
                transformStyle: "preserve-3d",
                opacity: 0.7 - i * 0.2,
              }}
            />
          ))}
        </div>
      </DemoBlock>
    </div>
  );
}

