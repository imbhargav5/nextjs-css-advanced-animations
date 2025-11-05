"use client";

import { DemoBlock } from "@/components/demo-block";

export function SaturateDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Saturate Backdrop Filter</h2>

      <DemoBlock
        title="Desaturated (0.5)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "saturate(0.5)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">50% saturation</p>
  </div>
</div>

/* backdrop-filter: saturate(0.5) */
/* Values: 0 (grayscale) to infinity (vibrant) */
/* Adjusts the color saturation of the background */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "saturate(0.5)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">50% saturation</p>
              <p className="text-sm text-gray-600">Reduced color intensity</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Oversaturated (1.5)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "saturate(1.5)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">150% saturation</p>
  </div>
</div>

/* Increased color intensity */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "saturate(1.5)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">150% saturation</p>
              <p className="text-sm text-gray-600">Increased color intensity</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Very Desaturated (0.2)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "saturate(0.2)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">20% saturation</p>
  </div>
</div>

/* Nearly grayscale */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "saturate(0.2)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">20% saturation</p>
              <p className="text-sm text-gray-600">Nearly grayscale</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Maximum Saturation (2.0)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "saturate(2.0)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">200% saturation</p>
  </div>
</div>

/* Maximum color intensity */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "saturate(2.0)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">200% saturation</p>
              <p className="text-sm text-gray-600">Maximum color intensity</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
