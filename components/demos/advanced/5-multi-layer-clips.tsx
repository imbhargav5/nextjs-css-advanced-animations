"use client";

export function MultiLayerClipsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Multiple Clip-Path Layers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Intersecting shapes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Intersecting Shapes</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"
                style={{
                  clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
                style={{
                  clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 2: Overlapping circles */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Overlapping Circles</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
                style={{
                  clipPath: "circle(40% at 30% 50%)",
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500"
                style={{
                  clipPath: "circle(40% at 70% 50%)",
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 3: Complex composition */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Composition</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500"
                style={{
                  clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500"
                style={{
                  clipPath: "circle(30% at 50% 50%)",
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 4: Layered hexagons */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Layered Hexagons</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                    transform: `scale(${1 - i * 0.2}) translate(${i * 5}%, ${i * 5}%)`,
                    opacity: 0.6 - i * 0.15,
                  }}
                />
              ))}
              <div className="h-64" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

