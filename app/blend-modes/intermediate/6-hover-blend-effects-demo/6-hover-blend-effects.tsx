"use client";

export function HoverBlendEffectsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Hover Blend Effects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Hover multiply */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hover Multiply</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 group">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Hover screen */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hover Screen</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-600 to-purple-600 group">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Hover overlay */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hover Overlay</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400 group">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ mixBlendMode: "overlay" }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Hover difference */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hover Difference</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400 group">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ mixBlendMode: "difference" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.container {
  background: blue;
}

.blend-layer {
  mix-blend-mode: multiply;
  opacity: 0;
  transition: opacity 0.3s;
}

.container:hover .blend-layer {
  opacity: 1;
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

