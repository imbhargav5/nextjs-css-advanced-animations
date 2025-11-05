"use client";

import { DemoBlock } from "@/components/demo-block";

export function LayeredPolygonsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Layered Polygons</h2>

      {/* Example 1: Overlapping triangles */}
      <DemoBlock
        title="Overlapping Triangles"
        code={`<div className="relative w-full h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"
    style={{
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      opacity: 0.7
    }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
    style={{
      clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
      opacity: 0.7
    }}
  />
</div>

/* Multiple layers with different clip-paths */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64">
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                opacity: 0.7,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
              style={{
                clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                opacity: 0.7,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 2: Nested shapes */}
      <DemoBlock
        title="Nested Shapes"
        code={`<div className="relative w-full h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
    style={{
      clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
      opacity: 0.8
    }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500"
    style={{
      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      opacity: 0.6
    }}
  />
</div>

/* Hexagon with nested diamond */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64">
            <div
              className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                opacity: 0.8,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                opacity: 0.6,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 3: Multiple hexagons */}
      <DemoBlock
        title="Multiple Hexagons"
        code={`<div className="relative w-full h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
    style={{
      clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
      opacity: 0.5
    }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500"
    style={{
      clipPath: "polygon(35% 5%, 65% 5%, 95% 50%, 65% 95%, 35% 95%, 5% 50%)",
      opacity: 0.5
    }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500"
    style={{
      clipPath: "polygon(40% 10%, 60% 10%, 90% 50%, 60% 90%, 40% 90%, 10% 50%)",
      opacity: 0.5
    }}
  />
</div>

/* Three nested hexagons */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64">
            <div
              className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                opacity: 0.5,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500"
              style={{
                clipPath: "polygon(35% 5%, 65% 5%, 95% 50%, 65% 95%, 35% 95%, 5% 50%)",
                opacity: 0.5,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500"
              style={{
                clipPath: "polygon(40% 10%, 60% 10%, 90% 50%, 60% 90%, 40% 90%, 10% 50%)",
                opacity: 0.5,
              }}
            />
          </div>
        </div>
      </DemoBlock>

      {/* Example 4: Star layers */}
      <DemoBlock
        title="Star Layers"
        code={`<div className="relative w-full h-64">
  <div
    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500"
    style={{
      clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
      opacity: 0.6
    }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
    style={{
      clipPath: "polygon(50% 5%, 58% 32%, 94% 32%, 66% 54%, 75% 88%, 50% 68%, 25% 88%, 34% 54%, 6% 32%, 42% 32%)",
      opacity: 0.6
    }}
  />
</div>

/* Two overlapping star shapes */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full h-64">
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500"
              style={{
                clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                opacity: 0.6,
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
              style={{
                clipPath: "polygon(50% 5%, 58% 32%, 94% 32%, 66% 54%, 75% 88%, 50% 68%, 25% 88%, 34% 54%, 6% 32%, 42% 32%)",
                opacity: 0.6,
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

