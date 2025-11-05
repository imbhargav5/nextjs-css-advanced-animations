"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

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
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Parallax Backdrop Effects</h2>

      <p className="text-gray-700 text-center mb-8">Scroll to see parallax effects with dynamic blur</p>

      <DemoBlock
        title="Scroll-Based Parallax Layers"
        code={`const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

<div
  className="sticky top-8"
  style={{
    backdropFilter: \`blur(\${10 + scrollY / 20}px)\`,
    transform: \`translateY(\${scrollY * 0.5}px)\`
  }}
>
  Layer 1
</div>

<div
  className="sticky top-8"
  style={{
    backdropFilter: \`blur(\${15 + scrollY / 15}px)\`,
    transform: \`translateY(\${scrollY * 0.3}px)\`
  }}
>
  Layer 2
</div>

/* CSS */
backdrop-filter: blur(calc(10px + scrollY / 20));
transform: translateY(calc(scrollY * 0.5));
/* Dynamic blur and parallax movement based on scroll */`}
      >
        <div className="space-y-6 mb-96">
          <div
            className="relative bg-gradient-to-br from-purple-100 to-blue-100 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/30 sticky top-8"
            style={{
              backdropFilter: `blur(${10 + scrollY / 20}px)`,
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Layer 1</h3>
            <p className="text-gray-700">
              Parallax movement with blur intensity changes
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Blur: {(10 + scrollY / 20).toFixed(1)}px | Offset: {(scrollY * 0.5).toFixed(0)}px
            </p>
          </div>

          <div
            className="relative bg-gradient-to-br from-green-100 to-teal-100 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/30 sticky top-8"
            style={{
              backdropFilter: `blur(${15 + scrollY / 15}px)`,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Layer 2</h3>
            <p className="text-gray-700">
              Different parallax speed and blur rate
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Blur: {(15 + scrollY / 15).toFixed(1)}px | Offset: {(scrollY * 0.3).toFixed(0)}px
            </p>
          </div>

          <div
            className="relative bg-gradient-to-br from-orange-100 to-red-100 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/30 sticky top-8"
            style={{
              backdropFilter: `blur(${20 + scrollY / 10}px)`,
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Layer 3</h3>
            <p className="text-gray-700">
              Slowest parallax, fastest blur increase
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Blur: {(20 + scrollY / 10).toFixed(1)}px | Offset: {(scrollY * 0.1).toFixed(0)}px
            </p>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
