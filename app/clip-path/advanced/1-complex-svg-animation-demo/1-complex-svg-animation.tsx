"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function ComplexSvgAnimationDemo() {
  const [progress, setProgress] = useState(0);

  const wavePath = (progress: number) => {
    const amplitude = 20;
    const frequency = 3;
    let path = `M 0,${50 + amplitude * Math.sin(0)}`;
    for (let x = 0; x <= 100; x += 2) {
      const y = 50 + amplitude * Math.sin((x / 100) * frequency * Math.PI * 2 + progress * Math.PI * 2);
      path += ` L ${x},${y}`;
    }
    path += ` L 100,100 L 0,100 Z`;
    return `path('${path}')`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Complex SVG Path Animation</h2>

      <div className="flex justify-center mb-8 gap-4 items-center">
        <Button
          onClick={() => {
            let p = 0;
            const interval = setInterval(() => {
              p += 0.02;
              if (p >= 1) {
                p = 0;
              }
              setProgress(p);
            }, 16);
            return () => clearInterval(interval);
          }}
        >
          Animate
        </Button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="w-64"
        />
      </div>

      <DemoBlock
        title="Animated Wave"
        code={`const wavePath = (progress: number) => {
  const amplitude = 20;
  const frequency = 3;
  let path = \`M 0,\${50 + amplitude * Math.sin(0)}\`;
  for (let x = 0; x <= 100; x += 2) {
    const y = 50 + amplitude * Math.sin((x / 100) * frequency * Math.PI * 2 + progress * Math.PI * 2);
    path += \` L \${x},\${y}\`;
  }
  path += \` L 100,100 L 0,100 Z\`;
  return \`path('\${path}')\`;
};

<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
  style={{ clipPath: wavePath(progress) }}
/>`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-100"
          style={{
            clipPath: wavePath(progress),
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Spiral Path"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
  style={{
    clipPath: \`path('M 50,50 Q \${50 + progress * 30 * Math.cos(progress * Math.PI * 4)},\${50 + progress * 30 * Math.sin(progress * Math.PI * 4)} \${50 + progress * 40 * Math.cos(progress * Math.PI * 4)},\${50 + progress * 40 * Math.sin(progress * Math.PI * 4)} L 50,50 Z')\`
  }}
/>

/* Spiral expanding from center */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-100"
          style={{
            clipPath: `path('M 50,50 Q ${50 + progress * 30 * Math.cos(progress * Math.PI * 4)},${50 + progress * 30 * Math.sin(progress * Math.PI * 4)} ${50 + progress * 40 * Math.cos(progress * Math.PI * 4)},${50 + progress * 40 * Math.sin(progress * Math.PI * 4)} L 50,50 Z')`,
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Bezier Curve"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
  style={{
    clipPath: \`path('M 0,100 Q \${progress * 50},\${(1 - progress) * 100} \${progress * 100},\${50 + progress * 50} L \${progress * 100},100 L 0,100 Z')\`
  }}
/>

/* Animated bezier curve reveal */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-100"
          style={{
            clipPath: `path('M 0,100 Q ${progress * 50},${(1 - progress) * 100} ${progress * 100},${50 + progress * 50} L ${progress * 100},100 L 0,100 Z')`,
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Complex Path"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500"
  style={{
    clipPath: \`path('M 0,0 Q \${progress * 25},\${progress * 25} \${progress * 50},0 T \${progress * 100},0 L \${progress * 100},100 L 0,100 Z')\`
  }}
/>

/* Complex quadratic path animation */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-100"
          style={{
            clipPath: `path('M 0,0 Q ${progress * 25},${progress * 25} ${progress * 50},0 T ${progress * 100},0 L ${progress * 100},100 L 0,100 Z')`,
          }}
        />
      </DemoBlock>
    </div>
  );
}

