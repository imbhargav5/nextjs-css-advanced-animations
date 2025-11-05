"use client";

export function HexagonPolygonDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Hexagon Polygon Clip</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Regular hexagon */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Regular Hexagon</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-500"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Wide hexagon */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Wide Hexagon</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
                style={{
                  clipPath: "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Tall hexagon */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tall Hexagon</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
                style={{
                  clipPath: "polygon(50% 10%, 90% 30%, 90% 70%, 50% 90%, 10% 70%, 10% 30%)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Rotated hexagon */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Rotated Hexagon</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-amber-500"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
/* 6 points create a hexagon */
/* Order matters - connect points sequentially */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

