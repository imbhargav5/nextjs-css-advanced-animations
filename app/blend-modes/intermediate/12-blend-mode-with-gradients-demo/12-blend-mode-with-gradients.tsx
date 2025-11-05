"use client";

export function BlendModeWithGradientsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Mode with Gradients</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Radial gradient blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Radial Gradient</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0"
                  style={{
                    mixBlendMode: "multiply",
                    background: "radial-gradient(circle at center, yellow, transparent)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Conic gradient blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Conic Gradient</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0"
                  style={{
                    mixBlendMode: "screen",
                    background: "conic-gradient(from 0deg, pink, orange, yellow, pink)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Multiple gradients */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple Gradients</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute inset-0"
                  style={{
                    mixBlendMode: "overlay",
                    background: "linear-gradient(45deg, red, transparent), radial-gradient(circle, yellow, transparent)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex gradient blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Gradient</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0"
                  style={{
                    mixBlendMode: "hard-light",
                    background: "conic-gradient(from 45deg, pink, cyan, yellow, pink)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.gradient-blend {
  mix-blend-mode: multiply;
  background: radial-gradient(
    circle at center,
    yellow,
    transparent
  );
}

/* Radial, conic, and linear gradients */
/* All work beautifully with blend modes */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

