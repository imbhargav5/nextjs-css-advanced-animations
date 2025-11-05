"use client";

import { DemoBlock } from "@/components/demo-block";

export function MultipleFiltersDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Multiple Backdrop Filters</h2>

      <DemoBlock
        title="Blur + Brightness"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(10px) brightness(0.8)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Blurred & Darkened</p>
  </div>
</div>

/* backdrop-filter: blur(10px) brightness(0.8) */
/* Multiple filters can be combined */
/* Filters are applied in order from left to right */
/* Separate each filter with a space */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "blur(10px) brightness(0.8)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Blurred & Darkened</p>
              <p className="text-sm text-gray-600">Combines blur and brightness</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Blur + Saturate"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(8px) saturate(1.5)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Blurred & Vibrant</p>
  </div>
</div>

/* Combines blur and saturation */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "blur(8px) saturate(1.5)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Blurred & Vibrant</p>
              <p className="text-sm text-gray-600">Combines blur and saturation</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Blur + Contrast + Brightness"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(12px) contrast(1.2) brightness(0.9)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Triple Effect</p>
  </div>
</div>

/* Blur, contrast, and brightness */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "blur(12px) contrast(1.2) brightness(0.9)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Triple Effect</p>
              <p className="text-sm text-gray-600">Blur, contrast, and brightness</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Grayscale + Blur + Brightness"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "grayscale(0.7) blur(10px) brightness(0.85)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Complex Combination</p>
  </div>
</div>

/* Multiple filters working together */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg"
              style={{
                backdropFilter: "grayscale(0.7) blur(10px) brightness(0.85)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Complex Combination</p>
              <p className="text-sm text-gray-600">Multiple filters working together</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
