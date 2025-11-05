"use client";

import { useState, useEffect } from "react";
import { DemoBlock } from "@/components/demo-block";

export function CssVariablesAnimationDemo() {
  const [radius, setRadius] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius((r) => (r >= 60 ? 30 : r + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">CSS Variables Animation</h2>

      <DemoBlock
        title="CSS Variable Circle"
        code={`const [radius, setRadius] = useState(30);

<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
  style={{
    clipPath: \`circle(var(--radius, \${radius}%) at 50% 50%)\`,
    '--radius': \`\${radius}%\`
  }}
/>

/* Use CSS variables for dynamic animations */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-100"
          style={{
            clipPath: `circle(var(--radius, ${radius}%) at 50% 50%)`,
            ["--radius" as any]: `${radius}%`,
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Multiple Variables"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
  style={{
    clipPath: \`ellipse(var(--rx) var(--ry) at var(--x) var(--y))\`,
    '--rx': \`\${radius}%\`,
    '--ry': \`\${radius * 0.7}%\`,
    '--x': \`\${50 + radius * 0.3}%\`,
    '--y': \`\${50 + radius * 0.2}%\`
  }}
/>

/* Multiple CSS variables for complex animations */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-100"
          style={{
            clipPath: `ellipse(var(--rx, ${radius}%) var(--ry, ${radius * 0.7}%) at var(--x, 50%) var(--y, 50%))`,
            ["--rx" as any]: `${radius}%`,
            ["--ry" as any]: `${radius * 0.7}%`,
            ["--x" as any]: `${50 + radius * 0.3}%`,
            ["--y" as any]: `${50 + radius * 0.2}%`,
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Polygon Variables"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500"
  style={{
    clipPath: \`polygon(50% 0%, var(--offset) 100%, calc(100% - var(--offset)) 100%)\`,
    '--offset': \`\${radius}%\`
  }}
/>

/* CSS variables in polygon points */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-100"
          style={{
            clipPath: `polygon(50% 0%, var(--offset, ${radius}%) 100%, calc(100% - var(--offset, ${radius}%)) 100%)`,
            ["--offset" as any]: `${radius}%`,
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Inset Variables"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500"
  style={{
    clipPath: \`inset(var(--inset) round var(--radius))\`,
    '--inset': \`\${radius / 2}%\`,
    '--radius': \`\${radius / 3}px\`
  }}
/>

/* CSS variables for inset and border radius */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-100"
          style={{
            clipPath: `inset(var(--inset, ${radius / 2}%) round var(--radius, ${radius / 3}px))`,
            ["--inset" as any]: `${radius / 2}%`,
            ["--radius" as any]: `${radius / 3}px`,
          }}
        />
      </DemoBlock>
    </div>
  );
}

