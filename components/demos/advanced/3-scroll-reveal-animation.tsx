"use client";

import { useEffect, useState } from "react";

export function ScrollRevealAnimationDemo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 800, 1);

  return (
    <div className="min-h-[200vh] p-8 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-4xl mx-auto space-y-32">
        <div className="sticky top-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg z-10">
          <h2 className="text-3xl font-bold text-center mb-4">Advanced Scroll Reveal</h2>
          <div className="text-center text-sm text-gray-600">Scroll Progress: {Math.round(progress * 100)}%</div>
        </div>

        <div className="space-y-32">
          {/* Reveal 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div
              className="w-full h-96 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-300"
              style={{
                clipPath: `polygon(0% 0%, ${progress * 100}% 0%, ${progress * 100}% 100%, 0% 100%)`,
              }}
            />
          </div>

          {/* Reveal 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div
              className="w-full h-96 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
              style={{
                clipPath: `circle(${progress * 100}% at ${50 + progress * 30}% ${50 + progress * 20}%)`,
              }}
            />
          </div>

          {/* Reveal 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div
              className="w-full h-96 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-300"
              style={{
                clipPath: `polygon(0% 0%, ${progress * 50}% ${progress * 30}%, ${progress * 100}% ${progress * 60}%, ${progress * 100}% 100%, 0% 100%)`,
              }}
            />
          </div>

          {/* Reveal 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div
              className="w-full h-96 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
              style={{
                clipPath: `inset(${(1 - progress) * 50}% round ${progress * 40}px)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

