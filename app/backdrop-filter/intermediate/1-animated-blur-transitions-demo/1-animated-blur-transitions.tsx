"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AnimatedBlurTransitionsDemo() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Animated Blur Transitions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Hover blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Hover Blur Transition</h3>
            <div className="relative p-6 rounded-lg shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-500 group-hover:backdrop-blur-xl"
                style={{
                  backdropFilter: hovered ? "blur(20px)" : "blur(5px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Hover to blur</p>
                <p className="text-sm text-gray-600">Smooth blur transition</p>
              </div>
            </div>
          </div>

          {/* Example 2: Focus blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Focus Blur Transition</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-500 focus-within:backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(5px)",
                }}
              />
              <div className="relative z-10">
                <input
                  type="text"
                  placeholder="Focus to blur..."
                  className="w-full p-2 border rounded"
                />
                <p className="text-sm text-gray-600 mt-2">Focus input to blur</p>
              </div>
            </div>
          </div>

          {/* Example 3: Click blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Click Blur Toggle</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-500"
                style={{
                  backdropFilter: hovered ? "blur(15px)" : "blur(2px)",
                }}
              />
              <div className="relative z-10">
                <Button onClick={() => setHovered(!hovered)}>
                  {hovered ? "Less Blur" : "More Blur"}
                </Button>
                <p className="text-sm text-gray-600 mt-2">Click to toggle blur</p>
              </div>
            </div>
          </div>

          {/* Example 4: Progressive blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Progressive Blur</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-700 hover:backdrop-blur-2xl"
                style={{
                  backdropFilter: "blur(8px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Slow transition</p>
                <p className="text-sm text-gray-600">Hover for smooth blur</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(5px);
transition: backdrop-filter 0.5s;
:hover { backdrop-filter: blur(20px); }
/* Smooth transitions between blur states */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

