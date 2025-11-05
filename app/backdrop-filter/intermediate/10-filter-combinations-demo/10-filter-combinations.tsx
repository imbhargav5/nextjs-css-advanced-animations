"use client";

import { DemoBlock } from "@/components/demo-block";

export function FilterCombinationsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Filter Combinations</h2>

      <DemoBlock
        title="Blur + Brightness + Contrast"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(12px) brightness(0.9) contrast(1.2)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Triple Filter</p>
  </div>
</div>

/* Multiple filters work together */
backdrop-filter: blur(12px) brightness(0.9) contrast(1.2);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "blur(12px) brightness(0.9) contrast(1.2)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Triple Filter</p>
              <p className="text-sm text-gray-600">Blur, brightness, and contrast</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Blur + Saturate + Brightness"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(15px) saturate(1.5) brightness(1.1)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Vibrant Effect</p>
  </div>
</div>

/* Enhanced colors and brightness */
backdrop-filter: blur(15px) saturate(1.5) brightness(1.1);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "blur(15px) saturate(1.5) brightness(1.1)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Vibrant Effect</p>
              <p className="text-sm text-gray-600">Enhanced colors and brightness</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Grayscale + Blur + Contrast"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "grayscale(0.7) blur(10px) contrast(1.3)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Monochrome</p>
  </div>
</div>

/* Desaturated with contrast */
backdrop-filter: grayscale(0.7) blur(10px) contrast(1.3);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "grayscale(0.7) blur(10px) contrast(1.3)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Monochrome</p>
              <p className="text-sm text-gray-600">Desaturated with contrast</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Combination"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(18px) saturate(1.8) brightness(0.95) contrast(1.15)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Rich Effect</p>
  </div>
</div>

/* Multiple filters combined */
backdrop-filter: blur(18px) saturate(1.8) brightness(0.95) contrast(1.15);
/* Each filter is applied sequentially */
/* Order matters for the final result */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "blur(18px) saturate(1.8) brightness(0.95) contrast(1.15)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Rich Effect</p>
              <p className="text-sm text-gray-600">Multiple filters combined</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
