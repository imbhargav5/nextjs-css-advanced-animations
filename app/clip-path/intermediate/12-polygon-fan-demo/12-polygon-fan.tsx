"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function PolygonFanDemo() {
  const [isFanned, setIsFanned] = useState(false);

  const generateFanPoints = (open: boolean, segments: number = 8) => {
    const centerX = 50;
    const centerY = 50;
    const radius = open ? 100 : 50;
    const angleStep = 360 / segments;
    const points: string[] = [`${centerX}% ${centerY}%`];

    for (let i = 0; i <= segments; i++) {
      const angle = (i * angleStep - 90) * (Math.PI / 180);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push(`${x}% ${y}%`);
    }

    return `polygon(${points.join(", ")})`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Fan-Shaped Polygon Animation</h2>

      <div className="flex justify-center mb-8">
        <Button onClick={() => setIsFanned(!isFanned)}>
          {isFanned ? "Close Fan" : "Open Fan"}
        </Button>
      </div>

      {/* Example 1: 8-segment fan */}
      <DemoBlock
        title="8-Segment Fan"
        code={`const generateFanPoints = (open, segments = 8) => {
  const centerX = 50, centerY = 50;
  const radius = open ? 100 : 50;
  const angleStep = 360 / segments;
  const points = [\`\${centerX}% \${centerY}%\`];

  for (let i = 0; i <= segments; i++) {
    const angle = (i * angleStep - 90) * (Math.PI / 180);
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push(\`\${x}% \${y}%\`);
  }

  return \`polygon(\${points.join(", ")})\`;
};

/* Fan opens and closes dynamically */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: generateFanPoints(isFanned, 8),
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 2: 6-segment fan */}
      <DemoBlock
        title="6-Segment Fan"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-700 ease-in-out"
  style={{
    clipPath: generateFanPoints(isFanned, 6)
  }}
/>

/* 6-segment variation */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: generateFanPoints(isFanned, 6),
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 3: 12-segment fan */}
      <DemoBlock
        title="12-Segment Fan"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-700 ease-in-out"
  style={{
    clipPath: generateFanPoints(isFanned, 12)
  }}
/>

/* 12-segment variation for smoother appearance */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: generateFanPoints(isFanned, 12),
            }}
          />
        </div>
      </DemoBlock>

      {/* Example 4: Partial fan */}
      <DemoBlock
        title="Partial Fan"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-700 ease-in-out"
  style={{
    clipPath: isFanned
      ? "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 80% 70%, 50% 50%)"
      : "polygon(50% 50%, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 50%)"
  }}
/>

/* Custom partial fan animation */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: isFanned
                ? "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 80% 70%, 50% 50%)"
                : "polygon(50% 50%, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 50%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

