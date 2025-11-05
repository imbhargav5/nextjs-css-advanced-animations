"use client";

export function TrianglePolygonDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Triangle Polygon Clip</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Basic triangle */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Basic Triangle</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Inverted triangle */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Inverted Triangle</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-pink-400 to-red-500"
                style={{
                  clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Right triangle */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Right Triangle</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500"
                style={{
                  clipPath: "polygon(0% 0%, 0% 100%, 100% 100%)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Left triangle */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Left Triangle</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-yellow-500"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
/* Syntax: polygon(x1 y1, x2 y2, x3 y3, ...) */
/* Each point is defined as x% y% */
/* Creates a triangle pointing up */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

