"use client";

export function GradientBlendModesDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Gradient Blend Modes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Gradient with multiply */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Gradient Multiply</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-orange-500"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Gradient with screen */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Gradient Screen</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 via-orange-400 to-yellow-400"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Gradient with overlay */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Gradient Overlay</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 via-teal-500 to-cyan-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 via-yellow-500 to-orange-500"
                  style={{ mixBlendMode: "overlay" }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex gradient blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Gradient</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
                <div
                  className="absolute inset-0 bg-gradient-radial from-pink-400 via-transparent to-cyan-400"
                  style={{ 
                    mixBlendMode: "hard-light",
                    background: "radial-gradient(circle, rgba(236,72,153,0.8) 0%, transparent 50%, rgba(34,211,238,0.8) 100%)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`/* Base gradient */
background: linear-gradient(to bottom right, blue, purple);

/* Blend gradient */
.blend-layer {
  mix-blend-mode: multiply;
  background: linear-gradient(to top right, yellow, red);
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

