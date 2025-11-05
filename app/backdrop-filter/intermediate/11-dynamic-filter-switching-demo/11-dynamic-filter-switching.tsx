"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function DynamicFilterSwitchingDemo() {
  const [filterType, setFilterType] = useState("blur");

  const filters = {
    blur: "blur(15px)",
    brightness: "brightness(0.8)",
    contrast: "contrast(1.5)",
    grayscale: "grayscale(1)",
    saturate: "saturate(2)",
    sepia: "sepia(1)",
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Dynamic Filter Switching</h2>

      <DemoBlock
        title="Interactive Filter Selector"
        code={`const [filterType, setFilterType] = useState("blur");

const filters = {
  blur: "blur(15px)",
  brightness: "brightness(0.8)",
  contrast: "contrast(1.5)",
  grayscale: "grayscale(1)",
  saturate: "saturate(2)",
  sepia: "sepia(1)"
};

<div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
  <h3 className="text-xl font-semibold mb-4 text-gray-900">Select Filter</h3>
  <div className="flex flex-wrap gap-2">
    {Object.keys(filters).map((key) => (
      <Button
        key={key}
        onClick={() => setFilterType(key)}
        variant={filterType === key ? "secondary" : "outline"}
      >
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </Button>
    ))}
  </div>
</div>

<div
  className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-500"
  style={{
    backdropFilter: filters[filterType]
  }}
/>

/* Dynamically switch between filters */`}
      >
        <div className="space-y-6">
          {/* Control panel */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Select Filter</h3>
            <div className="flex flex-wrap gap-2">
              {Object.keys(filters).map((key) => (
                <Button
                  key={key}
                  onClick={() => setFilterType(key)}
                  variant={filterType === key ? "secondary" : "outline"}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          {/* Demo area */}
          <div className="relative p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-500"
              style={{
                backdropFilter: filters[filterType as keyof typeof filters],
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold text-lg mb-2">
                Current Filter: {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </p>
              <p className="text-sm text-gray-600">
                Click buttons above to switch between different backdrop filters
              </p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
