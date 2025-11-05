"use client";

import { DemoBlock } from "@/components/demo-block";

export function BackdropFilterWithClipPathDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Backdrop Filter with Clip-Path</h2>

      <DemoBlock
        title="Circular Clip"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(15px)",
      clipPath: "circle(40% at 50% 50%)"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px);
clip-path: circle(40% at 50% 50%);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
              style={{
                backdropFilter: "blur(15px)",
                clipPath: "circle(40% at 50% 50%)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Clipped Blur</p>
              <p className="text-sm text-gray-600">Circle shape with blur</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Polygon Clip (Diamond)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(20px)",
      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(20px);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
              style={{
                backdropFilter: "blur(20px)",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Diamond Shape</p>
              <p className="text-sm text-gray-600">Polygon with blur</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Inset Clip"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(15px) saturate(1.5)",
      clipPath: "inset(20% 20% 20% 20% round 20px)"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px) saturate(1.5);
clip-path: inset(20% 20% 20% 20% round 20px);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
              style={{
                backdropFilter: "blur(15px) saturate(1.5)",
                clipPath: "inset(20% 20% 20% 20% round 20px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Rounded Inset</p>
              <p className="text-sm text-gray-600">Clipped rounded rectangle</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Clip (Octagon)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(25px) brightness(0.9)",
      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(25px) brightness(0.9);
clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
              style={{
                backdropFilter: "blur(25px) brightness(0.9)",
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Octagon</p>
              <p className="text-sm text-gray-600">Complex polygon shape</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

