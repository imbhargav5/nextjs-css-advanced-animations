"use client";

import { DemoBlock } from "@/components/demo-block";

export function SimpleBlurDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Simple Blur Backdrop Filter</h2>

      <DemoBlock
        title="Light Blur (5px)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(5px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Content behind blur</p>
  </div>
</div>

/* backdrop-filter: blur(5px) */
/* Applies a blur effect to the background behind the element */
/* Works with semi-transparent backgrounds for glass effect */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-[5px]"
              style={{
                backdropFilter: "blur(5px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Content behind blur</p>
              <p className="text-sm text-gray-600">Backdrop blur creates a frosted glass effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Medium Blur (10px)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(10px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">More blur applied</p>
  </div>
</div>

/* Increased blur radius for stronger effect */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-[10px]"
              style={{
                backdropFilter: "blur(10px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">More blur applied</p>
              <p className="text-sm text-gray-600">Increased blur radius for stronger effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Strong Blur (20px)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(20px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Heavy blur effect</p>
  </div>
</div>

/* Strong blur for maximum glass effect */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-[20px]"
              style={{
                backdropFilter: "blur(20px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Heavy blur effect</p>
              <p className="text-sm text-gray-600">Strong blur for maximum glass effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Very Strong Blur (40px)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(40px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Maximum blur</p>
  </div>
</div>

/* Extreme blur for dramatic effect */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-[40px]"
              style={{
                backdropFilter: "blur(40px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Maximum blur</p>
              <p className="text-sm text-gray-600">Extreme blur for dramatic effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
