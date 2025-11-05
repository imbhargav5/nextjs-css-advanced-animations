"use client";

import { useEffect, useState } from "react";

export function ParallaxBlendEffectsDemo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[200vh] p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8 sticky top-8">
        <h2 className="text-3xl font-bold text-center mb-8">Parallax Blend Effects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Parallax scroll */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Parallax Scroll</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
                  style={{
                    mixBlendMode: "multiply",
                    transform: `translateY(${scrollY * 0.5}px)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Multi-layer parallax */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multi-Layer Parallax</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
                  style={{
                    mixBlendMode: "screen",
                    transform: `translateY(${scrollY * 0.3}px)`,
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-bl from-cyan-400 to-blue-400 transition-all duration-100"
                  style={{
                    mixBlendMode: "overlay",
                    transform: `translateY(${scrollY * 0.7}px)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Rotating parallax */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Rotating Parallax</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
                  style={{
                    mixBlendMode: "difference",
                    transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.1}deg)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex parallax */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Parallax</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
                  style={{
                    mixBlendMode: "hard-light",
                    transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.6}px) scale(${1 + scrollY * 0.001})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  window.addEventListener('scroll', handleScroll);
}, []);

<div style={{
  mixBlendMode: 'multiply',
  transform: \`translateY(\${scrollY * 0.5}px)\`
}} />

/* Scroll page to see parallax effect */`}</code>
          </pre>
          <p className="mt-4 text-sm text-gray-600">Scroll the page to see the parallax effect</p>
        </div>
      </div>
    </div>
  );
}

