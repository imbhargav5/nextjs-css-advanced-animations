"use client";

import { useState } from "react";

export function ComplexSvgAnimationDemo() {
  const [progress, setProgress] = useState(0);

  const wavePath = (progress: number) => {
    const amplitude = 20;
    const frequency = 3;
    let path = `M 0,${50 + amplitude * Math.sin(0)}`;
    for (let x = 0; x <= 100; x += 2) {
      const y = 50 + amplitude * Math.sin((x / 100) * frequency * Math.PI * 2 + progress * Math.PI * 2);
      path += ` L ${x},${y}`;
    }
    path += ` L 100,100 L 0,100 Z`;
    return `path('${path}')`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Complex SVG Path Animation</h2>
        
        <div className="flex justify-center mb-8 gap-4 items-center">
          <button
            onClick={() => {
              let p = 0;
              const interval = setInterval(() => {
                p += 0.02;
                if (p >= 1) {
                  p = 0;
                }
                setProgress(p);
              }, 16);
              return () => clearInterval(interval);
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Animate
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-64"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Animated wave */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Animated Wave</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-100"
                style={{
                  clipPath: wavePath(progress),
                }}
              />
            </div>
          </div>

          {/* Example 2: Spiral path */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Spiral Path</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-100"
                style={{
                  clipPath: `path('M 50,50 Q ${50 + progress * 30 * Math.cos(progress * Math.PI * 4)},${50 + progress * 30 * Math.sin(progress * Math.PI * 4)} ${50 + progress * 40 * Math.cos(progress * Math.PI * 4)},${50 + progress * 40 * Math.sin(progress * Math.PI * 4)} L 50,50 Z')`,
                }}
              />
            </div>
          </div>

          {/* Example 3: Bezier curve */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Bezier Curve</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 transition-all duration-100"
                style={{
                  clipPath: `path('M 0,100 Q ${progress * 50},${(1 - progress) * 100} ${progress * 100},${50 + progress * 50} L ${progress * 100},100 L 0,100 Z')`,
                }}
              />
            </div>
          </div>

          {/* Example 4: Complex path */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Path</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-100"
                style={{
                  clipPath: `path('M 0,0 Q ${progress * 25},${progress * 25} ${progress * 50},0 T ${progress * 100},0 L ${progress * 100},100 L 0,100 Z')`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`const wavePath = (progress) => {
  let path = 'M 0,50';
  for (let x = 0; x <= 100; x += 2) {
    const y = 50 + 20 * Math.sin(x / 10 + progress);
    path += \` L \${x},\${y}\`;
  }
  return \`path('\${path} Z')\`;
};`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

