"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function PolygonMorphingDemo() {
  const [isMorphed, setIsMorphed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Polygon Shape Morphing</h2>
        
        <div className="flex justify-center mb-8">
          <Button onClick={() => setIsMorphed(!isMorphed)}>
            {isMorphed ? "Morph to Triangle" : "Morph to Star"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Triangle to Square */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Triangle → Square</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: isMorphed
                    ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    : "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Square to Pentagon */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Square → Pentagon</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: isMorphed
                    ? "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
                    : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Star to Circle (using many points) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Star → Hexagon</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: isMorphed
                    ? "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
                    : "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Arrow to Diamond */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Arrow → Diamond</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-amber-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: isMorphed
                    ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                    : "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`transition: clip-path 0.7s ease-in-out;
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
/* Morph to */
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
/* Points must match for smooth transition */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

