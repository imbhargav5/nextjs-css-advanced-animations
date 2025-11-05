"use client";

import { DemoBlock } from "@/components/demo-block";

export function GlassMorphismCardDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Glass Morphism Card</h2>

      <DemoBlock
        title="Basic Glass Card"
        code={`<div
  className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/30"
>
  <h4 className="text-xl font-bold mb-2 text-gray-900">Glass Card</h4>
  <p className="text-white/90">
    Classic glassmorphism effect with blur and transparency
  </p>
</div>

/* Classic glassmorphism effect */
.glass-card {
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}`}
      >
        <div className="flex justify-center">
          <div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/30 max-w-md">
            <h4 className="text-xl font-bold mb-2 text-gray-900">Glass Card</h4>
            <p className="text-white/90">
              Classic glassmorphism effect with blur and transparency
            </p>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Glass Card with Border"
        code={`<div
  className="relative p-6 rounded-xl shadow-xl border-2 border-white/40"
  style={{
    backdropFilter: "blur(20px) saturate(180%)",
    backgroundColor: "rgba(255, 255, 255, 0.15)"
  }}
>
  <h4 className="text-xl font-bold mb-2 text-gray-900">Enhanced Glass</h4>
  <p className="text-white/90">
    Added saturation for richer glass effect
  </p>
</div>

/* Enhanced with saturation */
backdrop-filter: blur(20px) saturate(180%);`}
      >
        <div className="flex justify-center">
          <div
            className="relative p-6 rounded-xl shadow-xl border-2 border-white/40 max-w-md"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
            }}
          >
            <h4 className="text-xl font-bold mb-2 text-gray-900">Enhanced Glass</h4>
            <p className="text-white/90">
              Added saturation for richer glass effect
            </p>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Dark Glass Card"
        code={`<div
  className="relative p-6 rounded-xl shadow-xl border border-white/20"
  style={{
    backdropFilter: "blur(15px) brightness(0.7)",
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  }}
>
  <h4 className="text-xl font-bold mb-2 text-gray-900">Dark Glass</h4>
  <p className="text-white/80">
    Darker glass effect with reduced brightness
  </p>
</div>

/* Dark variant with brightness reduction */
backdrop-filter: blur(15px) brightness(0.7);
background-color: rgba(0, 0, 0, 0.2);`}
      >
        <div className="flex justify-center">
          <div
            className="relative p-6 rounded-xl shadow-xl border border-white/20 max-w-md"
            style={{
              backdropFilter: "blur(15px) brightness(0.7)",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          >
            <h4 className="text-xl font-bold mb-2 text-gray-900">Dark Glass</h4>
            <p className="text-white/80">
              Darker glass effect with reduced brightness
            </p>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Premium Glass Card"
        code={`<div
  className="relative p-6 rounded-xl shadow-xl border border-white/30"
  style={{
    backdropFilter: "blur(25px) saturate(200%) brightness(1.1)",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  }}
>
  <h4 className="text-xl font-bold mb-2 text-gray-900">Premium Glass</h4>
  <p className="text-white/90">
    Complex combination for premium glass effect
  </p>
</div>

/* Premium effect with multiple filters */
backdrop-filter: blur(25px) saturate(200%) brightness(1.1);`}
      >
        <div className="flex justify-center">
          <div
            className="relative p-6 rounded-xl shadow-xl border border-white/30 max-w-md"
            style={{
              backdropFilter: "blur(25px) saturate(200%) brightness(1.1)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <h4 className="text-xl font-bold mb-2 text-gray-900">Premium Glass</h4>
            <p className="text-white/90">
              Complex combination for premium glass effect
            </p>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

