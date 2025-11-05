"use client";

import { DemoBlock } from "@/components/demo-block";

export function TextClippingDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Text Clipping</h2>

      {/* Example 1: Circle text clip */}
      <DemoBlock
        title="Circle Text Clip"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-6xl font-bold text-white"
  style={{
    clipPath: "circle(40% at 50% 50%)"
  }}
>
  CLIP
</div>

/* Text content is clipped along with the background */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-6xl font-bold text-white"
            style={{
              clipPath: "circle(40% at 50% 50%)",
            }}
          >
            CLIP
          </div>
        </div>
      </DemoBlock>

      {/* Example 2: Polygon text clip */}
      <DemoBlock
        title="Polygon Text Clip"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-6xl font-bold text-white"
  style={{
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
  }}
>
  PATH
</div>

/* Triangle shape with text inside */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-6xl font-bold text-white"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          >
            PATH
          </div>
        </div>
      </DemoBlock>

      {/* Example 3: Star text clip */}
      <DemoBlock
        title="Star Text Clip"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-5xl font-bold text-white"
  style={{
    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
  }}
>
  STAR
</div>

/* Star-shaped text container */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-5xl font-bold text-white"
            style={{
              clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          >
            STAR
          </div>
        </div>
      </DemoBlock>

      {/* Example 4: Hexagon text clip */}
      <DemoBlock
        title="Hexagon Text Clip"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-5xl font-bold text-white"
  style={{
    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
  }}
>
  HEX
</div>

/* Hexagon-shaped text container */`}
      >
        <div className="flex justify-center">
          <div
            className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-5xl font-bold text-white"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            }}
          >
            HEX
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

