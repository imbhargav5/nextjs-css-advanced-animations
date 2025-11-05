"use client";

export function LayeredPolygonsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Layered Polygons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Overlapping triangles */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Overlapping Triangles</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  opacity: 0.7,
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
                style={{
                  clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                  opacity: 0.7,
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 2: Nested shapes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nested Shapes</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                  opacity: 0.8,
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  opacity: 0.6,
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 3: Multiple hexagons */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple Hexagons</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                  opacity: 0.5,
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500"
                style={{
                  clipPath: "polygon(35% 5%, 65% 5%, 95% 50%, 65% 95%, 35% 95%, 5% 50%)",
                  opacity: 0.5,
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500"
                style={{
                  clipPath: "polygon(40% 10%, 60% 10%, 90% 50%, 60% 90%, 40% 90%, 10% 50%)",
                  opacity: 0.5,
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 4: Star layers */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Star Layers</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500"
                style={{
                  clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  opacity: 0.6,
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
                style={{
                  clipPath: "polygon(50% 5%, 58% 32%, 94% 32%, 66% 54%, 75% 88%, 50% 68%, 25% 88%, 34% 54%, 6% 32%, 42% 32%)",
                  opacity: 0.6,
                }}
              />
              <div className="h-64" />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`/* Layer multiple elements with different clip-paths */
.layer1 {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  opacity: 0.7;
}
.layer2 {
  clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
  opacity: 0.7;
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

