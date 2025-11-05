"use client";

import { DemoBlock } from "@/components/demo-block";

export function SepiaDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Sepia Backdrop Filter</h2>

      <DemoBlock
        title="Partial Sepia (0.5)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "sepia(0.5)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">50% sepia</p>
  </div>
</div>

/* backdrop-filter: sepia(0.5) */
/* Values: 0 (no effect) to 1 (fully sepia) */
/* Applies a sepia (vintage) effect to the background */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "sepia(0.5)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">50% sepia</p>
              <p className="text-sm text-gray-600">Partial vintage effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Full Sepia (1.0)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "sepia(1.0)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">100% sepia</p>
  </div>
</div>

/* Full vintage effect */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "sepia(1.0)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">100% sepia</p>
              <p className="text-sm text-gray-600">Full vintage effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Light Sepia (0.3)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "sepia(0.3)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Subtle sepia</p>
  </div>
</div>

/* Slight warm tone */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "sepia(0.3)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Subtle sepia</p>
              <p className="text-sm text-gray-600">Slight warm tone</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Strong Sepia (0.8)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "sepia(0.8)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Heavy sepia</p>
  </div>
</div>

/* Strong vintage effect */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "sepia(0.8)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Heavy sepia</p>
              <p className="text-sm text-gray-600">Strong vintage effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
