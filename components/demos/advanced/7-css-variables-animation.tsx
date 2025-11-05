"use client";

import { useState, useEffect } from "react";

export function CssVariablesAnimationDemo() {
  const [radius, setRadius] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius((r) => (r >= 60 ? 30 : r + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">CSS Variables Animation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: CSS variable circle */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">CSS Variable Circle</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-100"
                style={{
                  clipPath: `circle(var(--radius, ${radius}%) at 50% 50%)`,
                  ["--radius" as any]: `${radius}%`,
                }}
              />
            </div>
          </div>

          {/* Example 2: Multiple variables */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple Variables</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-100"
                style={{
                  clipPath: `ellipse(var(--rx, ${radius}%) var(--ry, ${radius * 0.7}%) at var(--x, 50%) var(--y, 50%))`,
                  ["--rx" as any]: `${radius}%`,
                  ["--ry" as any]: `${radius * 0.7}%`,
                  ["--x" as any]: `${50 + radius * 0.3}%`,
                  ["--y" as any]: `${50 + radius * 0.2}%`,
                }}
              />
            </div>
          </div>

          {/* Example 3: Polygon with variables */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Polygon Variables</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-100"
                style={{
                  clipPath: `polygon(50% 0%, var(--offset, ${radius}%) 100%, calc(100% - var(--offset, ${radius}%)) 100%)`,
                  ["--offset" as any]: `${radius}%`,
                }}
              />
            </div>
          </div>

          {/* Example 4: Inset with variables */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Inset Variables</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-100"
                style={{
                  clipPath: `inset(var(--inset, ${radius / 2}%) round var(--radius, ${radius / 3}px))`,
                  ["--inset" as any]: `${radius / 2}%`,
                  ["--radius" as any]: `${radius / 3}px`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`element.style.setProperty('--radius', radius + '%');
element.style.clipPath = 'circle(var(--radius) at 50% 50%)';
/* Use CSS variables for dynamic clip-paths */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

