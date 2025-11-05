"use client";

import { useState, useEffect } from "react";

export function CursorFollowingDemo() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement)?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Clip-Path Following Cursor</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Circle following */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Circle Following</h3>
            <div
              className="bg-white p-6 rounded-lg shadow-lg relative cursor-none"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({
                  x: ((e.clientX - rect.left) / rect.width) * 100,
                  y: ((e.clientY - rect.top) / rect.height) * 100,
                });
              }}
            >
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-200"
                style={{
                  clipPath: `circle(25% at ${mousePos.x}% ${mousePos.y}%)`,
                }}
              />
            </div>
          </div>

          {/* Example 2: Ellipse following */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ellipse Following</h3>
            <div
              className="bg-white p-6 rounded-lg shadow-lg relative cursor-none"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({
                  x: ((e.clientX - rect.left) / rect.width) * 100,
                  y: ((e.clientY - rect.top) / rect.height) * 100,
                });
              }}
            >
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-200"
                style={{
                  clipPath: `ellipse(30% 20% at ${mousePos.x}% ${mousePos.y}%)`,
                }}
              />
            </div>
          </div>

          {/* Example 3: Polygon following */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Polygon Following</h3>
            <div
              className="bg-white p-6 rounded-lg shadow-lg relative cursor-none"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({
                  x: ((e.clientX - rect.left) / rect.width) * 100,
                  y: ((e.clientY - rect.top) / rect.height) * 100,
                });
              }}
            >
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-200"
                style={{
                  clipPath: `polygon(${mousePos.x}% ${mousePos.y}%, ${mousePos.x + 10}% ${mousePos.y + 20}%, ${mousePos.x - 10}% ${mousePos.y + 20}%)`,
                }}
              />
            </div>
          </div>

          {/* Example 4: Inset following */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Inset Following</h3>
            <div
              className="bg-white p-6 rounded-lg shadow-lg relative cursor-none"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({
                  x: ((e.clientX - rect.left) / rect.width) * 100,
                  y: ((e.clientY - rect.top) / rect.height) * 100,
                });
              }}
            >
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-200"
                style={{
                  clipPath: `inset(${Math.max(0, mousePos.y - 20)}% ${Math.max(0, 100 - mousePos.x - 20)}% ${Math.max(0, 100 - mousePos.y - 20)}% ${Math.max(0, mousePos.x - 20)}%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

