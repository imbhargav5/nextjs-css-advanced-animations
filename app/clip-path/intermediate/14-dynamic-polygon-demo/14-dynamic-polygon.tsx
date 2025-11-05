"use client";

import { useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function DynamicPolygonDemo() {
  const [sides, setSides] = useState(6);

  const generatePolygon = (numSides: number) => {
    const centerX = 50;
    const centerY = 50;
    const radius = 40;
    const points: string[] = [];

    for (let i = 0; i < numSides; i++) {
      const angle = (i * 360 / numSides - 90) * (Math.PI / 180);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push(`${x}% ${y}%`);
    }

    return `polygon(${points.join(", ")})`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Dynamic Polygon Generation</h2>

      <div className="flex justify-center mb-8 gap-4 items-center">
        <label className="text-lg font-semibold">Sides:</label>
        <input
          type="range"
          min="3"
          max="12"
          value={sides}
          onChange={(e) => setSides(Number(e.target.value))}
          className="w-48"
        />
        <span className="text-lg font-semibold w-8">{sides}</span>
      </div>

      {/* Example 1: Dynamic polygon */}
      <DemoBlock
        title={`${sides}-Sided Polygon`}
        code={`function generatePolygon(numSides) {
  const centerX = 50, centerY = 50, radius = 40;
  const points = [];

  for (let i = 0; i < numSides; i++) {
    const angle = (i * 360 / numSides - 90) * (Math.PI / 180);
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push(\`\${x}% \${y}%\`);
  }

  return \`polygon(\${points.join(", ")})\`;
}

/* Dynamically generated polygon */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-500"
            style={{
              clipPath: generatePolygon(sides),
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 2: Rotated dynamic */}
      <DemoBlock
        title={`Rotated ${sides}-Sided`}
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-500"
  style={{
    clipPath: generatePolygon(sides),
    transform: "rotate(15deg)"
  }}
/>

/* Rotated polygon */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-500"
            style={{
              clipPath: generatePolygon(sides),
              transform: "rotate(15deg)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 3: Different sizes */}
      <DemoBlock
        title={`Scaled ${sides}-Sided`}
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-500"
  style={{
    clipPath: generatePolygon(sides),
    transform: "scale(0.8)"
  }}
/>

/* Scaled polygon */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-500"
            style={{
              clipPath: generatePolygon(sides),
              transform: "scale(0.8)",
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 4: Multiple layers */}
      <DemoBlock
        title={`Layered ${sides}-Sided`}
        code={`<div className="relative w-full h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-500"
    style={{
      clipPath: generatePolygon(sides),
      opacity: 0.6
    }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 transition-all duration-500"
    style={{
      clipPath: generatePolygon(sides),
      transform: "scale(0.7)",
      opacity: 0.6
    }}
  />
</div>

/* Nested layered polygons */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64">
            <div
              className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-500"
              style={{
                clipPath: generatePolygon(sides),
                opacity: 0.6,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 transition-all duration-500"
              style={{
                clipPath: generatePolygon(sides),
                transform: "scale(0.7)",
                opacity: 0.6,
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

