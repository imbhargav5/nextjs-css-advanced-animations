"use client";

import { DemoBlock } from "@/components/demo-block";

export function OpacityDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Opacity Backdrop Filter</h2>

      <DemoBlock
        title="Light Opacity (0.3)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "opacity(0.3)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">30% opacity</p>
  </div>
</div>

/* backdrop-filter: opacity(0.3) */
/* Values: 0 (transparent) to 1 (opaque) */
/* Adjusts the opacity of the background */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "opacity(0.3)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">30% opacity</p>
              <p className="text-sm text-gray-600">Background mostly visible</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Medium Opacity (0.6)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "opacity(0.6)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">60% opacity</p>
  </div>
</div>

/* Balanced visibility */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "opacity(0.6)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">60% opacity</p>
              <p className="text-sm text-gray-600">Balanced visibility</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="High Opacity (0.8)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "opacity(0.8)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">80% opacity</p>
  </div>
</div>

/* Background less visible */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "opacity(0.8)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">80% opacity</p>
              <p className="text-sm text-gray-600">Background less visible</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Full Opacity (1.0)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "opacity(1.0)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">100% opacity</p>
  </div>
</div>

/* Background fully opaque */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "opacity(1.0)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">100% opacity</p>
              <p className="text-sm text-gray-600">Background fully opaque</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
