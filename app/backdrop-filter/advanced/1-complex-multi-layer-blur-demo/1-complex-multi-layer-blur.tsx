"use client";

import { DemoBlock } from "@/components/demo-block";

export function ComplexMultiLayerBlurDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Complex Multi-Layer Blur</h2>

      <DemoBlock
        title="Layered Elements"
        code={`<div className="relative h-64 rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />
  <div
    className="absolute inset-0 bg-white/20"
    style={{ backdropFilter: "blur(5px)" }}
  />
  <div
    className="absolute top-4 left-4 right-4 h-20 bg-white/30 rounded-lg"
    style={{ backdropFilter: "blur(10px)" }}
  />
  <div
    className="absolute bottom-4 left-4 right-4 h-20 bg-white/40 rounded-lg"
    style={{ backdropFilter: "blur(15px)" }}
  />
</div>

/* CSS */
.layer1 { backdrop-filter: blur(5px); }
.layer2 { backdrop-filter: blur(10px); }
.layer3 { backdrop-filter: blur(15px); }`}
      >
        <div className="flex justify-center">
          <div className="relative h-64 w-full max-w-md rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />
            <div
              className="absolute inset-0 bg-white/20"
              style={{
                backdropFilter: "blur(5px)",
              }}
            />
            <div
              className="absolute top-4 left-4 right-4 h-20 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "blur(10px)",
              }}
            />
            <div
              className="absolute bottom-4 left-4 right-4 h-20 bg-white/40 rounded-lg"
              style={{
                backdropFilter: "blur(15px)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Nested Blurs"
        code={`<div className="relative h-64 rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300" />
  <div
    className="absolute inset-4 bg-white/25 rounded-lg"
    style={{ backdropFilter: "blur(8px)" }}
  />
  <div
    className="absolute inset-8 bg-white/35 rounded-lg"
    style={{ backdropFilter: "blur(12px)" }}
  />
  <div
    className="absolute inset-12 bg-white/45 rounded-lg"
    style={{ backdropFilter: "blur(18px)" }}
  />
</div>

/* Nested blur increases with each layer */`}
      >
        <div className="flex justify-center">
          <div className="relative h-64 w-full max-w-md rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300" />
            <div
              className="absolute inset-4 bg-white/25 rounded-lg"
              style={{
                backdropFilter: "blur(8px)",
              }}
            />
            <div
              className="absolute inset-8 bg-white/35 rounded-lg"
              style={{
                backdropFilter: "blur(12px)",
              }}
            />
            <div
              className="absolute inset-12 bg-white/45 rounded-lg"
              style={{
                backdropFilter: "blur(18px)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Overlapping Layers"
        code={`<div className="relative h-64 rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300" />
  <div
    className="absolute top-0 left-0 w-1/2 h-full bg-white/20"
    style={{ backdropFilter: "blur(10px)" }}
  />
  <div
    className="absolute top-0 right-0 w-1/2 h-full bg-white/30"
    style={{ backdropFilter: "blur(15px)" }}
  />
  <div
    className="absolute top-1/2 left-1/4 right-1/4 h-1/2 bg-white/40 rounded-lg"
    style={{ backdropFilter: "blur(20px)" }}
  />
</div>

/* Different blur values on overlapping elements */`}
      >
        <div className="flex justify-center">
          <div className="relative h-64 w-full max-w-md rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300" />
            <div
              className="absolute top-0 left-0 w-1/2 h-full bg-white/20"
              style={{
                backdropFilter: "blur(10px)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-white/30"
              style={{
                backdropFilter: "blur(15px)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/4 right-1/4 h-1/2 bg-white/40 rounded-lg"
              style={{
                backdropFilter: "blur(20px)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Composition"
        code={`<div className="relative h-64 rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300" />
  <div
    className="absolute inset-0 bg-white/15"
    style={{ backdropFilter: "blur(6px)" }}
  />
  <div
    className="absolute top-2 left-2 w-32 h-32 bg-white/25 rounded-lg"
    style={{ backdropFilter: "blur(12px)" }}
  />
  <div
    className="absolute bottom-2 right-2 w-32 h-32 bg-white/35 rounded-lg"
    style={{ backdropFilter: "blur(18px)" }}
  />
  <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/45 rounded-lg"
    style={{ backdropFilter: "blur(25px)" }}
  />
</div>

/* Complex multi-layer composition creates depth */`}
      >
        <div className="flex justify-center">
          <div className="relative h-64 w-full max-w-md rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300" />
            <div
              className="absolute inset-0 bg-white/15"
              style={{
                backdropFilter: "blur(6px)",
              }}
            />
            <div
              className="absolute top-2 left-2 w-32 h-32 bg-white/25 rounded-lg"
              style={{
                backdropFilter: "blur(12px)",
              }}
            />
            <div
              className="absolute bottom-2 right-2 w-32 h-32 bg-white/35 rounded-lg"
              style={{
                backdropFilter: "blur(18px)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/45 rounded-lg"
              style={{
                backdropFilter: "blur(25px)",
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

