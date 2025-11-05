"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function AnimatedBlurTransitionsDemo() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Animated Blur Transitions</h2>

      <DemoBlock
        title="Hover Blur Transition"
        code={`<div className="relative p-6 rounded-lg shadow-lg group">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-500 group-hover:backdrop-blur-xl"
    style={{
      backdropFilter: "blur(5px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Hover to blur</p>
  </div>
</div>

/* CSS */
.element {
  backdrop-filter: blur(5px);
  transition: backdrop-filter 0.5s;
}
.element:hover {
  backdrop-filter: blur(20px);
}`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-500 group-hover:backdrop-blur-xl"
              style={{
                backdropFilter: "blur(5px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Hover to blur</p>
              <p className="text-sm text-gray-600">Smooth blur transition</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Focus Blur Transition"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-500 focus-within:backdrop-blur-xl"
    style={{
      backdropFilter: "blur(5px)"
    }}
  />
  <div className="relative z-10">
    <input type="text" placeholder="Focus to blur..." className="w-full p-2 border rounded" />
  </div>
</div>

/* Focus pseudo-class triggers blur transition */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-500 focus-within:backdrop-blur-xl"
              style={{
                backdropFilter: "blur(5px)",
              }}
            />
            <div className="relative z-10">
              <input
                type="text"
                placeholder="Focus to blur..."
                className="w-full p-2 border rounded"
              />
              <p className="text-sm text-gray-600 mt-2">Focus input to blur</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Click Blur Toggle"
        code={`const [hovered, setHovered] = useState(false);

<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-500"
    style={{
      backdropFilter: hovered ? "blur(15px)" : "blur(2px)"
    }}
  />
  <div className="relative z-10">
    <Button onClick={() => setHovered(!hovered)}>
      {hovered ? "Less Blur" : "More Blur"}
    </Button>
  </div>
</div>

/* State-controlled blur transitions */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-500"
              style={{
                backdropFilter: hovered ? "blur(15px)" : "blur(2px)",
              }}
            />
            <div className="relative z-10">
              <Button onClick={() => setHovered(!hovered)}>
                {hovered ? "Less Blur" : "More Blur"}
              </Button>
              <p className="text-sm text-gray-600 mt-2">Click to toggle blur</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Progressive Blur"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-700 hover:backdrop-blur-2xl"
    style={{
      backdropFilter: "blur(8px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Slow transition</p>
  </div>
</div>

/* Longer duration for smoother effect */
.element { transition: backdrop-filter 0.7s; }`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-700 hover:backdrop-blur-2xl"
              style={{
                backdropFilter: "blur(8px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Slow transition</p>
              <p className="text-sm text-gray-600">Hover for smooth blur</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

