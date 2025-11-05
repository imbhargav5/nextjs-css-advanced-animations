"use client";

import { useEffect, useState } from "react";

export function SVGPathBackdropDemo() {
  const [pathOffset, setPathOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPathOffset((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const clipPath = `polygon(${pathOffset}% 0%, ${100 - pathOffset}% 50%, ${pathOffset}% 100%, 0% 50%)`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">SVG Path Backdrop</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Animated clip path */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Animated Clip Path</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg transition-all duration-300"
                style={{
                  backdropFilter: "blur(15px)",
                  clipPath: clipPath,
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Morphing Shape</p>
                <p className="text-sm text-gray-600">Animated polygon clip</p>
              </div>
            </div>
          </div>

          {/* Example 2: SVG mask */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">SVG Mask</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(20px)",
                  maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,10 L90,50 L50,90 L10,50 Z' fill='black'/%3E%3C/svg%3E")`,
                  WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,10 L90,50 L50,90 L10,50 Z' fill='black'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Diamond Mask</p>
                <p className="text-sm text-gray-600">SVG path mask</p>
              </div>
            </div>
          </div>

          {/* Example 3: Complex path */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Complex Path</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px) saturate(1.4)",
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Octagon</p>
                <p className="text-sm text-gray-600">Complex polygon</p>
              </div>
            </div>
          </div>

          {/* Example 4: SVG pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">SVG Pattern</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(25px) brightness(0.9)",
                  clipPath: "circle(40% at 50% 50%)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Circle Clip</p>
                <p className="text-sm text-gray-600">Circular backdrop</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(15px);
clip-path: polygon(...);
mask-image: url("data:image/svg+xml,...");
/* Combining SVG paths with backdrop-filter */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

