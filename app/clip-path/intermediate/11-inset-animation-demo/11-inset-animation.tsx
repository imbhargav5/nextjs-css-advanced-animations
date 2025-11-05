"use client";

import { useState } from "react";

export function InsetAnimationDemo() {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Animated Inset Transitions</h2>
        
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsAnimated(!isAnimated)}
            className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
          >
            {isAnimated ? "Expand" : "Contract"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Uniform inset */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Uniform Inset</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: isAnimated ? "inset(30%)" : "inset(5%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Asymmetric inset */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Asymmetric Inset</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: isAnimated ? "inset(20% 10% 5% 15%)" : "inset(5% 20% 20% 5%)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Inset with rounding */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Rounded Inset</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: isAnimated ? "inset(10% round 40px)" : "inset(10% round 5px)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Complex inset */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Inset</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-700 ease-in-out"
                style={{
                  clipPath: isAnimated 
                    ? "inset(5% 20% 15% 10% round 25px 10px 35px 15px)"
                    : "inset(15% 5% 5% 20% round 5px 25px 5px 25px)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`transition: clip-path 0.7s ease-in-out;
clip-path: inset(5%);
/* Animate to */
clip-path: inset(30%);
/* Smooth transitions between inset values */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

