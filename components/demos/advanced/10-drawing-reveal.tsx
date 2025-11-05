"use client";

import { useState } from "react";

export function DrawingRevealDemo() {
  const [progress, setProgress] = useState(0);

  const generateDrawingPath = (progress: number) => {
    const points = [];
    const totalPoints = 20;
    for (let i = 0; i <= totalPoints * progress; i++) {
      const angle = (i / totalPoints) * Math.PI * 2;
      const x = 50 + 40 * Math.cos(angle);
      const y = 50 + 40 * Math.sin(angle);
      points.push(`${x}% ${y}%`);
    }
    if (points.length > 0) {
      return `polygon(50% 50%, ${points.join(", ")})`;
    }
    return "polygon(50% 50%, 50% 50%, 50% 50%)";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Progressive Drawing Reveal</h2>
        
        <div className="flex justify-center mb-8 gap-4 items-center">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-64"
          />
          <span className="text-lg font-semibold">{progress}%</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Circle drawing */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Circle Drawing</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-100"
                style={{
                  clipPath: generateDrawingPath(progress / 100),
                }}
              />
            </div>
          </div>

          {/* Example 2: Star drawing */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Star Drawing</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-100"
                style={{
                  clipPath: progress < 50
                    ? `polygon(50% 50%, ${50 + (progress / 50) * 11}% ${35 + (progress / 50) * 24}%)`
                    : `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, ${79 - ((progress - 50) / 50) * 11}% ${91 - ((progress - 50) / 50) * 21}%, 50% ${70 - ((progress - 50) / 50) * 20}%)`,
                }}
              />
            </div>
          </div>

          {/* Example 3: Hexagon drawing */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hexagon Drawing</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-100"
                style={{
                  clipPath: `polygon(50% 50%, ${50 + (progress / 100) * -20}% ${(progress / 100) * -50}%, ${50 + (progress / 100) * 20}% ${(progress / 100) * -50}%, ${50 + (progress / 100) * 50}% ${50 + (progress / 100) * 0}%, ${50 + (progress / 100) * 20}% ${50 + (progress / 100) * 50}%, ${50 + (progress / 100) * -20}% ${50 + (progress / 100) * 50}%, ${50 + (progress / 100) * -50}% ${50 + (progress / 100) * 0}%)`,
                }}
              />
            </div>
          </div>

          {/* Example 4: Triangle drawing */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Triangle Drawing</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-100"
                style={{
                  clipPath: `polygon(50% 50%, ${50 + (progress / 100) * 0}% ${50 + (progress / 100) * -50}%, ${50 + (progress / 100) * -50}% ${50 + (progress / 100) * 50}%, ${50 + (progress / 100) * 50}% ${50 + (progress / 100) * 50}%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

