"use client";

import { DemoBlock } from "@/components/demo-block";

export function Perspective3DEffectsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">3D Perspective Effects</h2>

      <DemoBlock
        title="Rotated with Blur"
        code={`<div className="perspective-1000">
  <div className="relative p-6 rounded-lg shadow-lg transform rotate-y-12 transition-transform hover:rotate-y-0">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
    <div
      className="absolute inset-0 bg-white/30 rounded-lg"
      style={{
        backdropFilter: "blur(15px)",
        transform: "rotateY(12deg)"
      }}
    />
  </div>
</div>

/* CSS */
transform: rotateY(12deg);
backdrop-filter: blur(15px);
transition: transform 0.3s;`}
      >
        <div className="flex justify-center">
          <div className="perspective-1000">
            <div className="relative p-6 rounded-lg shadow-lg transform rotate-y-12 transition-transform hover:rotate-y-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px)",
                  transform: "rotateY(12deg)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">3D Card</p>
                <p className="text-sm text-gray-600">Blur with perspective</p>
              </div>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Tilted Panel"
        code={`<div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30 transform rotate-x-6">
  <h4 className="text-xl font-bold mb-2">3D Panel</h4>
  <p>Perspective transform with backdrop filter</p>
</div>

/* CSS */
backdrop-filter: blur(16px);
transform: rotateX(6deg);`}
      >
        <div className="flex justify-center">
          <div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30 transform rotate-x-6 max-w-md">
            <h4 className="text-xl font-bold mb-2 text-gray-900">3D Panel</h4>
            <p className="text-gray-700">
              Perspective transform with backdrop filter
            </p>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Layered 3D"
        code={`<div className="relative h-48">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/25 rounded-lg transform rotate-x-3"
    style={{ backdropFilter: "blur(10px)" }}
  />
  <div
    className="absolute inset-2 bg-white/35 rounded-lg transform rotate-x-6"
    style={{ backdropFilter: "blur(15px)" }}
  />
</div>

/* Multiple layers with different transforms */`}
      >
        <div className="flex justify-center">
          <div className="relative h-48 w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/25 rounded-lg transform rotate-x-3"
              style={{
                backdropFilter: "blur(10px)",
              }}
            />
            <div
              className="absolute inset-2 bg-white/35 rounded-lg transform rotate-x-6"
              style={{
                backdropFilter: "blur(15px)",
              }}
            />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex 3D"
        code={`<div className="relative p-6 rounded-lg shadow-lg transform rotate-y-6 rotate-x-3">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{ backdropFilter: "blur(20px) brightness(0.9)" }}
  />
</div>

/* CSS */
transform: rotateY(6deg) rotateX(3deg);
backdrop-filter: blur(20px) brightness(0.9);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg transform rotate-y-6 rotate-x-3 max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
              style={{
                backdropFilter: "blur(20px) brightness(0.9)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Advanced 3D</p>
              <p className="text-sm text-gray-600">Multiple transforms</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

