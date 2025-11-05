"use client";

import { DemoBlock } from "@/components/demo-block";

export function BackgroundBlendModeDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Background Blend Mode</h2>

      <DemoBlock
        title="Background Multiply"
        code={`<div
  className="w-64 h-64"
  style={{
    backgroundBlendMode: "multiply",
    backgroundImage: "linear-gradient(to bottom right, yellow, red), linear-gradient(to bottom right, blue, purple)"
  }}
/>

/* background-blend-mode blends multiple backgrounds */
/* Different from mix-blend-mode */`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64"
            style={{
              backgroundBlendMode: "multiply",
              backgroundImage: "linear-gradient(to bottom right, yellow, red), linear-gradient(to bottom right, blue, purple)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Background Screen"
        code={`<div
  className="w-64 h-64"
  style={{
    backgroundBlendMode: "screen",
    backgroundImage: "linear-gradient(to top right, pink, orange), linear-gradient(to bottom right, indigo, purple)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64"
            style={{
              backgroundBlendMode: "screen",
              backgroundImage: "linear-gradient(to top right, pink, orange), linear-gradient(to bottom right, indigo, purple)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Background Overlay"
        code={`<div
  className="w-64 h-64"
  style={{
    backgroundBlendMode: "overlay",
    backgroundImage: "linear-gradient(to bottom right, red, yellow), linear-gradient(to bottom right, green, teal)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64"
            style={{
              backgroundBlendMode: "overlay",
              backgroundImage: "linear-gradient(to bottom right, red, yellow), linear-gradient(to bottom right, green, teal)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Background Hard Light"
        code={`<div
  className="w-64 h-64"
  style={{
    backgroundBlendMode: "hard-light",
    backgroundImage: "linear-gradient(to bottom right, pink, cyan), linear-gradient(to bottom right, blue, indigo)"
  }}
/>`}
      >
        <div className="flex justify-center">
          <div
            className="w-64 h-64"
            style={{
              backgroundBlendMode: "hard-light",
              backgroundImage: "linear-gradient(to bottom right, pink, cyan), linear-gradient(to bottom right, blue, indigo)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

