"use client";

export function StarPolygonDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Star Polygon Clip</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: 5-pointed star */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">5-Pointed Star</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-yellow-400 to-orange-500"
                style={{
                  clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: 6-pointed star */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">6-Pointed Star</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-500"
                style={{
                  clipPath: "polygon(50% 0%, 65% 20%, 98% 35%, 80% 50%, 98% 65%, 65% 80%, 50% 100%, 35% 80%, 2% 65%, 20% 50%, 2% 35%, 35% 20%)",
                }}
              />
            </div>
          </div>

          {/* Example 3: 8-pointed star */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">8-Pointed Star</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
                style={{
                  clipPath: "polygon(50% 0%, 60% 25%, 100% 25%, 75% 50%, 100% 75%, 60% 75%, 50% 100%, 40% 75%, 0% 75%, 25% 50%, 0% 25%, 40% 25%)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Compact star */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Compact Star</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-violet-500"
                style={{
                  clipPath: "polygon(50% 5%, 58% 28%, 82% 28%, 63% 45%, 72% 68%, 50% 55%, 28% 68%, 37% 45%, 18% 28%, 42% 28%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
/* 5-pointed star requires 10 points */
/* Alternates between outer and inner points */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

