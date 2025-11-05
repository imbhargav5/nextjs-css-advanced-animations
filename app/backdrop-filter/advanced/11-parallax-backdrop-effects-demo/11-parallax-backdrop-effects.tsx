"use client";

import { useEffect, useState } from "react";

export function ParallaxBackdropEffectsDemo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[200vh] p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Parallax Backdrop Effects</h2>
        
        <div className="space-y-6 mb-32">
          <p className="text-gray-900 text-center">Scroll to see parallax effects</p>
        </div>

        {/* Parallax layers */}
        <div className="sticky top-8 space-y-6">
          <div
            className="relative bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/30"
            style={{
              backdropFilter: `blur(${10 + scrollY / 20}px)`,
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Layer 1</h3>
            <p className="text-white/90">
              Parallax movement with blur intensity changes
            </p>
          </div>

          <div
            className="relative bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/30"
            style={{
              backdropFilter: `blur(${15 + scrollY / 15}px)`,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Layer 2</h3>
            <p className="text-white/90">
              Different parallax speed and blur rate
            </p>
          </div>

          <div
            className="relative bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/30"
            style={{
              backdropFilter: `blur(${20 + scrollY / 10}px)`,
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Layer 3</h3>
            <p className="text-white/90">
              Slowest parallax, fastest blur increase
            </p>
          </div>
        </div>

        <div className="h-screen flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              <code>{`const blur = 10 + scrollY / 20;
const translateY = scrollY * 0.5;
backdrop-filter: blur(\${blur}px);
transform: translateY(\${translateY}px);
/* Parallax with dynamic blur */`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

