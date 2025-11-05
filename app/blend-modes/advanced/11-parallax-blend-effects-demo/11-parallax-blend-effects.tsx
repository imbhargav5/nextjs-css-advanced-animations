"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

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
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Parallax Blend Effects</h2>
      <p className="text-muted-foreground mb-8">Scroll the page to see parallax effects</p>

      <DemoBlock
        title="Parallax Scroll"
        code={`const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  window.addEventListener('scroll', handleScroll);
}, []);

<div
  style={{
    mixBlendMode: "multiply",
    transform: \`translateY(\${scrollY * 0.5}px)\`,
  }}
/>

/* Layer moves at different speed than scroll */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
              style={{
                mixBlendMode: "multiply",
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multi-Layer Parallax"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    style={{
      mixBlendMode: "screen",
      transform: \`translateY(\${scrollY * 0.3}px)\`,
    }}
  />
  <div
    style={{
      mixBlendMode: "overlay",
      transform: \`translateY(\${scrollY * 0.7}px)\`,
    }}
  />
</div>

/* Multiple layers at different speeds */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
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
      </DemoBlock>

      <DemoBlock
        title="Rotating Parallax"
        code={`<div
  style={{
    mixBlendMode: "difference",
    transform: \`translateY(\${scrollY * 0.4}px) rotate(\${scrollY * 0.1}deg)\`,
  }}
/>

/* Combines translation and rotation based on scroll */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
              style={{
                mixBlendMode: "difference",
                transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.1}deg)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Parallax"
        code={`<div
  style={{
    mixBlendMode: "hard-light",
    transform: \`translate(\${scrollY * 0.2}px, \${scrollY * 0.6}px)
                scale(\${1 + scrollY * 0.001})\`,
  }}
/>

/* Complex multi-property parallax animation */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
              style={{
                mixBlendMode: "hard-light",
                transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.6}px) scale(${1 + scrollY * 0.001})`,
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
