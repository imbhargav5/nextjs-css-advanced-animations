"use client";

import { useState, useEffect } from "react";

export function SvgPathMorphingDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 1 ? 0 : p + 0.01));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const morphPath = (progress: number) => {
    const p1 = progress;
    const p2 = 1 - progress;
    
    // Morph between circle-like path and star-like path
    const radius1 = 40 + p1 * 10;
    const radius2 = 50 - p2 * 20;
    
    let path = "M 50,50 ";
    const points = 8;
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const radius = i % 2 === 0 ? radius1 : radius2;
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      if (i === 0) {
        path += `L ${x},${y} `;
      } else {
        path += `L ${x},${y} `;
      }
    }
    path += "Z";
    return `path('${path}')`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Advanced SVG Path Morphing</h2>
        
        <div className="flex justify-center mb-8 gap-4 items-center">
          <input
            type="range"
            min="0"
            max="100"
            value={progress * 100}
            onChange={(e) => setProgress(Number(e.target.value) / 100)}
            className="w-64"
          />
          <span className="text-lg font-semibold">{Math.round(progress * 100)}%</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Path morphing */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Path Morphing</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-100"
                style={{
                  clipPath: morphPath(progress),
                }}
              />
            </div>
          </div>

          {/* Example 2: Wave morphing */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Wave Morphing</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-100"
                style={{
                  clipPath: `path('M 0,${50 + 20 * Math.sin(progress * Math.PI * 2)} L 25,${50 + 20 * Math.sin((progress + 0.25) * Math.PI * 2)} L 50,${50 + 20 * Math.sin((progress + 0.5) * Math.PI * 2)} L 75,${50 + 20 * Math.sin((progress + 0.75) * Math.PI * 2)} L 100,${50 + 20 * Math.sin((progress + 1) * Math.PI * 2)} L 100,100 L 0,100 Z')`,
                }}
              />
            </div>
          </div>

          {/* Example 3: Spiral morphing */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Spiral Morphing</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-100"
                style={{
                  clipPath: `path('M 50,50 Q ${50 + progress * 30 * Math.cos(progress * Math.PI * 4)},${50 + progress * 30 * Math.sin(progress * Math.PI * 4)} ${50 + progress * 40 * Math.cos(progress * Math.PI * 4)},${50 + progress * 40 * Math.sin(progress * Math.PI * 4)} T ${50 + progress * 50 * Math.cos(progress * Math.PI * 4)},${50 + progress * 50 * Math.sin(progress * Math.PI * 4)} L 50,50 Z')`,
                }}
              />
            </div>
          </div>

          {/* Example 4: Complex morph */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Morph</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-100"
                style={{
                  clipPath: `path('M ${50 - progress * 30},${50 - progress * 30} Q ${50 + progress * 20},${50 - progress * 20} ${50 + progress * 30},${50 - progress * 30} T ${50 + progress * 40},${50} T ${50 + progress * 30},${50 + progress * 30} T ${50},${50 + progress * 40} T ${50 - progress * 30},${50 + progress * 30} T ${50 - progress * 40},${50} Z')`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`const morphPath = (progress) => {
  let path = 'M 50,50 ';
  for (let i = 0; i <= points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const radius = 40 + progress * 10;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    path += \`L \${x},\${y} \`;
  }
  return \`path('\${path} Z')\`;
};`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

