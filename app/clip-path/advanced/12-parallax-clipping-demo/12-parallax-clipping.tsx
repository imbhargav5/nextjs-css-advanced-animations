"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function ParallaxClippingDemo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[200vh]">
      <div className="max-w-6xl mx-auto space-y-32 px-8 py-8">
        <div className="sticky top-8 bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-lg z-10 border">
          <h2 className="text-3xl font-bold text-center">Parallax Clipping</h2>
        </div>

        <div className="space-y-16">
          <DemoBlock
            title="Parallax Polygon"
            code={`const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

<div
  className="w-full h-96 bg-gradient-to-br from-purple-400 to-pink-500"
  style={{
    clipPath: \`polygon(0% 0%, \${50 + (scrollY / 20)}% 0%, \${50 - (scrollY / 20)}% 100%, 0% 100%)\`
  }}
/>`}
          >
            <div
              className="w-full h-96 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-100"
              style={{
                clipPath: `polygon(0% 0%, ${50 + (scrollY / 20)}% 0%, ${50 - (scrollY / 20)}% 100%, 0% 100%)`,
              }}
            />
          </DemoBlock>

          <DemoBlock
            title="Parallax Circle"
            code={`<div
  className="w-full h-96 bg-gradient-to-br from-blue-400 to-cyan-500"
  style={{
    clipPath: \`circle(\${30 + (scrollY / 30)}% at \${50 + (scrollY / 40)}% \${50 - (scrollY / 50)}%)\`
  }}
/>

/* Circle grows and moves with scroll */`}
          >
            <div
              className="w-full h-96 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-100"
              style={{
                clipPath: `circle(${30 + (scrollY / 30)}% at ${50 + (scrollY / 40)}% ${50 - (scrollY / 50)}%)`,
              }}
            />
          </DemoBlock>

          <DemoBlock
            title="Parallax Octagon"
            code={`<div
  className="w-full h-96 bg-gradient-to-br from-green-400 to-teal-500"
  style={{
    clipPath: \`polygon(\${50 - (scrollY / 25)}% 0%, \${50 + (scrollY / 25)}% 0%, ...)\`
  }}
/>

/* Complex polygon transforms with scroll */`}
          >
            <div
              className="w-full h-96 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-100"
              style={{
                clipPath: `polygon(${50 - (scrollY / 25)}% 0%, ${50 + (scrollY / 25)}% 0%, 100% ${50 + (scrollY / 30)}%, 100% ${50 - (scrollY / 30)}%, ${50 + (scrollY / 25)}% 100%, ${50 - (scrollY / 25)}% 100%, 0% ${50 - (scrollY / 30)}%, 0% ${50 + (scrollY / 30)}%)`,
              }}
            />
          </DemoBlock>

          <DemoBlock
            title="Parallax Inset"
            code={`<div
  className="w-full h-96 bg-gradient-to-br from-orange-400 to-red-500"
  style={{
    clipPath: \`inset(\${10 + (scrollY / 60)}% round \${20 + (scrollY / 20)}px)\`
  }}
/>

/* Inset grows with rounded corners */`}
          >
            <div
              className="w-full h-96 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-100"
              style={{
                clipPath: `inset(${10 + (scrollY / 60)}% round ${20 + (scrollY / 20)}px)`,
              }}
            />
          </DemoBlock>
        </div>
      </div>
    </div>
  );
}

