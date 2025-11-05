"use client";

export function GeometricPatternsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Complex Geometric Patterns</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Star pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Star Pattern</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"
                  style={{
                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    transform: `rotate(${i * 90}deg) scale(${1 - i * 0.2})`,
                    opacity: 0.8 - i * 0.2,
                  }}
                />
              ))}
              <div className="h-64" />
            </div>
          </div>

          {/* Example 2: Hexagon grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hexagon Grid</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              {[
                [25, 25],
                [75, 25],
                [25, 75],
                [75, 75],
              ].map(([x, y], i) => (
                <div
                  key={i}
                  className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                    transform: `translate(${x - 50}%, ${y - 50}%) scale(0.4)`,
                    opacity: 0.7,
                  }}
                />
              ))}
              <div className="h-64" />
            </div>
          </div>

          {/* Example 3: Concentric circles */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Concentric Circles</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"
                  style={{
                    clipPath: `circle(${40 - i * 8}% at 50% 50%)`,
                    opacity: 0.6 - i * 0.15,
                  }}
                />
              ))}
              <div className="h-64" />
            </div>
          </div>

          {/* Example 4: Triangle pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Triangle Pattern</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              {[
                [50, 0],
                [0, 100],
                [100, 100],
              ].map(([x, y], i) => (
                <div
                  key={i}
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
                  style={{
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    transform: `translate(${x - 50}%, ${y - 50}%) scale(0.5)`,
                    opacity: 0.7,
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

