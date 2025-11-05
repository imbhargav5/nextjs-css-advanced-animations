"use client";

import { DemoBlock } from "@/components/demo-block";

export function ImageCropDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Image Crop with Clip-Path</h2>

      <DemoBlock
        title="Diamond Crop"
        code={`<img
  src="..."
  className="w-full h-64 object-cover"
  style={{
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
  }}
/>

/* Creates diamond shape without image editing */
/* Non-destructive cropping */`}
      >
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
            alt="Mountain"
            className="w-64 h-64 object-cover"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Octagon Crop"
        code={`<img
  src="..."
  className="w-full h-64 object-cover"
  style={{
    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
  }}
/>

/* 8-sided polygon for octagon shape */`}
      >
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
            alt="Mountain"
            className="w-64 h-64 object-cover"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Frame Crop"
        code={`<img
  src="..."
  className="w-full h-64 object-cover"
  style={{
    clipPath: "inset(10% 15% 10% 15%)"
  }}
/>

/* Inset creates a frame effect */`}
      >
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
            alt="Mountain"
            className="w-64 h-64 object-cover"
            style={{
              clipPath: "inset(10% 15% 10% 15%)",
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Arrow Shape"
        code={`<img
  src="..."
  className="w-full h-64 object-cover"
  style={{
    clipPath: "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)"
  }}
/>

/* Custom arrow shape using polygon */`}
      >
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
            alt="Mountain"
            className="w-64 h-64 object-cover"
            style={{
              clipPath: "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}
