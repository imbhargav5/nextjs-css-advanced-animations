"use client";

import { DemoBlock } from "@/components/demo-block";

export function ImageGalleriesDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Image Galleries</h2>

      <DemoBlock
        title="Image with Blur Overlay"
        code={`<div className="relative rounded-lg overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    alt="Landscape"
    className="w-full h-48 object-cover"
  />
  <div
    className="absolute bottom-0 left-0 right-0 bg-white/30 p-4"
    style={{
      backdropFilter: "blur(10px)"
    }}
  >
    <p className="text-gray-800 font-semibold">Image Title</p>
    <p className="text-sm text-gray-700">Overlay with blur</p>
  </div>
</div>

/* Backdrop filters on image overlays */
backdrop-filter: blur(10px);
background-color: rgba(255, 255, 255, 0.3);`}
      >
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden max-w-md w-full">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              alt="Landscape"
              className="w-full h-48 object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 bg-white/30 p-4"
              style={{
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="text-gray-800 font-semibold">Image Title</p>
              <p className="text-sm text-gray-700">Overlay with blur</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Info Overlay"
        code={`<div className="relative rounded-lg overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    alt="Landscape"
    className="w-full h-48 object-cover"
  />
  <div
    className="absolute inset-0 bg-black/20 flex items-center justify-center"
    style={{
      backdropFilter: "blur(5px)"
    }}
  >
    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
      <p className="text-gray-800 font-semibold">Full Overlay</p>
    </div>
  </div>
</div>

/* Full overlay with blur */`}
      >
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden max-w-md w-full">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              alt="Landscape"
              className="w-full h-48 object-cover"
            />
            <div
              className="absolute inset-0 bg-black/20 flex items-center justify-center"
              style={{
                backdropFilter: "blur(5px)",
              }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-gray-800 font-semibold">Full Overlay</p>
              </div>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Hover Overlay"
        code={`<div className="relative rounded-lg overflow-hidden group">
  <img
    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    alt="Landscape"
    className="w-full h-48 object-cover"
  />
  <div
    className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
    style={{
      backdropFilter: "blur(8px)"
    }}
  >
    <p className="text-white font-semibold">Hover to reveal</p>
  </div>
</div>

/* Hover to reveal overlay */`}
      >
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden group max-w-md w-full">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              alt="Landscape"
              className="w-full h-48 object-cover"
            />
            <div
              className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                backdropFilter: "blur(8px)",
              }}
            >
              <p className="text-white font-semibold">Hover to reveal</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Card Overlay"
        code={`<div className="relative rounded-lg overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    alt="Landscape"
    className="w-full h-48 object-cover"
  />
  <div
    className="absolute bottom-0 left-0 right-0 p-4"
    style={{
      backdropFilter: "blur(15px) brightness(0.8)",
      backgroundColor: "rgba(255, 255, 255, 0.2)"
    }}
  >
    <p className="text-white font-semibold">Gallery Item</p>
    <p className="text-sm text-white/90">Complex overlay effect</p>
  </div>
</div>

/* Complex overlay effect */`}
      >
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden max-w-md w-full">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              alt="Landscape"
              className="w-full h-48 object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{
                backdropFilter: "blur(15px) brightness(0.8)",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <p className="text-white font-semibold">Gallery Item</p>
              <p className="text-sm text-white/90">Complex overlay effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
