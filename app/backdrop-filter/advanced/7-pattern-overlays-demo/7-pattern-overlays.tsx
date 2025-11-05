"use client";

import { DemoBlock } from "@/components/demo-block";

export function PatternOverlaysDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Pattern Overlays</h2>

      <DemoBlock
        title="Striped Pattern"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(15px)",
      backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px);
background-image: repeating-linear-gradient(45deg, transparent, transparent 10px,
                  rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
              style={{
                backdropFilter: "blur(15px)",
                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Patterned Blur</p>
              <p className="text-sm text-gray-600">Stripes with blur</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Dotted Pattern"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(20px)",
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2px)",
      backgroundSize: "20px 20px"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(20px);
background-image: radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2px);
background-size: 20px 20px;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
              style={{
                backdropFilter: "blur(20px)",
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Dotted Overlay</p>
              <p className="text-sm text-gray-600">Dots with blur</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Grid Pattern"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(15px) saturate(1.3)",
      backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px) saturate(1.3);
background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
background-size: 30px 30px;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
              style={{
                backdropFilter: "blur(15px) saturate(1.3)",
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Grid Overlay</p>
              <p className="text-sm text-gray-600">Grid with blur</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Pattern"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(25px) brightness(0.9)",
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
      backgroundSize: "20px 20px"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(25px) brightness(0.9);
background-image: repeating-linear-gradient(0deg, ...), repeating-linear-gradient(90deg, ...);
background-size: 20px 20px;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
              style={{
                backdropFilter: "blur(25px) brightness(0.9)",
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Complex Overlay</p>
              <p className="text-sm text-gray-600">Multiple patterns</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

