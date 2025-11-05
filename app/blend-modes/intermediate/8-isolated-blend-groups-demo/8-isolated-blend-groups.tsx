"use client";

import { DemoBlock } from "@/components/demo-block";

export function IsolatedBlendGroupsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Isolated Blend Groups</h2>

      <DemoBlock
        title="Isolated Group"
        code={`<div
  className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500"
  style={{ isolation: "isolate" }}
>
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{ mixBlendMode: "multiply" }}
  />
</div>

/* isolation: isolate creates new stacking context */
/* Blend modes only affect elements within group */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500" style={{ isolation: "isolate" }}>
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Non-Isolated (Comparison)"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{ mixBlendMode: "multiply" }}
  />
</div>

/* Without isolation, blend affects all layers */`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Nested Isolated"
        code={`<div
  className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400"
  style={{ isolation: "isolate" }}
>
  <div
    className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500"
    style={{ mixBlendMode: "screen" }}
  />
  <div
    className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-500"
    style={{ mixBlendMode: "overlay" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 to-teal-400" style={{ isolation: "isolate" }}>
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500"
              style={{ mixBlendMode: "screen" }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-500"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multiple Groups"
        code={`<div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80"
    style={{ isolation: "isolate", mixBlendMode: "multiply" }}
  >
    <div
      className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-400"
      style={{ mixBlendMode: "screen" }}
    />
  </div>
  <div
    className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80"
    style={{ isolation: "isolate", mixBlendMode: "difference" }}
  >
    <div
      className="w-full h-full bg-gradient-to-br from-yellow-400 to-red-400"
      style={{ mixBlendMode: "overlay" }}
    />
  </div>
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80" style={{ isolation: "isolate", mixBlendMode: "multiply" }}>
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-400" style={{ mixBlendMode: "screen" }} />
            </div>
            <div className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80" style={{ isolation: "isolate", mixBlendMode: "difference" }}>
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-red-400" style={{ mixBlendMode: "overlay" }} />
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

