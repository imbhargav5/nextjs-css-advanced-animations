"use client";

import { DemoBlock } from "@/components/demo-block";

export function BlendModePatternsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Mode Patterns</h2>

      <DemoBlock
        title="Striped Pattern"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0"
    style={{
      mixBlendMode: "multiply",
      backgroundImage: "repeating-linear-gradient(45deg, yellow, yellow 10px, red 10px, red 20px)",
    }}
  />
</div>

/* Diagonal stripes blend with gradient background */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0"
              style={{
                mixBlendMode: "multiply",
                backgroundImage: "repeating-linear-gradient(45deg, yellow, yellow 10px, red 10px, red 20px)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Checkerboard Pattern"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0"
    style={{
      mixBlendMode: "screen",
      backgroundImage: \`repeating-linear-gradient(0deg, pink 0px, pink 20px, orange 20px, orange 40px),
                        repeating-linear-gradient(90deg, pink 0px, pink 20px, orange 20px, orange 40px)\`,
    }}
  />
</div>

/* Checkerboard pattern with screen blend mode */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0"
              style={{
                mixBlendMode: "screen",
                backgroundImage: "repeating-linear-gradient(0deg, pink 0px, pink 20px, orange 20px, orange 40px), repeating-linear-gradient(90deg, pink 0px, pink 20px, orange 20px, orange 40px)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Dot Pattern"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute inset-0"
    style={{
      mixBlendMode: "overlay",
      backgroundImage: "radial-gradient(circle, red 2px, transparent 2px)",
      backgroundSize: "20px 20px",
    }}
  />
</div>

/* Polka dot pattern with overlay blend */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute inset-0"
              style={{
                mixBlendMode: "overlay",
                backgroundImage: "radial-gradient(circle, red 2px, transparent 2px)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Pattern"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute inset-0"
    style={{
      mixBlendMode: "difference",
      backgroundImage: \`repeating-linear-gradient(30deg, yellow 0px, yellow 15px, transparent 15px, transparent 30px),
                        repeating-linear-gradient(60deg, cyan 0px, cyan 15px, transparent 15px, transparent 30px)\`,
    }}
  />
</div>

/* Overlapping diagonal lines with difference blend */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0"
              style={{
                mixBlendMode: "difference",
                backgroundImage: "repeating-linear-gradient(30deg, yellow 0px, yellow 15px, transparent 15px, transparent 30px), repeating-linear-gradient(60deg, cyan 0px, cyan 15px, transparent 15px, transparent 30px)",
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
