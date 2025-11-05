"use client";

import { useEffect, useState } from "react";

export function CursorFollowingEffectsDemo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Cursor Following Effects</h2>
        
        <div className="space-y-6">
          {/* Example 1: Cursor following blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Following Blur</h3>
            <div className="relative bg-white p-8 rounded-lg shadow-lg h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
              <div
                className="absolute w-32 h-32 rounded-full backdrop-blur-xl pointer-events-none transition-all duration-300"
                style={{
                  backdropFilter: "blur(25px)",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  left: `${position.x - 64}px`,
                  top: `${position.y - 64}px`,
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Move your cursor</p>
                <p className="text-sm text-gray-600">Blur follows mouse</p>
              </div>
            </div>
          </div>

          {/* Example 2: Multiple followers */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Multiple Followers</h3>
            <div className="relative bg-white p-8 rounded-lg shadow-lg h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute w-24 h-24 rounded-full backdrop-blur-lg pointer-events-none transition-all duration-500"
                  style={{
                    backdropFilter: `blur(${15 + i * 5}px)`,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    left: `${position.x - 48 + i * 20}px`,
                    top: `${position.y - 48 + i * 20}px`,
                    transform: "translate(-50%, -50%)",
                    transitionDelay: `${i * 100}ms`,
                  }}
                />
              ))}
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Trail effect</p>
                <p className="text-sm text-gray-600">Multiple blur circles</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`const [position, setPosition] = useState({ x: 0, y: 0 });
useEffect(() => {
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener("mousemove", handleMouseMove);
}, []);
backdrop-filter: blur(25px);
left: \${position.x}px;
top: \${position.y}px;
/* Cursor following backdrop-filter */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

