"use client";

import { useEffect, useState } from "react";

export function ScrollTriggeredDemo() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = Math.min(scrollTop / (docHeight - windowHeight), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circleSize = 30 + scrollProgress * 70;
  const polygonProgress = scrollProgress * 100;

  return (
    <div className="min-h-[200vh] p-8 bg-gradient-to-br from-teal-50 to-green-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 sticky top-8 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg z-10">
          Scroll-Based Clip-Path Reveal
        </h2>
        
        <div className="space-y-32">
          {/* Example 1: Circle expansion */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Circle Expansion</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-300"
                style={{
                  clipPath: `circle(${circleSize}% at 50% 50%)`,
                }}
              />
            </div>
          </div>

          {/* Example 2: Polygon reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Polygon Reveal</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
                style={{
                  clipPath: `polygon(0% 0%, ${polygonProgress}% 0%, ${polygonProgress}% 100%, 0% 100%)`,
                }}
              />
            </div>
          </div>

          {/* Example 3: Diagonal reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Diagonal Reveal</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-300"
                style={{
                  clipPath: `polygon(0% 0%, ${polygonProgress}% ${polygonProgress * 0.5}%, ${polygonProgress * 0.5}% ${polygonProgress}%, 0% 100%)`,
                }}
              />
            </div>
          </div>

          {/* Example 4: Inset reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Inset Reveal</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
                style={{
                  clipPath: `inset(${100 - polygonProgress * 0.5}% ${100 - polygonProgress * 0.5}% ${100 - polygonProgress * 0.5}% ${100 - polygonProgress * 0.5}%)`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white p-6 rounded-lg shadow-lg sticky bottom-8">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`/* Use scroll position to update clip-path */
const progress = scrollY / (docHeight - windowHeight);
element.style.clipPath = \`circle(\${progress * 100}% at 50% 50%)\`;`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

