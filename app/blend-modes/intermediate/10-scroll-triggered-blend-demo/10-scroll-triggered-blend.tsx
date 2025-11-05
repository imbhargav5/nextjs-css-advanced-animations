"use client";

import { useEffect, useState } from "react";

export function ScrollTriggeredBlendDemo() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blendModes: Array<"multiply" | "screen" | "overlay" | "difference"> = ["multiply", "screen", "overlay", "difference"];
  const currentBlendMode = blendModes[Math.floor(scrollProgress * blendModes.length)] || blendModes[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-[200vh] p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8 sticky top-8">
        <h2 className="text-3xl font-bold text-center mb-8">Scroll Triggered Blend</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Scroll blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Scroll Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-300"
                  style={{ mixBlendMode: currentBlendMode }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Progress blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Progress Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-300"
                  style={{ mixBlendMode: currentBlendMode }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Dynamic opacity */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Dynamic Opacity</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-300"
                  style={{ mixBlendMode: currentBlendMode, opacity: scrollProgress }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Combined effect */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Combined Effect</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-300"
                  style={{ mixBlendMode: currentBlendMode, opacity: 0.5 + scrollProgress * 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const progress = window.scrollY / documentHeight;
    setScrollProgress(progress);
  };
  window.addEventListener('scroll', handleScroll);
}, []);

<div style={{ mixBlendMode: blendModes[progress] }} />`}</code>
          </pre>
          <p className="mt-4 text-sm text-gray-600">Scroll the page to see the blend mode change</p>
        </div>
      </div>
    </div>
  );
}

