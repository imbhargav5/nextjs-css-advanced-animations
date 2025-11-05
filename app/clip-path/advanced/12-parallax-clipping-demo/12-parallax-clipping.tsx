"use client";

import { useEffect, useState } from "react";

export function ParallaxClippingDemo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[200vh] p-8 bg-white">
      <div className="max-w-4xl mx-auto space-y-32">
        <div className="sticky top-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg z-10">
          <h2 className="text-3xl font-bold text-center">Parallax Clipping</h2>
        </div>

        <div className="space-y-32">
          {/* Parallax 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div
              className="w-full h-96 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-100"
              style={{
                clipPath: `polygon(0% 0%, ${50 + (scrollY / 20)}% 0%, ${50 - (scrollY / 20)}% 100%, 0% 100%)`,
              }}
            />
          </div>

          {/* Parallax 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div
              className="w-full h-96 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-100"
              style={{
                clipPath: `circle(${30 + (scrollY / 30)}% at ${50 + (scrollY / 40)}% ${50 - (scrollY / 50)}%)`,
              }}
            />
          </div>

          {/* Parallax 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div
              className="w-full h-96 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-100"
              style={{
                clipPath: `polygon(${50 - (scrollY / 25)}% 0%, ${50 + (scrollY / 25)}% 0%, 100% ${50 + (scrollY / 30)}%, 100% ${50 - (scrollY / 30)}%, ${50 + (scrollY / 25)}% 100%, ${50 - (scrollY / 25)}% 100%, 0% ${50 - (scrollY / 30)}%, 0% ${50 + (scrollY / 30)}%)`,
              }}
            />
          </div>

          {/* Parallax 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div
              className="w-full h-96 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-100"
              style={{
                clipPath: `inset(${10 + (scrollY / 60)}% round ${20 + (scrollY / 20)}px)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

