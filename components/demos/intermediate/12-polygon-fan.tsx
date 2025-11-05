"use client";

import { useState } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Fan-Shaped Polygon Animation</h2>
        
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsFanned(!isFanned)}
            className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
          >
            {isFanned ? "Close Fan" : "Open Fan"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: 8-segment fan */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">8-Segment Fan</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: generateFanPoints(isFanned, 8),
                }}
              />
            </div>
          </div>

          {/* Example 2: 6-segment fan */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">6-Segment Fan</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: generateFanPoints(isFanned, 6),
                }}
              />
            </div>
          </div>

          {/* Example 3: 12-segment fan */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">12-Segment Fan</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: generateFanPoints(isFanned, 12),
                }}
              />
            </div>
          </div>

          {/* Example 4: Partial fan */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Partial Fan</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: isFanned
                    ? "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 80% 70%, 50% 50%)"
                    : "polygon(50% 50%, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 50%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`/* Generate fan points dynamically */
function generateFanPoints(open, segments) {
  const points = ["50% 50%"];
  const radius = open ? 100 : 50;
  // Calculate points around circle
  return \`polygon(\${points.join(", ")})\`;
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

