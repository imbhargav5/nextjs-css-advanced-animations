"use client";

import { DemoBlock } from "@/components/demo-block";

export function ImageOverlayBlendDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Image Overlay Blend</h2>

      <DemoBlock
        title="Overlay on Image"
        code={`<div className="relative w-full h-64 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
    alt="Mountain landscape"
    className="w-full h-full object-cover"
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
    style={{ mixBlendMode: "overlay" }}
  />
</div>

/* mix-blend-mode: overlay */
/* Creates dramatic color overlay on images */`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
              alt="Mountain landscape"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Multiply on Image"
        code={`<div className="relative w-full h-64 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop"
    alt="Forest path"
    className="w-full h-full object-cover"
  />
  <div
    className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
    style={{ mixBlendMode: "multiply" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop"
              alt="Forest path"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Screen on Image"
        code={`<div className="relative w-full h-64 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop"
    alt="Ocean waves"
    className="w-full h-full object-cover"
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
    style={{ mixBlendMode: "screen" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop"
              alt="Ocean waves"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Hard Light on Image"
        code={`<div className="relative w-full h-64 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop"
    alt="Desert landscape"
    className="w-full h-full object-cover"
  />
  <div
    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
    style={{ mixBlendMode: "hard-light" }}
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop"
              alt="Desert landscape"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
              style={{ mixBlendMode: "hard-light" }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

