"use client";

import { DemoBlock } from "@/components/demo-block";

export function ComplexFilterCompositionsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Complex Filter Compositions</h2>

      <DemoBlock
        title="Coordinated Layers"
        code={`<div className="relative h-64 rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />
  <div
    className="absolute top-0 left-0 w-1/2 h-full bg-white/20"
    style={{ backdropFilter: "blur(10px) brightness(0.9)" }}
  />
  <div
    className="absolute top-0 right-0 w-1/2 h-full bg-white/25"
    style={{ backdropFilter: "blur(15px) saturate(1.3)" }}
  />
  <div
    className="absolute bottom-0 left-1/4 right-1/4 h-1/3 bg-white/30 rounded-lg"
    style={{ backdropFilter: "blur(20px) brightness(1.1) contrast(1.2)" }}
  />
</div>

/* CSS */
.zone1 { backdrop-filter: blur(10px) brightness(0.9); }
.zone2 { backdrop-filter: blur(15px) saturate(1.3); }
.zone3 { backdrop-filter: blur(20px) brightness(1.1) contrast(1.2); }`}
      >
        <div className="flex justify-center">
          <div className="relative h-64 w-full max-w-2xl rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />
            <div
              className="absolute top-0 left-0 w-1/2 h-full bg-white/20"
              style={{
                backdropFilter: "blur(10px) brightness(0.9)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-white/25"
              style={{
                backdropFilter: "blur(15px) saturate(1.3)",
              }}
            />
            <div
              className="absolute bottom-0 left-1/4 right-1/4 h-1/3 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "blur(20px) brightness(1.1) contrast(1.2)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Nested Composition"
        code={`<div className="relative h-64 rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300" />
  <div
    className="absolute inset-2 bg-white/20 rounded-lg"
    style={{ backdropFilter: "blur(8px) grayscale(0.3)" }}
  />
  <div
    className="absolute inset-4 bg-white/30 rounded-lg"
    style={{ backdropFilter: "blur(12px) saturate(1.5) brightness(0.95)" }}
  />
  <div
    className="absolute inset-6 bg-white/40 rounded-lg"
    style={{ backdropFilter: "blur(18px) contrast(1.3) hue-rotate(15deg)" }}
  />
</div>

/* CSS */
/* Nested layers with increasing blur complexity */`}
      >
        <div className="flex justify-center">
          <div className="relative h-64 w-full max-w-2xl rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300" />
            <div
              className="absolute inset-2 bg-white/20 rounded-lg"
              style={{
                backdropFilter: "blur(8px) grayscale(0.3)",
              }}
            />
            <div
              className="absolute inset-4 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "blur(12px) saturate(1.5) brightness(0.95)",
              }}
            />
            <div
              className="absolute inset-6 bg-white/40 rounded-lg"
              style={{
                backdropFilter: "blur(18px) contrast(1.3) hue-rotate(15deg)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Overlapping Zones"
        code={`<div className="relative h-64 rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300" />
  <div
    className="absolute top-0 left-0 w-2/3 h-2/3 bg-white/20 rounded-lg"
    style={{ backdropFilter: "blur(10px) brightness(0.85)" }}
  />
  <div
    className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-white/25 rounded-lg"
    style={{ backdropFilter: "blur(15px) saturate(1.4)" }}
  />
  <div
    className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/35 rounded-lg"
    style={{ backdropFilter: "blur(20px) brightness(1.1) contrast(1.15)" }}
  />
</div>

/* CSS */
/* Overlapping creates compound effects */`}
      >
        <div className="flex justify-center">
          <div className="relative h-64 w-full max-w-2xl rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300" />
            <div
              className="absolute top-0 left-0 w-2/3 h-2/3 bg-white/20 rounded-lg"
              style={{
                backdropFilter: "blur(10px) brightness(0.85)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-white/25 rounded-lg"
              style={{
                backdropFilter: "blur(15px) saturate(1.4)",
              }}
            />
            <div
              className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/35 rounded-lg"
              style={{
                backdropFilter: "blur(20px) brightness(1.1) contrast(1.15)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Arrangement"
        code={`<div className="relative h-64 rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300" />
  <div className="absolute top-2 left-2 w-24 h-24 bg-white/25 rounded-lg"
    style={{ backdropFilter: "blur(8px) sepia(0.3)" }}
  />
  <div className="absolute top-2 right-2 w-24 h-24 bg-white/30 rounded-lg"
    style={{ backdropFilter: "blur(12px) saturate(1.6)" }}
  />
  <div className="absolute bottom-2 left-2 w-24 h-24 bg-white/35 rounded-lg"
    style={{ backdropFilter: "blur(16px) brightness(0.9)" }}
  />
  <div className="absolute bottom-2 right-2 w-24 h-24 bg-white/40 rounded-lg"
    style={{ backdropFilter: "blur(20px) contrast(1.4)" }}
  />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/45 rounded-lg"
    style={{ backdropFilter: "blur(25px) brightness(1.2) saturate(1.8)" }}
  />
</div>

/* CSS */
/* Multiple elements with unique filter combinations */`}
      >
        <div className="flex justify-center">
          <div className="relative h-64 w-full max-w-2xl rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300" />
            <div
              className="absolute top-2 left-2 w-24 h-24 bg-white/25 rounded-lg"
              style={{
                backdropFilter: "blur(8px) sepia(0.3)",
              }}
            />
            <div
              className="absolute top-2 right-2 w-24 h-24 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "blur(12px) saturate(1.6)",
              }}
            />
            <div
              className="absolute bottom-2 left-2 w-24 h-24 bg-white/35 rounded-lg"
              style={{
                backdropFilter: "blur(16px) brightness(0.9)",
              }}
            />
            <div
              className="absolute bottom-2 right-2 w-24 h-24 bg-white/40 rounded-lg"
              style={{
                backdropFilter: "blur(20px) contrast(1.4)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/45 rounded-lg"
              style={{
                backdropFilter: "blur(25px) brightness(1.2) saturate(1.8)",
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
