"use client";

import { DemoBlock } from "@/components/demo-block";

export function BlendModeFiltersDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Mode Filters</h2>

      <DemoBlock
        title="Blur + Blend"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{
      mixBlendMode: "multiply",
      filter: "blur(10px)",
    }}
  />
</div>

/* Blur filter creates soft blend edges */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{
                mixBlendMode: "multiply",
                filter: "blur(10px)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Brightness + Blend"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{
      mixBlendMode: "screen",
      filter: "brightness(1.5) contrast(1.2)",
    }}
  />
</div>

/* Brightness and contrast enhance blend effect */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{
                mixBlendMode: "screen",
                filter: "brightness(1.5) contrast(1.2)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multiple Filters"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
    style={{
      mixBlendMode: "overlay",
      filter: "blur(5px) brightness(1.3) contrast(1.2) saturate(1.5)",
    }}
  />
</div>

/* Combine multiple filters for unique effects */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
              style={{
                mixBlendMode: "overlay",
                filter: "blur(5px) brightness(1.3) contrast(1.2) saturate(1.5)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Filter Blend"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
    style={{
      mixBlendMode: "difference",
      filter: "blur(8px) brightness(1.2) contrast(1.3) hue-rotate(45deg)",
    }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-orange-400"
    style={{
      mixBlendMode: "hard-light",
      filter: "blur(4px) saturate(1.5)",
    }}
  />
</div>

/* Multiple layers with different filters */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
              style={{
                mixBlendMode: "difference",
                filter: "blur(8px) brightness(1.2) contrast(1.3) hue-rotate(45deg)",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-orange-400"
              style={{
                mixBlendMode: "hard-light",
                filter: "blur(4px) saturate(1.5)",
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
