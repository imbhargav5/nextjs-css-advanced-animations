"use client";

export function BlendModeFiltersDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Mode Filters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Blur + blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Blur + Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
                  style={{
                    mixBlendMode: "multiply",
                    filter: "blur(10px)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Brightness + blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Brightness + Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
                  style={{
                    mixBlendMode: "screen",
                    filter: "brightness(1.5) contrast(1.2)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Multiple filters */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple Filters</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
                  style={{
                    mixBlendMode: "overlay",
                    filter: "blur(5px) brightness(1.3) contrast(1.2) saturate(1.5)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex filter blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Filter Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
                  style={{
                    mixBlendMode: "difference",
                    filter: "blur(8px) brightness(1.2) contrast(1.3) hue-rotate(45deg)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-orange-400"
                  style={{
                    mixBlendMode: "hard-light",
                    filter: "blur(4px) saturate(1.5)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.blend-filter {
  mix-blend-mode: multiply;
  filter: blur(10px) brightness(1.2) contrast(1.3);
}

/* Filters applied before blending */
/* Creates unique visual effects */
/* Multiple filters can be combined */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

