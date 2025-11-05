"use client";

import { DemoBlock } from "@/components/demo-block";

export function HueRotateDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Hue Rotate Backdrop Filter</h2>

      <DemoBlock
        title="Small Rotation (90deg)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "hue-rotate(90deg)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">90° rotation</p>
  </div>
</div>

/* backdrop-filter: hue-rotate(90deg) */
/* Values: 0deg to 360deg */
/* Rotates the hue of colors in the background */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "hue-rotate(90deg)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">90° rotation</p>
              <p className="text-sm text-gray-600">Shifts colors on color wheel</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Medium Rotation (180deg)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "hue-rotate(180deg)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">180° rotation</p>
  </div>
</div>

/* Opposite colors on wheel */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "hue-rotate(180deg)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">180° rotation</p>
              <p className="text-sm text-gray-600">Opposite colors on wheel</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Large Rotation (270deg)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "hue-rotate(270deg)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">270° rotation</p>
  </div>
</div>

/* Three-quarter turn */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "hue-rotate(270deg)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">270° rotation</p>
              <p className="text-sm text-gray-600">Three-quarter turn</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Full Rotation (360deg)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "hue-rotate(360deg)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">360° rotation</p>
  </div>
</div>

/* Full circle (back to original) */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "hue-rotate(360deg)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">360° rotation</p>
              <p className="text-sm text-gray-600">Full circle (back to original)</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
