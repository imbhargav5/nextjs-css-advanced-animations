"use client";

import { useEffect, useState } from "react";

export function CursorFollowingBlendDemo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
  const relativeX = ((mousePos.x - centerX) / centerX) * 50;
  const relativeY = ((mousePos.y - centerY) / centerY) * 50;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Cursor Following Blend</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Mouse tracking */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Mouse Tracking</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
                  style={{
                    mixBlendMode: "multiply",
                    transform: `translate(${relativeX}px, ${relativeY}px)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Radial follow */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Radial Follow</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
                  style={{
                    mixBlendMode: "screen",
                    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(236,72,153,0.8), transparent)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Rotating follow */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Rotating Follow</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
                  style={{
                    mixBlendMode: "overlay",
                    transform: `rotate(${Math.atan2(relativeY, relativeX) * (180 / Math.PI)}deg)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex follow */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Follow</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
                  style={{
                    mixBlendMode: "difference",
                    transform: `translate(${relativeX * 0.5}px, ${relativeY * 0.5}px) scale(${1 + Math.abs(relativeX + relativeY) / 100})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener('mousemove', handleMouseMove);
}, []);

<div style={{
  mixBlendMode: 'multiply',
  transform: \`translate(\${x}px, \${y}px)\`
}} />`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

