"use client";

import { DemoBlock } from "@/components/demo-block";

export function GeometricPatternsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Complex Geometric Patterns</h2>

      <DemoBlock
        title="Star Pattern"
        code={`<div className="relative h-64">
  {[0, 1, 2, 3].map((i) => (
    <div
      key={i}
      className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"
      style={{
        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        transform: \`rotate(\${i * 90}deg) scale(\${1 - i * 0.2})\`,
        opacity: 0.8 - i * 0.2
      }}
    />
  ))}
</div>

/* Multiple rotated stars creating pattern */`}
      >
        <div className="relative h-64">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"
              style={{
                clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                transform: `rotate(${i * 90}deg) scale(${1 - i * 0.2})`,
                opacity: 0.8 - i * 0.2,
              }}
            />
          ))}
        </div>
      </DemoBlock>

      <DemoBlock
        title="Hexagon Grid"
        code={`<div className="relative h-64">
  {[
    [25, 25],
    [75, 25],
    [25, 75],
    [75, 75]
  ].map(([x, y], i) => (
    <div
      key={i}
      className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
      style={{
        clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
        transform: \`translate(\${x - 50}%, \${y - 50}%) scale(0.4)\`,
        opacity: 0.7
      }}
    />
  ))}
</div>

/* Grid of hexagons */`}
      >
        <div className="relative h-64">
          {[
            [25, 25],
            [75, 25],
            [25, 75],
            [75, 75],
          ].map(([x, y], i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                transform: `translate(${x - 50}%, ${y - 50}%) scale(0.4)`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>
      </DemoBlock>

      <DemoBlock
        title="Concentric Circles"
        code={`<div className="relative h-64">
  {[0, 1, 2, 3].map((i) => (
    <div
      key={i}
      className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
      style={{
        clipPath: \`circle(\${40 - i * 8}% at 50% 50%)\`,
        opacity: 0.6 - i * 0.15
      }}
    />
  ))}
</div>

/* Multiple circles with decreasing radius */`}
      >
        <div className="relative h-64">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
              style={{
                clipPath: `circle(${40 - i * 8}% at 50% 50%)`,
                opacity: 0.6 - i * 0.15,
              }}
            />
          ))}
        </div>
      </DemoBlock>

      <DemoBlock
        title="Triangle Pattern"
        code={`<div className="relative h-64">
  {[
    [50, 0],
    [0, 100],
    [100, 100]
  ].map(([x, y], i) => (
    <div
      key={i}
      className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
      style={{
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        transform: \`translate(\${x - 50}%, \${y - 50}%) scale(0.5)\`,
        opacity: 0.7
      }}
    />
  ))}
</div>

/* Triangles at different positions */`}
      >
        <div className="relative h-64">
          {[
            [50, 0],
            [0, 100],
            [100, 100],
          ].map(([x, y], i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                transform: `translate(${x - 50}%, ${y - 50}%) scale(0.5)`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>
      </DemoBlock>
    </div>
  );
}

