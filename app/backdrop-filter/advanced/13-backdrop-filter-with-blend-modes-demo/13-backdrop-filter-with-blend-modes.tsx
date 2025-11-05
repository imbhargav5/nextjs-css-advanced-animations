"use client";

import { DemoBlock } from "@/components/demo-block";

export function BackdropFilterWithBlendModesDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Backdrop Filter with Blend Modes</h2>

      <DemoBlock
        title="Blur + Multiply"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(15px)",
      mixBlendMode: "multiply"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px);
mix-blend-mode: multiply;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
              style={{
                backdropFilter: "blur(15px)",
                mixBlendMode: "multiply",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Blur + Blend</p>
              <p className="text-sm text-gray-600">Combined effects</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Blur + Overlay"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(20px)",
      mixBlendMode: "overlay"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(20px);
mix-blend-mode: overlay;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
              style={{
                backdropFilter: "blur(20px)",
                mixBlendMode: "overlay",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Enhanced Blend</p>
              <p className="text-sm text-gray-600">Overlay blend mode</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Blur + Screen"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(15px) brightness(1.1)",
      mixBlendMode: "screen"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px) brightness(1.1);
mix-blend-mode: screen;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
              style={{
                backdropFilter: "blur(15px) brightness(1.1)",
                mixBlendMode: "screen",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Screen Blend</p>
              <p className="text-sm text-gray-600">Lightening effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Combination"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(25px) saturate(1.5)",
      mixBlendMode: "soft-light"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(25px) saturate(1.5);
mix-blend-mode: soft-light;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
              style={{
                backdropFilter: "blur(25px) saturate(1.5)",
                mixBlendMode: "soft-light",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Rich Effect</p>
              <p className="text-sm text-gray-600">Multiple techniques</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
