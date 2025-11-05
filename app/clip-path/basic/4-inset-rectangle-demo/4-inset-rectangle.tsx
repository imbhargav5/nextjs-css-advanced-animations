"use client";

export function InsetRectangleDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Inset Rectangle Clip</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Basic inset */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Basic Inset</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-blue-500"
                style={{
                  clipPath: "inset(20%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Different inset values */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Top/Bottom Inset</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
                style={{
                  clipPath: "inset(10% 0% 10% 0%)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Left/Right inset */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Left/Right Inset</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
                style={{
                  clipPath: "inset(0% 15% 0% 15%)",
                }}
              />
            </div>
          </div>

          {/* Example 4: All sides different */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Asymmetric Inset</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-amber-500"
                style={{
                  clipPath: "inset(5% 20% 15% 10%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: inset(20%);
/* Shorthand: all sides */
clip-path: inset(10% 0% 10% 0%);
/* Syntax: inset(top right bottom left) */
/* Creates inner rectangle */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

