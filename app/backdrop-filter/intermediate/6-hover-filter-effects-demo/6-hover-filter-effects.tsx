"use client";

import { DemoBlock } from "@/components/demo-block";

export function HoverFilterEffectsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Hover Filter Effects</h2>

      <DemoBlock
        title="Blur on Hover"
        code={`<div className="relative p-6 rounded-lg shadow-lg group transition-all duration-300">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300 group-hover:backdrop-blur-xl"
    style={{
      backdropFilter: "blur(5px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Hover me</p>
  </div>
</div>

/* Smooth hover transitions */
.element {
  backdrop-filter: blur(5px);
  transition: backdrop-filter 0.3s;
}
.element:hover {
  backdrop-filter: blur(20px);
}`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg group transition-all duration-300 max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300 group-hover:backdrop-blur-xl"
              style={{
                backdropFilter: "blur(5px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Hover me</p>
              <p className="text-sm text-gray-600">Blur increases on hover</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Brightness on Hover"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-green-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
    style={{
      backdropFilter: "brightness(0.8)"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backdropFilter = "brightness(1.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backdropFilter = "brightness(0.8)";
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Hover me</p>
  </div>
</div>

/* Dynamic brightness control on hover */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg group transition-all duration-300 max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-green-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
              style={{
                backdropFilter: "brightness(0.8)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backdropFilter = "brightness(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backdropFilter = "brightness(0.8)";
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Hover me</p>
              <p className="text-sm text-gray-600">Brightness increases</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Saturate on Hover"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
    style={{
      backdropFilter: "saturate(0.5)"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backdropFilter = "saturate(2.0)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backdropFilter = "saturate(0.5)";
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Hover me</p>
  </div>
</div>

/* Colors become vibrant on hover */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg group transition-all duration-300 max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
              style={{
                backdropFilter: "saturate(0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backdropFilter = "saturate(2.0)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backdropFilter = "saturate(0.5)";
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Hover me</p>
              <p className="text-sm text-gray-600">Colors become vibrant</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Grayscale Toggle"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
    style={{
      backdropFilter: "grayscale(0)"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backdropFilter = "grayscale(1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backdropFilter = "grayscale(0)";
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Hover me</p>
  </div>
</div>

/* Toggle grayscale effect on hover */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg group transition-all duration-300 max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
              style={{
                backdropFilter: "grayscale(0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backdropFilter = "grayscale(1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backdropFilter = "grayscale(0)";
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Hover me</p>
              <p className="text-sm text-gray-600">Colors become grayscale</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

