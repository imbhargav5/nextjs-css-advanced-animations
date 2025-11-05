"use client";

import { DemoBlock } from "@/components/demo-block";

export function BlendModeWithClippingDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Blend Mode with Clipping</h2>

      <DemoBlock
        title="Circle Clip Blend"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{
      mixBlendMode: "multiply",
      clipPath: "circle(40% at 50% 50%)",
    }}
  />
</div>

/* Circular clipping with blend mode */
/* Creates perfect circular blend effect */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-purple-500">
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{
                mixBlendMode: "multiply",
                clipPath: "circle(40% at 50% 50%)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Polygon Clip Blend"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{
      mixBlendMode: "screen",
      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    }}
  />
</div>

/* Diamond-shaped clip with blend mode */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{
                mixBlendMode: "screen",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multiple Clipped Shapes"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
  <div className="absolute top-0 left-0 w-32 h-32 bg-red-500"
       style={{
         mixBlendMode: "overlay",
         clipPath: "circle(50%)",
       }} />
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-500"
       style={{
         mixBlendMode: "difference",
         clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
       }} />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500"
       style={{
         mixBlendMode: "hard-light",
         clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
       }} />
</div>

/* Multiple clipped shapes with different blend modes */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-green-400 to-teal-400">
            <div
              className="absolute top-0 left-0 w-32 h-32 bg-red-500"
              style={{
                mixBlendMode: "overlay",
                clipPath: "circle(50%)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-500"
              style={{
                mixBlendMode: "difference",
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500"
              style={{
                mixBlendMode: "hard-light",
                clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Clip Blend"
        code={`<div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
    style={{
      mixBlendMode: "multiply",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)",
    }}
  />
  <div
    className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-orange-400"
    style={{
      mixBlendMode: "screen",
      clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
    }}
  />
</div>

/* Layered complex clip paths with blend modes */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
              style={{
                mixBlendMode: "multiply",
                clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)",
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-orange-400"
              style={{
                mixBlendMode: "screen",
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
