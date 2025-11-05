"use client";

import { DemoBlock } from "@/components/demo-block";

export function GrayscaleDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Grayscale Backdrop Filter</h2>

      <DemoBlock
        title="Partial Grayscale (0.5)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "grayscale(0.5)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">50% grayscale</p>
  </div>
</div>

/* backdrop-filter: grayscale(0.5) */
/* Values: 0 (no effect) to 1 (fully grayscale) */
/* Converts the background to grayscale */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "grayscale(0.5)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">50% grayscale</p>
              <p className="text-sm text-gray-600">Partially desaturated background</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Full Grayscale (1.0)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "grayscale(1.0)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">100% grayscale</p>
  </div>
</div>

/* Completely desaturated background */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "grayscale(1.0)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">100% grayscale</p>
              <p className="text-sm text-gray-600">Completely desaturated background</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Light Grayscale (0.3)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "grayscale(0.3)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Subtle grayscale</p>
  </div>
</div>

/* Slight desaturation effect */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "grayscale(0.3)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Subtle grayscale</p>
              <p className="text-sm text-gray-600">Slight desaturation effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Strong Grayscale (0.8)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "grayscale(0.8)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Heavy grayscale</p>
  </div>
</div>

/* Mostly desaturated background */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "grayscale(0.8)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Heavy grayscale</p>
              <p className="text-sm text-gray-600">Mostly desaturated background</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
