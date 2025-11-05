"use client";

import { useEffect, useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function SVGPathBackdropDemo() {
  const [pathOffset, setPathOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPathOffset((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const clipPath = `polygon(${pathOffset}% 0%, ${100 - pathOffset}% 50%, ${pathOffset}% 100%, 0% 50%)`;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">SVG Path Backdrop</h2>

      <DemoBlock
        title="Animated Clip Path"
        code={`const [pathOffset, setPathOffset] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setPathOffset((prev) => (prev + 1) % 100);
  }, 50);
  return () => clearInterval(interval);
}, []);

const clipPath = \`polygon(\${pathOffset}% 0%, \${100 - pathOffset}% 50%, \${pathOffset}% 100%, 0% 50%)\`;

<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
    style={{
      backdropFilter: "blur(15px)",
      clipPath: clipPath
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px);
clip-path: polygon(...);
transition: all 0.3s;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg transition-all duration-300"
              style={{
                backdropFilter: "blur(15px)",
                clipPath: clipPath,
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Morphing Shape</p>
              <p className="text-sm text-gray-600">Animated polygon clip</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="SVG Mask"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(20px)",
      maskImage: \`url("data:image/svg+xml,%3Csvg...%3Cpath.../  %3E%3C/svg%3E")\`,
      WebkitMaskImage: \`url("data:image/svg+xml,%3Csvg...%3Cpath.../%3E%3C/svg%3E")\`
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(20px);
mask-image: url("data:image/svg+xml,...");
-webkit-mask-image: url("data:image/svg+xml,...");`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
              style={{
                backdropFilter: "blur(20px)",
                maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,10 L90,50 L50,90 L10,50 Z' fill='black'/%3E%3C/svg%3E")`,
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,10 L90,50 L50,90 L10,50 Z' fill='black'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Diamond Mask</p>
              <p className="text-sm text-gray-600">SVG path mask</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Path (Octagon)"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(15px) saturate(1.4)",
      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px) saturate(1.4);
clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%,
                   70% 100%, 30% 100%, 0% 70%, 0% 30%);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
              style={{
                backdropFilter: "blur(15px) saturate(1.4)",
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Octagon</p>
              <p className="text-sm text-gray-600">Complex polygon</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Circular Clip"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg"
    style={{
      backdropFilter: "blur(25px) brightness(0.9)",
      clipPath: "circle(40% at 50% 50%)"
    }}
  />
</div>

/* CSS */
backdrop-filter: blur(25px) brightness(0.9);
clip-path: circle(40% at 50% 50%);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
              style={{
                backdropFilter: "blur(25px) brightness(0.9)",
                clipPath: "circle(40% at 50% 50%)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Circle Clip</p>
              <p className="text-sm text-gray-600">Circular backdrop</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
