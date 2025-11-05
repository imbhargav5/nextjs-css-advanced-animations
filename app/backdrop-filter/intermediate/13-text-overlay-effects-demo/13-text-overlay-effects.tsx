"use client";

import { DemoBlock } from "@/components/demo-block";

export function TextOverlayEffectsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Text Overlay Effects</h2>

      <DemoBlock
        title="Readable Text Overlay"
        code={`<div className="relative rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 h-40" />
  <div
    className="absolute inset-0 bg-black/20"
    style={{
      backdropFilter: "blur(10px)"
    }}
  />
  <div className="relative z-10 p-6">
    <h4 className="text-2xl font-bold text-white mb-2">Title Text</h4>
    <p className="text-white/90">
      Text remains readable over blurred background
    </p>
  </div>
</div>

/* Backdrop filters on text overlays */
backdrop-filter: blur(10px);
background-color: rgba(0, 0, 0, 0.2);`}
      >
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 h-40" />
            <div
              className="absolute inset-0 bg-black/20"
              style={{
                backdropFilter: "blur(10px)",
              }}
            />
            <div className="relative z-10 p-6">
              <h4 className="text-2xl font-bold text-white mb-2">Title Text</h4>
              <p className="text-white/90">
                Text remains readable over blurred background
              </p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Strong Blur for Text"
        code={`<div className="relative rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 h-40" />
  <div
    className="absolute inset-0 bg-black/30"
    style={{
      backdropFilter: "blur(20px)"
    }}
  />
  <div className="relative z-10 p-6">
    <h4 className="text-2xl font-bold text-white mb-2">Headline</h4>
    <p className="text-white/90">
      Heavy blur ensures text readability
    </p>
  </div>
</div>

/* Heavy blur ensures text readability */`}
      >
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 h-40" />
            <div
              className="absolute inset-0 bg-black/30"
              style={{
                backdropFilter: "blur(20px)",
              }}
            />
            <div className="relative z-10 p-6">
              <h4 className="text-2xl font-bold text-white mb-2">Headline</h4>
              <p className="text-white/90">
                Heavy blur ensures text readability
              </p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Text with Brightness"
        code={`<div className="relative rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 h-40" />
  <div
    className="absolute inset-0 bg-black/20"
    style={{
      backdropFilter: "blur(8px) brightness(0.7)"
    }}
  />
  <div className="relative z-10 p-6">
    <h4 className="text-2xl font-bold text-white mb-2">Content</h4>
    <p className="text-white/90">
      Darkened backdrop for contrast
    </p>
  </div>
</div>

/* Darkened backdrop for contrast */`}
      >
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 h-40" />
            <div
              className="absolute inset-0 bg-black/20"
              style={{
                backdropFilter: "blur(8px) brightness(0.7)",
              }}
            />
            <div className="relative z-10 p-6">
              <h4 className="text-2xl font-bold text-white mb-2">Content</h4>
              <p className="text-white/90">
                Darkened backdrop for contrast
              </p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Premium Text Overlay"
        code={`<div className="relative rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 h-40" />
  <div
    className="absolute inset-0 bg-black/25"
    style={{
      backdropFilter: "blur(15px) saturate(1.3) brightness(0.85)"
    }}
  />
  <div className="relative z-10 p-6">
    <h4 className="text-2xl font-bold text-white mb-2">Premium</h4>
    <p className="text-white/90">
      Complex filter combination
    </p>
  </div>
</div>

/* Complex filter combination */
backdrop-filter: blur(15px) saturate(1.3) brightness(0.85);`}
      >
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 h-40" />
            <div
              className="absolute inset-0 bg-black/25"
              style={{
                backdropFilter: "blur(15px) saturate(1.3) brightness(0.85)",
              }}
            />
            <div className="relative z-10 p-6">
              <h4 className="text-2xl font-bold text-white mb-2">Premium</h4>
              <p className="text-white/90">
                Complex filter combination
              </p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
