"use client";

export function BlendModeWithClippingDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Mode with Clipping</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Circle clip with blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Circle Clip Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
                  style={{
                    mixBlendMode: "multiply",
                    clipPath: "circle(40% at 50% 50%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Polygon clip with blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Polygon Clip Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
                  style={{
                    mixBlendMode: "screen",
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Multiple clipped shapes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple Clipped Shapes</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute top-0 left-0 w-32 h-32 bg-red-500"
                  style={{
                    mixBlendMode: "overlay",
                    clipPath: "circle(50%)",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-500"
                  style={{
                    mixBlendMode: "difference",
                    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                  }}
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500"
                  style={{
                    mixBlendMode: "hard-light",
                    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex clip blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Clip Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
                  style={{
                    mixBlendMode: "multiply",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-orange-400"
                  style={{
                    mixBlendMode: "screen",
                    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.blend-clip {
  mix-blend-mode: multiply;
  clip-path: circle(40%);
}

/* Clip-path applied before blending */
/* Creates interesting shape effects */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

