"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function ScrollTriggeredBlurDemo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blurAmount = Math.min(scrollY / 10, 30);

  return (
    <div className="max-w-6xl mx-auto space-y-8 min-h-[200vh]">
      <h2 className="text-3xl font-bold mb-8">Scroll-Triggered Blur</h2>

      <DemoBlock
        title="Scroll-Based Dynamic Blur"
        code={`const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const blurAmount = Math.min(scrollY / 10, 30);

<div
  className="bg-white/20 rounded-xl shadow-xl p-8 border border-white/30"
  style={{
    backdropFilter: \`blur(\${blurAmount}px)\`
  }}
>
  <h3 className="text-2xl font-bold mb-4 text-white">
    Dynamic Blur: {blurAmount.toFixed(0)}px
  </h3>
  <p className="text-white/90">
    This element's blur increases as you scroll down the page.
  </p>
</div>

/* Blur intensity changes based on scroll position */`}
      >
        <div className="space-y-4 mb-32">
          <p className="text-gray-900 text-center">Scroll down to see blur intensity change</p>
        </div>

        {/* Fixed element with dynamic blur */}
        <div className="sticky top-8 z-10">
          <div
            className="bg-white/20 rounded-xl shadow-xl p-8 border border-white/30"
            style={{
              backdropFilter: `blur(${blurAmount}px)`,
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Dynamic Blur: {blurAmount.toFixed(0)}px
            </h3>
            <p className="text-white/90">
              This element's blur increases as you scroll down the page.
            </p>
          </div>
        </div>

        <div className="h-screen" />
      </DemoBlock>
    </div>
  );
}

