"use client";

import { useState } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Dynamic Polygon Generation</h2>
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Dynamic polygon */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{sides}-Sided Polygon</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-500"
                style={{
                  clipPath: generatePolygon(sides),
                }}
              />
            </div>
          </div>

          {/* Example 2: Rotated dynamic */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Rotated {sides}-Sided</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-500"
                style={{
                  clipPath: generatePolygon(sides),
                  transform: "rotate(15deg)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Different sizes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Scaled {sides}-Sided</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-500"
                style={{
                  clipPath: generatePolygon(sides),
                  transform: "scale(0.8)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Multiple layers */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Layered {sides}-Sided</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
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
              <div className="h-64" />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`function generatePolygon(numSides) {
  const points = [];
  for (let i = 0; i < numSides; i++) {
    const angle = (i * 360 / numSides - 90) * (Math.PI / 180);
    const x = 50 + 40 * Math.cos(angle);
    const y = 50 + 40 * Math.sin(angle);
    points.push(\`\${x}% \${y}%\`);
  }
  return \`polygon(\${points.join(", ")})\`;
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

