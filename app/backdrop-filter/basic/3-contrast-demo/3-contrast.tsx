"use client";

import { DemoBlock } from "@/components/demo-block";

export function ContrastDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Contrast Backdrop Filter</h2>

      <DemoBlock
        title="Low Contrast (0.5)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "contrast(0.5)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Reduced contrast</p>
  </div>
</div>

/* backdrop-filter: contrast(0.5) */
/* Values: 0-1 (reduced), 1 (normal), >1 (increased) */
/* Adjusts the contrast of the background behind the element */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "contrast(0.5)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Reduced contrast</p>
              <p className="text-sm text-gray-600">Makes background less distinct</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="High Contrast (1.5)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "contrast(1.5)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Increased contrast</p>
  </div>
</div>

/* Makes background more vibrant */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "contrast(1.5)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Increased contrast</p>
              <p className="text-sm text-gray-600">Makes background more vibrant</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Very Low Contrast (0.3)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "contrast(0.3)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Minimal contrast</p>
  </div>
</div>

/* Background becomes very muted */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "contrast(0.3)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Minimal contrast</p>
              <p className="text-sm text-gray-600">Background becomes very muted</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Maximum Contrast (2.0)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "contrast(2.0)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Maximum contrast</p>
  </div>
</div>

/* Doubles the contrast */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "contrast(2.0)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Maximum contrast</p>
              <p className="text-sm text-gray-600">Doubles the contrast</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
