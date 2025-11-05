"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function ScrollRevealAnimationDemo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 800, 1);

  return (
    <div className="min-h-[200vh]">
      <div className="max-w-6xl mx-auto space-y-32 px-8 py-8">
        <div className="sticky top-8 bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-lg z-10 border">
          <h2 className="text-3xl font-bold text-center mb-4">Advanced Scroll Reveal</h2>
          <div className="text-center text-sm text-muted-foreground">Scroll Progress: {Math.round(progress * 100)}%</div>
        </div>

        <div className="space-y-16">
          <DemoBlock
            title="Horizontal Reveal"
            code={`const [scrollY, setScrollY] = useState(0);
const progress = Math.min(scrollY / 800, 1);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

<div
  className="w-full h-96 bg-gradient-to-br from-purple-400 to-pink-500"
  style={{
    clipPath: \`polygon(0% 0%, \${progress * 100}% 0%, \${progress * 100}% 100%, 0% 100%)\`
  }}
/>`}
          >
            <div
              className="w-full h-96 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-300"
              style={{
                clipPath: `polygon(0% 0%, ${progress * 100}% 0%, ${progress * 100}% 100%, 0% 100%)`,
              }}
            />
          </DemoBlock>

          <DemoBlock
            title="Expanding Circle"
            code={`<div
  className="w-full h-96 bg-gradient-to-br from-blue-400 to-cyan-500"
  style={{
    clipPath: \`circle(\${progress * 100}% at \${50 + progress * 30}% \${50 + progress * 20}%)\`
  }}
/>

/* Circle expands while moving */`}
          >
            <div
              className="w-full h-96 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
              style={{
                clipPath: `circle(${progress * 100}% at ${50 + progress * 30}% ${50 + progress * 20}%)`,
              }}
            />
          </DemoBlock>

          <DemoBlock
            title="Dynamic Polygon"
            code={`<div
  className="w-full h-96 bg-gradient-to-br from-green-400 to-teal-500"
  style={{
    clipPath: \`polygon(0% 0%, \${progress * 50}% \${progress * 30}%, \${progress * 100}% \${progress * 60}%, \${progress * 100}% 100%, 0% 100%)\`
  }}
/>

/* Polygon shape morphs with scroll */`}
          >
            <div
              className="w-full h-96 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-300"
              style={{
                clipPath: `polygon(0% 0%, ${progress * 50}% ${progress * 30}%, ${progress * 100}% ${progress * 60}%, ${progress * 100}% 100%, 0% 100%)`,
              }}
            />
          </DemoBlock>

          <DemoBlock
            title="Inset with Rounded Corners"
            code={`<div
  className="w-full h-96 bg-gradient-to-br from-orange-400 to-red-500"
  style={{
    clipPath: \`inset(\${(1 - progress) * 50}% round \${progress * 40}px)\`
  }}
/>

/* Inset shrinks while corners get more rounded */`}
          >
            <div
              className="w-full h-96 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
              style={{
                clipPath: `inset(${(1 - progress) * 50}% round ${progress * 40}px)`,
              }}
            />
          </DemoBlock>
        </div>
      </div>
    </div>
  );
}

