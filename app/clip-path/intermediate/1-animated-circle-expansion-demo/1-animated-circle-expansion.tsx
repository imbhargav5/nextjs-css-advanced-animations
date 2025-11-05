"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AnimatedCircleExpansionDemo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Animated Circle Expansion</h2>
        
        <div className="flex justify-center mb-8">
          <Button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Collapse" : "Expand"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Center expansion */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Center Expansion</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-500 ease-out"
                style={{
                  clipPath: isExpanded ? "circle(150% at 50% 50%)" : "circle(30% at 50% 50%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Corner expansion */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Corner Expansion</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-500 ease-out"
                style={{
                  clipPath: isExpanded ? "circle(200% at 0% 0%)" : "circle(20% at 0% 0%)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Bottom expansion */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Bottom Expansion</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-500 ease-out"
                style={{
                  clipPath: isExpanded ? "circle(200% at 50% 100%)" : "circle(25% at 50% 100%)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Side expansion */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Side Expansion</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-500 ease-out"
                style={{
                  clipPath: isExpanded ? "circle(200% at 100% 50%)" : "circle(20% at 100% 50%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`transition: clip-path 0.5s ease-out;
clip-path: circle(30% at 50% 50%);
/* Expanded state */
clip-path: circle(150% at 50% 50%);`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

