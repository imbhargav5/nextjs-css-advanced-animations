"use client";

export function ColorBurnBlendDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Color Burn Blend</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Basic color burn */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Basic Color Burn</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
                  style={{ mixBlendMode: "color-burn" }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Color burn with dark colors */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Dark Colors</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-orange-500"
                  style={{ mixBlendMode: "color-burn" }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Color burn circles */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Color Burn Circles</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-600"
                  style={{ mixBlendMode: "color-burn" }}
                />
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-yellow-600"
                  style={{ mixBlendMode: "color-burn" }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Color burn rectangles */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Color Burn Rectangles</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute top-4 left-4 w-40 h-32 bg-pink-600 opacity-80"
                  style={{ mixBlendMode: "color-burn" }}
                />
                <div
                  className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-600 opacity-80"
                  style={{ mixBlendMode: "color-burn" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`mix-blend-mode: color-burn;
/* Darkens the base color by inverting, dividing, and inverting again */
/* Creates very dark, saturated results */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

