"use client";

import { DemoBlock } from "@/components/demo-block";

export function TextOutlineBlendDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Text Outline Blend</h2>

      <DemoBlock
        title="Multiply Outline"
        code={`<div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
  <h2
    className="text-4xl font-bold text-transparent"
    style={{
      WebkitTextStroke: "2px yellow",
      mixBlendMode: "multiply",
      color: "transparent"
    }}
  >
    OUTLINE
  </h2>
</div>

/* Text outline blends with background */
/* Creates unique outline effects */`}
      >
        <div className="flex justify-center">
          <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <h2
              className="text-4xl font-bold text-transparent"
              style={{
                WebkitTextStroke: "2px yellow",
                mixBlendMode: "multiply",
                color: "transparent",
              }}
            >
              OUTLINE
            </h2>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Screen Outline"
        code={`<div className="w-full h-64 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
  <h2
    className="text-4xl font-bold text-transparent"
    style={{
      WebkitTextStroke: "2px pink",
      mixBlendMode: "screen",
      color: "transparent"
    }}
  >
    BLEND
  </h2>
</div>`}
      >
        <div className="flex justify-center">
          <div className="w-full h-64 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
            <h2
              className="text-4xl font-bold text-transparent"
              style={{
                WebkitTextStroke: "2px pink",
                mixBlendMode: "screen",
                color: "transparent",
              }}
            >
              BLEND
            </h2>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Difference Outline"
        code={`<div className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
  <h2
    className="text-4xl font-bold text-transparent"
    style={{
      WebkitTextStroke: "2px red",
      mixBlendMode: "difference",
      color: "transparent"
    }}
  >
    TEXT
  </h2>
</div>`}
      >
        <div className="flex justify-center">
          <div className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
            <h2
              className="text-4xl font-bold text-transparent"
              style={{
                WebkitTextStroke: "2px red",
                mixBlendMode: "difference",
                color: "transparent",
              }}
            >
              TEXT
            </h2>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Overlay Outline"
        code={`<div className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
  <h2
    className="text-4xl font-bold text-transparent"
    style={{
      WebkitTextStroke: "2px yellow",
      mixBlendMode: "overlay",
      color: "transparent"
    }}
  >
    EFFECT
  </h2>
</div>`}
      >
        <div className="flex justify-center">
          <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
            <h2
              className="text-4xl font-bold text-transparent"
              style={{
                WebkitTextStroke: "2px yellow",
                mixBlendMode: "overlay",
                color: "transparent",
              }}
            >
              EFFECT
            </h2>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

