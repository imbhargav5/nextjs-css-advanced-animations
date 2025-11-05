"use client";

import { DemoBlock } from "@/components/demo-block";

export function InvertDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Invert Backdrop Filter</h2>

      <DemoBlock
        title="Partial Invert (0.5)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "invert(0.5)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">50% inverted</p>
  </div>
</div>

/* backdrop-filter: invert(0.5) */
/* Values: 0 (no effect) to 1 (fully inverted) */
/* Inverts the colors of the background */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "invert(0.5)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">50% inverted</p>
              <p className="text-sm text-gray-600">Partially inverted colors</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Full Invert (1.0)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "invert(1.0)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">100% inverted</p>
  </div>
</div>

/* Completely inverted colors */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "invert(1.0)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">100% inverted</p>
              <p className="text-sm text-gray-600">Completely inverted colors</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Light Invert (0.3)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "invert(0.3)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Subtle invert</p>
  </div>
</div>

/* Slight color inversion */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "invert(0.3)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Subtle invert</p>
              <p className="text-sm text-gray-600">Slight color inversion</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Strong Invert (0.8)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "invert(0.8)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Heavy invert</p>
  </div>
</div>

/* Mostly inverted colors */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "invert(0.8)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Heavy invert</p>
              <p className="text-sm text-gray-600">Mostly inverted colors</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
