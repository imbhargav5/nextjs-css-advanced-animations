"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

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
    <div className="min-h-[200vh]">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold mb-8 sticky top-8 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg z-10">
          Scroll-Based Clip-Path Reveal
        </h2>

        <div className="space-y-32">
          {/* Example 1: Circle expansion */}
          <DemoBlock
            title="Circle Expansion"
            code={`const circleSize = 30 + scrollProgress * 70;

<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-300"
  style={{
    clipPath: \`circle(\${circleSize}% at 50% 50%)\`
  }}
/>

/* Circle expands as you scroll down */`}
          >
            <div className="flex justify-center">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-300"
                style={{
                  clipPath: `circle(${circleSize}% at 50% 50%)`,
                }}
              />
            </div>
          </DemoBlock>

          {/* Example 2: Polygon reveal */}
          <DemoBlock
            title="Polygon Reveal"
            code={`const polygonProgress = scrollProgress * 100;

<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
  style={{
    clipPath: \`polygon(0% 0%, \${polygonProgress}% 0%, \${polygonProgress}% 100%, 0% 100%)\`
  }}
/>

/* Left-to-right wipe reveal */`}
          >
            <div className="flex justify-center">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
                style={{
                  clipPath: `polygon(0% 0%, ${polygonProgress}% 0%, ${polygonProgress}% 100%, 0% 100%)`,
                }}
              />
            </div>
          </DemoBlock>

          {/* Example 3: Diagonal reveal */}
          <DemoBlock
            title="Diagonal Reveal"
            code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-300"
  style={{
    clipPath: \`polygon(0% 0%, \${polygonProgress}% \${polygonProgress * 0.5}%, \${polygonProgress * 0.5}% \${polygonProgress}%, 0% 100%)\`
  }}
/>

/* Diagonal wipe reveal */`}
          >
            <div className="flex justify-center">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-300"
                style={{
                  clipPath: `polygon(0% 0%, ${polygonProgress}% ${polygonProgress * 0.5}%, ${polygonProgress * 0.5}% ${polygonProgress}%, 0% 100%)`,
                }}
              />
            </div>
          </DemoBlock>

          {/* Example 4: Inset reveal */}
          <DemoBlock
            title="Inset Reveal"
            code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
  style={{
    clipPath: \`inset(\${100 - polygonProgress * 0.5}% \${100 - polygonProgress * 0.5}% \${100 - polygonProgress * 0.5}% \${100 - polygonProgress * 0.5}%)\`
  }}
/>

/* Inset shrinks from all sides */`}
          >
            <div className="flex justify-center">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
                style={{
                  clipPath: `inset(${100 - polygonProgress * 0.5}% ${100 - polygonProgress * 0.5}% ${100 - polygonProgress * 0.5}% ${100 - polygonProgress * 0.5}%)`,
                }}
              />
            </div>
          </DemoBlock>
        </div>
      </div>
    </div>
  );
}

