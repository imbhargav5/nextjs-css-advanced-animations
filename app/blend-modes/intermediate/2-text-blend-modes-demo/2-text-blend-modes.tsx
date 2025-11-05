"use client";

import { DemoBlock } from "@/components/demo-block";

export function TextBlendModesDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Text Blend Modes</h2>

      <DemoBlock
        title="Multiply Text"
        code={`<div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
  <h2
    className="text-4xl font-bold text-yellow-400"
    style={{ mixBlendMode: "multiply" }}
  >
    BLEND
  </h2>
</div>

/* Text blends with background */
/* Creates interesting color interactions */`}
      >
        <div className="flex justify-center">
          <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <h2
              className="text-4xl font-bold text-yellow-400"
              style={{ mixBlendMode: "multiply" }}
            >
              BLEND
            </h2>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Screen Text"
        code={`<div className="w-full h-64 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
  <h2
    className="text-4xl font-bold text-pink-400"
    style={{ mixBlendMode: "screen" }}
  >
    MODES
  </h2>
</div>`}
      >
        <div className="flex justify-center">
          <div className="w-full h-64 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
            <h2
              className="text-4xl font-bold text-pink-400"
              style={{ mixBlendMode: "screen" }}
            >
              MODES
            </h2>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Difference Text"
        code={`<div className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
  <h2
    className="text-4xl font-bold text-red-500"
    style={{ mixBlendMode: "difference" }}
  >
    CSS
  </h2>
</div>`}
      >
        <div className="flex justify-center">
          <div className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
            <h2
              className="text-4xl font-bold text-red-500"
              style={{ mixBlendMode: "difference" }}
            >
              CSS
            </h2>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Overlay Text"
        code={`<div className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
  <h2
    className="text-4xl font-bold text-yellow-400"
    style={{ mixBlendMode: "overlay" }}
  >
    TEXT
  </h2>
</div>`}
      >
        <div className="flex justify-center">
          <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
            <h2
              className="text-4xl font-bold text-yellow-400"
              style={{ mixBlendMode: "overlay" }}
            >
              TEXT
            </h2>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

