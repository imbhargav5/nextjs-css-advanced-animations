"use client";

import { DemoBlock } from "@/components/demo-block";

export function GradientBackdropDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Gradient Backdrop</h2>

      <DemoBlock
        title="Blur on Gradient"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
    style={{
      backdropFilter: "blur(15px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Gradient Background</p>
  </div>
</div>

/* Blur applied to gradient */
backdrop-filter: blur(15px);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
              style={{
                backdropFilter: "blur(15px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Gradient Background</p>
              <p className="text-sm text-gray-600">Blur applied to gradient</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Brightness on Gradient"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "brightness(0.7)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Darkened Gradient</p>
  </div>
</div>

/* Brightness filter on gradient */
backdrop-filter: brightness(0.7);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "brightness(0.7)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Darkened Gradient</p>
              <p className="text-sm text-gray-600">Brightness filter on gradient</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Saturate on Gradient"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "saturate(2.0)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Enhanced Gradient</p>
  </div>
</div>

/* Increased saturation */
backdrop-filter: saturate(2.0);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "saturate(2.0)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Enhanced Gradient</p>
              <p className="text-sm text-gray-600">Increased saturation</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Filter on Gradient"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(12px) saturate(1.5) brightness(1.1)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Rich Gradient</p>
  </div>
</div>

/* Multiple filters combined */
backdrop-filter: blur(12px) saturate(1.5) brightness(1.1);
/* Creates rich visual effects */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "blur(12px) saturate(1.5) brightness(1.1)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Rich Gradient</p>
              <p className="text-sm text-gray-600">Multiple filters combined</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
