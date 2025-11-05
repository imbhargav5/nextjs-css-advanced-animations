"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function CursorFollowingEffectsDemo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Cursor Following Effects</h2>

      <DemoBlock
        title="Following Blur Circle"
        code={`const [position, setPosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300" />
  <div
    className="absolute w-32 h-32 rounded-full pointer-events-none transition-all duration-300"
    style={{
      backdropFilter: "blur(25px)",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      left: \`\${position.x - 64}px\`,
      top: \`\${position.y - 64}px\`,
      transform: "translate(-50%, -50%)"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(25px);
transition: all 0.3s;
pointer-events: none;`}
      >
        <div className="relative p-8 rounded-lg shadow-lg h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
          <div
            className="absolute w-32 h-32 rounded-full backdrop-blur-xl pointer-events-none transition-all duration-300"
            style={{
              backdropFilter: "blur(25px)",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              left: `${position.x - 64}px`,
              top: `${position.y - 64}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div className="relative z-10">
            <p className="text-gray-800 font-semibold">Move your cursor</p>
            <p className="text-sm text-gray-600">Blur follows mouse</p>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multiple Followers (Trail Effect)"
        code={`{[0, 1, 2].map((i) => (
  <div
    key={i}
    className="absolute w-24 h-24 rounded-full pointer-events-none transition-all duration-500"
    style={{
      backdropFilter: \`blur(\${15 + i * 5}px)\`,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      left: \`\${position.x - 48 + i * 20}px\`,
      top: \`\${position.y - 48 + i * 20}px\`,
      transform: "translate(-50%, -50%)",
      transitionDelay: \`\${i * 100}ms\`
    }}
  />
))}

/* CSS */
backdrop-filter: blur(15px); /* increases per follower */
transition: all 0.5s;
transition-delay: 100ms; /* staggered delays */`}
      >
        <div className="relative p-8 rounded-lg shadow-lg h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute w-24 h-24 rounded-full backdrop-blur-lg pointer-events-none transition-all duration-500"
              style={{
                backdropFilter: `blur(${15 + i * 5}px)`,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                left: `${position.x - 48 + i * 20}px`,
                top: `${position.y - 48 + i * 20}px`,
                transform: "translate(-50%, -50%)",
                transitionDelay: `${i * 100}ms`,
              }}
            />
          ))}
          <div className="relative z-10">
            <p className="text-gray-800 font-semibold">Trail effect</p>
            <p className="text-sm text-gray-600">Multiple blur circles</p>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
