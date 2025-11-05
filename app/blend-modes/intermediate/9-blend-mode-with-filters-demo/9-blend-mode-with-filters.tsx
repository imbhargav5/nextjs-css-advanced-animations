"use client";

import { DemoBlock } from "@/components/demo-block";

export function BlendModeWithFiltersDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Mode with Filters</h2>

      <DemoBlock
        title="Blur Filter"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{ mixBlendMode: "multiply", filter: "blur(8px)" }}
  />
</div>

/* Filters applied before blending */
/* Creates unique visual effects */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{ mixBlendMode: "multiply", filter: "blur(8px)" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Brightness Filter"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{ mixBlendMode: "screen", filter: "brightness(1.5)" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{ mixBlendMode: "screen", filter: "brightness(1.5)" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Contrast Filter"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
    style={{ mixBlendMode: "overlay", filter: "contrast(1.5)" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
              style={{ mixBlendMode: "overlay", filter: "contrast(1.5)" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multiple Filters"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
    style={{ mixBlendMode: "hard-light", filter: "blur(4px) brightness(1.2) contrast(1.3)" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
              style={{ mixBlendMode: "hard-light", filter: "blur(4px) brightness(1.2) contrast(1.3)" }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

