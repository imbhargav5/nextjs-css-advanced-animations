"use client";

export function IsolatedBlendGroupsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Isolated Blend Groups</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Isolated group */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Isolated Group</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500" style={{ isolation: "isolate" }}>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Non-isolated comparison */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Non-Isolated (Comparison)</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Nested isolated */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nested Isolated</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400" style={{ isolation: "isolate" }}>
                <div
                  className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500"
                  style={{ mixBlendMode: "screen" }}
                />
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-500"
                  style={{ mixBlendMode: "overlay" }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Multiple isolated groups */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple Groups</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80" style={{ isolation: "isolate", mixBlendMode: "multiply" }}>
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-400" style={{ mixBlendMode: "screen" }} />
                </div>
                <div className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80" style={{ isolation: "isolate", mixBlendMode: "difference" }}>
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-red-400" style={{ mixBlendMode: "overlay" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.container {
  isolation: isolate;
}

.blend-layer {
  mix-blend-mode: multiply;
}

/* Isolation creates new stacking context */
/* Blend modes only affect elements within isolated group */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

