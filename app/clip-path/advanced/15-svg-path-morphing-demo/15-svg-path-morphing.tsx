"use client";

import { useState, useEffect } from "react";
import { DemoBlock } from "@/components/demo-block";

export function SvgPathMorphingDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 1 ? 0 : p + 0.01));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const morphPath = (progress: number) => {
    const p1 = progress;
    const p2 = 1 - progress;

    // Morph between circle-like path and star-like path
    const radius1 = 40 + p1 * 10;
    const radius2 = 50 - p2 * 20;

    let path = "M 50,50 ";
    const points = 8;
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const radius = i % 2 === 0 ? radius1 : radius2;
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      if (i === 0) {
        path += `L ${x},${y} `;
      } else {
        path += `L ${x},${y} `;
      }
    }
    path += "Z";
    return `path('${path}')`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Advanced SVG Path Morphing</h2>

      <div className="flex justify-center mb-8 gap-4 items-center">
        <input
          type="range"
          min="0"
          max="100"
          value={progress * 100}
          onChange={(e) => setProgress(Number(e.target.value) / 100)}
          className="w-64"
        />
        <span className="text-lg font-semibold">{Math.round(progress * 100)}%</span>
      </div>

      <DemoBlock
        title="Path Morphing"
        code={`const morphPath = (progress: number) => {
  const radius1 = 40 + progress * 10;
  const radius2 = 50 - (1 - progress) * 20;

  let path = "M 50,50 ";
  const points = 8;
  for (let i = 0; i <= points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const radius = i % 2 === 0 ? radius1 : radius2;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    path += \`L \${x},\${y} \`;
  }
  path += "Z";
  return \`path('\${path}')\`;
};

<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
  style={{ clipPath: morphPath(progress) }}
/>`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-100"
          style={{
            clipPath: morphPath(progress),
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Wave Morphing"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
  style={{
    clipPath: \`path('M 0,\${50 + 20 * Math.sin(progress * Math.PI * 2)} L 25,\${50 + 20 * Math.sin((progress + 0.25) * Math.PI * 2)} L 50,\${50 + 20 * Math.sin((progress + 0.5) * Math.PI * 2)} L 75,\${50 + 20 * Math.sin((progress + 0.75) * Math.PI * 2)} L 100,\${50 + 20 * Math.sin((progress + 1) * Math.PI * 2)} L 100,100 L 0,100 Z')\`
  }}
/>

/* Sine wave morphing animation */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-100"
          style={{
            clipPath: `path('M 0,${50 + 20 * Math.sin(progress * Math.PI * 2)} L 25,${50 + 20 * Math.sin((progress + 0.25) * Math.PI * 2)} L 50,${50 + 20 * Math.sin((progress + 0.5) * Math.PI * 2)} L 75,${50 + 20 * Math.sin((progress + 0.75) * Math.PI * 2)} L 100,${50 + 20 * Math.sin((progress + 1) * Math.PI * 2)} L 100,100 L 0,100 Z')`,
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Spiral Morphing"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500"
  style={{
    clipPath: \`path('M 50,50 Q \${50 + progress * 30 * Math.cos(progress * Math.PI * 4)},\${50 + progress * 30 * Math.sin(progress * Math.PI * 4)} \${50 + progress * 40 * Math.cos(progress * Math.PI * 4)},\${50 + progress * 40 * Math.sin(progress * Math.PI * 4)} T \${50 + progress * 50 * Math.cos(progress * Math.PI * 4)},\${50 + progress * 50 * Math.sin(progress * Math.PI * 4)} L 50,50 Z')\`
  }}
/>

/* Spiral expanding from center */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-100"
          style={{
            clipPath: `path('M 50,50 Q ${50 + progress * 30 * Math.cos(progress * Math.PI * 4)},${50 + progress * 30 * Math.sin(progress * Math.PI * 4)} ${50 + progress * 40 * Math.cos(progress * Math.PI * 4)},${50 + progress * 40 * Math.sin(progress * Math.PI * 4)} T ${50 + progress * 50 * Math.cos(progress * Math.PI * 4)},${50 + progress * 50 * Math.sin(progress * Math.PI * 4)} L 50,50 Z')`,
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Complex Morph"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500"
  style={{
    clipPath: \`path('M \${50 - progress * 30},\${50 - progress * 30} Q \${50 + progress * 20},\${50 - progress * 20} \${50 + progress * 30},\${50 - progress * 30} T \${50 + progress * 40},\${50} T \${50 + progress * 30},\${50 + progress * 30} T \${50},\${50 + progress * 40} T \${50 - progress * 30},\${50 + progress * 30} T \${50 - progress * 40},\${50} Z')\`
  }}
/>

/* Complex quadratic bezier morphing */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-100"
          style={{
            clipPath: `path('M ${50 - progress * 30},${50 - progress * 30} Q ${50 + progress * 20},${50 - progress * 20} ${50 + progress * 30},${50 - progress * 30} T ${50 + progress * 40},${50} T ${50 + progress * 30},${50 + progress * 30} T ${50},${50 + progress * 40} T ${50 - progress * 30},${50 + progress * 30} T ${50 - progress * 40},${50} Z')`,
          }}
        />
      </DemoBlock>
    </div>
  );
}

