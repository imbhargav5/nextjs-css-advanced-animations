"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function CursorFollowingBlendDemo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
  const relativeX = ((mousePos.x - centerX) / centerX) * 50;
  const relativeY = ((mousePos.y - centerY) / centerY) * 50;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Cursor Following Blend</h2>

      <DemoBlock
        title="Mouse Tracking"
        code={`const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener('mousemove', handleMouseMove);
}, []);

<div
  style={{
    mixBlendMode: "multiply",
    transform: \`translate(\${relativeX}px, \${relativeY}px)\`,
  }}
/>

/* Layer follows cursor movement */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-100"
              style={{
                mixBlendMode: "multiply",
                transform: `translate(${relativeX}px, ${relativeY}px)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Radial Follow"
        code={`<div
  style={{
    mixBlendMode: "screen",
    background: \`radial-gradient(circle at \${mousePos.x}px \${mousePos.y}px,
                rgba(236,72,153,0.8), transparent)\`,
  }}
/>

/* Radial gradient follows cursor position */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 transition-all duration-100"
              style={{
                mixBlendMode: "screen",
                background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(236,72,153,0.8), transparent)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Rotating Follow"
        code={`const angle = Math.atan2(relativeY, relativeX) * (180 / Math.PI);

<div
  style={{
    mixBlendMode: "overlay",
    transform: \`rotate(\${angle}deg)\`,
  }}
/>

/* Rotation follows cursor direction */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 transition-all duration-100"
              style={{
                mixBlendMode: "overlay",
                transform: `rotate(${Math.atan2(relativeY, relativeX) * (180 / Math.PI)}deg)`,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Follow"
        code={`<div
  style={{
    mixBlendMode: "difference",
    transform: \`translate(\${relativeX * 0.5}px, \${relativeY * 0.5}px)
                scale(\${1 + Math.abs(relativeX + relativeY) / 100})\`,
  }}
/>

/* Combines translation and scale based on cursor */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 transition-all duration-100"
              style={{
                mixBlendMode: "difference",
                transform: `translate(${relativeX * 0.5}px, ${relativeY * 0.5}px) scale(${1 + Math.abs(relativeX + relativeY) / 100})`,
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
