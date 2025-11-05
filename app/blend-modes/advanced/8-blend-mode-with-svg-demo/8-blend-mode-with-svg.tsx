"use client";

import { DemoBlock } from "@/components/demo-block";

export function BlendModeWithSVGDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Mode with SVG</h2>

      <DemoBlock
        title="SVG Circle Blend"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "multiply" }}>
    <circle cx="50%" cy="50%" r="40%" fill="yellow" />
  </svg>
</div>

/* SVG elements blend with backgrounds */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "multiply" }}>
              <circle cx="50%" cy="50%" r="40%" fill="yellow" />
            </svg>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="SVG Path Blend"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }}>
    <path d="M 50,50 L 200,50 L 125,150 Z" fill="pink" />
  </svg>
</div>

/* SVG paths create custom shapes with blend modes */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }}>
              <path d="M 50,50 L 200,50 L 125,150 Z" fill="pink" />
            </svg>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multiple SVG Shapes"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "overlay" }}>
    <circle cx="25%" cy="25%" r="15%" fill="red" />
    <circle cx="75%" cy="75%" r="15%" fill="yellow" />
    <rect x="35%" y="35%" width="30%" height="30%" fill="blue" />
  </svg>
</div>

/* Multiple SVG shapes in one element */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "overlay" }}>
              <circle cx="25%" cy="25%" r="15%" fill="red" />
              <circle cx="75%" cy="75%" r="15%" fill="yellow" />
              <rect x="35%" y="35%" width="30%" height="30%" fill="blue" />
            </svg>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="SVG Gradient Blend"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "difference" }}>
    <defs>
      <linearGradient id="svgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="pink" />
        <stop offset="100%" stopColor="cyan" />
      </linearGradient>
    </defs>
    <circle cx="50%" cy="50%" r="40%" fill="url(#svgGradient)" />
  </svg>
</div>

/* SVG gradients with blend modes */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "difference" }}>
              <defs>
                <linearGradient id="svgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="pink" />
                  <stop offset="100%" stopColor="cyan" />
                </linearGradient>
              </defs>
              <circle cx="50%" cy="50%" r="40%" fill="url(#svgGradient)" />
            </svg>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
