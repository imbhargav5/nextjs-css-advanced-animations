"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

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
    <div className="min-h-[200vh]">
      <div className="max-w-6xl mx-auto space-y-8 sticky top-8">
        <h2 className="text-3xl font-bold mb-8">Scroll Triggered Blend</h2>

        <p className="text-sm text-gray-600 mb-4">Scroll the page to see the blend mode change</p>

        <DemoBlock
          title="Scroll Blend"
          code={`const [scrollProgress, setScrollProgress] = useState(0);
const blendModes = ["multiply", "screen", "overlay", "difference"];
const currentMode = blendModes[Math.floor(scrollProgress * blendModes.length)];

useEffect(() => {
  const handleScroll = () => {
    const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    setScrollProgress(Math.min(progress, 1));
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-300"
    style={{ mixBlendMode: currentMode }}
  />
</div>

/* Scroll to change blend mode dynamically */`}
        >
          <div className="flex justify-center">
            <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
              <div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-300"
                style={{ mixBlendMode: currentBlendMode }}
              />
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Progress Blend"
          code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-300"
    style={{ mixBlendMode: currentMode }}
  />
</div>`}
        >
          <div className="flex justify-center">
            <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
              <div
                className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-300"
                style={{ mixBlendMode: currentBlendMode }}
              />
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Dynamic Opacity"
          code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-300"
    style={{ mixBlendMode: currentMode, opacity: scrollProgress }}
  />
</div>`}
        >
          <div className="flex justify-center">
            <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
              <div
                className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-300"
                style={{ mixBlendMode: currentBlendMode, opacity: scrollProgress }}
              />
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Combined Effect"
          code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-300"
    style={{ mixBlendMode: currentMode, opacity: 0.5 + scrollProgress * 0.5 }}
  />
</div>`}
        >
          <div className="flex justify-center">
            <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
              <div
                className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-300"
                style={{ mixBlendMode: currentBlendMode, opacity: 0.5 + scrollProgress * 0.5 }}
              />
            </div>
          </div>
        </DemoBlock>
      </div>
    </div>
  );
}

