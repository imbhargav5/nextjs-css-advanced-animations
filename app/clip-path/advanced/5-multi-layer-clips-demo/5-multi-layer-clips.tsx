"use client";

import { DemoBlock } from "@/components/demo-block";

export function MultiLayerClipsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Multiple Clip-Path Layers</h2>

      <DemoBlock
        title="Intersecting Shapes"
        code={`<div className="relative h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"
    style={{ clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
    style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)" }}
  />
</div>`}
      >
        <div className="relative h-64">
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"
            style={{
              clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
            style={{
              clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Overlapping Circles"
        code={`<div className="relative h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
    style={{ clipPath: "circle(40% at 30% 50%)" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500"
    style={{ clipPath: "circle(40% at 70% 50%)" }}
  />
</div>

/* Two circles overlap in the middle */`}
      >
        <div className="relative h-64">
          <div
            className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
            style={{
              clipPath: "circle(40% at 30% 50%)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500"
            style={{
              clipPath: "circle(40% at 70% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Composition"
        code={`<div className="relative h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500"
    style={{ clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)" }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500"
    style={{ clipPath: "circle(30% at 50% 50%)" }}
  />
</div>

/* Three layers creating complex pattern */`}
      >
        <div className="relative h-64">
          <div
            className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500"
            style={{
              clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500"
            style={{
              clipPath: "circle(30% at 50% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Layered Hexagons"
        code={`<div className="relative h-64">
  {[0, 1, 2].map((i) => (
    <div
      key={i}
      className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500"
      style={{
        clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
        transform: \`scale(\${1 - i * 0.2}) translate(\${i * 5}%, \${i * 5}%)\`,
        opacity: 0.6 - i * 0.15
      }}
    />
  ))}
</div>

/* Multiple hexagons with transforms */`}
      >
        <div className="relative h-64">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                transform: `scale(${1 - i * 0.2}) translate(${i * 5}%, ${i * 5}%)`,
                opacity: 0.6 - i * 0.15,
              }}
            />
          ))}
        </div>
      </DemoBlock>
    </div>
  );
}

