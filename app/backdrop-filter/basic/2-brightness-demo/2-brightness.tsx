"use client";

import { DemoBlock } from "@/components/demo-block";

export function BrightnessDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Brightness Backdrop Filter</h2>

      <DemoBlock
        title="Darker (0.5)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "brightness(0.5)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Darker background</p>
  </div>
</div>

/* backdrop-filter: brightness(0.5) */
/* Values: 0-1 (darker), 1 (normal), >1 (brighter) */
/* Adjusts the brightness of the background behind the element */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "brightness(0.5)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Darker background</p>
              <p className="text-sm text-gray-600">Reduces brightness by 50%</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Brighter (1.5)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "brightness(1.5)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Brighter background</p>
  </div>
</div>

/* Increases brightness by 50% */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "brightness(1.5)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Brighter background</p>
              <p className="text-sm text-gray-600">Increases brightness by 50%</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Much Darker (0.3)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "brightness(0.3)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Very dark background</p>
  </div>
</div>

/* Heavy brightness reduction */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "brightness(0.3)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Very dark background</p>
              <p className="text-sm text-gray-600">Heavy brightness reduction</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Very Bright (2.0)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/50 rounded-lg"
    style={{
      backdropFilter: "brightness(2.0)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Maximum brightness</p>
  </div>
</div>

/* Doubles the brightness */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/50 rounded-lg"
              style={{
                backdropFilter: "brightness(2.0)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Maximum brightness</p>
              <p className="text-sm text-gray-600">Doubles the brightness</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
